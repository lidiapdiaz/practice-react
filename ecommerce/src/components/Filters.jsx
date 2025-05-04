import './filters.css'
import useFilters from '../hooks/useFilters'
export default function Filters() {

    const {filters, setFilters} = useFilters()

    /*
    //estado para mostrar qué HP se elixe
    const [minHp, setMinHp] = useState(0)
    MAAAL, obten o valor de minHP de dous sitios distintos. ISO NON PODE SER
    const handleChangeHp= (event) => {
        setMinHp(event.target.value) //aqui colle o valor dun estado local
        setFilters(prevState => ({ //aqui colle o valor dun estado "global" (copntexto)"
            ...prevState,
            minHp:event.target.value
        }))
    }*/

    const handleChangeHp= (event) => {
        setFilters(prevState => ({ //aqui colle o valor dun estado "global" (copntexto)"
            ...prevState,
            minHp:event.target.value
        }))
    }


    const handleChangeMithology = (event) => {
        setFilters(prevState => ({
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
        value={filters.minHp}
        onChange={handleChangeHp}
        />
        {filters.minHp}&#9877;
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
