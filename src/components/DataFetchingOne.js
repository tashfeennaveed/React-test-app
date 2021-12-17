import React, {useEffect ,useState} from 'react'
import axios from 'axios'

function DataFetchingOne() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [Post, setPost] = useState({})
    
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(Response => {
        setLoading(false) 
        setPost(Response.data) 
        setError('')
      })
      .catch(Error =>{
        setLoading(false) 
        setPost({}) 
        setError('Something went wrong')
      })
    },[])
    
    return (
        <div>
            {loading? 'Loading' : Post.title}
            {error? error : null}
        </div>
    )
}

export default DataFetchingOne
