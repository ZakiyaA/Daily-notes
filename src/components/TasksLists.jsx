import React from 'react'
import { FaTimes } from "react-icons/fa";

export const TasksLists = ({task, onDelete}) => {

   
  return (
    <div className='add-task'>
      <h3>{task.title} 
      <FaTimes 
        style= {{color: 'red', float:'right', cursor: 'pointer'}} 
        onClick = {() => onDelete(task.id)}/></h3>
      <h3>{task.day}</h3>
    </div>
  );
}
