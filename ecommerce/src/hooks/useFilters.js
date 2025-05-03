//import { useState } from "react"

import { useContext } from "react"
import { FiltersContext } from "../context/filtersContext"

function useFilters() {
  /*estado para crear filtros
    const [filters, setFilters] = useState({
    mithology: 'all',
    minHp: 0
    })*/

    const {filters, setFilters }= useContext(FiltersContext)
    console.log("que pasa", filters)

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
        )})
    }
return {filterGods, filters, setFilters}
}

export default useFilters;