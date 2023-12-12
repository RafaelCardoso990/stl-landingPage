import style from "./style";

const { Div } = style;

export default function VideoDiv(props) {

  return (
    <Div>        
      <h1>{props.title}</h1>
      <h2>{props.text}</h2>
      <img src={props.foto} alt="foto artista"/>
      <video controls poster={props.poster}>
        <source src={props.video} type="video/mp4" />
      </video>
    </Div>
  );
}
