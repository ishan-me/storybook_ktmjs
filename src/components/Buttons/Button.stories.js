import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
  }, 
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Tertiary = () => <Button variant="tertiary">Tertiary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Warning = () => <Button variant="warning">Warning</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

Primary.storyName = 'Primary Button';
Secondary.storyName = 'Secondary Button';
Tertiary.storyName = 'Tertiary Button';
Success.storyName = 'Success Button';
Warning.storyName = 'Warning Button';
Danger.storyName = 'Danger Button';

// using args in storybook

const Template = (args) => <Button {...args} />;

export const SecondaryVariant = Template.bind({});
SecondaryVariant.args = {
  variant: 'secondary',
  children: 'Secondary Variant Button',
};

// extending and resusing args in storybook

export const FullSecondaryVariant = Template.bind({});
FullSecondaryVariant.args = {
  ...SecondaryVariant.args,
  childern: 'Full Secondary Args',
};
