import { useState } from "react";

const TodoList = ()=> {

    const [todos, setTodos] = useState(['Learn React', 'Build a project']);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = ()=> {
        if(newTodo.trim()){
            setTodos([...todos, newTodo.trim()]);
            setNewTodo('');
        }
    };

    const removeTodo = (index)=> {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    return (
        <div className="bg-linear-to-b from-gray-400 via-cyan-200 to-blue-400 h-lg border-2 border-rose-950 p-4 rounded m-4">
            <h1 className="text-lg text-center font-mono text-red-500 pt-3 pb-2 decoration-dotted underline hover:bg-gray-700 hover:text-white hover:border-2 rounded-lg transform transition-all">TODO LIST</h1>
            <ul className="list-decimal m-4 p-2">
                {todos.map((todo, index) => (
                    <li key={index}>{todo} 
                    <button onClick={()=> removeTodo(index)} className="pl-6 text-sm font-bold text-red-700 cursor-pointer"> - Remove</button>
                    </li>
                ))}
            </ul>
            <input type="text" value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new List" className="border mr-3 mb-2 w-full pl-2 rounded"/>
            <button onClick={addTodo} className="border border-blue-950 rounded p-2 w-full text-gray-950 hover:scale-80 transform transition-all cursor-pointer">Add Todo</button>
        </div>
    );
}

export default TodoList;
