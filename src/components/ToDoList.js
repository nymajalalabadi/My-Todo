import ToDo from "./ToDo";
import { useState } from 'react';
import ToDoForm from "./ToDoForm";

const ToDoList = ({todos, onCompleteHandler, onDeleteHandler, onEditHandler}) => {

    const[edit, setEdit] = useState({id:null, Text:"", isCompleted:false});

    const onEditTodo = (newValue) => {
        onEditHandler(edit.id, newValue);
        setEdit({id:null, Text:"", isCompleted:false});
    };

    const renderTodos = () => {
        if(todos.length === 0)
        {
            return <p>Add Some Todos</p>
        }

        return todos.map((todo) => {
            return (
                <ToDo 
                key={todo.id}
                todo={todo} 
                onComplete={() => onCompleteHandler(todo.id)} 
                onDelete={() => onDeleteHandler(todo.id)} 
                onEdit={() => setEdit(todo)}/>
            );
        });
    }

    return ( 
        <div>
            {edit.id ? <ToDoForm submitTodo={onEditTodo} edit={edit} /> : renderTodos()}
        </div>
     );
}
 
export default ToDoList;