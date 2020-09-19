// Example of theming with external CSS frameworks

import React from 'react';
import Button from '@material-ui/core/Button';

export default {
  title: 'Material/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked button' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Template Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'contained',
  color: 'secondary',
  children: 'Template Secondary',
};

// example of console addon

export const Logger = () => (
  <Button
    variant="contained"
    color="primary"
    onClick={() => console.log('Logger clicked')}
  >
    Logger Button
  </Button>
);

// Accessibility addon

export const accessibleButton = () => <button>Accessible button</button>;

export const inaccessibleButton = () => (
  <Button style={{ backgroundColor: 'green', color: 'darkRed' }}>Inaccessible button</Button>
);