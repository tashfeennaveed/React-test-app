import { useState } from 'react/cjs/react.development'

function useCounter(IC = 0,value) {
    const [count, setCount] = useState(IC)

    const incriment = () => {
        setCount(prevcount => prevcount + value) 
    }

    const decriment = () => {
        setCount(prevcount => prevcount - value) 
    }

    const reset = () => {
        setCount(IC)
    }
    return [count,incriment,decriment,reset]

}

export default useCounter
