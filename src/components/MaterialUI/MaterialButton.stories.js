// Example of theming with external CSS frameworks

import React from 'react';
import Button from '@material-ui/core/Button';

export default {
  title: 'Material/Button',
  component: Button,
};

export const Primary = () => (
  <Button variant="contained" color="primary">
    Primary
  </Button>
);

export const Secondary = () => (
  <Button variant="contained" color="secondary">
    Secondary
  </Button>
);
