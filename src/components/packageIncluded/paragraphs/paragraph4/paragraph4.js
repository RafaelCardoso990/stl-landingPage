import style from "./style";
import TextDiv from "../../../textDiv/textdiv";
import duende from "../../../../shared/images/duende.png"
import nave from "../../../../shared/images/nave.png"
import ButtonCta from "../../../buttonWpp/ButtonCta";

const { Main, IMG1, IMG2 } = style;

export default function ParagraphFour() {
  return (
    <Main>
<ButtonCta text="Caramba, não posso perder!"/>
      <h1>Por que Escolher a Nossa Excursão ?</h1>
      <TextDiv
        title="Roteiro Exclusivo:"
        text="Desenvolvemos um roteiro que combina os pontos turísticos imperdíveis 
        com atividades autênticas, 
        permitindo que você vivencie São Thomé das Letras de uma maneira única."
        Image="bler2"
      ></TextDiv>
      <IMG1 src={nave}/>
      <TextDiv
        title="Condução Profissional:"
        text="Nossa equipe de guias está comprometida em 
        proporcionar uma experiência segura e agradável. 
        Eles são locais experientes, 
        prontos para compartilhar histórias e conhecimentos sobre a região."
        Image="bler2"
      ></TextDiv>
      <IMG2 src={duende}/>
      <TextDiv
        title="Conforto em Primeiro Lugar:"
        text="Valorizamos o seu conforto. Dos meios de transporte à escolha das 
        acomodações, cada detalhe é pensado para garantir que sua viagem 
        seja livre de preocupações."
        Image="bler2"
      ></TextDiv>
    </Main>
  );
}