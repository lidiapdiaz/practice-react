import { useState } from 'react'
import Gods from './components/Gods'
import {gods as initialGods} from "./data/gods.json"
import './index.css'
import Header from './components/Header';

function App() {

  const [gods] = useState(initialGods);
  

  //estado para crear filtros
  const [filters, setFilters] = useState({
    mithology: 'all',
    minHp: 0,
  })

  //Creamos unha función para filtrar deuses
  const filterGods = (gods) => {
    
    //usamos metodo filter para filtra-lo array dos deuses
    return gods.filter(god => {
      return(//por cada elemento/deus (god) quero que me devolvas:
        god.hp >= filters.minHp && //se o campo hp é igual que o elexido no filtro
        (
          filters.mithology === 'all' || // se no filtro teño elexida mitoloxía todas
          god.mithology === filters.mithology //se coincide co filtro de mitoloxia seleccionado
        )
      )
    })
  }
  
  //gardo nunha cosnt os deuses xa filtrados
  const filteredGods = filterGods(gods)
  

  return (
    <>
      <Header changeFilters={setFilters}/>
      <Gods gods={filteredGods}/>
    </>
  )
}

export default App
