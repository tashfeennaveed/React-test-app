import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greethandler('child')} >GREET PARENT</button>
        </div>
    )
}

export default ChildComponent
