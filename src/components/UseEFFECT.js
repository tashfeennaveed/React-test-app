import React, {useState , useEffect} from 'react'

function UseEFFECT() {

    const [count , setCount] = useState(0)

    useEffect(
        ()=>{
            document.title = `You Clicked ${count} times`
        }
    
    )
    return (
        <div>
            <button onClick={()=> setCount(count + 1)} >Clicl {count} times</button>
        </div>
    )
}

export default UseEFFECT
