import React from 'react'
import './mySTyle.css'

function StyleSheet(props) {
    let className = props.Primary ? 
    'Primary' : ''

    return (
        <div>
            <h1 className={`${className} font-xl`} >Stylesheets</h1>
        </div>
    )
}

export default StyleSheet
