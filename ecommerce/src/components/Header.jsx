import Filters from "./Filters"

export default function Header({changeFilters}) {
return (
    <>
    <h1>eGods ☄️</h1>
    <Filters onChange={changeFilters}/>
    </>
 )
}
