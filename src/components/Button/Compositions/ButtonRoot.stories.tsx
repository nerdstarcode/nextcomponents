import { ButtonRoot, ButtonProps } from './ButtonRoot'
import { Meta, StoryObj } from '@storybook/react'

const typeButton = {submit:'submit', button:'button', reset:'reset'};
export default {
  title: 'Button/Composition/Root',
  component: ButtonRoot,
  args: {
    id: 'story-button',
    type: 'submit',
    styleType: 'primary',
    widthStyle: 'full',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    onMouseOver: { action: 'hovered' },
    id: {
      description: 'Id do elemento html',
    },
    styleType: {
      description: 'Estilo do botão',
      control: {
        type: 'inline-radio',
      }
    },
    type: {
      description: 'Funcionalidade do botão',
      options: Object.keys(typeButton), 
      mapping: typeButton, 
      control: {
        type: 'inline-radio',
        labels: typeButton
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
    },
  },
} as Meta<ButtonProps>


export const Primary: StoryObj<ButtonProps> = {
 
}