import React from "react";
import TodoItem from "./componentsProject/Todoitem";
import todosData from "./todosData";
class AppProject extends React.Component{
    constructor() {
        super()
        this.state = {
            todos: todosData
        }

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
        this.setState(prevState=>{
            const updatedTodos = prevState.todos.map(todo =>{
                if(todo.id === id){
                    todo.completed =!todo.completed
                }
                return todo
            })
            return {
                todo: updatedTodos
            }

        })

    }
    render(){
        const todoComponents = this.state.todos.map(todo =>
            <TodoItem key={todo.id} item={todo} handleChange={this.handleChange}/>)
    //this has to be arrow function, with normal simple function, "this" will be on another function.
        return (
            <div className="todo-list">
                {todoComponents}
            </div>
        )

    }
}


export default AppProject