import React, {useState} from 'react'
import todosData from "../../todosData";
import TodoItems from "./TodoItems";

function TodoApp(){
    const [items, setItems] = useState(todosData);

    return(
        <div>
            {items.map((item)=>{
                return(
                    <TodoItems key={item.id} {...item}/>
                )
            })}
        </div>
    )




}
export default TodoApp