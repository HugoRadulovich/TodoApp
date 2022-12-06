import { useForm } from "../hooks/useForm"


export const TodoAdd = ({onNewTodo}) => {

    const {description, onIpuntChange, onResetForm} = useForm({
        description:'',
    });

    const onFormSubmit = (event) => {
    
        event.preventDefault();
        // console.log(description)
        if(description.length<= 1) return;
        
        
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }

        onNewTodo(newTodo);
        onResetForm();

    }


    return (
        <form onSubmit={onFormSubmit}>
            <input 
            type="text" 
            className=""
            placeholder="Ingrese tarea a realizar" 
            name="description"
            value={description}
            onChange = {onIpuntChange}
            />
            <button>Agregar</button>
        </form>
    )
}
