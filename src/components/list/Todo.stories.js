import React from 'react';

import Todo from './Todo';
import './Todo.css';

export default {
  component: Todo,
  title: 'base/Listing',
};

const Template = (args) => <Todo {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: {
    id: 1,
    heading: 'We are taking a look at components in storybook',
    state: 'TODO_PENDING',
  },
};

export const Completed = Template.bind({});
Completed.args = {
  list: {
    id: 1,
    heading: 'We are taking a look at components in storybook',
    state: 'TODO_COMPLETED',
  },
};
