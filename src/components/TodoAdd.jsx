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
            {/* <div class="input-group mb-3">
            <input 
            type="text" 
            class="form-control" 
            placeholder="Username" 
          />
            </div> */}
            <div className="d-flex">
            <input 
            type="text" 
            className="form-control"
            placeholder="Ingrese tarea a realizar" 
            name="description"
            value={description}
            onChange = {onIpuntChange}
            />
            <button className='btn btn-light'>Agregar</button>
            </div>
           
        </form>
    )
}
