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
import { action } from '@storybook/addon-actions';

const types = ['text', 'password'];

const validation = {
  error: 'error',
  warning: 'warning',
  valid: 'success',
  default: 'default',
};

export const Default = () => {
  return (
    <>
      <h3>Input component: </h3>
      <Textfield
        placeholder={text('placeholder text', 'placeholder')}
        color={color('placeholder color', '#aaa')}
        disabled={boolean('is disabled', false)}
        type={select('input type', types, 'text')}
        border={number('border radius', 0, {
          range: true,
          min: 0,
          max: 16,
          step: 2,
        })}
        validation={radios('validation', validation, 'default')}
        onFocus={action('onFocus')}
        onBlur={action('onBlur')}
      />
    </>
  );
};

export default {
  component: Textfield,
  title: 'base/Input',
  decorators: [withKnobs],
};
