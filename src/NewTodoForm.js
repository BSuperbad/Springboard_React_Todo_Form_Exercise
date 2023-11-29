import React, {useState} from "react";

const NewTodoForm = ({addNewTodo}) => {
    const INITIAL_STATE = {
        todo_text: "",
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ( {
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewTodo({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo_text">Add New Todo: </label>
            <input 
            id="todo_text"
            type="text" 
            name="todo_text"
            placeholder="Enter a Task"
            value={formData.todo_text}
            onChange={handleChange}
            />
            <button type="submit">Add Task to Todo List</button>
        </form>
    )
}

export default NewTodoForm;