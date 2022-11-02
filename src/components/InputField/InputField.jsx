import { useState } from 'react';
import cl from './InputField.module.css';

const InputField = ({ todos, addTodoHandler, disableInputField }) => {
    const [inputValue, setInputValue] = useState('');

    function checkInputData(e) {
        const todoText = e.target.value.replace(
            /[^\da-zA-Zа-яёА-ЯЁа-щА-ЩЬьЮюЯяЇїІіЄєҐґ' :-]/gi,
            ''
        );
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
                className={`${disableInputField ? cl.inputDisabled : cl.input} ${
                    disableInputField ? cl.inputBlock : ''
                } ${(inputValue.length > 0 || todos.length) > 0 && cl.inputWithSymbol}`}
                type='text'
                placeholder='add new todo...'
                maxLength={`${inputValue.length < 26 ? 26 : inputValue.length}`}
                onChange={checkInputData}
                disabled={disableInputField}
            />
            {inputValue.length > 0 || todos.length > 0 ? (
                <button
                    className={`${disableInputField ? cl.addButtonDisabled : cl.addButton} ${
                        disableInputField ? cl.addButtonBlock : ''
                    } ${(inputValue.length > 0 || todos.length) > 0 && cl.addButtonShow}`}
                    type='submit'
                    disabled={disableInputField}
                >
                    +
                </button>
            ) : null}
        </form>
    );
};

export default InputField;
