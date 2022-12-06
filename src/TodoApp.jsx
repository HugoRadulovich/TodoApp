import { useEffect, useReducer } from "react"
import { TodoAdd } from "./components/TodoAdd"
import { TodoList } from "./components/TodoList"
import { todoReducer } from "./helpers/todoReducer"


const initialState = [
    {
        id: new Date().getTime(),
        description:'Buscar pieda del infinito',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description:'Buscar pieda del alma',
        done: false,
    }
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    
    const [todos, dispatch] = useReducer(todoReducer,initialState, init)
    

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch(action);
    }

    const handleRemoveTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id,
        }

        dispatch(action);
    }


    const handleToogleTodo = (id) => {
        const action = {
            type: '[TODO] Toogle Todo',
            payload: id
        }

        dispatch(action);
    }


    return (

        <>
        <h1>TodoApp:10 <small>pendientes: 2</small> </h1>
        <hr />
        

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


        <div className="">
            {/* TodoAdd solamente la parte del form  
            - onNewTodo(todo) implementar
                {id: new Date()....} */}
            <TodoAdd onNewTodo={handleNewTodo}/>
        </div>

        </>
    )
}
