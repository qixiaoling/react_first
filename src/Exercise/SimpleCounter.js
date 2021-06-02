import React, {useState} from 'react'
function SimpleCounter(){
    const [count, setCount] = useState(0)
    function decreaseCount(){
        setCount(count - 1)
    }
    function increaseCount(){
        setCount(count+1)
    }
    function decreaseCount(){
        setCount(count-1)
    }
    function reset(){
        setCount(0)
    }
    return(
        <div>
            <h1>Simple Counter</h1>
            <h2>{count}</h2>
            <div>
                <button onClick={()=>decreaseCount()}>decrease</button>
                <button onClick={()=>reset()}>reset</button>
                <button onClick={()=>increaseCount()}>increase</button>
            </div>
        </div>
    )
}
export default SimpleCounter