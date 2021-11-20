import React, {useState} from 'react'

function HookCounter2() {
   const initialcount= 0
   const [count, setCount] = useState(initialcount)

   const incrimentFive = () => {
       for(let i=0; i<5; i++ ){
        setCount( prevCount => prevCount+1 )   
       }
   }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialcount)} >Reset</button>
            <button onClick={() => setCount(prevCount => prevCount-1)} >Decriment</button>
            <button onClick={() => setCount(prevCount => prevCount+1)} >Incriment</button>
            <button onClick={incrimentFive} >incrimentFive</button>
        </div>
    )
}

export default HookCounter2
