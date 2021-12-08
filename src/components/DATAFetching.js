import React, { useState , useEffect} from 'react'
import axios from 'axios'

function DATAFetching() {
    const [Posts , setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .than(Response => {
            console.log(Response)
        }) 
        .catch(Error => {
            console.log(Error)
        })
    
    })
    return (
        <div>
            <ul>
                { Posts.map(POST => <li key={POST.id}>{POST.title}</li>) }
            </ul>
        </div>
    )
}

export default DATAFetching
