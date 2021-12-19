import React from 'react'
import useInput from '../Hooks/useInput'

function UserForm() {

    const [firstname, bindfirstname, resetFname] = useInput('qwerty')
    const [lastname , bindLname, resetLname] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstname} ${lastname}`)
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
                    {...bindfirstname}
                    type='text'
                    />
                </div>
                <div>
                    <label>
                        Last Name
                    </label>
                    <input 
                    {...bindLname}
                    type='text'
                    />
                </div>
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default UserForm
