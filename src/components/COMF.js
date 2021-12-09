import React , {useContext}from 'react'
import CompG from './CompG'
import {Chanelconstext, Userconstext} from '../App'

function COMF() {
    console.log("F")
    const user = useContext(Chanelconstext)
    const chanel = useContext(Userconstext)
    return (
        <div>
            {user} - {chanel}
        </div>
    )
}

export default COMF
