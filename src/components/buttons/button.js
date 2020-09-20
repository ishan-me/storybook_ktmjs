import React from 'react';
import { node, string, func } from 'prop-types';

import './button.css';

const Button = ({ variant = 'primary', children, href, onClick, ...rest }) => {
  if (!href)
    return (
      <button className={`button ${variant}`} {...rest} onClick={onClick}>
        {children}
      </button>
    );
  return <a href={href}>{children}</a>;
};

Button.propTypes = {
  children: node.isRequired,
  href: string,
  onClick: func,
  icon: string,
};

export default Button;
