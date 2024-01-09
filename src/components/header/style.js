import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  border-radius: 0px 0px 10px 10px;
  background: black;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  img {
    width: 20%;
  }

  p {
    font-family: "Fuzzy Bubbles", sans-serif;
    color: #fff5d2;
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (min-width: 900px) {
    img {
    width: 7%;
  }

  }
`;

const style = { Main };
export default style;
