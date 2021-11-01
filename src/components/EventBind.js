import React, { Component } from 'react'

class Eventbind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        // this.eventHandler= this.eventHandler.bind(this)
     }

    // eventHandler() {
    //     this.setState({
    //         message: 'qwerty'
    //     })
       
    // }

    eventHandler =() => {
           this.setState({
      message: 'qwerty'

})
         
    }
    

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.eventHandler}>click</button>
                {/* <button onClick={()=> this.eventHandler()}>click</button> */}
                {/* <button onClick={this.eventHandler.bind(this)}>click</button> */}
            </div>
        )
    }
}

export default Eventbind


// 1=.bind(this)
// 2=()=> in onclick
// 3=.bind in constructor
// 4=make methods equal to arrow function