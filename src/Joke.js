import React from "react"


function Joke(props){

    return (
        <div>
            <p style={{display: props.question ? "block":"none"}}>Question:{props.question}</p>
            <p style={{color: !props.question && "#888888"}}>Answer: {props.answer}</p>
        </div>
    )
}
//doesn't the content of question exist? if yes, display in block, if not display none. Or write like below:
//<p style={{display: !props.question && "none"}}>Question:{props.question}</p>

//if there is no question, that answer line should be in grey color.
export default Joke