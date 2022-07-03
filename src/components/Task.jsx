const tasks = [
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
];



const Task = () => {
  return (
      <>
    {tasks.map((task) => (
        <h3>{task.day} </h3>
        ))}
  
      </>
  );
    }

export default Task;


