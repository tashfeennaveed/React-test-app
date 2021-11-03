import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Bruce','Clark','Diana']
    // const namelist = names.map( name => <h1>{name}</h1>)
    // return <div>{namelist}</div> 

    const persons = [
        {
            id:1,
            name:'qwe',
            age:50,
        },
        {
            id:2,
            name:'asxc',
            age:20,
        }
    ]

    const personList = persons.map( person => (<Person key={person.id} person={person}></Person>) ) 
    return <div>{personList}</div> 
}

export default NameList

// name.propertyname if the object has properry and values
// key is important when creating list of elements 