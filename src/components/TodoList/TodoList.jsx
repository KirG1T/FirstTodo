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
    clearAllTodos,
}) => {
    return (
        <>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo.text}
                    id={todo.id}
                    isChecked={todo.isChecked}
                    setTodos={setTodos}
                    updatedItem={updatedItem}
                    setUpdatedItem={setUpdatedItem}
                    deleteTodo={deleteTodo}
                    toggleTodoCheck={toggleTodoCheck}
                />
            ))}
            <TodoClear
                todos={todos}
                deleteCheckedTodos={deleteCheckedTodos}
                clearAllTodos={clearAllTodos}
            />
        </>
    );
};

export default TodoList;
