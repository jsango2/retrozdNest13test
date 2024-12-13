import styled from "styled-components";

export const HeaderWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  /* background-color: #f8efe3; */
  border-bottom: 1px solid #80808036;

  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 750px) {
    height: ${(props) => (props.isMap ? "60px" : "70px")};
  }
`;
export const WrapCard = styled.div`
  position: relative;
  font-family: "Roboto", serif;
  font-weight: 400;
  font-style: normal;
  z-index: 10;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
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
    height: 100%;
    object-fit: cover;
    width: 50%;
  }
  h2 {
    margin: 0px 20px 15px 20px;
    color: black;
    font-weight: 700;
    line-height: 38px;
    font-size: 30px;
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
  @media only screen and (max-width: 750px) {
    flex-direction: column;
    img {
      height: 50%;
      object-fit: cover;
      width: 100%;
    }
    h2 {
      margin: 0px 20px 15px 20px;
      color: black;
      font-weight: 700;
      line-height: 32px;
      font-size: 26px;
    }
  }
  @media only screen and (max-width: 550px) {
    width: 100%;
    /* padding-bottom: 50px; */
    margin: 20px 0px;
  }
`;
export const WrapData = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 20px;
  @media only screen and (max-width: 750px) {
    width: 100%;
    height: 600px;
  }
  @media only screen and (max-width: 550px) {
    padding-top: 0px;
  }
`;
export const Container = styled.div`
  position: relative;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 750px) {
    padding: 0 10px;
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
export const BlogDate = styled.div`
  position: absolute;
  bottom: 15px;
  right: 20px;
  /* font-style: italic; */
  font-size: 14px;
  color: grey;
  display: flex;
  align-items: center;
  color: grey;
  /* background: repeat center url("/laureana1b.png"); */
  svg {
    font-size: 16px;
  }
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
  }
`;
export const WrapLinks = styled.div`
  position: relative;
  max-width: 500px;
  height: 100%;
  margin-left: auto;
  margin-right: 80px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 850px) {
    margin-right: 0;
  }
`;
export const WrapLogo = styled.div`
  position: relative;
  z-index: 2;

  font-size: 45px;
  font-family: "Garamond";
  font-weight: 700;
  color: #3f230f;
  margin: 0;
  cursor: pointer;
  left: ${(props) => (props.isMap ? "228px" : "")};

  /* font-style: bold;
  font-weight: 700; */
  /* text-shadow: 0px 2px 11px #0000006e; */
  @media screen and (max-width: 850px) {
    font-size: 24px;
    left: 0px;
  }
`;
export const WrapLink = styled.div`
  position: relative;
  z-index: 2;

  font-size: 30px;
  font-family: "Garamond";
  font-weight: 700;
  color: #3f230f;
  margin: 0;
  cursor: pointer;
  margin: 0 10px;
  /* font-style: bold;
  font-weight: 700; */
  /* text-shadow: 0px 2px 11px #0000006e; */
  @media screen and (max-width: 720px) {
    font-size: 20px;
  }
`;
