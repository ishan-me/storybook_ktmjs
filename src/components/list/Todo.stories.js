import React from 'react';

import Todo from './Todo';

export default {
  component: Todo,
  title: 'base/Listing',
};

const Template = (args) => <Todo {...args} />;

export const Default = Template.bind({});
Default.args = {
  todo: {
    id: '1',
    heading: 'We are taking a look at components in storybook',
    state: 'TODO_PENDING',
  },
};

export const Completed = Template.bind({});
Completed.args = {
  todo: {
    id: '2',
    ...Default.args.task,
    heading: 'We are taking a look at components in storybook',
    state: 'TODO_COMPLETED',
  },
};
