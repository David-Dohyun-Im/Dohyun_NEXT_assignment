import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, editTodo, todoToEdit }) => {
    const [input, setInput] = useState('');

    useEffect(() => {
        if (todoToEdit) {
            setInput(todoToEdit.text);
        } else {
            setInput('');
        }
    }, [todoToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoToEdit) {
            editTodo({ ...todoToEdit, text: input });
        } else {
            addTodo({
                id: Math.floor(Math.random() * 10000),
                text: input,
                isComplete: false,
            });
        }
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required
            />
            <button type="submit">{todoToEdit ? 'Update' : 'Add'}</button>
        </form>
    );
};

export default TodoForm;
