import React from 'react'
function DisplayText(props){
    return(
        <>
            {props.isLoggedin ?
                <p>You logged in</p> :
                <p>You logged out</p>}
        </>
    )
}
export default DisplayText