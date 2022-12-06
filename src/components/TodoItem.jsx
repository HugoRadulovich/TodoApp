
export const TodoItem = ({todo,onDeleteTodo,onToogleTodo }) => {
    return (
        <li key= {todo.id}>
                <span onClick={() => onToogleTodo(todo.id)}
                >{todo.description}</span>
                <button onClick={() => onDeleteTodo(todo.id)}>Borrar</button>
            </li>
    )
}
