import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts :[]
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
        })
    }
    render() { 
        const { posts } = this.State
        return (
            <div>
                list of postes
                {
                    posts.length ?
                    posts.map( post => <div key={post.id} >{post.title}</div> ) :
                    null
                }
            </div>
        )
    }
}

export default PostList

