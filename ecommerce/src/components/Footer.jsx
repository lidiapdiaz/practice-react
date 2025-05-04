import useFilters from '../hooks/useFilters'
import './footer.css'
//Este footer é para seguir probando o contexto


export default function Footer() {

  const {filters} = useFilters()

  return (
    <footer className='footer'>
        {
            JSON.stringify(filters, null, 2)
        }
    </footer>
  )
}
