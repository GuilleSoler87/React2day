import './App.css'
import Counter from './components/Counter/Counter.jsx'
import Greeting from './components/Greeting/Greeting'

function App() {

  return (
    <>
      <div>
        <Counter initialValue={10} incrementBy={5} />
        <Greeting name="Euralio" />
      </div>
    </>
  )
}

export default App
