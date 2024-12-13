// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Link from "next/link";
import { urlFor } from "../../lib/sanity/fetchImg";
import {
  // BlogSectionTitle,
  // WrapBlogSection,
  // WrapBlogCards,
  // WrapTags,
  // Tag,
  // Text,

  // BlogBackground,
  ReadingTime,
  TimeAmount,
} from "../../styles/styles";
import { IoMdTime } from "react-icons/io";
import { RiQuillPenLine } from "react-icons/ri";
// import "./layout.css";
// import Footer from "../footer/footer";
// import { Helmet } from "react-helmet";

import { useReadingTime } from "react-hook-reading-time";
import { Author, BlogDate, WrapCard, WrapData, WrapImage } from "./styles";
import { useInView } from "react-intersection-observer";
const FeaturedBlogCard = ({
  link,
  image,
  alt,
  kratkiOpis,
  author,
  body,
  title,
  date,
  isFeatured,
}) => {
  // console.log(post);
  const dateStr = date;

  // Convert to a Date object
  const dateObj = new Date(dateStr);

  // Extract day, month, and year
  const day = String(dateObj.getUTCDate()).padStart(2, "0");
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = dateObj.getUTCFullYear();

  // Format as dd/mm/yyyy
  const formattedDate = `${day}/${month}/${year}`;
  function truncateSentence(text, maxLength = 240) {
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

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <Link href={`/posts/${link}`}>
      <WrapCard ref={ref} inView={inView} isFeatured={isFeatured}>
        <WrapImage img={urlFor(image).width(800).url()} className="rounded-lg">
          {/* <img
            src={urlFor(image).width(800).url()}
            alt={alt || "Sanity Image"}
            className="rounded-lg"
          /> */}
        </WrapImage>
        <WrapData>
          {/* <ReadingTime>
          <IoMdTime />
          <TimeAmount>{time.toFixed(0)} min</TimeAmount>
        </ReadingTime> */}
          <h2 style={{ marginTop: "20px" }}>{title}</h2>
          <p>{truncateSentence(kratkiOpis)}...</p>
          {/* <WrapTags>
        {post.tags &&
          post.tags.map((tag) => <Tag>{tag.title}</Tag>)}
      </WrapTags> */}
        </WrapData>
        <Author>
          <RiQuillPenLine /> {author}
        </Author>
        <BlogDate>{formattedDate}</BlogDate>
      </WrapCard>
    </Link>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default FeaturedBlogCard;
