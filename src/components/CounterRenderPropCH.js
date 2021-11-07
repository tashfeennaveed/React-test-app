import React, { Component } from 'react'

class CounterRenderPropCH extends Component {
    render() {
        const {count, ClickHandler} = this.props
        return (<button onClick={ClickHandler} >CLicked {count}</button>
        )
    }
}

export default CounterRenderPropCH

