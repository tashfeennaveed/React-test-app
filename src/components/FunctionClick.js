 import React from 'react'
 
 function FunctionClick() {
        function clickhandler(){
            console.log("butten clicked")
        }
     return (
         <div>
             <button onClick={clickhandler}>click</button>
         </div>
     )
 }
 
 export default FunctionClick
 