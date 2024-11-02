import styled from "styled-components";

export const HeaderWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  background-color: #f8efe3;
  border-bottom: 1px solid #80808036;

  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
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
    padding: 0 15px;
  }
`;
export const WrapLinks = styled.div`
  position: relative;
  max-width: 500px;
  height: 100%;
  margin-left: auto;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 550px) {
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
  /* font-style: bold;
  font-weight: 700; */
  /* text-shadow: 0px 2px 11px #0000006e; */
  @media screen and (max-width: 720px) {
    font-size: 24px;
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