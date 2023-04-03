import { TodoItem } from "./TodoItem"

TodoItem


export const TodoList = ({todos,  onDeleteTodo, onToogleTodo}) => {
    return (
        <ul className="list-group m-2">
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
