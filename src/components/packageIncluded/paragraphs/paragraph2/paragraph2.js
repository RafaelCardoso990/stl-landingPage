import style from "./style";
import seta from "../../../../shared/images/seta.png";
import folha from "../../../../shared/images/folha.png";
import cogumelos from "../../../../shared/images/cogumelos.png";
import stlVideo from "../../../../shared/video/stl.mp4";
import poster from "../../../../shared/images/posterVideo.jpg"

const { Main, IMG1, IMG2, IMG3 } = style;

export default function ParagraphTwo() {
  return (
    <Main>
      <h1>Entenda o rolê</h1>
      <IMG1 src={seta} />
      <video controls autoPlay poster={poster}>
        <source src={stlVideo} type="video/mp4" />
      </video>
     <IMG2 src={folha}/>
     <IMG3 src={cogumelos}/>
    </Main>
  );
}
