import style from "./style";
import cogumelos from "../../../../shared/images/cogumelo1.png";
import notas from "../../../../shared/images/notas.png";
import VideoDiv from "../../../videoDiv/videoDiv";
import emicida from "../../../../shared/video/emicida.mp4";
import armandinho from "../../../../shared/video/armandinho.mp4";
import marcelo from "../../../../shared/video/marcelo.mp4";
import matue from "../../../../shared/video/matue.mp4";
import planta from "../../../../shared/video/planta.mp4";
import nando from "../../../../shared/video/nando.mp4";
import baco from "../../../../shared/video/baco.mp4";
import posterBaco from "../../../../shared/posterVideos/posterBaco.jpg";
import posterArmandinho from "../../../../shared/posterVideos/posterArmandinho.jpg";
import posterEmicida from "../../../../shared/posterVideos/posterEmicida.jpg";
import posterPlanta from "../../../../shared/posterVideos/posterPlanta.jpg";
import posterMarcelo from "../../../../shared/posterVideos/posterMarcelo.jpg";
import posterNando from "../../../../shared/posterVideos/posterNando.jpg";
import posterMatue from "../../../../shared/posterVideos/posterMatue.jpg";
import emicidaFoto from "../../../../shared/images/FotosArtistas/emicida.png";
import armandinhoFoto from "../../../../shared/images/FotosArtistas/armandinho.png";
import marceloFoto from "../../../../shared/images/FotosArtistas/marcelo.png";
import matueFoto from "../../../../shared/images/FotosArtistas/matue.png";
import plantaFoto from "../../../../shared/images/FotosArtistas/planta.png";
import nandoFoto from "../../../../shared/images/FotosArtistas/nando.png";
import bacoFoto from "../../../../shared/images/FotosArtistas/baco.png";

const { Main, IMG1, IMG2 } = style;

export default function ParagraphFive() {
  return (
    <Main>
      <IMG1 src={cogumelos} />

      <h1>E as atrações do STL 2024 em, quem são ?</h1>

      <VideoDiv
        title="Emicida"
        text="Convida Rashid e Drik Barbosa"
        video={emicida}
        poster={posterEmicida}
        foto={emicidaFoto}
      ></VideoDiv>

      <VideoDiv
        title="Armandinho"
        video={armandinho}
        poster={posterArmandinho}
        foto={armandinhoFoto}
      ></VideoDiv>

      <IMG2 src={notas} />

      <VideoDiv
        title="Marcelo Falcão"
        text="Convida Cynthia Luz"
        video={marcelo}
        poster={posterMarcelo}
        foto={marceloFoto}
      ></VideoDiv>

      <VideoDiv
        title="Matuê"
        video={matue}
        poster={posterMatue}
        foto={matueFoto}
      ></VideoDiv>

      <VideoDiv
        title="Planta & Mato"
        text="Planta e Raiz e Mato Seco se juntão num show unico!"
        video={planta}
        poster={posterPlanta}
        foto={plantaFoto}
      ></VideoDiv>

      <VideoDiv
        title="Nando Reis"
        text="Convidado Surpresa"
        video={nando}
        poster={posterNando}
        foto={nandoFoto}
      ></VideoDiv>

      <VideoDiv
        title="Baco Exu do Blues"
        video={baco}
        poster={posterBaco}
        foto={bacoFoto}
      ></VideoDiv>
    </Main>
  );
}
