import React from "react"
import ReactDom from "react-dom"
import Header from "./Class_based_Header";
import Greeting from "./Class_based_Greeting";

class AppE extends React.Component{
    render(){
        return(
            <div>
                <Header username = "Micky" />
                <Greeting />
            </div>
        )

    }
}

export default AppE