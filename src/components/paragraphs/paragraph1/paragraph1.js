import style from "./style";
import Folha from "../../../shared/images/folha.png";

const { Main, IMG1, IMG2 } = style;

export default function ParagraphOne() {
  return (
    <Main>
      <h1>Descubra São Thomé das Letras</h1>
      <h2> Excursão Inesquecível para Amantes da Musica e Natureza!</h2>
      <h3>
        Bem-vindo à São Thomé das Letras, MG, <br/> onde a música encontra
        a magia da natureza! Prepare-se para uma experiência única, onde a música se encontra com o misticismo, proporcionando momentos inesquecíveis. Junte-se a nós
        nesta jornada inesquecível.
      </h3>
      <IMG1 src={Folha} />
      <IMG2 src={Folha} />
    </Main>
  );
}
