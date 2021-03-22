import React, {Component} from "react"

class AppState1 extends Component{
    constructor() {
        super();
        this.state = {
            name: "Micky",
            age:15
        }
    }
    render(){
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age}</h3>
            </div>
        )
    }

}
export default AppState1