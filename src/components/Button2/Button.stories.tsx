import React, { ElementType } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Button } from './'; // Importe o objeto Button que você criou
import { ButtonProps } from './Compositions/ButtonRoot'; // Importe o objeto Button que você criou
import { ButtonIconsProps } from './Compositions/ButtonIcon'; // Importe o objeto Button que você criou
import { ButtonContentProps } from './Compositions/ButtonContent';
import { AtSign } from 'lucide-react';

interface args {
  button: ButtonProps
  buttonIcon: ButtonIconsProps
  buttonContent: ButtonContentProps
}
const typeButton = { submit: 'submit', button: 'button', reset: 'reset' };
export default {
  title: 'Components/Buttons & Links/Button',
  component: Button.Root,
  args: {
    button: {
      styleType: 'primary'
    },
    buttonContent: {
      children: 'eu sou um botão'
    }
  },
  argTypes: {
    buttonContent: {

    },
    button: {
      onClick: { action: 'clicked' },
      onMouseOver: { action: 'hovered' },
      id: {
        description: 'Id do elemento html',
      },
      styleType: {
        description: 'Estilo do botão',
        options: ['primary', 'secondary'],
        control: {
          type: 'inline-radio',
        }
      },
      children: {
        description: 'Uma forma de adicionar ícones de uma forma mais flexivel',
      },
      widthStyle: {
        description: 'Uma forma de deixar os botões mais editáveis sem precisar de mais divs',
        control: {
          type: 'inline-radio',
        }
      }
    }
  }
} as Meta<args>;


{/* @ts-ignore  */ }
export const Primary: StoryObj<args> = (args: args) => {
  const {button, buttonIcon, buttonContent}:args = args;
  button.styleType = 'primary'
  return (
    <Button.Root styleType={button.styleType} {...button}>
      {/* @ts-ignore  */}
      {buttonIcon?.Icon ? <Button.Icon {...buttonIcon} /> : null}
      <Button.Content {...buttonContent} />
    </Button.Root>
  )
}
{/* @ts-ignore  */ }
export const Secondary: StoryObj<args> = (args: args) => {
  const {button, buttonIcon, buttonContent}:args = args;
  button.styleType = 'secondary'
  return (
    <Button.Root styleType={button.styleType} {...button}>
      {/* @ts-ignore  */}
      {buttonIcon?.Icon ? <Button.Icon {...buttonIcon} /> : null}
      <Button.Content {...buttonContent} />
    </Button.Root>
  )
}