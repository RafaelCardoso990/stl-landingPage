import styled from "styled-components";

const Main = styled.section`
  clip-path: polygon(0% 0%, 100% 4%, 100% 95%, 0% 100%);
  position: relative;
  background-color: #018755;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 90px 0 90px 0;
  overflow-y: hidden;

  h1 {
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
