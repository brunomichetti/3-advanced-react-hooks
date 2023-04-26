// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext()

const CountProvider = props => {
  // Este comp va a ser el padre de los que usan el useContext.
  // Define el estado y lo pasa a los hijos. Notar que retorna el componente CountContext.Provider
  // Las props que recibe se las pasa a los hijos.
  const [count, setCount] = React.useState(0)

  return <CountContext.Provider value={[count, setCount]} {...props} />
}

function CountDisplay() {
  // Este comp hijo usa el count del contexto que le pasa el padre. Este hijo se encarga de mostrar.
  const [count] = React.useContext(CountContext)
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // Este comp hijo usa la función del contexto que le pasa el padre. Este huhi se encarga de modificar el valor.
  // Tambien de mostrar texto de incrementar.
  const [, setCount] = React.useContext(CountContext) // empieza con coma porque quiero el 2do valor
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
