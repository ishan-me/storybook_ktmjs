import React from 'react';
import { Primary } from '../Buttons/Button.stories';
import { Medium } from '../Textfields/Input.stories';

export default {
  title: 'form/Contact',
};

export const ContactForm = () => (
  <form>
    <Medium />
    <Primary />
  </form>
);
