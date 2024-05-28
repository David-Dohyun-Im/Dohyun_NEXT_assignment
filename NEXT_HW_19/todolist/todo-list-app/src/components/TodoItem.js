import React from 'react';

const TodoItem = ({ todo, completeTodo, removeTodo, setTodoToEdit }) => {
    return (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
            <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
            <div className="icons">
                <button onClick={() => setTodoToEdit(todo)}>Edit</button>
                <button onClick={() => removeTodo(todo.id)}>Delete</button>
            </div>
        </div>
    );
};

export default TodoItem;
