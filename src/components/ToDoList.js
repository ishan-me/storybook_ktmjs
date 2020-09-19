import React, { useState } from 'react';
import Todo from './Todo';
import Form from './Form';

const TodoList = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const handleSubmit = () => {
    if (value === '') return;
    const newTodo = { id: Math.floor(Math.random() * 20), text: value };
    setTodos([...todos, newTodo]);
    setValue('');
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todolist">
      <Form
        value={value}
        setValue={setValue}
        handleSubmit={handleSubmit}
      />
      {todos.map((todo, index) => (
        <Todo todo={todo} key={todo.id}  index={index} handleDeleteTodo={handleDeleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
