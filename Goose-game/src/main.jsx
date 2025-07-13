import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RollDiceProvider } from './context/RollDiceContext.jsx'
import Board from './Board.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RollDiceProvider>
      <Board />
    </RollDiceProvider>
  </StrictMode>,
)
