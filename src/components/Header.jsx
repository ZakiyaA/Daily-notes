import React from 'react';
import { Button } from './Button';



export const Header = () => {
  const onClick = () => {
    console.log("Clicked");
  }
  return (
    <header className="header">
        <h1 className="title">Task Manager</h1>
        <Button color='green' title='Add' onClick={onClick}/>
    </header>
  )
}
