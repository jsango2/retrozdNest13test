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
} from "../styles/styles";

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
    <WrapBlogSection>
      <BlogSectionTitle>Retro Zadar Blog</BlogSectionTitle>
      <WrapBlogCards>
        {data.map((post) => (
          <Link href={`/posts/${post.slug.current}`} key={post._id}>
            <WrapCard>
              <img
                src={urlFor(post.mainImage).width(800).url()}
                alt={post.mainImage.alt || "Sanity Image"}
                className="rounded-lg"
              />
              <h2>{post.title}</h2>
            </WrapCard>
          </Link>
        ))}
      </WrapBlogCards>
    </WrapBlogSection>
  );
}

export default Blog;

export async function getStaticProps() {
  const POST_QUERY = `*[_type == "post" ]`;
  const data = await client.fetch(POST_QUERY);

  return {
    props: {
      data,
    },
  };
}
