import { useState } from 'react'
import './filters.css'
export default function Filters({onChange}) {

    //estado para mostrar qué HP se elixe
    const [minHp, setMinHp] = useState(0)

    const handleChangeHp= (event) => {
        setMinHp(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minHp:event.target.value
        }))
    }

    const handleChangeMithology = (event) => {
        onChange(prevState => ({
            ...prevState,
            mithology:event.target.value
        }))
    }


return (

    <nav className="filters">
        <div>
        <label htmlFor="hp">HP</label>
        <input 
        type="range" 
        id="hp"
        min="0"
        max="9000"
        value={minHp}
        onChange={handleChangeHp}
        />
        {minHp}&#9877;
        </div>

        <div>
            <label htmlFor="mithology">Mithology </label>
            <select onChange={handleChangeMithology}>
                <option value="all">all</option>
                <option value="greek">greek</option>
                <option value="nordic">nordic</option>
                <option value="christian">christian</option>
                <option value="egyptian">egyptian</option>
            </select>
        </div>
        
    </nav>
)
}
