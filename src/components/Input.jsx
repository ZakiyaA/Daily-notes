import React from 'react'


export const Input = () => {
  return (
    <form className='task'>
        <div className="form-control">
            <label >Task</label>
            <input type="text" placeholder='Add Task'/>
        </div>
        <div className="form-control">
            <label >Day & Time</label>
            <input type="text" placeholder='Add Day & Time'/>
            
        </div>
        <div className="form-check">
            <label for="vehicle1"> Set Reminder</label>
            <input type="checkbox"  name="" value=""/>
        </div>
        <input className="btn submit-btn" type="submit" value="Save Task" />
    </form>
  )
}
