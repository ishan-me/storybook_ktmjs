import React from 'react';

import TodoList from './Todolist';
import * as TodoStories from './Todo.stories';

export default {
  component: TodoList,
  title: 'base/TodoList',
  decorators: [
    (story) => (
      <div style={{ padding: '15px', background: 'orange' }}>{story()}</div>
    ),
  ],
};

const Template = (args) => <TodoList {...args} />;

export const Default = Template.bind({});
Default.args = {
  todo: [
    {
      ...TodoStories.Default.args.task,
      id: '3',
      heading: 'Need to clean the room',
    },
    {
      ...TodoStories.Default.args.task,
      id: '4',
      heading: 'Water your pots during the day',
    },
    {
      ...TodoStories.Default.args.task,
      id: '5',
      heading: 'Get your dog out for a walk',
    },
  ],
};

export const finishedTask = Template.bind({});
finishedTask.args = {
  todo: [
    ...Default.args.todo.slice(0, 2),
    {
      id: '7',
      heading: 'This is one of the completed todo example one',
      state: 'TODO_COMPLETED',
    },
    {
      id: '8',
      heading: 'This is one of the completed todo example two',
      state: 'TODO_COMPLETED',
    },
    {
      id: '9',
      heading: 'This is one of the completed todo example three',
      state: 'TODO_COMPLETED',
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  todo: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};
