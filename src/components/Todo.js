/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
import React from 'react';

function Todo({ text }) {
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button type="button" className="complete-btn"><i className="fas fa-check"></i></button>
      <button type="button" className="trash-btn"><i className="fas fa-trash"></i></button>
    </div>
  );
}

export default Todo;
