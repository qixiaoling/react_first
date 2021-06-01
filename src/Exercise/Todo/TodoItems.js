import React, {useState} from 'react'

const TodoItems = ({text, completed} ) =>{

    return(

        <div>
            <label htmlFor={{text}}>
            <input type="checkbox"
                   id={{text}}
                   name={{text}}
                   checked={completed}
            />
                {text}
            </label>
        </div>
    )
}
export default TodoItems