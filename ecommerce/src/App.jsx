import Gods from './components/Gods'
import gods from "./data/gods.json"
import './index.css'


function App() {

  return (
    <>
      <h1>eGods ☄️</h1>
      <Gods gods={gods}/>
    </>
  )
}

export default App
