import style from "./style";

const { Div } = style;

export default function TextDiv(props) {
  console.log(props);

  return (
    <Div>        
      <h1>{props.title}</h1>
      <h2>{props.text}</h2>
    </Div>
  );
}
