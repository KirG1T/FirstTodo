import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TodoClear from '../TodoClear/TodoClear';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({
    todos,
    setTodos,
    updatedItem,
    setUpdatedItem,
    deleteTodo,
    toggleTodoCheck,
    deleteCheckedTodos,
    disableInputField,
    setDisableInputField,
    emptyInput,
    setEmptyInput,
    showModal,
    clearAllTodos,
    isModalOpen,
}) => {
    return (
        <>
            <TransitionGroup>
                {todos.map((todo) => (
                    <CSSTransition key={todo.id} timeout={400} classNames='todo'>
                        <TodoItem
                            todo={todo.text}
                            id={todo.id}
                            isChecked={todo.isChecked}
                            setTodos={setTodos}
                            updatedItem={updatedItem}
                            setUpdatedItem={setUpdatedItem}
                            deleteTodo={deleteTodo}
                            toggleTodoCheck={toggleTodoCheck}
                            disableInputField={disableInputField}
                            setDisableInputField={setDisableInputField}
                            emptyInput={emptyInput}
                            setEmptyInput={setEmptyInput}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
            <TodoClear
                todos={todos}
                deleteCheckedTodos={deleteCheckedTodos}
                disableInputField={disableInputField}
                showModal={showModal}
                isModalOpen={isModalOpen}
                clearAllTodos={clearAllTodos}
            />
        </>
    );
};

export default TodoList;
