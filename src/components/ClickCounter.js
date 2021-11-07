import React, { Component } from 'react'
import updatedComponent from './withCounter'

class ClickCounter extends Component {
  
    
    render() {
        const {count, ClickHandler} = this.props
        return (
            <div>
                <button onClick={ClickHandler}>Clicked {count} times</button>
            </div>
        )
    }
}

export default updatedComponent(ClickCounter, 5) 
