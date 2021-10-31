import React, { Component } from 'react'

class Counter extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            count:0
       }
   }

   incriment(){
    //    this.setState({
    //        count: this.state.count +1
    //    },
    //      () => {
    //          console.log('callback value', this.state.count )
    //      }
    // )

    this.setState((prevStat,props)  => ({
       count:prevStat.count + 1
    }),
    () => {console.log(this.state.count)}
    )

   }

   incrimentfive(){
       this.incriment()
       this.incriment()
       this.incriment()
       this.incriment()
       this.incriment()
   }

   

    render() {
        return (
        <div>
            <div>
               count - {this.state.count}
            </div>
            <button onClick={() => this.incrimentfive()} >Incriment</button>



        </div>
            
        )
    }
}

export default Counter
