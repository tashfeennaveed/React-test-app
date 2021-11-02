import React, { Component } from 'react'

class userGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isloggedin: true
        }
    }
    
    render() {

        if(this.state.isloggedin){
            return(
                <div>
                     qwerty
                 </div>
            )}
        else {
            return(
                <div>
                      ytrewq
                 </div>
                  )

             }

        }




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
    
}

export default userGreeting
