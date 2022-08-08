import React from 'react';
import { GoTrashcan } from 'react-icons/go';
export const TasksLists = ({task, onDelete, onToggle}) => {
 
  return (
    
 
    <div className={`add-task ${task.reminder ? 'reminder' : ""}`} onDoubleClick= {() => onToggle(task.id) }>
      <h3>{task.title} <GoTrashcan 
          style= {{color: 'red', float:'right', cursor: 'pointer'}} 
          onClick = {() => onDelete(task.id)}/>
        </h3>
      <p>{task.content}</p>
    </div>
    
   

   
  );

}
