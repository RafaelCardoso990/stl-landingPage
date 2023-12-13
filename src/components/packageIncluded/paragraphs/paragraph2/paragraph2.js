import style from "./style";
import seta from "../../../../shared/images/seta.png";
import folha from "../../../../shared/images/folha.png";
import cogumelos from "../../../../shared/images/cogumelos.png";
import stlVideo from "../../../../shared/video/stl.mp4";
import poster from "../../../../shared/images/posterVideo.jpg"
import ButtonCta from "../../../buttonCta/ButtonCta";

const { Main, IMG1, IMG2, IMG3 } = style;

export default function ParagraphTwo() {
  return (
    <Main>
      <h1>E para você ter uma noção melhor da dimensão deste evento, veja neste vídeo o que aconteceu no STL:</h1>
      <IMG1 src={seta} />
      <video controls autoPlay poster={poster}>
        <source src={stlVideo} type="video/mp4" />
      </video>
     <IMG2 src={folha}/>
     <IMG3 src={cogumelos}/>
     <ButtonCta/>
    </Main>
  );
}
