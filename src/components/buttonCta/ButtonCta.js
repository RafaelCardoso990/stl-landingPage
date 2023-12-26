import wpp from "../../shared/images/wpp.png";
import style from "./style";

const { Main } = style;

export default function ButtonCta(props) {
  function redirectToWhatsApp() {
    const phoneNumber = "+5531993426356";
    const message = "Olá, estou entrando em contato para saber mais sobre a excursão para o STL Festival.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  }

  return (
    <Main>
      <button onClick={() => redirectToWhatsApp()}>
         Entre em contato
      </button>
    </Main>
  );
}
