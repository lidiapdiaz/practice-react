import { useState } from "react"
import databoard from "./data/databoard.json";

//Ficha de xogador 
//const move = 60

function Player() {
  const [position,setPosition] = useState(1);

  //Saber en qué casilla según posición de la ficha:
  //cuando encuentres el valor que tiene number-cell, setea ese valor en el estado position
  const currentCell = databoard.find(cell => cell["number-cell"] === position);


  return (
    <>
    <div 
    style={{
      left: `${currentCell?.x * 100}px`,
      top: `${currentCell?.y * 100}px`,
    }} 
    className={`text-5xl absolute`}>♟️</div>
    </>
  )
}

export default Player