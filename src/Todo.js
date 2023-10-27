import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Todo = ({data, deleteTodo}) => {

  const [ischecked, setIschecked] = useState(false);

  let className = 'form-check-label';
  let deco = {};
  if(ischecked){
    className += 'text-muted';
    deco = {textDecoration: 'line-through'}
  }

  const handleCheckboxClick = (e) => {
    setIschecked(!ischecked);
    console.log(ischecked);
  }

  const todoDelete = () =>{
    deleteTodo(data.id);
  }

  return(

    <div className="form-check d-flex align-items-center gap-2">
      <input className="form-check-input" type="checkbox" value="" id={`todo${data.id}`} onChange={handleCheckboxClick}/>
      <label className={className} style={deco} htmlFor={`todo${data.id}`}>
        {data.text}
      </label>
      <button type="button" className="btn btn-danger btn-sm" onClick={todoDelete}>Delete</button>
    </div>
    
  )
}

export default Todo;