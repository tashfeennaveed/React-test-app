import React, { Component } from 'react'

class CounterRenderProp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    ClickHandler = () => {
        this.setState(
            prevState => {
               return { count: prevState.count + 1 }
            }
        )
    }
    render() {
        return (
            <div>
                {this.props.children(this.state.count, this.ClickHandler)}
            </div>
        )
    }
}

export default CounterRenderProp
