import { ButtonIcon, ButtonIconsProps } from './ButtonIcon'
import { Meta, StoryObj } from '@storybook/react'
import { AtSign, Accessibility, Activity, Airplay } from 'lucide-react';
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
const typeButton = { submit: 'submit', button: 'button', reset: 'reset' };
const exampleIcons = { atsign: AtSign, accessibility: Accessibility, activity: Activity, airplay: Airplay };
export default {
  title: 'Button/Composition/Icon',
  component: ButtonIcon,
  args: {
    icon: AtSign,
    id: 'story-button-icon',
    description: 'icon que acompanha o conteudo do botão',
    key: 'story-button-icon',
  },
  argTypes: {
    id: {
      description: 'Id do elemento html',
    },
    icon: {
      description: 'Funcionalidade do botão',
      options: Object.keys(exampleIcons),
      mapping: exampleIcons,
      control: {
        type: 'select',
        labels: Object.values(typeButton)
      },
    },
    className: {
      description: 'Classes que são adicionadas/substituidas pelas padrões do icon para maior flexibilidade'
    },
    description: {
      description: 'Descrição do elemento para acessibilidade'
    },
    key: {
      description: 'Identificação dos elementos no react'
    }
  }
} as Meta<ButtonIconsProps>


export const AtSignIcon: StoryObj<ButtonIconsProps> = {
  parameters: {
    docs: {
      description: {
        story: StorieMarkdown.Primary,
      },
    },
  },
}
export const AccessibilityIcon: StoryObj<ButtonIconsProps> = {
  args:{
    icon: Accessibility
  },
  parameters: {
    docs: {
      description: {
        story: StorieMarkdown.Primary,
      },
    },
  },
}
export const ActivityIcon: StoryObj<ButtonIconsProps> = {
  args:{
    icon: Activity
  },
  parameters: {
    docs: {
      description: {
        story: StorieMarkdown.Primary,
      },
    },
  },
}
export const AirplayIcon: StoryObj<ButtonIconsProps> = {
  args:{
    icon: Airplay
  },
  parameters: {
    docs: {
      description: {
        story: StorieMarkdown.Primary,
      },
    },
  },
}

