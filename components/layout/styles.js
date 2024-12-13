import styled from "styled-components";
export const WrapApp = styled.div`
  position: relative;
  width: 100%;

  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 450px) {
    width: 100vw;
  }
`;

export const HeaderWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  /* background-color: #f8efe3; */
  border-bottom: 1px solid #80808036;
  /* opacity: 0.18; */
  z-index: 2;
  background-color: #f8efe3;

  /* background: repeat center url("/1540.jpg"); */
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 750px) {
    height: ${(props) => (props.isMap ? "60px" : "70px")};
  }
`;
export const HeaderBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: #f8efe3; */
  border-bottom: 1px solid #80808036;
  opacity: 0.2;
  background-color: #f8efe3;
  z-index: 1;
  background: repeat center url("/1540.jpg");
  top: 0;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 750px) {
    height: ${(props) => (props.isMap ? "60px" : "70px")};
  }
`;
export const Container = styled.div`
  position: relative;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;

  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 750px) {
    padding: 0 10px;
  }
`;
export const WrapLinks = styled.div`
  position: relative;
  max-width: 500px;
  height: 100%;
  margin-left: auto;
  margin-right: ${(props) => (props.isFooter ? "0" : "80px")};

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
  display: ${(props) => (props.isMap ? "none" : "block")};

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
  display: flex;
  justify-content: center;
  @media screen and (max-width: 720px) {
    font-size: 20px;
  }
`;
export const Underline = styled.div`
  position: absolute;
  height: 3px;
  width: 0%;
  background-color: #3f230f;
  bottom: 0;
  transition: all 0.4s ease-in-out;

  ${WrapLink}:hover & {
    width: 100%;
  }

  @media screen and (max-width: 720px) {
    font-size: 20px;
  }
`;
