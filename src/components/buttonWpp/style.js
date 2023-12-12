import styled from "styled-components";

const Main = styled.section`
  padding: 40px;
  position: fixed;
  bottom: 0;
  right: -30px;
  z-index: 6;

  div {
    width: 60px; /* Ajuste conforme necessário */
    height: 60px; /* Ajuste conforme necessário */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  div::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #25d366; /* Cor de fundo do WhatsApp */
    border-radius: 50%;
    animation: blink 1s infinite; /* Efeito de piscar */
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0;
    }
  }

  img {
    width: 50%;
  }
`;

const style = { Main };
export default style;
