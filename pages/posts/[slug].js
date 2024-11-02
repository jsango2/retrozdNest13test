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

import { BlogBackground, BlogContent, BlogTitle } from "../../styles/styles";
import Layout from "../../components/layout/layout";
import Image from "next/image";
import Head from "next/head";
import useWindowSize from "../../components/helper/usewindowsize";
function BlogPost({ post }) {
  const size = useWindowSize();
  const [isTouchDevice, setisTouchDevice] = useState(false);
  console.log(post);
  //   console.log(post);
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
        <h4 className="text-2xl font-bold my-3 H4">{children}</h4>
      ),

      normal: ({ children }) => <p className="my-2">{children}</p>,
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

  useEffect(() => {
    if ("ontouchstart" in document.documentElement) {
      setisTouchDevice(true);
    } else {
      setisTouchDevice(false);
    }
    if (size.width > 450) {
      document
        .getElementById("activator")
        .addEventListener(
          isTouchDevice ? "touchmove" : "mousemove",
          (event) => {
            const divider = document.getElementById("divider");
            divider.style.left = event.offsetX + "px";
            // if (feature.properties.fotoLayout === "portrait") {
            //   event.target.previousElementSibling.style.clip =
            //     "rect(0px, " + event.offsetX + "px,720px,0px)";
            // } else {
            event.target.previousElementSibling.style.clip =
              "rect(0px, " + event.offsetX + "px,450px,0px)";
            // }
          }
        );
    } else {
      document
        .getElementById("activator")
        .addEventListener(
          isTouchDevice ? "touchmove" : "mousemove",
          (event) => {
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
          }
        );
    }
  }, []);
  console.log({ isTouchDevice });
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>{post.title}</title>
        <meta property="og:title" content="Retro Zadar Blog " key="title" />
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
      <Layout>
        <div className="blogBackground">
          {/* <BlogBackground>
          <Image src="/laureana1b.png" layout="fill" objectFit="cover" />
        </BlogBackground> */}
          <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4 text-black">
            <Link href="/blog" className="hover:underline">
              ← Vrati se na postove
            </Link>

            <BlogTitle className="text-4xl font-bold mb-8 text-black">
              {post.title}
            </BlogTitle>
            <div className="reveal revealAnimation">
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
            <BlogContent className="prose">
              {Array.isArray(post.body) && (
                <PortableText value={post.body} components={components} />
              )}
              {/* <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p> */}
            </BlogContent>
          </main>
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
  const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
  const post = await client.fetch(POST_QUERY, { slug: params.slug });

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
    revalidate: 30, // Regenerate the page at most every 30 seconds (optional)
  };
}
