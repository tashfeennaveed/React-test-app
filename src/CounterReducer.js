import React , {useReducer}from 'react'

const initialstate = 0
const reducer = (state, action) => {
    switch(action) {
        case 'incriment':
        return state +1 
        case 'decriment':
        return state -1 
        case 'Reset':
        return initialstate 
        default:
        return state 
    }
}

function CounterReducer() {
   const [count,dispatch]= useReducer(reducer, initialstate)

    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('incriment')} >incriment</button>
            <button onClick={() => dispatch('decriment')}>decriment</button>
            <button onClick={() => dispatch('Reset')}>Reset</button>
        </div>
    )
}

export default CounterReducer
