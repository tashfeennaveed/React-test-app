import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    ClickHandler(){
        this.setState(
            prevState => {
               return { count: prevState.count + 1 }
            }
        )
    }
    
    render() {
        const {count} = this.state
        return (
            <div>
                <button onClick={()=>this.ClickHandler()}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCounter
