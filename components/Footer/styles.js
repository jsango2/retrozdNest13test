import styled from "styled-components";

export const WrapFooter = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  bottom: 0px;
  /* background-color: #f8efe3; */
  border-top: 1px solid #80808038;
  background-color: #f8efe3;
  display: ${(props) => (props.isMap ? "none" : "block")};

  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 750px) {
    height: ${(props) => (props.isMap ? "60px" : "70px")};
  }
`;
export const Copyright = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  bottom: 0px;
  /* background-color: #f8efe3; */
  border-top: 1px solid #80808038;
  background-color: #f8efe3;
  color: black;
  font-size: 14px;
  display: ${(props) => (props.isMap ? "none" : "block")};

  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 750px) {
    height: ${(props) => (props.isMap ? "60px" : "70px")};
  }
`;
