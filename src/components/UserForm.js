import React from 'react'
import useInput from '../Hooks/useInput'

function UserForm() {

    const [firstName, bindFirstname, resetFname] = useInput('')
    const [lastName , bindLastname, resetLname] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFname()
        resetLname()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        First Name                        
                    </label>
                    <input 
                    {...bindFirstname}
                    type='text'
                    />
                    <input type='text' />
                </div>
                <div>
                    <label>
                        Last Name
                    </label>
                    <input 
                    {...bindLastname}
                    type='text'
                    />
                </div>
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default UserForm
