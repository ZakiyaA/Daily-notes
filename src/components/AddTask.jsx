import {React, useState} from 'react';
import Alert from 'react-bootstrap/Alert';


export const AddTask = ({onAdd}) => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [reminder, setReminder] = useState(false);  
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!title ) {
      alert("please Enter")
    } 
    else {
    onAdd({title, content, reminder});
    setTitle("");
    setContent("");
    setReminder(false);
    
    }
  }




  return (
    <form className='task' onSubmit = {handleSubmit}>
      <div className="form-control">
          <label >Title </label>
          <input 
          className='title'
          type="text" 
          value={title}
          onChange={(event)=> setTitle(event.target.value)}
          // // onFocus={() => document.getElementsByClassName('error')[0].style.visibility = 'hidden'}
          placeholder='Title'/>
      </div>
      <div className="form-control">
          <label >Content</label>
          <textarea type="textare" 
          rows={8} 
          style={{ width: "100%" }}
          value={content}
          onChange={(event)=> setContent(event.target.value)}
          placeholder='Note Content'/>
      </div>
      <div className="form-control form-check">
        <label > Set Reminder</label>
        <input type="checkbox" 
          
        value={reminder}
        onChange={(event)=> setReminder(event.currentTarget.checked)} 
        />   
       </div>
      <input className="btn submit-btn" type="submit"  value="Save Note" />
    </form>
    
  )
}
