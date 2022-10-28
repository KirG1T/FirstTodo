import cl from './TodoItem.module.css';
import pencilIcon from '../../icons/pencil.svg';
import deleteIcon from '../../icons/delete.svg';
import checkIcon from '../../icons/check.svg';

const TodoItem = ({
    todo,
    id,
    isChecked,
    setTodos,
    updatedItem,
    setUpdatedItem,
    deleteTodo,
    toggleTodoCheck,
}) => {
    const isCurrentBeingUpdated = updatedItem === id;

    const handleInputChange = ({ target: { value } }) => {
        if (value.length !== 0) {
            setTodos((todos) =>
                todos.map((todo) => (todo.id === id ? { ...todo, text: value } : todo))
            );
        }
    };

    const renderTodoTextOrInput = () => {
        return isCurrentBeingUpdated ? (
            <input value={todo} onChange={handleInputChange} />
        ) : (
            <p>{todo.length > 30 ? todo.slice(0, 31) + '...' : todo}</p>
        );
    };

    return (
        <>
            <div
                className={
                    isChecked === true
                        ? `${cl.container} + ${cl.inputCheckTrue}`
                        : `${cl.container}`
                }
            >
                <div className={cl.input}>
                    <input type='checkbox' onClick={() => toggleTodoCheck(id)} />
                    {renderTodoTextOrInput()}
                </div>
                <div className={cl.buttons}>
                    {isChecked === false ? (
                        <img
                            src={isCurrentBeingUpdated ? checkIcon : pencilIcon}
                            alt='pencil'
                            onClick={() => setUpdatedItem(isCurrentBeingUpdated ? null : id)}
                        />
                    ) : (
                        <div></div>
                    )}
                    <img src={deleteIcon} alt='delete' onClick={() => deleteTodo(id)} />
                </div>
            </div>
        </>
    );
};

export default TodoItem;
