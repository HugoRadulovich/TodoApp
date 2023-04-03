import { useEffect, useReducer } from "react"
import { todoReducer } from "../helpers/todoReducer"


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


export const useTodo = () => {
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


    return {
        todos,
        handleNewTodo,
        handleToogleTodo,
        handleRemoveTodo,
        todosCount: todos.length,
        pendigTodosCount: todos.filter(todo=>!todo.done).length,

    }
}
