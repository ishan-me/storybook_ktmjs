import React, { useState } from 'react';

const Todo = ({ todo, index, handleDeleteTodo }) => {
  const [line, setLine] = useState(false);

  const cutIt = () => {
    setLine(true);
  };

  return (
    <div key={todo.id} className="todo">
      <li style={{ textDecoration: line ? 'line-through' : 'none' }}>
        {index + 1}. {todo.text}
      </li>
      <span onClick={() => handleDeleteTodo(todo.id)} className="todo-delete">
        x
      </span>
      <span onClick={cutIt}>Cut It</span>
    </div>
  );
};

export default Todo;
