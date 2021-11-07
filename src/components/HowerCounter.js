import React, { Component } from 'react'

class HowerCounter extends Component {
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
        const count = this.state.count
        return (
            <div>
                <h1 onMouseOver={()=>this.ClickHandler()}>Howered {count} times</h1>
            </div>
        )
    }
}

export default HowerCounter
