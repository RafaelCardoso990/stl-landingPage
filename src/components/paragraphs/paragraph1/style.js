import styled from "styled-components";

const Main = styled.main`
  width: 110%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;

  h1 {
    width: 80%;
    font-family: "Fuzzy Bubbles", sans-serif;
    color: #fff5d2;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: relative;
    z-index: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  h2 {
    font-family: "Josefin Sans", sans-serif;
    color: #fff5d2;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 15px;
    position: relative;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  h3 {
    font-family: "Josefin Sans", sans-serif;
    color: #fff5d2;
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
`;

const IMG1 = styled.img`
  width: 35%;
  opacity: 20%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
`;

const IMG2 = styled.img`
  width: 35%;
  opacity: 20%;
  position: absolute;
  left: 0;
  margin-top: 630px;
  transform: scaleY(-1);
  transform: scaleX(-1);
  z-index: 0;
`;

const style = { Main, IMG1, IMG2 };
export default style;
