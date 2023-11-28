import { useEffect, useState } from "react";
import style from "./style";
import foto from "../../../../shared/images/foto.jpeg";

const { Main, IMG1 } = style;

export default function ParagraphOne() {
  const titles = [
    "STL Festival!",
    "Paisagens maravilhosas!",
    "Boa Vibe!",
    "São Thomé Das Letras !",
  ];
  const [changeTitle, setChangeTitle] = useState("São Thomé Das Letras !");

  useEffect(() => {
    const interval = setInterval(changeTitles, 2000);

    return () => clearInterval(interval);
  }, [changeTitle]);

  function changeTitles() {
    const titleRandom = Math.floor(Math.random() * titles.length);
    const titlesRandom = titles[titleRandom];
    setChangeTitle(titlesRandom);
  }

  return (
    <Main>
      <div>
        <h1>Descubra:</h1>
        <h1>{changeTitle}</h1>
        <h2>Excursão Inesquecível para Amantes da Musica e Natureza!</h2>
        <h3>
          Bem-vindo à São Thomé das Letras, MG, <br /> onde a música encontra a
          magia da natureza! Prepare-se para uma experiência única e momentos
          inesquecíveis. Junte-se a nós nesta jornada inesquecível.
        </h3>
      </div>
      <IMG1 src={foto} />
    </Main>
  );
}
