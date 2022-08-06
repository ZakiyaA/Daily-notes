import { TasksLists } from "./TasksLists";



const Task = ({tasks, onDelete, onToggle}) => {
  return (
      <>
    {tasks.map((task) => (
        <TasksLists 
        key={task.id} 
        task={task} 
        onDelete={onDelete} 
        onToggle = {onToggle}/>
        ))}
      </>
  );
    }

export default Task;


