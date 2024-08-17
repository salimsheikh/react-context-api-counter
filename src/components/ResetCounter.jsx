import React, { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'

const ResetCounter = () => {
    const { count, setCount } = useContext(CounterContext)
    return (
        <div style={{ textAlign: "center" }}>
            <button onClick={() => setCount(0)} disabled={count < 1}>Reset</button>
        </div>
    )
}

export default ResetCounter