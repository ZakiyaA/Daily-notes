import React from 'react';
import { Button } from './Button';



export const Header = ({onAdd, showTask}) => {
 
  return (
    <header className="header">
        <h1 className="title">Daily Notes</h1>
        <Button color={!showTask ? "green" : "red"} title={!showTask ? "Add" : "Close"} onClick={onAdd} />
    </header>
  )
}
