import cl from './TodoClear.module.css';

const TodoClear = ({ todos, deleteCheckedTodos, clearAllTodos }) => {
    function countIsChecked() {
        let count = 0;
        todos.forEach((todo) => todo.isChecked && count++);
        return count;
    }

    return (
        <div className={cl.container}>
            {todos.length === 0 ? (
                <p className={cl.status}>
                    <b>{todos.length}</b> tasks done
                </p>
            ) : (
                <div className={cl.status}>
                    <b>{countIsChecked()}</b> of <b>{todos.length}</b> tasks done
                </div>
            )}
            <button className={cl.deleteBtn} onClick={() => deleteCheckedTodos()}>
                Remove сhecked
            </button>
            {todos.length > 4 ? (
                <button className={cl.deleteAll} onClick={() => clearAllTodos()}>
                    Remove all
                </button>
            ) : null}
        </div>
    );
};

export default TodoClear;
