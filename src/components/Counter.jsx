import React, { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'

const Counter = () => {
  // const {count, setCount} = useContext(CounterContext);

  const myCounterContext = useContext(CounterContext);

  return (
    <div>
        <button onClick={() => myCounterContext.setCount(myCounterContext.count + 1)}>Increment</button>
        <button onClick={() => myCounterContext.setCount(myCounterContext.count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter