import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, completeTodo, removeTodo, setTodoToEdit }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    setTodoToEdit={setTodoToEdit}
                />
            ))}
        </div>
    );
};

export default TodoList;
