import style from "./style";
import TextDiv from "../../../textDiv/textdiv";
import cogumelos from "../../../../shared/images/cogumelo1.png";
import notas from "../../../../shared/images/notas.png";
import bus from "../../../../shared/images/PNG/bus.png";
import alimento from "../../../../shared/images/PNG/alimento.png";
import hospedagem from "../../../../shared/images/PNG/hospedagem.png";
import cachoeira from "../../../../shared/images/PNG/cachoeira.png";

const { Main, IMG1, IMG2 } = style;

export default function ParagraphTree() {
  return (
    <Main>
      <IMG1 src={cogumelos} />
      <h1>E como vai ser esse role ?</h1>
      <TextDiv
        title="Passagem Ida e Volta para São Thomé das Letras:"
        text="Viaje com comodidade e segurança, aproveitando cada momento da sua 
        jornada desde o momento em que embarca até o retorno para casa."
        png={bus}
      ></TextDiv>

      <TextDiv
        title="Café da Manhã e Almoço:"
        text="Aproveite refeições deliciosas e nutritivas diariamente. 
        O café da manhã e o almoço são preparados para fornecer a energia 
        necessária enquanto você explora as belezas de São Thomé."
        png={alimento}
      ></TextDiv>
      <IMG2 src={notas} />
      <TextDiv
        title="Hospedagem Confortável:"
        text="Relaxar é fundamental durante uma viagem, e nossa excursão 
        oferece hospedagem em locais aconchegantes, proporcionando o descanso 
        necessário para aproveitar ao máximo cada dia."
        png={hospedagem}
      ></TextDiv>

<TextDiv
        title="Transporte ida e volta para o evento:"
        text="Conduziremos você até o evento do ano, proporcionando conforto e segurança 
        para que você aproveite ao máximo, sem preocupações. 
        Estaremos lá no final, prontos para levá-lo de volta, 
        garantindo uma experiência inigualável."
        png={bus}
      ></TextDiv>

      <TextDiv
        title="Visita a cachoeiras:"
        text="Descubra a beleza natural do Vale das Borboletas e a 
        emocionante Cachoeira Garganta do Diabo. Uma experiência única 
        em meio à natureza exuberante."
        png={cachoeira}
      ></TextDiv>
      
    </Main>
  );
}
