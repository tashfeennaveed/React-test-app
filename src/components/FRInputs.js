import React from 'react'

const FRInputs = React.forwardRef((props,ref) => {
    return(
        <div>
            <input type='text' ref={ref} />
        </div>
    )
})

export default FRInputs

