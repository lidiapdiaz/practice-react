//Ficha de xogador 
// <div className={`text-3xl relative left-[${move}px]`}>♟️</div>

const move = "left-[240px]";//así si que funciona, cambiando 'manualmente'

function Player() {
  return (
    <div className={`text-5xl relative ${move}`}>♟️</div>
  )
}

export default Player