// import React from "react";

// const blog = () => {
//   return <div>blog</div>;
// };

// export default blog;

// import Link from "next/link";

import Link from "next/link";
import { client } from "../lib/sanity/client";
import { urlFor } from "../lib/sanity/fetchImg";

import React, { useEffect, useState } from "react";
import {
  WrapCard,
  BlogSectionTitle,
  WrapBlogSection,
  WrapBlogCards,
  WrapTags,
  Tag,
  Text,
  Author,
  BlogBackground,
  WrapFeaturedBlog,
  BackgroundFeaturedBlog,
  ReadingTime,
  WrapTagCloud,
  SingleTag,
} from "../styles/styles";
import Layout from "../components/layout/layout";
import Image from "next/image";
import Head from "next/head";

import BlogCard from "../components/blogCard";
import FeaturedBlogCard from "../components/featuredBlogCard";
function Blog({ data, tagData }) {
  const [selectedTag, setSelectedTag] = useState("Svi");
  const [filteredData, setFilteredData] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const sortByDate = data.sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );
  const sortByDateWithoutFeatured = sortByDate.filter(
    (blog) => blog.isBlogFeatured !== true
  );
  const components = {
    types: {
      image: ({ value }) =>
        value && (
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || "Sanity Image"}
            className="my-4 rounded-lg"
          />
        ),
      // Optionally, add serializers for other custom Sanity blocks here
    },
  };
  console.log(data);
  // console.log({ tagData });

  useEffect(() => {
    if (selectedTag === "Svi") {
      setFilteredData(sortByDateWithoutFeatured);
    } else
      setFilteredData(
        sortByDateWithoutFeatured.filter(
          (item) =>
            item.tags &&
            item.tags.some((tag) =>
              tag.title.toLowerCase().includes(selectedTag.toLowerCase())
            )
        )
      );

    setFeaturedBlogs(sortByDate.filter((blog) => blog.isBlogFeatured));
  }, [selectedTag]);
  console.log("Feature", featuredBlogs);
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Retro Zadar Priče</title>
        <meta property="og:title" content="Retro Zadar Priče" key="title" />
        <link
          rel="canonical"
          href="https://retrozadar.com/blog"
          key="canonical"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* og data: */}
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content=" Otkrijte nostalgičnu stranu grada kroz priče, sjećanja i zaboravljene kutke koji oživljavaju duh prošlih vremena."
        />

        <meta property="og:url" content="https://www.retrozadar.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Retro Zadar Priče" />
        <meta
          property="og:description"
          content="Otkrijte nostalgičnu stranu grada Zadra kroz priče, sjećanja i zaboravljene kutke koji oživljavaju duh prošlih vremena."
        />
        <meta
          name="keywords"
          content="stare fotografije zadra, nekad, sad, zadar, razglednice"
        />
        <meta property="og:image" content="https://retrozadar.com/og2.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="retrozadar.com/blog" />
        <meta
          property="twitter:url"
          content="https://www.retrozadar.com/blog"
        />
        <meta name="twitter:title" content="Retro Zadar Priče" />
        <meta
          name="twitter:description"
          content="Otkrijte nostalgičnu stranu grada Zadra kroz priče, sjećanja i zaboravljene kutke koji oživljavaju duh prošlih vremena."
        />
        <meta name="twitter:image" content="https://retrozadar.com/og2.png" />
      </Head>{" "}
      <Layout isMap={false}>
        <div className="blogBackground">
          <WrapBlogSection>
            <BlogBackground></BlogBackground>
            <BlogSectionTitle>Retro Zadar Priče</BlogSectionTitle>
            <Text>
              Otkrijte nostalgičnu stranu grada Zadra kroz priče, sjećanja i
              zaboravljene kutke koji oživljavaju duh prošlih vremena.
            </Text>
            {/* <WrapTagCloud>
              <SingleTag onClick={() => setSelectedTag("Svi")}>Svi</SingleTag>
              {tagData.map((tag) => (
                <SingleTag
                  onClick={() => setSelectedTag(tag.title)}
                  key={tag.title}
                >
                  {tag.title}
                </SingleTag>
              ))}
            </WrapTagCloud> */}
            <WrapFeaturedBlog>
              <BackgroundFeaturedBlog />
              {featuredBlogs.length > 0 &&
                featuredBlogs
                  .slice(0, 1)
                  .map((post) => (
                    <FeaturedBlogCard
                      key={post._id}
                      link={post.slug.current}
                      image={post.mainImage}
                      alt={post.mainImage.alt}
                      kratkiOpis={post.kratkiOpis}
                      author={post.author.name}
                      body={post.body}
                      title={post.title}
                      date={post.publishedAt}
                    />
                  ))}
            </WrapFeaturedBlog>
            <WrapBlogCards>
              {filteredData.map((post) => (
                <BlogCard
                  key={post._id}
                  link={post.slug.current}
                  image={post.mainImage}
                  alt={post.mainImage.alt}
                  kratkiOpis={post.kratkiOpis}
                  author={post.author.name}
                  body={post.body}
                  title={post.title}
                  date={post.publishedAt}
                />
              ))}
            </WrapBlogCards>
          </WrapBlogSection>
        </div>
      </Layout>
    </>
  );
}

export default Blog;

export async function getStaticProps() {
  const POST_QUERY = `*[_type == "post" ] {
  _id,
  title,
  slug,
  isBlogFeatured,
  body,
  kratkiOpis,
  "author": author->{
    _id,
    name,
    image
  },
  "category": category->{
    _id,
    title
  },
  tags[]->{
    _id,
    title
  },
  publishedAt,
  mainImage {
    asset->{
      _id,
      url
    }
  }
}`;
  const TAG_QUERY = `*[_type == "tag" ] {
  title,
}`;
  const data = await client.fetch(POST_QUERY);
  const tagData = await client.fetch(TAG_QUERY);

  return {
    props: {
      data,
      tagData,
    },
    revalidate: 60,
  };
}

{
  /* <Link href={`/posts/${post.slug.current}`} key={post._id}>
                  <WrapCard>
                    <img
                      src={urlFor(post.mainImage).width(800).url()}
                      alt={post.mainImage.alt || "Sanity Image"}
                      className="rounded-lg"
                    />
                    <Author>Autor: {post.author.name}, Retro Zadar</Author>
                    <h2>{post.title}</h2>
                    <p>{truncateSentence(post.kratkiOpis)}</p>
                
                    <ReadingTime>{time}</ReadingTime>
                  </WrapCard>
                </Link> */
}
