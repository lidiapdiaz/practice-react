// 1. Importamos createContext de React para poder crear contexto:
import { createContext, useState  } from "react";

//2. Agora creamos o contexto, aqui lle imos chamar FiltersContext
export const FiltersContext = createContext();

//3. Crear un proveedor que envolverá 
//aos compoñentes fillos (children) que podrán consumi-lo contexto

//esta función só devolvemos o Proveedor. 
// No porveedor teremos un valor que é a información 
// que queremos acceder: un estado inicial, un número, un obxecto...

//4. Logo envolvemos o children coa etiqueta <FiltersProvider> (está en main.jsx)
export function FiltersProvider ({children}){
    const [filters, setFilters]= useState({
        mithology: 'all',
        minHp: 0
        })
        
return(
    <FiltersContext.Provider value={{
        filters,
        setFilters
        }}>
        {children}
    </FiltersContext.Provider>
)
}