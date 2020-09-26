import React from 'react';

import Todo from './Todo';

export default function TaskList({ loading, todo, finishedTask }) {
  const events = {
    finishedTask,
  };

  if (loading) {
    return (
      <div>
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (todo.length === 0) {
    return <div> Sorry, you dont have any todos </div>;
  }

  return (
    <div className="list-items">
      {todo.map((x) => (
        <Todo key={x.id} todo={x} {...events} />
      ))}
    </div>
  );
}
