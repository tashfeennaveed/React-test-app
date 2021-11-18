import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts :[] ,
             errorMsg : ''
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(
            response => {
                console.log(response)
                this.setState({posts : response.data })
            }
        )
        .catch(Error => {
            console.log(Error)
            this.setState({errorMsg : 'Error retriving Data' })
        })
    }
    render() { 
        const { posts, errorMsg } = this.state
        return (
            <div>
                list of postes
                {
                    posts.length ?
                    posts.map( pos => <div key={pos.id} >{pos.title}</div> ) :
                    null
                }
                { errorMsg ? <div>{errorMsg}</div> : null }
            </div>
        )
    }
}

export default PostList

