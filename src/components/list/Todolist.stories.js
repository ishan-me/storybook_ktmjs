import React from 'react';

import TodoList from './Todolist';
import * as TodoStories from './Todo.stories';

export default {
  component: TodoList,
  title: 'TodoList',
  decorators: [(story) => <div style={{ padding: '15px' }}>{story()}</div>],
};

const Template = (args) => <TodoList {...args} />;

export const Default = Template.bind({});
Default.args = {
  todo: [
    {
      ...TodoStories.Default.args.task,
      id: '1',
      heading: 'Need to clean the room',
    },
    {
      ...TodoStories.Default.args.task,
      id: '2',
      heading: 'Water your pots during the day',
    },
    {
      ...TodoStories.Default.args.task,
      id: '3',
      heading: 'Get your dog out for a walk',
    },
  ],
};

export const finishedTask = Template.bind({});
finishedTask.args = {
  todo: [
    ...Default.args.todo.slice(0, 5),
    {
      id: '3',
      heading: 'This is one of the completed todo example',
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
