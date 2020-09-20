import React from 'react';
import Title from './title';

export default {
  title: 'Typography/Headings',
  component: Title,
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/8Wxje0Kse1SEVZLrw8ZS39/Design-Elements-KTMJS?node-id=0%3A1',
    },
  },
};

export const Headingone = () => (
  <Title variant="Headingone">This is our Heading</Title>
);

export const Headingtwo = () => (
  <Title variant="Headingtwo">This is our Heading</Title>
);

export const Headingthree = () => (
  <Title variant="Headingthree">This is our Heading</Title>
);

export const Headingfour = () => (
  <Title variant="Headingfour">This is our Heading</Title>
);

export const Headingfive = () => (
  <Title variant="Headingfive">This is our Heading</Title>
);

export const Headingsix = () => (
  <Title variant="Headingsix">This is our Heading</Title>
);

export const Small = () => (
  <Title variant="Small">This is our small text</Title>
);

Headingone.storyName = 'H1';
Headingtwo.storyName = 'H2';
Headingthree.storyName = 'H3';
Headingfour.storyName = 'H4';
Headingfive.storyName = 'H5';
Headingsix.storyName = 'H6';
Small.storyName = 'Small';
