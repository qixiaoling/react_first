import React from 'react'

function Product({name, price, description}){
    return(
        <>
            <h3>{name}</h3>
            <h3>${price}</h3>
            <p>{description}</p>
        </>
    )
}
export default Product