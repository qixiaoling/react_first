import React, {useState} from 'react'
function ChangeTitle(){
    const [title, setTitle] = useState("random title")
    function handleClick(){
       if(title === "random title"){
           setTitle("hellow world")
       }else{
           setTitle("random title")
       }
    }
    return(
        <>
            <h1>{title}</h1>
            <button onClick={handleClick}>change title</button>
        </>
    )
}
export default ChangeTitle