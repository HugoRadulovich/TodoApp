import { TodoAdd } from "./components/TodoAdd"
import { TodoList } from "./components/TodoList"
import { useTodo } from "./hooks/useTodo";





export const TodoApp = () => {
    
    const {todos,handleNewTodo,handleRemoveTodo,handleToogleTodo,todosCount,pendigTodosCount} = useTodo();


    return (

        <>
        <h1 className="d-flex align-items-center justify-content-center">TodoApp:{todosCount} <small>pendientes: {pendigTodosCount}</small> </h1>
        <hr />
        
        <div className="m-2">
            {/* TodoAdd solamente la parte del form  
            - onNewTodo(todo) implementar
                {id: new Date()....} */}
            <TodoAdd onNewTodo={handleNewTodo}/>
        </div>

        {/* Todo List */}
        <TodoList 
        todos={todos}
        onDeleteTodo = {handleRemoveTodo}
        onToogleTodo = {handleToogleTodo}
        />
        
        {/* todo map (
            TodoItem...
        ) */}

        

        {/* Fin todo list */}


        

        </>
    )
}
