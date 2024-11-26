import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import NavBar from "./Navbar";

// const ToDoApp = () => {

//     const [todos, setTodos] = useState([]);

//     return ( 
//     <div className="container">
//         <ToDoForm setTodos={setTodos} todos={todos}/>
//         <ToDoList />
//     </div> 
//     );
// }



const ToDoApp = () => {

    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);


    const addTodosHandler = (input) => {

        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            text: input,
            isCompleted: false
        };

        setTodos([...todos, newTodo]);
    }

    const CompleteTodo = (id) => {
        const index = todos.findIndex(i => i.id === id);
        const selectedTodo = {...todos[index]};

        selectedTodo.isCompleted = true;

        const updatedTodos = [...todos];
        updatedTodos[index] = selectedTodo;

        setTodos(updatedTodos);
    }

    const removeTodo = (id) => {
        const updatedTodos = todos.filter(i => i.id !== id);
        setTodos(updatedTodos);
    }

    const UpdateTodo = (id, newValue) => {
        const index = todos.findIndex(i => i.id === id);
        const selectedTodo = {...todos[index]};

        selectedTodo.text = newValue;

        const updatedTodos = [...todos];
        updatedTodos[index] = selectedTodo;

        setTodos(updatedTodos);
    }

    const unCompletedTodos = () => {
        const unCompletedTodos = todos.filter(i => i.isCompleted === false).length;
        return unCompletedTodos;
    }

    const filterTodos = (status) => {
        switch(status) 
        {
            case "All":
                setFilteredTodos(todos);
                break;
            case "Completed":
                setFilteredTodos(todos.filter(i => i.isCompleted === true));
                break;
            case "UnCompleted":
                setFilteredTodos(todos.filter(i => i.isCompleted === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }

    return ( 
    <div className="container">
        <NavBar unCompletedTodos={unCompletedTodos} filterTodos={filterTodos}/>
        <ToDoForm submitTodo={addTodosHandler}/>
        <ToDoList 
        todos={todos} 
        onCompleteHandler={CompleteTodo} 
        onDeleteHandler={removeTodo} 
        onEditHandler={UpdateTodo}/>
    </div> 
    );
}
 
export default ToDoApp;