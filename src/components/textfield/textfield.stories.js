import React from 'react';
import { Textfield } from './textfield';

import {
  withKnobs,
  select,
  boolean,
  text,
  number,
  radios,
  color,
} from '@storybook/addon-knobs';

const types = ['text', 'password'];

const validation = {
  error: 'error',
  warning: 'warning',
  success: 'success',
  default: 'default',
};

export const Default = () => {
  return (
    <>
      <h3>Input component: </h3>
      <Textfield
        placeholder={text('placeholder text', 'placeholder')}
        placeholderColor={color('placeholder color', '#aaa')}
        disabled={boolean('is disabled', false)}
        type={select('input type', types, 'text')}
        border={number('border radius', 0, { range: true, min: 0, max: 15, step: 2 })}
        validation={radios('validation', validation, 'default')}
      />
    </>
  );
};

export default {
  component: Textfield,
  title: 'base/Input',
  decorators: [withKnobs],
};
