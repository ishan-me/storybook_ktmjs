import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './button';

const buttonClick = (e) => {
  e.preventDefault();
  alert('Hi, Storybook!');
};

export default {
  title: 'Base/Button',
  component: Button,
  args: {
    children: 'Button',
  },
};

export const Primary = () => (
  <Button onClick={action('clicked')} variant="primary">
    Primary
  </Button>
);

export const functionButton = () => (
  <Button onClick={buttonClick}>Functional Button</Button>
);

export const Secondary = () => (
  <Button onClick={action('clicked')} variant="secondary">
    Secondary
  </Button>
);

export const Tertiary = () => (
  <Button onClick={action('clicked')} variant="tertiary">
    Tertiary
  </Button>
);

export const Success = () => (
  <Button onClick={action('clicked')} variant="success">
    Success
  </Button>
);

export const Warning = () => (
  <Button onClick={action('clicked')} variant="warning">
    Warning
  </Button>
);

export const Danger = () => (
  <Button onClick={action('clicked')} variant="danger">
    Danger
  </Button>
);

export const linkButton = () => <Button href="/route">Linked Button</Button>;

Primary.storyName = 'Primary Button';
Secondary.storyName = 'Secondary Button';
Tertiary.storyName = 'Tertiary Button';
Success.storyName = 'Success Button';
Warning.storyName = 'Warning Button';
Danger.storyName = 'Danger Button';
