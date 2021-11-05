import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
        this.cbref = null
        this.setCBref = (Element) => {
            this.cbref = Element 
        }
    }

    componentDidMount(){
        if(this.cbref){
            this.cbref.focus()
        }
        
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    Clickhandler(){
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} ></input>
                <input type='text' ref={this.setCBref} ></input>
                <button onClick={() => this.Clickhandler()} >Clickme</button>
            </div>
        )
    }
}

export default RefsDemo
