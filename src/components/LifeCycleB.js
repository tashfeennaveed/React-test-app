import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'tashfeen'
        }
    console.log('LifeCycleB constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }
    
    render() {
        console.log('LifeCycleB render')
        return <div>LifeCycle B</div>
    }
}

export default LifeCycleB
