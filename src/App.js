import './App.css';
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm"
import data from "./data.json";
import { useState } from 'react';

function App() {
  const [toDoList , setToDOList]=useState(data);
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id)?{...task, complete: !task.complete}:{...task};
    });
    setToDOList(mapped);
  }
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDOList(filtered);
  }
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, {id:toDoList.length+1,task:userInput,complete:false}];
    setToDOList(copy);
  }
  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
