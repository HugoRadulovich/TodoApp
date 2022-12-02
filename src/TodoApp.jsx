import { useReducer } from "react"
import { TodoAdd } from "./components/TodoAdd"
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

export const TodoApp = () => {
    
    const [todos, dispatch] = useReducer(todoReducer,initialState)
    
    const handleNewTodo = (todo) => {
        console.log({todo})
    }

    return (

        <>
        <h1>TodoApp:10 <small>pendientes: 2</small> </h1>
        <hr />
        

        {/* Todo List */}

        {/* todo map (
            TodoItem...
        ) */}

        {
        todos.map(todo=> 
            <li key= {todo.id}>
                <span>{todo.description}</span>
                <button>Borrar</button>
            </li>
            )
        }

        <ul>
            
        </ul>
        {/* Fin todo list */}

        <div>
            <h4>Agregar To-Do</h4>
            <hr />
            <button>Agregar</button>
        </div>

        <div className="">
            {/* TodoAdd solamente la parte del form  
            - onNewTodo(todo) implementar
                {id: new Date()....} */}
            <TodoAdd/>
        </div>

        </>
    )
}
