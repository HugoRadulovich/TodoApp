import { TodoItem } from "./TodoItem"

TodoItem


export const TodoList = ({todos,  onDeleteTodo, onToogleTodo}) => {
    return (
        <ul>
            {
            todos.map(todo=> 
            <TodoItem 
            key={todo.id} 
            todo={todo}
            onDeleteTodo = {onDeleteTodo}
            onToogleTodo= {onToogleTodo} />
            )
        }
        </ul>
    )
}
