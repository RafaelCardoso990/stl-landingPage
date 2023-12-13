import pegada from "../../shared/images/pegada.png";
import style from "./style";

const { Main } = style;

export default function Header() {
  return (
    <Main>
      <img src={pegada} alt="Logo" />
    </Main>
  );
}
