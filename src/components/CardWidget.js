import { Component } from "react";
import imagenes from "../Imagenes/images.jfif";

class CardWidget extends Component{
    render(){
        return(
            <img src={imagenes} width="300" height="30"></img>
        )
    }
}

export default CardWidget