import React from 'react'

function ButtonText(props) {
    return (
        <>
            {props.isLoggedin ?
                <button>logout</button> :
                <button>login</button>}
        </>
    )
}

export default ButtonText