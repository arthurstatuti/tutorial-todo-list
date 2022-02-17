/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Todo from './Todo';

function TodoList({ todos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (<Todo key={todo.id} text={todo.text} />))}
      </ul>
    </div>
  );
}

export default TodoList;
