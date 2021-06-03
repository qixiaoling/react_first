import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import todosData from "../../../todosData";

function Item(){
    //normally here you can API to get data again, but here we just use the local data
    const [name, setName] = useState('default name')
    const [comp, setComp] = useState('default completed status')
    const {orange} = useParams();
    // destructuing the useParams object


    useEffect(()=>{
        const specificName = todosData.find((n)=> n.id === parseInt(orange))
        setName(specificName.text)
        setComp(specificName.completed)
    },[])

    return(
        <>
            <h1>{name}</h1>
            <p>{comp}</p>
            <Link to="/products">back to products</Link>
        </>
    )
}
export default Item