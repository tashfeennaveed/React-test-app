import {useState} from 'react'

function useInput(initialvalue) {
    const [value, setValue] = useState(initialvalue)
    const reset = () => {
        setValue(initialvalue)  
    }
    const bind = {
        value:value,
        onchange: e => {
            setValue(e.target.value) 
        }
    }
    return [value,bind,reset]
}

export default useInput
