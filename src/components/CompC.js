import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class CompC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                      return <div>HELLO {username}</div>  
                    }
                }
            </UserConsumer>
        )
    }
}

export default CompC
