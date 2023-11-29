import React from "react";

const Todo = ({id, todo_text, removeTodo}) => {
    const handleRemove = () =>{
        removeTodo(id)
    }
    return (
        <div>
            <ul>
                <li>{todo_text} <button onClick={handleRemove}>X</button></li>
                
            </ul>

        </div>
    )

}

export default Todo;