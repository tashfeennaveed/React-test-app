import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isloggedin: true
        }
    }
    
    render() {
        
        return this.state.isloggedin &&  <div>qwerty</div> 





        // return(
        // this.state.isloggedin ?
        // <div>qwerty</div>:
        // <div>ytrewq</div>
        // )
 




        // let message
        // if(this.state.isloggedin)
        // {
        //     message = <div>qwerty</div>
        // } else {
        //     message = <div>ytrewq</div>
        // }

        // return <div>{message}</div>




        // if(this.state.isloggedin){
        //     return(
        //         <div>
        //              qwerty
        //          </div>
        //     )}
        // else {
        //     return(
        //         <div>
        //               ytrewq
        //          </div>
        //           )

        //      }

        // }




        // return (
        //     <div>
        //          <div>
        //              qwerty
        //          </div>

        //          <div>
        //               ytrewq
        //          </div>       
        //     </div>
        // )
    
}}

export default UserGreeting