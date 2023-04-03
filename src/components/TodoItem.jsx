
export const TodoItem = ({todo,onDeleteTodo,onToogleTodo }) => {


  const handleCheck = () => {
    const name = document.getElementById("flexCheckDefault");
   if (name.checked) {
    
   }
  }


    return (
        <li className="list-group-item d-flex justify-content-between">
                <span onClick={() => onToogleTodo(todo.id)} className={`aling-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
                >{todo.description}</span>
            <div >
                {/* <input 
                className="form-check-input m-2 "
                type="checkbox"
                /> */}
                    <input 
                    className="form-check-input activado" 
                    type="checkbox" 
                    value="" 
                    id="flexCheckDefault"
                    onClick={handleCheck}/>
                   
               
                <button onClick={() => onDeleteTodo(todo.id)} className="btn btn-danger">Borrar</button>
               </div>
            </li>
    )
}
