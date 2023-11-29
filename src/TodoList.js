import React, {useState} from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () =>{
    const INITIAL_STATE = [
        {id: uuid(), todo_text: 'Take out Trash'},
        {id: uuid(), todo_text: 'Do Dishes'}
    ];
const [todos, setTodos] = useState(INITIAL_STATE);
const addNewTodo = (newTodo) => {
    setTodos(todos=> [...todos, {...newTodo, id: uuid()}])
};

const removeTodo = (todoId) => {
    setTodos(todos=> todos.filter((todo)=>todo.id !== todoId))
}

return (
    <div>
        <div>
            <h2>Todo List:</h2>
            {todos.map(({id, todo_text})=> (
                <Todo
                id={id}
                key={id}
                todo_text={todo_text}
                removeTodo={removeTodo}
                />
            ))}
        </div>
        <h3>Add a Task to Your Todo List!</h3>
        <NewTodoForm addNewTodo={addNewTodo}/>
    </div>
)

}

export default TodoList;