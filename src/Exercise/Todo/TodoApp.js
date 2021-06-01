import React, {useState} from 'react'
import todosData from "../../todosData";
import TodoItems from "./TodoItems";

function TodoApp() {
    const [items, setItems] = useState(todosData);

    function handleClick(id) {
        const updatedTodo = items.map((item) => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item;
        })
        setItems(updatedTodo)
    }

    return (
        <div>
            {items.map((item) => {
                return (
                    <TodoItems key={item.id} {...item}
                               handleClick={handleClick}/>
                )
            })}
        </div>
    )


}

export default TodoApp