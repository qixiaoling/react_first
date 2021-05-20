import React from 'react';

function Button(props) {
    function handleClick(){
        console.log(props.text);
    }
    return (
        <>
            <button type={props.type} onClick={handleClick} disabled={props.disabled}>
                {props.text}
            </button>
        </>
    )
}

export default Button;