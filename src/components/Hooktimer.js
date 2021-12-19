import React, { useState, useEffect, useRef} from 'react'

function Hooktimer() {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
        setTimer(prevtimer => prevtimer + 1)  
    }, 1000);  
    
      return () => {
          clearInterval(intervalRef.current)
      }
  }, [])

    return (
        <div>
            Hook Timer - {timer}
            <button onClick={() => {clearInterval(intervalRef.current)}} >CLEAR TIMER</button>
        </div>
    )
}

export default Hooktimer
