/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
import React from 'react';

function Todo({
  text, todos, setTodos, thisTodo,
}) {
  const deleteTodoHandler = () => {
    setTodos(todos.filter((stateTodo) => stateTodo.id !== thisTodo.id));
  };

  const completeTodoHandler = () => {
    setTodos(todos.map((stateTodo) => {
      if (stateTodo.id === thisTodo.id) {
        return (
          { ...stateTodo, completed: !stateTodo.completed }
        );
      }
      return stateTodo;
    }));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${thisTodo.completed ? 'completed' : ''}`}>{text}</li>
      <button onClick={completeTodoHandler} type="button" className="complete-btn"><i className="fas fa-check"></i></button>
      <button onClick={deleteTodoHandler} type="button" className="trash-btn"><i className="fas fa-trash"></i></button>
    </div>
  );
}

export default Todo;
