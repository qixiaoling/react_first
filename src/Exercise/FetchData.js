import React, {useState, useEffect} from 'react'
import axios from "axios";
function FetchData(){
    const [isLoading, setIsLoading] = useState(true)
    const [content, setContent] = useState('');

    async function fetchDataNew(){
        try{
            const result = await axios.get("https://swapi.co/api/people/1");
            //this api doesn't work.
            setContent(result);
            setIsLoading(false);
        }catch(e){
            console.log("Oops!")
        }
    }

    useEffect(()=>{
        fetchDataNew()
    }, [])


    return(
        <div>
            {isLoading ? <h1>is loading...</h1> : <p>{content}</p>}
        </div>
    )
}
export default FetchData