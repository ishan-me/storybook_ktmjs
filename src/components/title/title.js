import React from 'react';
import './title.css';

function Title({ variant = 'bigHeading', children, ...rest }) {
  return (
    <h1 className={`${variant}`} {...rest}>
      {children}
    </h1>
  );
}

export default Title;
