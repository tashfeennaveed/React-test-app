import React from "react";

const updatedComponent = (OrignalComponent, incrimentNumber) => {
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
                   return { count: prevState.count + incrimentNumber }
                }
            )
        }

        render() {
            return(
                <OrignalComponent 
                count={this.state.count} 
                ClickHandler={()=>this.ClickHandler()}
                {...this.props}
                />
                  )
           
    }}
    return NewComponent
}

export default updatedComponent

// MUST!!! {...this.props} here rest of the props are passed back to the orignal component