import Dice from "./Dice"
import './App.css'
import Player from "./Player"

//Creamos un array de 10 posiciones que serán las casillas
const board = Array(15).fill(null)

function Board() {

  return (
    <>
    <h1 className="text-red-300 text-3xl">Juego de la oca</h1>
    <Dice/>
    <section className="flex flex-row items-center m-8">
      <Player/>
    {board.map((cell, index) =>{
      return(
      <div 
        key={index}
        className="border-2 border-gray-600 w-[40px] p-2 m-0.5"
        >{index}
      </div>)
    })}
    </section>
    </>
  )
}

export default Board
