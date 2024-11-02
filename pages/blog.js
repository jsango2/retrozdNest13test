// import React from "react";

// const blog = () => {
//   return <div>blog</div>;
// };

// export default blog;

// import Link from "next/link";

import Link from "next/link";
import { client } from "../lib/sanity/client";
import { urlFor } from "../lib/sanity/fetchImg";

import React from "react";
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
} from "../styles/styles";
import Layout from "../components/layout/layout";
import Image from "next/image";
import Head from "next/head";

function Blog({ data }) {
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
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Retro Zadar Blog</title>
        <meta property="og:title" content="Retro Zadar Blog" key="title" />
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
        <meta property="og:title" content="Retro Zadar" />
        <meta
          property="og:description"
          content="Otkrijte nostalgičnu stranu grada kroz priče, sjećanja i zaboravljene kutke koji oživljavaju duh prošlih vremena."
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
        <meta name="twitter:title" content="Retro Zadar" />
        <meta
          name="twitter:description"
          content="Otkrijte nostalgičnu stranu grada kroz priče, sjećanja i zaboravljene kutke koji oživljavaju duh prošlih vremena."
        />
        <meta name="twitter:image" content="https://retrozadar.com/og2.png" />
      </Head>{" "}
      <Layout>
        <div className="blogBackground">
          <WrapBlogSection>
            <BlogBackground></BlogBackground>
            <BlogSectionTitle>Retro Zadar Blog</BlogSectionTitle>
            <Text>
              Otkrijte nostalgičnu stranu grada kroz priče, sjećanja i
              zaboravljene kutke koji oživljavaju duh prošlih vremena.
            </Text>
            <WrapBlogCards>
              {data.map((post) => (
                <Link href={`/posts/${post.slug.current}`} key={post._id}>
                  <WrapCard>
                    <img
                      src={urlFor(post.mainImage).width(800).url()}
                      alt={post.mainImage.alt || "Sanity Image"}
                      className="rounded-lg"
                    />
                    <Author>Autor: {post.author.name}, Retro Zadar</Author>
                    <h2>{post.title}</h2>
                    <p>{post.kratkiOpis}</p>
                    {/* <WrapTags>
                      {post.tags &&
                        post.tags.map((tag) => <Tag>{tag.title}</Tag>)}
                    </WrapTags> */}
                  </WrapCard>
                </Link>
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
  const POST_QUERY = `*[_type == "post"] {
  _id,
  title,
  slug,
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
  const data = await client.fetch(POST_QUERY);

  return {
    props: {
      data,
    },
  };
}
