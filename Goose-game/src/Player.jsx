import { useState } from "react"
import databoard from "./data/databoard.json";

//TODO:
/* como o taboleiro agora é recto falta por coloca-la ficha no eixe Y*/ 

function Player() {
  const [position,setPosition] = useState(0);

  //Saber en qué casilla según posición de la ficha:
  //cuando encuentres el valor que tiene number-cell, setea ese valor en el estado position
  const currentCell = databoard.find(cell => cell["number-cell"] === position);
  console.log('estas na casilla', currentCell.x);

  return (
    <>
    <div 
    className={`text-5xl absolute`}
    style={{
      left: `${currentCell?.x * 80 + 75}px`,
      top: "140px",
    }}
    >♟️</div>
    </>
  )
}

export default Player