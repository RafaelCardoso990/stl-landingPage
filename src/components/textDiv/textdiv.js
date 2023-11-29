import style from "./style";
import { useEffect } from "react";
import  Aos  from "aos"
import 'aos/dist/aos.css'

const { Div } = style;

export default function TextDiv(props) {
  
  useEffect(() => {
    Aos.init({duration: 1500})
},[])  

  return (
    <Div data-aos="zoom-in">        
      <h1>{props.title}</h1>
      <h2>{props.text}</h2>
      <img src={props.png} alt="png"/>
    </Div>
  );
}
