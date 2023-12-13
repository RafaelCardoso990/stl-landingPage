import styled from "styled-components";

const Main = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;  
`;

const Title = styled.h1`
font-family: 'Kanit', sans-serif;
    color: white;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: relative;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-top: 10px;
`;

const IMG1 = styled.img`
  width: 90%;
  opacity: 5%;
  position: absolute;
  top: 0;
  right: -100px;
  transform: rotate(-90deg);
  z-index: 2;  
  padding: 10px;
`;

const IMG2 = styled.img`
  width: 90%;
  opacity: 5%;
  position: absolute;
  bottom: 0;
  left: -100px;
  transform: rotate(90deg);
  z-index: 2;  
  padding: 10px;
`;


const style = { Main, IMG1, IMG2, Title };
export default style;
