import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import InputField from './components/InputField/InputField';
import TodoList from './components/TodoList/TodoList';

import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [updatedItem, setUpdatedItem] = useState(null);
    const [disableInputField, setDisableInputField] = useState(false);
    const [emptyInput, setEmptyInput] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        setIsModalOpen(false);
    }

    function showModal(bool) {
        setIsModalOpen(bool);
    }

    return (
        <div className='wrapper'>
            <div className='App'>
                <h1 className='header'>TODO LIST</h1>
                <InputField
                    todos={todos}
                    addTodoHandler={addTodoHandler}
                    disableInputField={disableInputField}
                />
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
                        disableInputField={disableInputField}
                        setDisableInputField={setDisableInputField}
                        emptyInput={emptyInput}
                        setEmptyInput={setEmptyInput}
                        showModal={showModal}
                        isModalOpen={isModalOpen}
                        clearAllTodos={clearAllTodos}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
