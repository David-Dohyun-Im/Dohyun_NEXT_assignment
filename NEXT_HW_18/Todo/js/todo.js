const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
const submitBtn = document.querySelector('.submitBtn');

// Load todo items from local storage on page load
document.addEventListener('DOMContentLoaded', loadTodos);

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach((todoText) => {
        createTodoItem(todoText);
    });
}

function createTodoItem(todoText) {
    const li = document.createElement('li');
    li.textContent = todoText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', deleteTodoItem);

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

function addTodoItem(event) {
    event.preventDefault(); // Prevent form submission which refreshes the page

    const todoInput = document.getElementById('content');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        createTodoItem(todoText);
        saveTodoToLocalStorage(todoText);
        todoInput.value = ''; // Clear the input field
    }
}

function saveTodoToLocalStorage(todoText) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todoText);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function deleteTodoItem(event) {
    const item = event.target.parentElement;
    const todoText = item.firstChild.textContent;

    item.remove(); // Remove the item from the DOM
    deleteTodoFromLocalStorage(todoText);
}

function deleteTodoFromLocalStorage(todoText) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter((todo) => todo !== todoText);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Attach event listener to form
todoForm.addEventListener('submit', addTodoItem);
