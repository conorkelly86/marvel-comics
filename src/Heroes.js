import React from "react"
//import { directive } from "@babel/types";

function Heroes(props){
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>Film count: {props.films}</h3>  
            <p>Description: {props.description}</p>  

        </div>
    )
}

export default Heroes