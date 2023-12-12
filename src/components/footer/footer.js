import instagram from "../../shared/images/instagram.png";
import seguro from "../../shared/images/seguro.png";
import style from "./style";

const { Main, Inst, Lock } = style;

export default function Footer() {
  return (
    <Main>
      <div>
        <h1>Siga-nos</h1>
        <Inst src={instagram} />
      </div>
      <Lock src={seguro} />
      <p>&copy; 2024 TripSTL. Todos os direitos reservados.</p>
    </Main>
  );
}
