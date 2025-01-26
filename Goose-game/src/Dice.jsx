import { useState } from "react"

function Dice() {
//Crear estado, cada vez que se tire el dado, aparezca el resultado
const [rollDice, setRollDice] = useState(1);

const handleRollDice = () =>{
    const numberDice =  Math.floor(Math.random() * 6) + 1;
    setRollDice(numberDice); 
}


return (
    <>
    <div>dado: {rollDice}</div>
    <button onClick={handleRollDice}> tirar dado</button>
    </>
)
}

export default Dice
