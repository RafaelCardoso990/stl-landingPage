import styled from "styled-components";

const Main = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;

  button {
    background-color: red;
    border-radius: 20px;
    text-decoration: none;
    border: none;
    width: 80%;
    height: 50px;
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
    margin: 15px;

    @media (min-width: 900px) {
    width: 30%;
    
  }
  }
`;

const style = { Main };
export default style;
