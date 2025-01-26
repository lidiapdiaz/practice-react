import Dice from "./Dice"

//Creamos un array de 10 posiciones que serán las casillas
const board = Array(15).fill(null)

function Board() {

  return (
    <>
    <h1>Juego de la oca</h1>
    <Dice/>
    {board.map((cell, index) =>{
      return(<div key={index}>{index}</div>)
    })}
    </>
  )
}

export default Board
