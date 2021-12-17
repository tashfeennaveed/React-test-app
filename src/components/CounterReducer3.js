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

function CounterReducer3() {
   const [count,dispatch]= useReducer(reducer, initialstate)
   const [countTwo,dispatchTwo]= useReducer(reducer, initialstate)

    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('incriment')} >incriment</button>
            <button onClick={() => dispatch('decriment')}>decriment</button>
            <button onClick={() => dispatch('Reset')}>Reset</button>
            <div>
            <div>Count Two - {countTwo}</div>
            <button onClick={() => dispatchTwo('incriment')} >incriment</button>
            <button onClick={() => dispatchTwo('decriment')}>decriment</button>
            <button onClick={() => dispatchTwo('Reset')}>Reset</button>
        </div>
        </div>
    )
}

export default CounterReducer3
