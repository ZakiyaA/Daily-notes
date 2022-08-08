import React from "react";
import { useState, useEffect } from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { AddTask } from "./components/AddTask.jsx";
import Task from "./components/Task.jsx";
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]); 
  const [showTask, setShowTask] = useState(false);
  
  
  const addTAsk = (task) => {
    axios.post('http://localhost:3000/tasks', task )
    .then((response) => {setTasks([response.data, ...tasks]);})
    .catch((error) => {console.log(error);
  })
  }

  const Delete = (id) => {
    axios.delete(`http://localhost:3000/tasks/${id}/`)
    .then(resp => {console.log(resp.data)})
    .catch(error => {console.log(error);});
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

// use axios for data feaching...
  useEffect(() => {
    axios
      .get('http://localhost:3000/tasks')
      .then(response => {
        console.log(response.data)
        setTasks(response.data)
      })
  }, [])

  return (
    <div className="App">
       <div className="container">
     <Header onAdd={() => setShowTask(!showTask)}
     showTask={showTask}/>
     {showTask && <AddTask  onAdd= {addTAsk}/>}
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
