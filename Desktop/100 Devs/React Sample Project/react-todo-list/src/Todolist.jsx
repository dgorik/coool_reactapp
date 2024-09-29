import { TodoItem } from "./TodoItem"

export function Todolist({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className=" list">
            {todos.length === 0 && "Add your first todo"}
            {todos.map(todo => {
                return (
                    < TodoItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
}