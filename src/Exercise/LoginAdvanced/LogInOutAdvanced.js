import React, {useState} from 'react'


function LogInOutAdvanced() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return (
        <>
            <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}
            >{isLoggedIn ? 'logout' : 'login'}
            </button>

            <p>{isLoggedIn ? "You logged in" : "You logged out"}</p>

        </>
    )
}

export default LogInOutAdvanced