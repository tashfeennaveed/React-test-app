import React , {useReducer}from 'react'

const initialstate = {
    firstCounter:0,
    secondCounter:10
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'incriment':
        return {...state, firstCounter: state.firstCounter +action.value} 
        case 'decriment':
        return {...state,firstCounter: state.firstCounter -action.value}
        case 'incriment2':
        return {...state,secondCounter: state.secondCounter +action.value} 
        case 'decriment2':
        return {...state,secondCounter: state.secondCounter -action.value} 
        case 'Reset':
        return initialstate 
        default:
        return state 
    }
}

function CounterReducer2() {
   const [count,dispatch]= useReducer(reducer, initialstate)

    return (
        <div>
            <div>Count - {count.firstCounter}</div>
            <div>Count - {count.secondCounter}</div>

            <button onClick={() => dispatch({type: 'incriment', value: 1})} >incriment</button>
            <button onClick={() => dispatch({type: 'decriment', value: 1})}>decriment</button>
            <button onClick={() => dispatch({type: 'Reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'incriment', value: 5})} >incriment by 5</button>
            <button onClick={() => dispatch({type: 'decriment', value: 5})}>decriment by 5</button>
            <div>
            <button onClick={() => dispatch({type: 'incriment2', value: 1})} >incriment2</button>
            <button onClick={() => dispatch({type: 'decriment2', value: 1})}>decriment2</button> 
            </div>
        </div>
    )
}

export default CounterReducer2
