import React, {useState} from "react";
const ToDoForm = ({addTask}) =>{
    const [userInput, setUserInput] = useState('');
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onchange={handleChange} placeholder="Enter Task...."/>
            <button>Submit</button>
        </form>
    );
};

export default ToDoForm;