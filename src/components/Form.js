import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             select:'react'
        }}

    handlerUsernamechange =(event) => {
        this.setState({
            username: event.target.value
        })

    }

    handlerTextareachange =(event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handlerSelectchange =(event) => {
        this.setState({
            select: event.target.value
        })
    }

    handlerSubmit =(event) => {
             
        alert(`${this.state.username}
               ${this.state.comments} 
               ${this.state.select}`)
        event.preventDefault()
    }
    
    
    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <div>
                    <label>USER NAMER</label>
                    <input 
                    type="text"
                    value={this.state.username}
                    onChange={this.handlerUsernamechange} />
                </div>

                <div>
                    <label>COMMENTS</label>
                    <textarea
                    value={this.state.comments}
                    onChange={this.handlerTextareachange} />
                </div>

                <div>
                    <label>Topic</label>
                    <select value={this.state.select} onChange={this.handlerSelectchange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit" >SUBMIT</button>
            </form>
        )
    }
}

export default Form
