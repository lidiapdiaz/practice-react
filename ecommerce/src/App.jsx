import { useState } from 'react'
import useFilters from './hooks/useFilters'
import Gods from './components/Gods'
import {gods as initialGods} from "./data/gods.json"
import './index.css'
import Header from './components/Header';

function App() {
  
  const [gods] = useState(initialGods);
  const {filterGods, setFilters} = useFilters()
  const filteredGods = filterGods(gods);
  

  return (
    <>
      <Header changeFilters={setFilters}/>
      <Gods gods={filteredGods}/>
    </>
  )
}

export default App
