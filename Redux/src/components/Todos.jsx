import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    
    // Initialize state with an empty string to prevent undefined issues
    const [editId, setEditId] = useState(null);
    const [newText, setNewText] = useState('');

    const handleEditClick = (todo) => {
        setEditId(todo.id);
        setNewText(todo.text || ''); // Ensure newText always has a value
    };

    const handleUpdate = (id) => {
        if (newText.trim() === '') return;
        dispatch(updateTodo({ id, text: newText }));
        setEditId(null);
    };

    return (
        <>
            <div className="text-white text-2xl">Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li key={todo.id} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
                        {editId === todo.id ? (
                            <input
                                type="text"
                                className="bg-gray-700 text-white px-2 py-1 rounded"
                                value={newText} // Always has a value (never undefined)
                                onChange={(e) => setNewText(e.target.value)}
                                placeholder="Edit your todo..."
                            />
                        ) : (
                            <div className="text-white">{todo.text}</div>
                        )}

                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 py-1 px-4 rounded hover:bg-red-600"
                        >
                            Delete
                        </button>

                        {editId === todo.id ? (
                            <button
                                onClick={() => handleUpdate(todo.id)}
                                className="text-white bg-blue-500 py-1 px-4 rounded hover:bg-blue-600"
                            >
                                Save
                            </button>
                        ) : (
                            <button
                                onClick={() => handleEditClick(todo)}
                                className="text-white bg-green-500 py-1 px-4 rounded hover:bg-green-600"
                            >
                                Edit
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
