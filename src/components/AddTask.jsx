import {React, useState} from 'react';
import $ from 'jquery'

export const AddTask = ({onAdd}) => {

  const [title, setTitle] = useState("")
  const [day, setDay] = useState("")
  const [reminder, setReminder] = useState(false)  
   

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!title || !day) {
      $(".task").after("<span>You Should Type Your Task</span>");
    }
    // else {
    onAdd({title, day, reminder});
    setTitle("");
    setDay("");
    setReminder(false);
    // }

  }
  return (
    <form className='task' onSubmit = {handleSubmit}>
        <div className="form-control">
            <label >Task </label>
            <input 
            className='title'
            type="text" 
            value={title}
            onChange={(event)=> setTitle(event.target.value)}
            placeholder='Add Task'/>
        </div>
        <div className="form-control">
            <label >Day & Time</label>
            <input type="text" 
            value={day}
            onChange={(event)=> setDay(event.target.value)}
            placeholder='Add Day & Time'/>
            
        </div>
        <div className="form-control form-check">
            <label > Set Reminder</label>
            <input type="checkbox" 
            value={reminder}
            onChange={(event)=> setReminder(event.currentTarget.checked)} 
            />
        </div>
        <input className="btn submit-btn" type="submit"  value="Save Task" />
    </form>
  )
}
