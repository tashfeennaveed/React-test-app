import React, { Component } from 'react'
import childComponent from './childComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }
    }
    
    greetParent(){

        alert(`Hello ${this.state.parentName}`)
    }

    render() {
        return (
            <div>
                <childComponent>vc</childComponent>
                
                <button>check</button>
            </div>
        )
    }
}

export default ParentComponent
