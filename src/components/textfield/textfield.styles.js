import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import { StyledInput } from './styles';
const TextField = styled(
  ({
    id,
    value,
    placeholder,
    type,
    validation,
    onChange,
    disabled,
    borderRadius,
    className
  }) => {
    return (
      <div className={className}>
        <StyledInput
          id={id}
          type={type}
          validation={validation}
          placeholder={placeholder}
          borderRadius={borderRadius}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
    );
  }
)``;
TextField.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  validation: PropTypes.string,
  borderRadius: PropTypes.number,
  type: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
export { TextField };
