import React, {useState} from 'react'

function HookCounter4() {
    const [ items, setItems ] = useState([])

    const addItems = () => {
        setItems([
            ...items,{
                id:items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])

    }
    return (
        <div>
            <button onClick={addItems} >Add a number</button>
            <ol>
                {items.map( itemss => ( <li key={itemss.id}>{itemss.value}</li> ) )}
            </ol>
        </div>
    )
}

export default HookCounter4
