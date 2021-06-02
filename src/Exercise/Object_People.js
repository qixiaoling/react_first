import React,{useState} from 'react'
const Object_People = ()=> {
    const[people, setPeople] = useState({
        name : "Peter",
        age : 24,
        msg : 'random message'
    })

    function handleClick(){
        if(people.msg === "random message"){
            setPeople({...people, msg:"hello Peter"})
        }else{
            setPeople({...people, msg:"random message"})
        }

    }


    return(
        <div>
            <h2>{people.name}</h2>
            <h2>{people.age}</h2>
            <h2>{people.msg}</h2>
            <button onClick={handleClick}>change message</button>
        </div>
    )
}
export default Object_People