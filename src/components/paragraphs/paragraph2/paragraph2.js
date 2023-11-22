import style from "./style";
import Cogumelo from "../../../shared/images/cogumelos.png";

const { Main, IMG1, IMG2 } = style;

export default function ParagraphTwo() {
  return (
    <Main>
      <h1>O que está incluído no nosso pacote</h1>
      <h2> Transporte Ida e Volta:</h2>
      <h3>
        Viaje com conforto em nosso transporte exclusivo, proporcionando uma
        jornada agradável desde o momento em que você embarca.
      </h3>
      <IMG1 src={Cogumelo} />
      
    </Main>
  );
}
