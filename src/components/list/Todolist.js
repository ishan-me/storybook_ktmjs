import React from 'react';

import Todo from './Todo';

export default function TaskList({ loading, todo, finishedTask }) {
  const events = {
    finishedTask,
  };

  if (loading) {
    return <div>loading</div>;
  }

  if (todo.length === 0) {
    return <div> you dont have any todo yet</div>;
  }

  return (
    <div className="list-items">
      {todo.map((t) => (
        <Todo key={t.id} todo={todo} {...events} />
      ))}
    </div>
  );
}
