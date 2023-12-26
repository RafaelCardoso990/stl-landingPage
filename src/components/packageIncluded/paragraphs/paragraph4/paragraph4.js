import style from "./style";
import TextDiv from "../../../textDiv/textdiv";
import duende from "../../../../shared/images/duende.png"
import nave from "../../../../shared/images/nave.png"
import lupa from "../../../../shared/images/PNG/lupa.png"
import guia from "../../../../shared/images/PNG/guia.png"
import cachoeira from "../../../../shared/images/PNG/cachoeira.png"
import ButtonCta from "../../../buttonCta/ButtonCta";


const { Main, IMG1, IMG2 } = style;

export default function ParagraphFour() {
  return (
    <Main>

      <h1>ROTEIRO</h1>
      <TextDiv
        title="Dia 31/05/2024, sexta-feira:"
        text="Saíremos as 19:00 de Sete Lagoas, com chegada esperada as 00:00,
        ao desembarcar em São Thomé Das Letras você será direcionado a sua hospedagem.
        "
        png={lupa}
      ></TextDiv>
      <IMG1 src={nave}/>
      <TextDiv
        title="Dia 01/06/2024, sábado:"
        text="Ás 9:00 embarcaremos em direção ao Vale das Borboletas
        retorno ás 11:00.
        A parte da tarde livre para visitar a cidade de São Thomé, e as 16:00 partida para 
        STL festival.
        "
        png={guia}
      ></TextDiv>
      <IMG2 src={duende}/>
      <TextDiv
        title="Dia 02/06/2024:"
        text="Ás 10:00 conheceremos a cachoeira Garganta do Diabo, tarde livre, e retorno para Sete Lagoas ás 16:00."
        png={cachoeira}
      ></TextDiv>
     
    </Main>
  );
}
