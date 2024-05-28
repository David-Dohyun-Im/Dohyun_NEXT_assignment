import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [todoToEdit, setTodoToEdit] = useState(null);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const editTodo = (updatedTodo) => {
        setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
        setTodoToEdit(null);
    };

    const completeTodo = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo)));
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="todo-app">
            <h1>What's the Plan for Today?</h1>
            <TodoForm addTodo={addTodo} editTodo={editTodo} todoToEdit={todoToEdit} />
            <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} setTodoToEdit={setTodoToEdit} />
        </div>
    );
};

export default App;
