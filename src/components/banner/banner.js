import React from 'react';
import Title from '../title/title';
import Button from '../buttons/button';

import './banner.css'

function HeroBanner({ variant = 'bannerWrapper', ...rest }) {
  return (
    <section className={`${variant}`} {...rest}>
      <Title variant = 'Headingonewhite'>This is a big title of the banner</Title>
      <Button variant="secondary">A Button</Button>
    </section>
  );
}

export default HeroBanner;
