import React from 'react';


function Product(props){
    return(
        <article>
            <span>{props.redLabel}</span>
            <img src={props.imgUrl}/>
            <p>{props.bagName}</p>
            <h4>{props.price}</h4>
        </article>
    )

}
export default Product