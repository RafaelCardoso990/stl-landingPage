import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 0;
  background-color: black;
  padding: 10px;
  border-radius: 10px 10px 0 0;


  div{
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }

  h1 {
    font-family: "Josefin Sans", sans-serif;
    color: #fff;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: relative;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
   
  }

  p {
    font-family: "Josefin Sans", sans-serif;
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 30px;
  }
`;

const Inst = styled.img`
    width: 40px;  
    margin-top: 20px;
`;

const Lock = styled.img`
    width: 80%;
`;

const style = { Main, Inst , Lock};
export default style;
