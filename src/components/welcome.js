import React, { Component } from "react"

class Welcome extends Component {
  render(){
      const {name} = this.props
      // const {state1,state2} = this.state
      return <p>name = {name} </p>
  }
}

export default Welcom