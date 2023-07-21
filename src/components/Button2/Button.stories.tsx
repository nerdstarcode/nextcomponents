import React, { ElementType } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Button } from './'; // Importe o objeto Button que você criou
import { ButtonProps } from './Compositions/ButtonRoot'; // Importe o objeto Button que você criou
import { ButtonIconsProps } from './Compositions/ButtonIcon'; // Importe o objeto Button que você criou
import { ButtonContentProps } from './Compositions/ButtonContent';
import { AtSign } from 'lucide-react';

interface args {
  button: ButtonProps;
  buttonContent: ButtonContentProps;
  buttonIcon: ButtonIconsProps;
}
const typeButton = { submit: 'submit', button: 'button', reset: 'reset' };
export default {
  title: 'Components/Buttons & Links/Button',
  component: Button.Root,
  args: {
    button: {
      styleType: 'primary',
      widthStyle: 'full'
    },
    buttonContent: {
      children: 'eu sou um botão'
    }
  },

} as Meta<args>;


export const ButtonDefault = (args: args) => {
  const { button, buttonIcon, buttonContent }: args = args;
  button.styleType = 'primary'
  return (
    <Button.Root styleType={button.styleType} {...button}>
      <Button.Content {...buttonContent} />
    </Button.Root>
  )
}

export const ButtonDisable = (args: args) => {
  const { button, buttonIcon, buttonContent }: args = args;
  button.styleType = 'primary'
  return (
    <Button.Root styleType={button.styleType} disabled {...button}>
      <Button.Content {...buttonContent} />
    </Button.Root>
  )
}
export const ButtonWithIcon = (args: args) => {
  const { button, buttonContent, buttonIcon }= args;

  return (
    <Button.Root styleType={button.styleType} className='group' {...button}>
      <Button.Icon icon={AtSign} className='group-hover:text-red-700' />
      <Button.Content {...buttonContent} />
    </Button.Root>
  )
}
export const Primary = (args: args) => {
  const { button, buttonIcon, buttonContent }: args = args;
  button.styleType = 'primary'
  return (
    <Button.Root styleType={button.styleType} {...button}>
      <Button.Content {...buttonContent} />
    </Button.Root>
  )
}
export const Secondary = (args: args) => {
  const { button, buttonIcon, buttonContent }: args = args;
  button.styleType = 'secondary'
  button.widthStyle = 'full'
  return (
    <Button.Root styleType={button.styleType} {...button}>
      <Button.Content {...buttonContent} />
    </Button.Root>
  )
}
export const Default = (args: args) => {
  const { button, buttonIcon, buttonContent }: args = args;
  button.styleType = 'default'
  button.widthStyle = 'full'
  return (
    <Button.Root styleType={button.styleType} {...button}>
      <Button.Content {...buttonContent} />
    </Button.Root>
  )
}
export const Neutral = (args: args) => {
  const { button, buttonIcon, buttonContent }: args = args;
  button.styleType = 'neutral'
  button.widthStyle = 'full'
  return (
    <Button.Root styleType={button.styleType} {...button}>
      <Button.Content {...buttonContent} />
    </Button.Root>
  )
}
export const Info = (args: args) => {
  const { button, buttonIcon, buttonContent }: args = args;
  button.styleType = 'info'
  button.widthStyle = 'full'
  return (
    <Button.Root styleType={button.styleType} {...button}>
      <Button.Content {...buttonContent} />
    </Button.Root>
  )
}
export const Success = (args: args) => {
  const { button, buttonIcon, buttonContent }: args = args;
  button.styleType = 'success'
  button.widthStyle = 'full'
  return (
    <Button.Root styleType={button.styleType} {...button}>
      <Button.Content {...buttonContent} />
    </Button.Root>
  )
}
export const Warning = (args: args) => {
  const { button, buttonIcon, buttonContent }: args = args;
  button.styleType = 'warning'
  button.widthStyle = 'full'
  return (
    <Button.Root styleType={button.styleType} {...button}>
      <Button.Content {...buttonContent} />
    </Button.Root>
  )
}
export const Danger = (args: args) => {
  const { button, buttonIcon, buttonContent }: args = args;
  button.styleType = 'danger'
  button.widthStyle = 'full'
  return (
    <Button.Root styleType={button.styleType} {...button}>
      <Button.Content {...buttonContent} />
    </Button.Root>
  )
}
