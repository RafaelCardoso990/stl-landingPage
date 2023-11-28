import style from "./style";
import TextDiv from "../../../textDiv/textdiv";
import cogumelos from "../../../../shared/images/cogumelo1.png"
import notas from "../../../../shared/images/notas.png"
import ButtonCta from "../../../buttonWpp/ButtonCta";

const { Main, IMG1, IMG2 } = style;

export default function ParagraphTree() {
  return (
    <Main>
      <ButtonCta text="Legal, eu quero !"/>
      <IMG1 src={cogumelos}/>
      <h1>E como vai ser esse role ?</h1>
      <TextDiv
        title="Passagem Ida e Volta para São Thomé das Letras:"
        text="Viaje com comodidade e segurança, aproveitando cada momento da sua 
        jornada desde o momento em que embarca até o retorno para casa."
        Image="bler2"
      ></TextDiv>

      <TextDiv
        title="Café da Manhã e Almoço:"
        text="Desfrute de refeições deliciosas e nutritivas todos os dias. 
        O café da manhã e o almoço é preparado para fornecer a energia necessária para 
        conhecer as belezas de São Thomé."
        Image="bler2"
      ></TextDiv>
<IMG2 src={notas}/>
      <TextDiv
        title="Hospedagem Confortável:"
        text="Relaxar é fundamental durante uma viagem, e nossa excursão 
        oferece hospedagem em locais aconchegantes, proporcionando o descanso 
        necessário para aproveitar ao máximo cada dia."
        Image="bler2"
      ></TextDiv>

      <TextDiv
        title="STL Festival:"
        text="Faça parte de uma experiência única durante sua estadia! 
        Durante esses dias, São Thomé das Letras ganhará vida com o STL Festival, 
        repleto de eventos culturais, apresentações artísticas e momentos de 
        celebração que tornarão sua viagem ainda mais especial"
        Image="bler2"
      ></TextDiv>
    </Main>
  );
}
