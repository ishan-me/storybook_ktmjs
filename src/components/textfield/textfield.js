import React from 'react';
import { TextField } from './textfield.styles.js';

import PropTypes from 'prop-types';

export const Textfield = ({
  type,
  placeholder,
  disabled,
  validation,
  onFocus,
  onBlur,
}) => {
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      validation={validation}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

Textfield.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  validation: PropTypes.string,
};
