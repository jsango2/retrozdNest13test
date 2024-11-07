// import React from "react";

// const blog = () => {
//   return <div>blog</div>;
// };

// export default blog;

// import Link from "next/link";

import Link from "next/link";
import { client } from "../../lib/sanity/client";
import { PortableText } from "@portabletext/react";

import { urlFor } from "../../lib/sanity/fetchImg";
import React, { useEffect, useState } from "react";

import {
  AuthorBlog,
  DateBlog,
  BlogBackground,
  BlogContent,
  BlogTitle,
  Caption,
  WrapOverlayBlock,
  ImageCaption,
  WrapAuthorDate,
  VerticalLine,
  ReadingTimeBlog,
  TimeAmount,
  MoreBlogs,
  MoreBlogstitle,
  WrapBlogCardsinBlogPost,
  Avatar,
} from "../../styles/styles";
import Layout from "../../components/layout/layout";
import Image from "next/image";
import Head from "next/head";
import useWindowSize from "../../components/helper/usewindowsize";
import { useReadingTime } from "react-hook-reading-time";
import { IoMdTime } from "react-icons/io";
import BlogCard from "../../components/blogCard";

function BlogPost({ post, all_posts }) {
  const size = useWindowSize();
  const [isTouchDevice, setisTouchDevice] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  console.log("Trenutni post", post);

  //   console.log(post);
  const dateStr = post.publishedAt;

  // Convert to a Date object
  const dateObj = new Date(dateStr);

  // Extract day, month, and year
  const day = String(dateObj.getUTCDate()).padStart(2, "0");
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = dateObj.getUTCFullYear();

  // Format as dd/mm/yyyy
  const formattedDate = `${day}/${month}/${year}`;
  const components = {
    types: {
      image: ({ value }) =>
        value && (
          <>
            <img
              src={urlFor(value).width(800).url()}
              alt={value.alt || "Sanity Image"}
              className="my-4 rounded-lg mb-3"
            />
            <ImageCaption>{value.caption}</ImageCaption>
          </>
        ),
      // Optionally, add serializers for other custom Sanity blocks here
    },
    block: {
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold my-4 H1">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-bold my-3 H2">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-bold my-3 H3">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-2xl font-bold my-3 mt-8 H4">{children}</h4>
      ),

      normal: ({ children }) => <p className="my-2 mt-4">{children}</p>,
    },
    marks: {
      link: ({ value, children }) => (
        <a
          href={value.href}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  };
  const filteredBlock = post.body
    .filter((x) => x._type === "block")
    .map((children) => children.children.map((texts) => texts.text));

  const {
    text, // 1 min read
    minutes, // 1
    words, // 168
    time, // 0.5309090909090909
  } = useReadingTime(filteredBlock.join(" "));

  useEffect(() => {
    if (post.oldImage) {
      if ("ontouchstart" in document.documentElement) {
        setisTouchDevice(true);
        document
          .getElementById("activator")
          .addEventListener("touchmove", (event) => {
            const divider = document.getElementById("divider");

            if (event.touches) {
              divider.style.left = event.touches[0].clientX + "px";
              event.target.previousElementSibling.style.clip =
                "rect(0px, " + event.touches[0].clientX + "px,450px,0px)";
            } else {
              divider.style.left = event.offsetX + "px";

              event.target.previousElementSibling.style.clip =
                "rect(0px, " + event.offsetX + "px,450px,0px)";
            }
          });
      } else {
        setisTouchDevice(false);
        document
          .getElementById("activator")
          .addEventListener("mousemove", (event) => {
            const divider = document.getElementById("divider");
            divider.style.left = event.offsetX + "px";
            // if (feature.properties.fotoLayout === "portrait") {
            //   event.target.previousElementSibling.style.clip =
            //     "rect(0px, " + event.offsetX + "px,720px,0px)";
            // } else {
            event.target.previousElementSibling.style.clip =
              "rect(0px, " + event.offsetX + "px,450px,0px)";
            // }
          });
      }
    }

    // if (size.width > 450) {
    //   document
    //     .getElementById("activator")
    //     .addEventListener("mousemove", (event) => {
    //       const divider = document.getElementById("divider");
    //       divider.style.left = event.offsetX + "px";
    //       // if (feature.properties.fotoLayout === "portrait") {
    //       //   event.target.previousElementSibling.style.clip =
    //       //     "rect(0px, " + event.offsetX + "px,720px,0px)";
    //       // } else {
    //       event.target.previousElementSibling.style.clip =
    //         "rect(0px, " + event.offsetX + "px,450px,0px)";
    //       // }
    //     });
    // } else {
    //   document
    //     .getElementById("activator")
    //     .addEventListener("touchmove", (event) => {
    //       const divider = document.getElementById("divider");

    //       if (event.touches) {
    //         divider.style.left = event.touches[0].clientX + "px";
    //         event.target.previousElementSibling.style.clip =
    //           "rect(0px, " + event.touches[0].clientX + "px,450px,0px)";
    //       } else {
    //         divider.style.left = event.offsetX + "px";

    //         event.target.previousElementSibling.style.clip =
    //           "rect(0px, " + event.offsetX + "px,450px,0px)";
    //       }
    //     });
    // }
  }, []);

  useEffect(() => {
    const filter = all_posts.filter((item) =>
      item.tags.some((tag) => post.tags.some((t) => t.title === tag.title))
    );
    const filterWithoutSelf = filter.filter(
      (singlePost) => singlePost.title != post.title
    );
    setFilteredData(filterWithoutSelf);
  }, []);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>{post.title}</title>
        <meta
          property="og:title"
          content={`Retro Zadar Blog -${post.title}`}
          key="title"
        />
        <link
          rel="canonical"
          href={`https://www.retrozadar.com/posts/${post.slug.current}`}
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
        <meta name="description" content={post.kratkiOpis} />

        <meta
          property="og:url"
          content={`https://www.retrozadar.com/posts/${post.slug.current}`}
        />
        <meta property="og:type" content="website" />

        <meta property="og:description" content={post.kratkiOpis} />
        <meta
          name="keywords"
          content="stare fotografije zadra, nekad, sad, zadar, razglednice"
        />
        <meta property="og:image" content="https://retrozadar.com/og2.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content={`https://www.retrozadar.com/posts/${post.slug.current}`}
        />
        <meta
          property="twitter:url"
          content={`https://www.retrozadar.com/posts/${post.slug.current}`}
        />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.kratkiOpis} />
        <meta name="twitter:image" content="https://retrozadar.com/og2.png" />
      </Head>{" "}
      <Layout isMap={false}>
        <div className="blogBackground">
          {/* <BlogBackground>
          <Image src="/laureana1b.png" layout="fill" objectFit="cover" />
        </BlogBackground> */}
          <main className="container mx-auto min-h-screen max-w-3xl xl:p-0 xl:pt-11 pt-11 pb-12 flex flex-col gap-1 text-black p-4">
            <Link href="/blog" className="hover:underline">
              ← Vrati se na postove
            </Link>

            <BlogTitle className="md:text-3xl xl:text-5xl font-bold mb-8 text-black">
              {post.title}
            </BlogTitle>
            <WrapAuthorDate>
              <AuthorBlog>
                {/* <span style={{ fontWeight: "600" }}>Autor:</span>{" "} */}
                {post.author.imageUrl ? (
                  <Avatar src={urlFor(post.author.imageUrl).width(30).url()}>
                    {/* {post.author.imageUrl && (
                    <img src={urlFor(post.author.imageUrl).width(30).url()} />
                  )} */}
                  </Avatar>
                ) : (
                  "Autor: "
                )}
                {post.author.name}
              </AuthorBlog>
              <VerticalLine />
              <DateBlog>{formattedDate}</DateBlog>
              <VerticalLine />

              <ReadingTimeBlog>
                <IoMdTime />
                <TimeAmount>{time.toFixed(0)} min</TimeAmount>
              </ReadingTimeBlog>
            </WrapAuthorDate>
            <WrapOverlayBlock>
              {post.oldImage && (
                <div className="reveal revealAnimation">
                  <img
                    id="imagePopup"
                    className="swipeFinger shrinkSwiper"
                    src="/swiperWhite.svg"
                  ></img>
                  <img
                    src={urlFor(post.oldImage).width(750).url()}
                    alt={post.oldImage.alt || "Sanity Image"}
                    className="img3"
                  />
                  <img
                    src={urlFor(post.newImage).width(750).url()}
                    alt={post.newImage.alt || "Sanity Image"}
                    className="img4"
                  />
                  <div id="activator" className="activator"></div>
                  <div id="divider" className="divider"></div>
                </div>
              )}
              {post.caption && <Caption>{post.caption}</Caption>}
            </WrapOverlayBlock>
            <BlogContent className="prose">
              {Array.isArray(post.body) && (
                <PortableText value={post.body} components={components} />
              )}
              {/* <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p> */}
            </BlogContent>
          </main>
          {filteredData.length > 0 && (
            <MoreBlogs>
              <MoreBlogstitle>Slične teme</MoreBlogstitle>
              <WrapBlogCardsinBlogPost>
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
                  />
                ))}
              </WrapBlogCardsinBlogPost>
            </MoreBlogs>
          )}
        </div>
      </Layout>
    </>
  );
}

export default BlogPost;

export async function getStaticPaths() {
  const SLUGS_QUERY = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`;
  const slugs = await client.fetch(SLUGS_QUERY);

  const paths = slugs.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const ALL_POSTS_QUERY = `*[_type == "post" ] {
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
  const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body,
  kratkiOpis,
  mainImage,
  oldImage,
  newImage,
  publishedAt,
  caption,
  "author": author->{
    _id,
    name,
"imageUrl": image.asset->_id
  },
  "category": category->{
    _id,
    title
  },
  tags[]->{
    _id,
    title
  }
}`;
  const post = await client.fetch(POST_QUERY, { slug: params.slug });
  const all_posts = await client.fetch(ALL_POSTS_QUERY);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post, all_posts },
    revalidate: 90, // Regenerate the page at most every 30 seconds (optional)
  };
}
