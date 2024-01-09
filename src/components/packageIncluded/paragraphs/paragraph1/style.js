import styled from "styled-components";

const Main = styled.main`
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: hidden;

  div {
    width: 100%;
    z-index: 3;
    background-color: black;
    opacity: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-block: 50px;
    overflow-y: hidden;
  }

  h1 {
    font-family: "Kanit", sans-serif;
    color: #fff5d2;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: relative;
    z-index: 1;
    text-shadow: 0 0 10px rgba(255, 0, 128, 1);
    padding: 5px;
  }

  h2 {
    font-family: "Josefin Sans", sans-serif;
    color: #fff5d2;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 5px;
    position: relative;
    z-index: 1;
    margin-bottom: 30px;
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
    margin-top: 35px;
    padding-bottom: 55px;
    position: relative;
    z-index: 1;

    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 15px;
  }

  @media (min-width: 900px) {
    h1 {
      font-family: "Kanit", sans-serif;
      color: #fff5d2;
      text-align: center;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      position: relative;
      z-index: 1;
      text-shadow: 0 0 10px rgba(255, 0, 128, 1);
      padding: 5px;
    }

    h2 {
      font-family: "Josefin Sans", sans-serif;
      color: #fff5d2;
      text-align: center;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      padding: 5px;
      position: relative;
      z-index: 1;
      margin-bottom: 30px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  }
`;

const IMG1 = styled.img`
  width: 250%;
  opacity: 1;
  position: absolute;
  right: 0;
  top: 0;

  @media (min-width: 900px) {
    width: 100%;
  }
`;

const style = { Main, IMG1 };
export default style;
