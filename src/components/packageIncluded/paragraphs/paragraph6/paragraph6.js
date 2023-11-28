import style from "./style";
import TextDiv from "../../../textDiv/textdiv";
import duende from "../../../../shared/images/duende.png"
import nave from "../../../../shared/images/nave.png"
import ButtonCta from "../../../buttonWpp/ButtonCta";

const { Main, IMG1, IMG2 } = style;

export default function ParagraphSix() {
  return (
    <Main>
      <ButtonCta text="Ta foda de mais, me dê <3"/>
      <h1>Não perca a oportunidade de se juntar a nós nesta jornada única a São Thomé das Letras. Reserve agora e prepare-se para viver momentos que ficarão eternamente em sua memória!</h1>
      <h2>Nota: Os detalhes do pacote podem variar. Consulte nossos representantes de vendas para obter informações específicas sobre datas, preços e condições.</h2>
    </Main>
  );
}
