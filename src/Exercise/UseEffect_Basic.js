import React, {useState, useEffect} from 'react'
function UseEffect_Basic(){
    const [counter, setCounter] = useState(0)

    function handleClick(){
        setCounter(counter + 1)
    }

    useEffect(()=>{
        if(counter>0){
            document.title = `New Message ${counter}`
        }
    },[counter])
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={()=> handleClick()}>click me</button>
        </div>
    )

}
export default UseEffect_Basic