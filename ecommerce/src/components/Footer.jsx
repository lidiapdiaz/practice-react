import './footer.css'
//Este footer é para seguir probando o contexto


export default function Footer({filters}) {
  return (
    <footer className='footer'>
        {
            JSON.stringify(filters, null, 2)
        }
    </footer>
  )
}
