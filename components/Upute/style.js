import styled from "styled-components";

export const WrapAll = styled.div`
  box-sizing: border-box;
  position: fixed;
  z-index: 20;

  background-color: rgb(255 255 255);
  border: 2px solid #dcd9d9;
  border-radius: 4px;
  color: rgb(26, 25, 25);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 2px;
  padding-left: 0px;
  font-weight: 400;
  overflow: hidden;
  &div:hover {
    position: relative;
    cursor: pointer;
    color: #bf7575;
    z-index: 30;
  }

  &.open {
    transition: all 0.3s ease-in-out;
    height: 600px;
    width: 600px;
    bottom: 50%;
    right: 50%;
    transform: translate(50%, 45%);
  }
  &.closed {
    transition: all 0.3s ease-in-out;
    bottom: 40px;
    right: -35px;
    height: 33px;
    width: 135px;
  }
  /* background: ; */
  @media only screen and (max-width: 600px) {
    &.open {
      transition: all 0.3s ease-in-out;
      height: 580px;
      width: 90vw;
      bottom: 47%;
      z-index: 21;
      right: 50%;
      transform: translate(50%, 45%);
    }
    &.closed {
      bottom: 120px;
    }
  }
  @media only screen and (max-width: 720px) {
    min-width: unset;
  }
`;

export const Title = styled.div`
  position: relative;
  cursor: pointer;
  color: #5e5b5b;

  z-index: 30;
  margin-left: 30px;
  justify-self: flex-start;
  margin-top: ${(props) => (props.open ? "10px" : "0")};
  font-weight: 500;
  font-family: sans-serif;

  @media only screen and (max-width: 900px) {
  }
  @media only screen and (max-width: 720px) {
    min-width: unset;
  }
`;

export const WrapSlider = styled.div`
  position: absolute;
  z-index: 13;
  width: 90%;
  min-width: 570px;
  max-height: 600px;
  transition: all 0.6s ease-in-out;
  display: ${(props) => (props.uputeOpen ? "block" : "none")};
  opacity: ${(props) => (props.uputeOpen ? "1" : "0")};

  @media only screen and (max-width: 600px) {
    min-width: unset;
    width: 95vw;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const FirstScreen = styled.p`
  position: relative;

  z-index: 1000;
  color: black;
  font-size: 16px;
  font-family: serif;
  font-weight: 400;
  width: 100%;
  height: 570px;

  padding: 90px 70px 70px 70px;
  text-align: left;
  display: inline;
  margin-left: 20px;

  img {
    display: inline-block;
    margin: 0 5px 0 0;
  }
  @media screen and (max-width: 600px) {
    margin-left: 0px;

    font-size: 14px;

    padding: 70px 30px 0 3%;
  }
`;
