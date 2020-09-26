import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import { Text, Error, StyledInput } from './styles';
const TextField = styled(
  ({
    id,
    name,
    value,
    placeholder,
    hasError,
    isTouched,
    hintText,
    type,
    border,
    onChange,
    disabled,
    className
  }) => {
    const error = isTouched && hasError;
    return (
      <div className={className}>
        <StyledInput
          id={id}
          name={name}
          border={border}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          error={error}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
        {hintText && <Text>{hintText}</Text>}
        {error && <Error>{error}</Error>}
      </div>
    );
  }
)``;
TextField.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  border: PropTypes.string,
  error: PropTypes.string,
  hintText: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
export { TextField };
