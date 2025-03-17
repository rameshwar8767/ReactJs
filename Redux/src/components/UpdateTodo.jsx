import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../features/todo/todoSlice';

function UpdateTodo({ todo }) {
    const [newText, setNewText] = useState(todo.text);
    const dispatch = useDispatch();

    const updateTodoHandler = (e) => {
        e.preventDefault();
        if (newText.trim() === '') return;
        dispatch(updateTodo({ id: todo.id, newText }));
    };

    return (
        <form onSubmit={updateTodoHandler} className="space-x-3 mt-4">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 text-base outline-none text-gray-100 py-1 px-3 leading-8"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-green-500 py-2 px-6 rounded"
            >
                Update
            </button>
        </form>
    );
}

export default UpdateTodo;
