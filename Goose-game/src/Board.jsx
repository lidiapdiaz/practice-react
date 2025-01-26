import Dice from "./Dice"
import './App.css'

//Creamos un array de 10 posiciones que serán las casillas
const board = Array(15).fill(null)

function Board() {

  return (
    <>
    <h1 className="text-red-300 text-3xl">Juego de la oca</h1>
    <Dice/>
    {board.map((cell, index) =>{
      return(<div key={index}>{index}</div>)
    })}
    </>
  )
}

export default Board
