import React, {Component} from "react"

class AppState2 extends Component{
    constructor() {
        super()
        this.state={
            isLoggedin : true
        }

    }
    render(){
        let wordDisplay
        if(this.state.isLoggedin){
            wordDisplay = "in"
        }else{
            wordDisplay = "out"
        }
        return(
            <div>
                <p>You are currently logged {wordDisplay}</p>
            </div>
        )
    }

}
export default AppState2