const ToDo = ({todo, onComplete, onDelete, onEdit}) => {

    return ( 
        <div className="todo">
            <div className={`todoText ${todo.isCompleted ? "completed" : ""}`}>{todo.text}</div>
            <div>
                <button className="btn" onClick={onEdit}>Edit</button>
                <button className="btn complete" onClick={onComplete}>{todo.isCompleted ? "Completed" : "Not Completed"}</button>
                <button className="btn remove" onClick={onDelete}>Delete</button>
            </div> 
        </div>
     );
}
 
export default ToDo;