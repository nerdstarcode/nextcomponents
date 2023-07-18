import { Button, ButtonProps } from './index'
import { Meta, StoryObj } from '@storybook/react'
const StorieMarkdown = {
  Primary: `
## Botões Primário, Secundário e de Ação
#### Os estilos de botão da NTT refletem nossa expressão de marca limpa, moderna e simples e vêm em quatro variações, conforme mostrado abaixo.
- Combine a apresentação visual das ações com sua importância para minimizar o risco de possíveis erros e ajudar as pessoas a concluir uma tarefa o mais rápido possível.
- Para garantir a usabilidade para pessoas com deficiência, os botões possuem altura de 44px com raio de canto de 4px, devendo sempre tentar utilizar toda a largura de uma coluna na qual esteja posicionado.

#### Botão primário
Os botões padrão são menos arrojados e podem ser usados ​​para ações menos importantes.
`,
  Secondary: `
#### Botão secundário
Ações secundárias são ações como “Cancelar”, “Voltar” ou “Reiniciar”. São ações alternativas menos importantes, que muitas vezes têm consequências negativas quando usadas acidentalmente. Por exemplo, pressionar “Redefinir” apaga todos os dados inseridos pelo usuário.
`,
}
const typeButton = {submit:'submit', button:'button', reset:'reset'};
export default {
  title: 'Components/Atoms/Button',
  component: Button,
  args: {
    id: 'story-button',
    type: 'submit',
    styleType: 'primary',
    children: 'eu sou um botão',
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
  }
} as Meta<ButtonProps>


export const Primary: StoryObj<ButtonProps> = {
  parameters: {
    docs: {
      description: {
        story: StorieMarkdown.Primary,
      },
    },
  },
}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    styleType: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: StorieMarkdown.Secondary,
      },
    },
  },
}