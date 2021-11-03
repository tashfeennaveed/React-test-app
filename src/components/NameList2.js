import React from 'react'
//import Person from './Person'



function NameList2() {
   
    const names = ['Bruce','Clark','Diana']
    const namelist = names.map( (name,index) => <h2 key={index}> {index} {name}</h2>)
    return <div>{namelist}</div>
}

export default NameList2
