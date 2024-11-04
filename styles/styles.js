import styled from "styled-components";

export const WrapCard = styled.div`
  position: relative;
  font-family: "Roboto", serif;
  font-weight: 400;
  font-style: normal;
  z-index: 10;
  width: 350px;
  height: 470px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  background-color: #f8f4ee;
  border-radius: 20px;
  overflow: hidden;
  margin: 20px 10px;
  -webkit-box-shadow: 10px 10px 51px -28px rgba(158, 156, 158, 1);
  -moz-box-shadow: 10px 10px 51px -28px rgba(158, 156, 158, 1);
  box-shadow: 10px 10px 51px -28px rgba(158, 156, 158, 1);
  img {
    height: 230px;
    object-fit: cover;
  }
  h2 {
    margin: 0px 20px 15px 20px;
    color: black;
    font-weight: 700;
    font-size: 20px;
  }
  p {
    margin: 0 20px;
    color: black;
    font-weight: 400;
  }
  transition: transform 0.4s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
  @media only screen and (max-width: 1250px) {
    height: auto;
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 550px) {
    width: 100%;
    padding-bottom: 50px;
    margin: 20px 0px;
  }
`;
export const BlogSectionTitle = styled.div`
  position: relative;

  font-size: 75px;
  font-family: "Garamond";
  font-weight: 700;
  color: #3f230f;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 20px;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 750px) {
    margin-top: 0px;
    font-size: 45px;
  }
`;
export const WrapBlogSection = styled.div`
  position: relative;

  padding: 50px;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 750px) {
    padding: 50px 20px;
  }
`;
export const WrapBlogCards = styled.div`
  position: relative;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media only screen and (max-width: 1250px) {
    height: auto;
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 750px) {
    padding-bottom: 80px;
    flex-wrap: wrap;
  }
`;

export const WrapTwoOverlays = styled.div`
  position: relative;
  width: 750px;
  height: 450px;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;
export const WrapOld = styled.div`
  position: absolute;
  width: 500px;
  height: 300px;
  z-index: 2;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;
export const WrapNew = styled.div`
  position: absolute;
  width: 500px;
  height: 300px;
  z-index: 3;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;
export const WrapTags = styled.div`
  position: absolute;
  display: flex;
  height: 30px;
  z-index: 3;
  bottom: 15px;
  left: 20px;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;
export const Tag = styled.div`
  position: relative;

  padding: 2px 12px;
  border-radius: 10px;
  background-color: #e7e1d8;
  margin-right: 4px;
  color: black;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;

export const AuthorBlog = styled.div`
  position: relative;
  margin: 10px 20px 0px 0px;
  color: black;
  font-size: 14px;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;
export const DateBlog = styled.div`
  position: relative;
  margin: 0px 20px 7px 0px;
  color: black;
  font-size: 14px;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;
export const Text = styled.div`
  position: relative;

  color: black;
  font-size: 16px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 20px auto;

  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;
export const BlogContent = styled.div`
  position: relative;
  font-family: "Roboto", serif;

  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;
export const BlogTitle = styled.div`
  position: relative;
  font-family: "Roboto", serif;
  margin-bottom: 0;
  margin-top: 10px;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 450px) {
    font-size: 26px;
    line-height: normal;
  }
`;
export const BlogBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  background-color: #f8efe3;

  /* background: repeat center url("/laureana1b.png"); */
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;
export const Caption = styled.div`
  position: absolute;
  bottom: -30px;
  right: 0;
  font-style: italic;
  font-size: 12px;
  color: black;

  /* background: repeat center url("/laureana1b.png"); */
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;
export const WrapOverlayBlock = styled.div`
  position: relative;
  margin-bottom: 30px;
  /* background: repeat center url("/laureana1b.png"); */
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;
export const ReadingTime = styled.div`
  position: absolute;
  bottom: 15px;
  right: 20px;
  /* font-style: italic; */
  font-size: 14px;
  color: grey;
  display: flex;
  align-items: center;
  /* background: repeat center url("/laureana1b.png"); */
  svg {
    font-size: 16px;
  }
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;
export const TimeAmount = styled.div`
  position: relative;
  margin-left: 5px;

  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;
export const WrapTagCloud = styled.div`
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 auto 30px auto;

  width: 70%;
  justify-content: center;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 850px) {
    width: 92%;
  }
`;
export const SingleTag = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 10px;
  background-color: #d9cdb6;
  margin: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  color: black;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
    font-size: smaller;
    padding: 2px 8px;
    margin: 4px 6px;
  }
`;

export const Author = styled.div`
  position: absolute;
  bottom: 15px;
  left: 20px;
  color: grey;
  font-size: 14px;
  display: flex;
  align-items: center;
  svg {
    font-size: 16px;
    margin-right: 5px;
  }
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;
export const ImageCaption = styled.div`
  position: relative;
  /* right: 0; */
  margin-left: auto;
  /* margin-bottom: 20px; */
  /* bottom: 0; */
  width: fit-content;
  font-style: italic;
  font-size: 12px;
  color: black;
  font-family: Montserrat;

  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;
