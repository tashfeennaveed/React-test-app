import React from 'react'

function MemoComp({naem}) {
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp) 
// reacrt.memo is purecomp of  functions 