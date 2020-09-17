import React from 'react'
import Button from './Button'

export default {
  title: 'Forms/Button',
  component: Button,
  args: {
    children: 'Button'
  }
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Tertiary = () => <Button variant='tertiary'>Tertiary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Warning = () => <Button variant='warning'>Warning</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>