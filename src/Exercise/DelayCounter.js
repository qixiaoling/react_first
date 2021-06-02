import React, {useState} from 'react'
function DelayCounter(){
    const[counter, setCounter] = useState(0)

    function increaseLater(){
        setTimeout(()=>{
            setCounter(counter + 1)
        }, 3000)
    }

    return(
        <div>
            <h1>more complex counter</h1>
            <h1>{counter}</h1>
            <button onClick={()=>increaseLater()}>increase later</button>
        </div>
    )
}
export default DelayCounter