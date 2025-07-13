import { createContext, useState } from "react"

export const RollDiceContext = createContext();


export function RollDiceProvider({ children }) {

const [rollDice, setRollDice] = useState(1);

return (
    <RollDiceContext.Provider value={{
        rollDice,
        setRollDice
    }}>
        {children}
    </RollDiceContext.Provider>
)
}