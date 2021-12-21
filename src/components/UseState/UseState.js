import React ,{useState}from 'react'

const initState = {
    fname:'Bruce',
    lname:'Wane'
}



export const UseState = () => {
    const [person, setPerson] = useState(initState)

    const NameChanger = () => {
       const newperson = {...person}
       newperson.fname = 'Clark'
       newperson.lname = 'Kent'
       setPerson(newperson)
    
    }
    console.log(`useState Render`)

    return (
        <div>
            <button onClick={NameChanger} >Count</button>
        </div>
    )
}
