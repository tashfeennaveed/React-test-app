import React from 'react'
import useCounter from '../Hooks/useCounter'

function HookinCounter() {
    const [count,incriment,decriment,reset] = useCounter(5,10)

    return (
        <div>
           <h2>Count = {count}</h2> 
           <button onClick={incriment} >incriment</button>
           <button onClick={decriment} >decriment</button>
           <button onClick={reset} >reset</button>
        </div>
    )
}

export default HookinCounter
