import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Header from './components/Header/Header';
import InputField from './components/InputField/InputField';
import TodoList from './components/TodoList/TodoList';

import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [updatedItem, setUpdatedItem] = useState(null);

    function addTodoHandler(text) {
        const newTodo = { id: uuidv4(), text, isChecked: false };
        setTodos([...todos, newTodo]);
    }

    function toggleTodoCheck(id) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isChecked: !todo.isChecked } : { ...todo }
            )
        );
    }

    function deleteTodoHandler(id) {
        const filterTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filterTodos);
    }

    function deleteCheckedTodos() {
        const filterCheckedTodos = todos.filter((todo) => !todo.isChecked);
        setTodos(filterCheckedTodos);
    }

    function clearAllTodos() {
        setTodos([]);
    }

    return (
        <div className='App'>
            <Header />
            <InputField addTodoHandler={addTodoHandler} />
            {todos.length === 0 ? (
                <div className='plug'>You don't have any tasks!</div>
            ) : (
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    updatedItem={updatedItem}
                    setUpdatedItem={setUpdatedItem}
                    deleteTodo={deleteTodoHandler}
                    toggleTodoCheck={toggleTodoCheck}
                    deleteCheckedTodos={deleteCheckedTodos}
                    clearAllTodos={clearAllTodos}
                />
            )}
        </div>
    );
}

export default App;
