import React, {useEffect ,useReducer} from 'react'
import axios from 'axios'

const initialState = {
    loading:true,
    error:'',
    Post:{}
}

const reducer = (state, action) =>{
    switch(action.type){
        case'FETCH_SUCCESS':
        return{
            loading:false,
            error:'',
            Post:action.payload 
        }

        case'FETCH_ERROR':
        return{
            loading:false,
            error:'Something went wrong',
            Post:{}
        }
        default:
            return state
    }
}

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(Response => {
            dispatch({type: 'FETCH_SUCCESS', payload: Response.data}) 
        })
        .catch(Error =>{
            dispatch({type: 'FETCH_ERROR'}) 

        })
      },[])


    return (
        <div>
            {state.loading? 'Loading' : state.Post.title}
            {state.error? state.error : null}
        </div>
    )
}

export default DataFetchingTwo
