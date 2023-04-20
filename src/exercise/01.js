// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  // The reducer, the function that returns the new state
  const countReducer = (prevState, {type, step}) => {
    if (type === 'INCREMENT') {
      return {...prevState, count: prevState.count + step}
    }
    return prevState
  }

  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state
  // The function that makes dispatch of the action object
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
