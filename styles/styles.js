import styled from "styled-components";

export const WrapCard = styled.div`
  position: relative;
  z-index: 10;
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;
  padding: 40px 25px 0 25px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  margin: 10px;
  h2 {
    margin: 20px 0;
    color: black;
  }
  @media only screen and (max-width: 1250px) {
    height: auto;
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 550px) {
    padding-bottom: 80px;
  }
`;
export const BlogSectionTitle = styled.div`
  position: relative;

  font-size: 75px;
  font-family: "Garamond";
  font-weight: 700;
  color: #3f230f;
  @media only screen and (max-width: 1250px) {
    height: auto;
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 550px) {
    padding-bottom: 80px;
  }
`;
export const WrapBlogSection = styled.div`
  position: relative;
  padding: 50px;
  @media only screen and (max-width: 1250px) {
    height: auto;
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 550px) {
    padding-bottom: 80px;
  }
`;
export const WrapBlogCards = styled.div`
  position: relative;
  display: flex;
  @media only screen and (max-width: 1250px) {
    height: auto;
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 550px) {
    padding-bottom: 80px;
  }
`;
