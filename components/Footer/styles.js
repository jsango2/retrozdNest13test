import styled from "styled-components";

export const WrapFooter = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  bottom: 0px;
  /* background-color: #f8efe3; */
  border-top: 1px solid #80808038;
  background-color: #f8efe3;
  display: ${(props) => (props.isMap ? "none" : "block")};
  padding: 10px 0 20px 0;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 750px) {
  }
`;
export const ContainerFooter = styled.div`
  position: relative;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 750px) {
    padding: 0 10px;
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
export const FooterText = styled.div`
  position: relative;
  width: 70%;
  max-width: 750px;

  bottom: 0px;

  color: darkgrey;
  font-size: 14px;
  display: ${(props) => (props.isMap ? "none" : "block")};
  text-align: center;
  margin: 5px auto;
  font-family: Roboto;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 750px) {
    width: 95%;
  }
`;
