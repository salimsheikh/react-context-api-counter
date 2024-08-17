import React, { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'

const Counter = () => {
  const myCounterContext = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => myCounterContext.setCount(myCounterContext.count + 1)} disabled={myCounterContext.count >= 10}>Increment</button>
      <button onClick={() => myCounterContext.setCount(myCounterContext.count - 1)} disabled={myCounterContext.count < 1}>Decrement</button>
    </div>
  )
}

export default Counter