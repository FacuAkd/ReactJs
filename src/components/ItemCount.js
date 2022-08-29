import  * as React from "react";
import { useState } from "react";


function ItemCount(){
    
    const [Count,setCount] = useState(1);
    
    const sumador = () => {
        if(Count<10){
        setCount(Count +1);
        }
    };
    const resta = () => {
        if(Count>0){
            setCount(Count -1);
        }
        
    };

    const resetear = () =>{
        if(Count>0){
            setCount(Count -Count);
        }
    }

    return(
        <div>
            <h2>Contador: {Count}</h2>
            <button onClick= {sumador} >Suma</button>
            <button onClick= {resta} >Resta</button>
            <button onClick= {resetear} >Reset</button>
        </div>
    );
}

export default ItemCount;