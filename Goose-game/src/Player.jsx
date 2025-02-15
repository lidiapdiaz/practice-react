//Ficha de xogador 
const move = 60

function Player() {
  return (
    <>
    <div 
    style={{left: move}} 
    className={`text-5xl relative`}>♟️</div>
    </>
  )
}

export default Player