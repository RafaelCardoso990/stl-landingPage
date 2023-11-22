import styled from "styled-components";

const Main = styled.section`
  position: relative;
    z-index: 1;
  background-color: #cb6be6; 
  clip-path: polygon(0% 11.5%, 100% 0%, 99.8% 100%, 0% 100%);
  padding-top: 50px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 40px;

  h1 {
    width: 80%;
    font-family: "Fuzzy Bubbles", sans-serif;
    color: #fff5d2;
    text-align: center;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: relative;
    z-index: 1;
    background-color: #ff66c4;
    border-radius: 20px;
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
  width: 65%;
  opacity: 20%;
  position: absolute;
  right: -50px;
  top: 0;
  z-index: 2;
`;

const IMG2 = styled.img`
  width: 35%;
  opacity: 20%;
  position: absolute;
  left: 0;
  bottom: 100;
  transform: scaleY(-1);
  transform: scaleX(-1);
  z-index: 0;
`;

const style = { Main, IMG1, IMG2 };
export default style;
