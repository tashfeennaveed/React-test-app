import React from 'react'
import {Chanelconstext, Userconstext} from '../App'

function CompG() {
    console.log("G")
    return (
        <div>
            <Userconstext.Consumer>
                {user => {
                    console.log("user")
                    return (
                        <Chanelconstext.Consumer>
                            {
                              Chanel =>{
                                console.log("chanel")
                                return( 
                                <div>
                                    User contextvalue {user}, chanal contaxt value {Chanel}
                                </div>
                                )
                            }}
                        </Chanelconstext.Consumer>
                    )
                    
                    }
                }
            </Userconstext.Consumer>
        </div>
    )
}

export default CompG
