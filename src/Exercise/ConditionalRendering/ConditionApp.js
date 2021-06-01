import React, {useState, useEffect} from 'react'
import ConditionItself from "./ConditionItself";
import CodeItself from "./CodeItself";
function ConditionApp(){
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(!isLoading)
        }, 3000)
    }, [])

    return(
        <>
            {isLoading ? <ConditionItself /> : <CodeItself/>}
        </>
    )
}
export default ConditionApp