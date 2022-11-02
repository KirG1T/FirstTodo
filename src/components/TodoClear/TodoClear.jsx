import cl from './TodoClear.module.css';
import Modal from '../Modal/Modal';

const TodoClear = ({
    todos,
    deleteCheckedTodos,
    disableInputField,
    showModal,
    isModalOpen,
    clearAllTodos,
}) => {
    let atLeastIsChecked = 0;

    function countIsChecked() {
        let count = 0;
        todos.forEach((todo) => {
            todo.isChecked && count++;
            todo.isChecked && atLeastIsChecked++;
        });
        return count;
    }

    return (
        <>
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
                <button
                    className={`${!atLeastIsChecked ? cl.deleteBtnDisabled : cl.deleteBtn} ${
                        disableInputField ? cl.deleteBtnBlock : ''
                    }`}
                    onClick={() => deleteCheckedTodos()}
                    disabled={disableInputField}
                >
                    Remove сhecked
                </button>
                {todos.length > 1 ? (
                    <button
                        className={`${disableInputField ? cl.deleteAllDisabled : cl.deleteAll} ${
                            disableInputField ? cl.deleteAllBlock : ''
                        }`}
                        onClick={() => showModal(true)}
                        disabled={disableInputField}
                    >
                        Remove all
                    </button>
                ) : null}
            </div>
            <Modal isModalOpen={isModalOpen} showModal={showModal} clearAllTodos={clearAllTodos} />
        </>
    );
};

export default TodoClear;
