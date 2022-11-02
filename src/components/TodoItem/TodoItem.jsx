import cl from './TodoItem.module.css';
import pencilIcon from '../../icons/pencilColor.svg';
import pencilIconGrey from '../../icons/pencilGrey.svg';
import deleteIcon from '../../icons/delete.svg';
import checkIcon from '../../icons/check.svg';
import deleteGrey from '../../icons/deleteGrey.svg';

const TodoItem = ({
    todo,
    id,
    isChecked,
    setTodos,
    updatedItem,
    setUpdatedItem,
    deleteTodo,
    toggleTodoCheck,
    disableInputField,
    setDisableInputField,
    emptyInput,
    setEmptyInput,
}) => {
    const isCurrentBeingUpdated = updatedItem === id;

    const handleInputChange = (e) => {
        e.preventDefault();
        const inputText = e.target.value.replace(
            /[^\da-zA-Zа-яёА-ЯЁа-щА-ЩЬьЮюЯяЇїІіЄєҐґ' :-]/gi,
            ''
        );

        setTodos((todos) =>
            todos.map((todo) => (todo.id === id ? { ...todo, text: inputText } : todo))
        );
        inputText === '' ? setEmptyInput(true) : setEmptyInput(false);
    };

    const renderTodoTextOrInput = () => {
        return isCurrentBeingUpdated ? (
            <input
                className={`${emptyInput && cl.inputWarning}`}
                value={todo}
                onChange={handleInputChange}
                maxLength={`${todo.length < 26 ? 26 : todo.length}`}
            />
        ) : (
            <p>{todo}</p>
        );
    };

    return (
        <>
            <div
                className={`${
                    isChecked === true ? `${cl.container} + ${cl.inputCheckTrue}` : cl.container
                }`}
            >
                <div className={cl.input}>
                    <input
                        type='checkbox'
                        onClick={() => toggleTodoCheck(id)}
                        disabled={disableInputField}
                    />
                    {renderTodoTextOrInput()}
                </div>
                <div className={cl.buttons}>
                    {isChecked === false ? (
                        <img
                            src={(isCurrentBeingUpdated
                                ? checkIcon
                                : (!emptyInput && pencilIcon) || pencilIconGrey
                            ).toString()}
                            alt={isCurrentBeingUpdated ? 'check' : 'pencil'}
                            onClick={(e) => {
                                if (!emptyInput) {
                                    setUpdatedItem(isCurrentBeingUpdated ? null : id);
                                    if (e.target.alt === 'pencil') {
                                        setDisableInputField(true);
                                    } else {
                                        setDisableInputField(false);
                                    }
                                }
                            }}
                        />
                    ) : (
                        <div></div>
                    )}

                    {disableInputField ? (
                        <img src={deleteGrey} alt='delete' />
                    ) : (
                        <img
                            src={deleteIcon}
                            alt='delete'
                            onClick={() => {
                                deleteTodo(id);
                                setDisableInputField(false);
                            }}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default TodoItem;
