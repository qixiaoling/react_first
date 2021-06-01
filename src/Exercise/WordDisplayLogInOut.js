import React ,{useState}from 'react'
function WordDisplayLogInOut(){
    const [loggedIn, toggleLoggedIn] = useState(true)


    return(
        <>
            <p>You are currently logged {loggedIn? "in" : "out"} </p>
            <button onClick={()=>toggleLoggedIn(!loggedIn)}>switch!</button>
        </>

    )
}
export default WordDisplayLogInOut