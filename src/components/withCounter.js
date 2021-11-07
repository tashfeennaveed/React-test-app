import React from "react";

const updatedComponent = OrignalComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
    
        ClickHandler(){
            this.setState(
                prevState => {
                   return { count: prevState.count + 1 }
                }
            )
        }

        render() {
            return(
                <OrignalComponent 
                count={this.state.count} 
                ClickHandler={()=>this.ClickHandler()}/>
                  )
                 }
    }
    return NewComponent
}

export default updatedComponent