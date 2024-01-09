import styled from "styled-components";

const Main = styled.section`
  width: 100%;
  position: relative;
  z-index: 3;
  background-color: #cb6be6;
  clip-path: polygon(0.2% 6.5%, 100% 0%, 100% 100%, 0% 93.5%);
  padding-block: 50px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -70px;
  overflow-y: hidden;

  video {
    width: 95%;
    z-index: 1;
    border: solid 2px white;
    border-radius: 9px;
  }

  div {
    position: relative;
    background-color: #fff5d5;
    opacity: 30%;
    z-index: 0;
    border-radius: 9px;
    border: solid 6px white;
    margin-top: 20px;
  }

  h1 {
    font-family: "Kanit", sans-serif;
    color: white;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: relative;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    opacity: 100%;
    padding: 5px;
  }

  h2 {
    opacity: 100%;
    font-family: "Josefin Sans", sans-serif;
    color: black;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 15px;
    position: relative;
    z-index: 6;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  h3 {
    font-family: "Josefin Sans", sans-serif;
    color: black;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 15px;
    position: relative;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 1385px) {
    video {
      width: 55%;
      z-index: 1;
      border: solid 2px white;
      border-radius: 9px;
    }
    h1 {
      font-family: "Kanit", sans-serif;
      color: white;
      text-align: center;
      font-size: 34px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      position: relative;
      z-index: 1;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      opacity: 100%;
      padding: 15px;
    }
  }

  @media (min-width: 900px) {
    video {
      width: 55%;
      z-index: 1;
      border: solid 2px white;
      border-radius: 9px;
    }
  }
`;

const IMG1 = styled.img`
  width: 10%;
  z-index: 2;
  transform: rotate(90deg);
  padding: 10px;

  @media (min-width: 900px) {
    width: 5%;
  }
`;

const IMG2 = styled.img`
  width: 35%;
  opacity: 40%;
  position: absolute;
  left: 0;
  bottom: 100;
  transform: scaleY(-1);
  transform: scaleX(-1);
  z-index: 0;

  @media (min-width: 900px) {
    width: 25%;
  }
`;

const IMG3 = styled.img`
  width: 35%;
  opacity: 70%;
  position: absolute;
  right: -50px;
  top: 0;
  transform: scaleY(-1);
  z-index: 0;

  @media (min-width: 900px) {
    width: 25%;
  }
`;

const style = { Main, IMG1, IMG2, IMG3 };
export default style;
