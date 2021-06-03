import React from 'react'
import {useParams} from 'react-router-dom'
function Gallery(){
    const params = useParams();
    console.log( params)
    return(
        <>
           <img src={`https://source.unsplash.com/1600x900/?${params.topic}`}/>
        </>
    )
}
export default Gallery