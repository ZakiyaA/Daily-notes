import { TasksLists } from "./TasksLists";



const Task = ({tasks, onDelete, onToggle, onAdd}) => {
  return (
      <>
    {tasks.map((task) => (
        <TasksLists 
        key={task.id} 
        task={task} 
        onDelete={onDelete} 
        onToggle = {onToggle}
        onAdd ={onAdd}/>
        ))}
      </>
  );
    }

export default Task;


