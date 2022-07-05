import { TasksLists } from "./TasksLists";



const Task = ({tasks, onDelete}) => {
  return (
      <>
    {tasks.map((task) => (
        <TasksLists key={task.id} task={task} onDelete={onDelete}/>
        ))}
      </>
  );
    }

export default Task;


