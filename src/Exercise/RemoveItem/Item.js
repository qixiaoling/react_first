import React from 'react'

const Item = ({id, text, handleClick} ) =>{

    return(

        <div>
            <h1>{text}</h1>
            <button onClick={()=>handleClick(id)}>remove item</button>
        </div>
    )
}
export default Item