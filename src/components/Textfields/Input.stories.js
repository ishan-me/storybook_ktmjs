import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const Small = () => (
  <Input size="small" placeholder="small input field" />
);

export const Medium = () => (
  <Input size="medium" placeholder="medium input field" />
);

export const Large = () => (
  <Input size="large" placeholder="large input field" />
);

Small.storyName = 'Small Input';
Medium.storyName = 'Medium Input';
Large.storyName = 'Large Input';
