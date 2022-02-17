/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';

function Form({
  inputText, setInputText, todos, setTodos, setStatus,
}) {
  const inputTextHandler = ({ target: { value } }) => {
    setInputText(value);
  };

  const submitTodoHandler = (event) => {
    event.preventDefault();

    if (inputText === '') {
      alert('Type something to do');
    } else {
      setTodos([
        ...todos, { completed: false, id: Math.random() * 1000, text: inputText },
      ]);

      setInputText('');
    }
  };

  const statusHandler = ({ target: { value } }) => {
    setStatus(value);
  };

  return (
    <form>

      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />

      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square" />
      </button>

      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>

    </form>
  );
}

export default Form;
