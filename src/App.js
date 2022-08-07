import React from "react";
import { useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { AddTask } from "./components/AddTask.jsx";
import Task from "./components/Task.jsx";




function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        title: 'Doctor Appoinment',
        day: 'August 12 @ 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        title: '30days coding ',
        day: 'July 12 @ 9:30pm',
        reminder: true,
    },
    {
        id: 3,
        title: 'Laundary ',
        day: 'Sundays  @ 10:30pm',
        reminder: false,
    }
  ]); 

  const addTAsk = (task) => {
    
    const id = Math.floor(Math.random() * 100) + 1;
    const newTask = { id, ...task}
    setTasks([...tasks, newTask]);
    console.log(task);
  }

  const Delete = (id) => {
    setTasks(
      tasks.filter((task) =>  
      task.id !== id));
    
}

  const Reminder = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? { ...task, reminder: 
        !task.reminder } : task
      )
    )
  }

  return (
    <div className="App">
       <div className="container">
     <Header />
     <AddTask  onAdd= {addTAsk}/>
     {tasks.length > 0 ? (
     <Task tasks={tasks} onDelete = {Delete} onToggle = {Reminder} onAdd= {addTAsk}/>
     ) : (
       'No tasks to show'
       )}
     <Footer />
    </div>
    </div>
  );
}

export default App;
