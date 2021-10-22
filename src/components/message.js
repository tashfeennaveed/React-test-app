import React, { Component } from "react"

class Message extends Component {
    constructor(){
      super()
      this.state = {
          msg:'please subscribe'

      }

    }

    subscribed(){
        this.setState(
            {msg:'subscribed'})
    }

    reset(){
        this.setState(
            {msg:'please subscribe'})
    }



  render(){
      return (
          <div>
            <h1>
                {this.state.msg}
            </h1>
            <button onClick={() => this.subscribed()}>subscribe</button> <br/>
            <button onClick={() => this.reset()}>reset</button>

          </div>
      )
  }
}

export default Message