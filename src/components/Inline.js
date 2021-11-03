import React from 'react'

function Inline() {
    const heading = {
        fontSize: '72px',
        color: 'blue'
       
    }

// proprties must be camel cased

    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
