// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Link from "next/link";
import { urlFor } from "../../lib/sanity/fetchImg";
import {
  WrapCard,
  // BlogSectionTitle,
  // WrapBlogSection,
  // WrapBlogCards,
  // WrapTags,
  // Tag,
  // Text,
  Author,
  // BlogBackground,
  ReadingTime,
  TimeAmount,
} from "../../styles/styles";
import { IoMdTime } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
// import "./layout.css";
// import Footer from "../footer/footer";
// import { Helmet } from "react-helmet";

import { useReadingTime } from "react-hook-reading-time";

const BlogCard = ({ link, image, alt, kratkiOpis, author, body, title }) => {
  function truncateSentence(text, maxLength = 140) {
    if (text.length <= maxLength) return text; // Return original if within limit

    // Trim the text to maxLength and look for the last space before the cut
    let truncated = text.slice(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    // If a space is found, trim to that space; otherwise, use the maxLength
    if (lastSpaceIndex > -1) {
      truncated = truncated.slice(0, lastSpaceIndex);
    }

    return truncated + "...";
  }
  const filteredBlock = body
    .filter((x) => x._type === "block")
    .map((children) => children.children.map((texts) => texts.text));

  const {
    text, // 1 min read
    minutes, // 1
    words, // 168
    time, // 0.5309090909090909
  } = useReadingTime(filteredBlock.join(" "));
  return (
    <Link href={`/posts/${link}`}>
      <WrapCard>
        <img
          src={urlFor(image).width(800).url()}
          alt={alt || "Sanity Image"}
          className="rounded-lg"
        />
        <h2 style={{ marginTop: "20px" }}>{title}</h2>
        <p>{truncateSentence(kratkiOpis)}</p>
        {/* <WrapTags>
        {post.tags &&
          post.tags.map((tag) => <Tag>{tag.title}</Tag>)}
      </WrapTags> */}
        <Author>
          <LuPencil /> {author}
        </Author>
        <ReadingTime>
          <IoMdTime />
          <TimeAmount>{time.toFixed(0)} min</TimeAmount>
        </ReadingTime>
      </WrapCard>
    </Link>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default BlogCard;
