import React, { Component } from 'react'
import updatedComponent from './withCounter'

class HowerCounter extends Component {
    

    render() {
        const {count, ClickHandler} = this.props
        return (
            <div>
                <h1 onMouseOver={ClickHandler}>Howered {count} times</h1>
            </div>
        )
    }
}

export default updatedComponent(HowerCounter)
