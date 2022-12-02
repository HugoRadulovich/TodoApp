import { useForm } from "../hooks/useForm"


export const TodoAdd = () => {

    const {description, onIpuntChange, onResetForm} = useForm({
        description:'',
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(description)
        if(description.length<= 1) return;

    }

        const onNewTodo = () => {
            
        }

    return (
        <form onSubmit={onFormSubmit}>
            <input 
            type="text" 
            className=""
            placeholder="Ingrese tarea a realizar" 
            onChange = {onIpuntChange}
            name="description"
            />
        </form>
    )
}
