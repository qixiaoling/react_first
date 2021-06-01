import React, {useState} from 'react'

function Condition2App() {
    const [msg, setMsg] = useState([
        "hi",
        "call your mom"
    ]);

    return (
        <>
            {msg.length > 0 &&
            <p>You have {msg.length} messages!</p>}

        </>

    )
}

export default Condition2App