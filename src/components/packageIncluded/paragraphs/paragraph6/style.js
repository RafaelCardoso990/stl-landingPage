import styled from "styled-components";

const Main = styled.section`
  margin-top: 10px;
  position: relative;
  background-color: #D5C34F;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 0 50px 0;
  overflow-y: hidden;

  h1 {
    font-family: "Josefin Sans", sans-serif;
    color: white;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: relative;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    padding: 5px;
  }


  h2 {
    opacity: 100%;
    font-family: "Josefin Sans", sans-serif;
    color: white;
    text-align: center;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    margin-top: 15px;
    position: relative;
    z-index: 6;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
  }
`;
const IMG1 = styled.img`
  width: 90%;
  opacity: 35%;
  position: absolute;
  top: 0;
  right: -100px;
  transform: rotate(-90deg);
  z-index: 2;  
  padding: 10px;
`;

const IMG2 = styled.img`
  width: 90%;
  opacity: 35%;
  position: absolute;
  bottom: -100px;
  left: -100px;
  transform: rotate(90deg);
  z-index: 2;  
  padding: 10px;
`;

const style = { Main, IMG1, IMG2 };
export default style;
