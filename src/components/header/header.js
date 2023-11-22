import Logo from "../../shared/images/stlLogo.png";
import style from "./style";

const { Main } = style;

export default function Header() {
  return (
    <Main>
      <p>Trip</p>
      <img src={Logo} />
      <p>7L</p>
    </Main>
  );
}
