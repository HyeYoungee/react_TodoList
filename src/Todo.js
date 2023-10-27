import React from "react";
import Form from 'react-bootstrap/Form';

const Todo = ({data}) => {
  return(
    <div>
      <Form.Check
        type="checkbox"
        id={`todo-${data.id}`}
        label={data.text}
      />
    </div>
  )
}

export default Todo;