import React, {useState} from 'react'

function ClickOne(){
    const[count, setCount] = useState(0);

    function handleClick(){
        setCount(count+1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>change!</button>
        </div>
    )
}
export default ClickOne