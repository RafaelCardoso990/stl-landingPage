import styled from "styled-components";

const Div = styled.div`
  width: 90%;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  

  h1 {
    width: 100%;
    font-family: "Josefin Sans", sans-serif;
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

  h2 {
    padding: 5px;
    font-family: "Josefin Sans", sans-serif;
    color: white;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 15px;
    position: relative;
    z-index: 1;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  video {
    width: 100%;
    height: 150%;
  }
`;

const style = { Div };
export default style;
