import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    SubmitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then( Response => { console.log(Response)})
        .catch( Error => { console.log(Error)})
    }
    
    render() {
        const { userId,title,body } = this.state
        return (
            <div>
                <form onSubmit={this.SubmitHandler} >
            <div>
                <input 
                type='text' 
                name='userId' 
                value={userId}
                onChange={this.changeHandler} />
            </div>
            <div>
                <input 
                type='text' 
                name='title' 
                value={title}
                onChange={this.changeHandler} />
            </div>
            <div>
                <input 
                type='text' 
                name='body' 
                value={body}
                onChange={this.changeHandler} />
            </div>
            <button type='submit' >submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
