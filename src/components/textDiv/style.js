import styled from "styled-components";

const Div = styled.div`
  width: 80%;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-block: 50px;
  border-radius: 9px;
  border: solid 2px white;
  margin-top: 10px;

  h1 {
    width: 100%;
    font-family: "Fuzzy Bubbles", sans-serif;
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
    margin-top: 30px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  img {
    width: 50%;
    margin-top: 10px;
  }
`;

const style = { Div };
export default style;
