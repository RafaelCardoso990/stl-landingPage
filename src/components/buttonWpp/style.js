import styled from "styled-components";

const Main = styled.section`
  padding: 40px;

  img {
    width: 10%;
    align-self: center;
  }

  button {
    width: 100%;
    height: 80px;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 5px;
    color: #fff;
    background-color: #3498db;
    border: 2px solid #3498db;
    transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  }

  button:hover {
    background-color: #2980b9;
    border-color: #2980b9;
    color: #fff;
  }
`;

const style = { Main };
export default style;
