import React from "react"

function MapProduct(props){
    return(
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US",{style:"currency", currency:"USD"})}</p>
            <p>{props.product.description}</p>
        </div>
    )
}

export default MapProduct