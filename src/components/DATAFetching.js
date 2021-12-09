import React, { useState , useEffect} from 'react'
import axios from 'axios'

function DATAFetching() {
    const [Posts , setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .than(res => {
            console.log(res)
            setPosts(res.data)
        }) 
        .catch(err => {
            console.log(err)
        })
    
    },[])
    return (
        <div>
            <ul>
                { Posts.map(POST => <li key={POST.id}>{POST.title}</li>) }
            </ul>
        </div>
    )
}

export default DATAFetching
