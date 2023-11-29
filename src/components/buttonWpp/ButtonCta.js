import wpp from "../../shared/images/wpp.png";
import style from "./style";

const { Main } = style;

export default function ButtonCta(props) {
  function redirectToWhatsApp() {
    const url = `https://api.whatsapp.com/send?phone=+5531975594540`;
    window.location.href = url;
  }

  return (
    <Main>
      <button onClick={() => redirectToWhatsApp()}>
        {props.text}
        <img src={wpp} alt="wpp"/>
      </button>
    </Main>
  );
}
