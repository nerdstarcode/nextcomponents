import { Button } from './'
import { Meta, StoryObj } from '@storybook/react'
import { ButtonContentProps } from './Compositions/ButtonContent';
import { ButtonIconsProps } from './Compositions/ButtonIcon';
import { ButtonProps, ButtonPropsSchema } from './Compositions/ButtonRoot';
import { Accessibility, Activity, Airplay, AtSign } from 'lucide-react';
import { ButtonToggleRootProps, ButtonToggleRootPropsSchema } from './Compositions/ButtonToggleRoot';

import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const exampleIcons = { atsign: AtSign, accessibility: Accessibility, activity: Activity, airplay: Airplay };
const typeButton = { submit: 'submit', button: 'button', reset: 'reset' };
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
// @ts-ignore
interface ButtonPropsStory extends ButtonContentProps, ButtonProps, ButtonIconsProps, ButtonToggleRootProps {
  className: string[],
  key: string[],
  id: string[],
  describtion: string[]
}
const meta: Meta<ButtonPropsStory> = {
  title: 'Button/Button',
  // @ts-ignore
  component: Button,
  args: {
    children: 'Eu sou um botão',
    name: 'button',
  },
  argTypes: {
    icon: {
      description: 'Funcionalidade do botão',
      options: Object.keys(exampleIcons),
      mapping: exampleIcons,
      control: {
        type: 'select',
      },
    },
    styleType: {
      description: 'Funcionalidade do botão',
      options: ['primary', 'secondary', 'neutral', 'info', 'danger', 'default', 'success', 'warning'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonPropsStory>;
ButtonPropsSchema
export const ButtonPrimary: Story = {
  render: (args) =>
    <Button.Root id='root-button' {...ButtonPropsSchema.parse(args) as ButtonProps} >
      {args?.icon && <Button.Icon id='icon-button' icon={args?.icon} className={args.className?.[2]} />}
      <Button.Content id='content-button' children={args.children} className={args.className?.[1]} />
    </Button.Root>,
  args: {
    styleType: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: StorieMarkdown.Primary,
      },
    },
  },
};
export const ButtonSecondary: Story = {
  render: (args) =>
    <Button.Root {...ButtonPropsSchema.parse(args) as ButtonProps} >
      {args?.icon && <Button.Icon icon={args?.icon} className={args.className?.[2]} />}
      <Button.Content children={args.children} className={args.className?.[1]} />
    </Button.Root>,
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
};


export const ButtonWithIcon: Story = {
  render: (args) =>
    <Button.Root {...ButtonPropsSchema.parse(args) as ButtonProps} >
      {args?.icon && <Button.Icon icon={args?.icon} className={args.className?.[2]} />}
      <Button.Content children={args.children} className={args.className?.[1]} />
    </Button.Root>,
  args: {
    icon: AtSign,
  },
};

export const ButtonToggle: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(getComputedStyle(canvas.getByTestId('root-button')).backgroundColor).toBe('rgba(0, 0, 0, 0)');
    expect(getComputedStyle(canvas.getByTestId('root-button')).color).toBe('rgb(69, 85, 101)');
    await userEvent.click(canvas.getByTestId('root-button'));
    setTimeout(async() => {
      expect(getComputedStyle(canvas.getByTestId('root-button')).backgroundColor).toBe('rgb(49, 54, 57)');
      expect(getComputedStyle(canvas.getByTestId('root-button')).color).toBe('rgb(255, 255, 255)');
      await userEvent.click(canvas.getByTestId('root-button'));
    }, 500);
    setTimeout(async() => {
      await userEvent.hover(canvas.getByTestId('root-button'));
    }, 500);
    console.dir(canvas)
   
    // userEvent.hover(buttonElement);
    // Obtém as propriedades CSS computadas após o hover

    // Verifica as propriedades CSS esperadas após o hover

  },
  render: (args) =>
    <Button.ToggleRoot data-testid='root-button' id='root-button' {...ButtonToggleRootPropsSchema.parse(args) as ButtonToggleRootProps} >
      {args?.icon && <Button.Icon id='icon-button' icon={args?.icon} className={args.className?.[2]} />}
      <Button.Content id='content-button' name={args.name} children={args.children} className={args.className?.[1]} />
    </Button.ToggleRoot>,
  args: {
  },
  argTypes: {
    styleType: {
      options: [undefined],
      control: {
        type: null
      }
    }
  }

};
