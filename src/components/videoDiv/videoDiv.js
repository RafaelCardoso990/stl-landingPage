import style from "./style";

const { Div } = style;

export default function VideoDiv(props) {
  console.log(props);

  return (
    <Div>        
      <h1>{props.title}</h1>
      <h2>{props.text}</h2>
      <video controls poster={props.poster}>
        <source src={props.video} type="video/mp4" />
      </video>
    </Div>
  );
}
