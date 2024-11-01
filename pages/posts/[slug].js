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
import React from "react";

function BlogPost({ post }) {
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
        <h1 className="text-3xl font-bold my-4">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-bold my-3">{children}</h2>
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

  return (
    // <div>
    //   Blog Post
    //   <div></div>
    // </div>

    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/blog" className="hover:underline">
        ← Back to posts
      </Link>

      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose">
        {Array.isArray(post.body) && (
          <PortableText value={post.body} components={components} />
        )}
        {/* <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p> */}
      </div>
    </main>
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
