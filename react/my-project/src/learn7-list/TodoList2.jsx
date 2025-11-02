import { useState } from "react";

const TodoList2 = ()=> {

    const [todos, setTodos] = useState(['List 1', 'List 2']);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = ()=> {
        if(newTodo.trim()){
            setTodos([...todos, newTodo.trim()]);
            setNewTodo('');
        }
    }

    const removeTodo = (index)=> {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    return (
        <div>
            <h1>TODO LIST</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo} <button onClick={()=> removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>

            <input type="text" placeholder="Enter a new list" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />

            <button onClick={addTodo}>
                Add Todo
            </button>
        </div>
    )
}

export default TodoList2;