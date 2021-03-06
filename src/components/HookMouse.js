import React, { useState , useEffect }from 'react'

function HookMouse() {
    const [x , SetX] = useState(0)
    const [y , SetY] = useState(0)

   const logMousePostion = (e) => {
        console.log('Mouse even')
        SetX(e.clientX)
        SetY(e.clientY)

    }

    useEffect(() => {
        console.log('useEffect Called')
        window.addEventListener( 'mousemove', logMousePostion )

        return ()=> {
            console.log('unmounting ')
            window.removeEventListener( 'mousemove', logMousePostion )
        }
    }, [])
    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
