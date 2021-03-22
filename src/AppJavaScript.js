import React from "react";
function AppJavaScript() {
    const date = new Date(2021, 3, 15, 13)
    const hours = date.getHours()
    let timeofDay
    const stylesA = {
        color:"pink",
        backgroundColor:"green",
        fontsize:24
    }
    if (hours < 12) {
        timeofDay = "morning"
        stylesA.color = "blue"
    } else if (hours >= 12 && hours <= 17) {
        timeofDay = "afternoon"
    } else timeofDay = "night"


    //everytime when you switch from JSX into JavaScript, we need to wrap my JavaScript with a set of {},
    // it is confusing because object are also wrapped in {};
    //stylesA is an instance or say object
    //24 is default px
    //percentage is "" string
    //inside the JavaScript, we cannot use "-", so anytime we use it,we remove the - and use camelCase. See: "BackgroundColor".

    return (
        <h1 style={stylesA}> Good {timeofDay}!</h1>
        // <h1 style={{color:"pink", backgroundColor:"green"}}> Good {timeofDay}!</h1>
    )
}

export default AppJavaScript