import React, {useState} from 'react'

const TodoItems = ({id, text, completed, handleClick} ) =>{

    return(

        <div>
            <label htmlFor={{text}}>
            <input type="checkbox"
                   id={{text}}
                   name={{text}}
                   checked={completed}
                   onClick={()=>{handleClick(id)}}
            />
                {text}
            </label>
        </div>
    )
}
export default TodoItems