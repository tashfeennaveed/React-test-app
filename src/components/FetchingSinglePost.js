import React, {useEffect,useState} from 'react'
import axios from 'axios'
function FetchingSinglePost() {
    const [Post , setPost] = useState({})
    const [id , setId] = useState(1)
    const [buttonid , setButtonid] = useState(1)

    const handelClick=() => {
        setButtonid(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonid}`)
        .than(res => {
            console.log(res)
            setPost(res.data)
        }) 
        .catch(err => {
            console.log(err)
            setPost(err.data)
        })
    
    },[buttonid])
    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button type='button' onChange={handelClick}>FETCH</button>
            {Post.title}
        </div>
    )
}
export default FetchingSinglePost
