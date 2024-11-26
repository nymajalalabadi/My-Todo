import { useState } from "react";

const NavBar = ({unCompletedTodos, filterTodos}) => {

    const [state, setState] = useState("All");

    const chnageHandler = (e) => {
        setState(e.target.value);
        filterTodos(e.target.value);
    }

    if(unCompletedTodos() === 0){
        return (
            <div>
                <header>
                    <h2>All Tasks Completed</h2>
                </header>
            </div> );
    }

    return ( 
    <div>
        <header>
            <h2>You have <span>{unCompletedTodos()}</span> tasks todo</h2>
            <select onChange={chnageHandler} value={state}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="UnCompleted">Not Completed</option>
            </select>
        </header>
    </div> );
}
 
export default NavBar;