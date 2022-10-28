import { useState } from 'react';
import cl from './InputField.module.css';

const InputField = ({ addTodoHandler }) => {
    const [inputValue, setInputValue] = useState('');

    function checkInputData(e) {
        const todoText = e.target.value.replace(/[^\da-zA-Zа-яёА-ЯЁа-щА-ЩЬьЮюЯяЇїІіЄєҐґ' ]/gi, '');
        setInputValue(todoText);
    }

    function addNewTodos(e) {
        e.preventDefault();
        if (inputValue !== '' && inputValue.match(/[^ ]/)) {
            addTodoHandler(inputValue.trim());
        }
        setInputValue('');
    }

    return (
        <form className={cl.container} onSubmit={addNewTodos}>
            <input
                value={inputValue}
                className={cl.input}
                type='text'
                placeholder='add todo...'
                onChange={checkInputData}
            />
            <button className={cl.addButton} type='submit'>
                +
            </button>
        </form>
    );
};

export default InputField;
