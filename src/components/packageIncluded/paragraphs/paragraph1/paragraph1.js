import { useEffect, useState } from "react";
import style from "./style";
import foto from "../../../../shared/images/foto.jpeg";

const { Main, IMG1 } = style;

export default function ParagraphOne() {
  const titles = [
    "INESQUECÍVEL",
    "FANTÁSTICO",
    "INCRÍVEL"
  ];
  const [changeTitle, setChangeTitle] = useState("São Thomé Das Letras !");

  useEffect(() => {
    const interval = setInterval(changeTitles, 2000);

    return () => clearInterval(interval);
  },);

  function changeTitles() {
    const titleRandom = Math.floor(Math.random() * titles.length);
    const titlesRandom = titles[titleRandom];
    setChangeTitle(titlesRandom);
  }

  return (
    <Main>
      <div>
        <h1>PARA VOCÊ QUE BUSCA UM 2024 {changeTitle} <br/> VENHA PARA SÃO THOMÉ DAS LETRAS</h1>
        <h2>A excursão perfeita para os amantes da Música e da Natureza</h2>
      </div>
      <IMG1 src={foto} />
    </Main>
  );
}
