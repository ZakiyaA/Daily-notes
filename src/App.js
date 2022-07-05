import React from "react";
import { useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Input } from "./components/Input.jsx";
import Task from "./components/Task.jsx";




function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        title: 'Doctor Appoinment',
        day: 'August 12 @ 2:30pm',
        remider: true,
    },
    {
        id: 2,
        title: '30days coding ',
        day: 'July 12 @ 9:30pm',
        remider: true,
    }
  ]); 

  const Delete = (id) => {
    
    setTasks(tasks.filter((task) =>  task.id !== id));
    
}

  return (
    <div className="App">
       <div className="container">
     <Header />
     <Input />
     <Footer />
     <Task tasks={tasks} onDelete = {Delete}/>
    </div>
    </div>
  );
}

export default App;
