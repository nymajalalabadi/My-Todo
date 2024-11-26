import { useEffect, useRef, useState } from "react";

// const ToDoForm = (props) => {

//     const[input, setInput] = useState('');

//     const changeHandler = (e) => {
//         setInput(e.target.value);
//     }

//     const submitHandler = (e) => {
//         e.preventDefault();

//         if (input.trim() === '') 
//         {
//             alert('Please enter a valid ToDo');
//             return;
//         }

//         const newTodo = {
//             id: Math.floor(Math.random() * 1000),
//            text: input,
//           isCompleted: false
//       };

//         props.setTodos([...props.todos, newTodo]);
//         setInput('');
//     }

//     return ( 
//         <form onSubmit={submitHandler}>
//             <input type="text" value={input} onChange={changeHandler} placeholder="Enter ToDo" />
//             <button type="submit">Add</button>
//         </form>
//      );
// }

const ToDoForm = (props) => {
    
    const[input, setInput] = useState(props.edit ? props.edit.text : "");

    const inputRef = useRef(null);  

    useEffect = (() => {
        inputRef.current.focus();
    }, []);

    const changeHandler = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (input.trim() === '') 
        {
            alert('Please enter a valid ToDo');
            return;
        }

        props.submitTodo(input);
        setInput('');
    }

    return ( 
        <form onSubmit={submitHandler}>
            <div className="formControl">
                <input type="text" ref={inputRef} value={input} onChange={changeHandler} placeholder={props.edit ? "Update Todo" : "Add New Todo"} />
                <button className={`btn ${props.edit ? "updateTodo" : "addTodo"}`} type="submit">{props.edit ? "Update" : "Add"}</button>
            </div>
        </form>
     );
}
 
export default ToDoForm;