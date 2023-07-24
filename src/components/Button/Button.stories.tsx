import { Button } from './'
import { Meta, StoryObj } from '@storybook/react'
import { ButtonContentProps } from './Compositions/ButtonContent';
import { ButtonIconsProps } from './Compositions/ButtonIcon';
import { ButtonProps, ButtonPropsSchema } from './Compositions/ButtonRoot';
import { Accessibility, Activity, Airplay, AtSign } from 'lucide-react';
import { ButtonToggleRootProps, ButtonToggleRootPropsSchema } from './Compositions/ButtonToggleRoot';
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
  component: Button.Root,
  subcomponents: {
    // @ts-ignore
    'Button.Icon': Button.Icon,
    // @ts-ignore
    'Button.Content': Button.Content,
    // @ts-ignore
    'Button.ToggleRoot': Button.ToggleRoot,
  },
  args: {
    children: 'Eu sou um botão',
    name: 'button'
  },
  argTypes: {
    icon: {
      description: 'Funcionalidade do botão',
      options: Object.keys(exampleIcons),
      mapping: exampleIcons,
      control: {
        type: 'select',
        labels: Object.values(typeButton)
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonPropsStory>;
ButtonPropsSchema
export const ButtonPrimary: Story = {
  render: (args) =>
    <Button.Root {...ButtonPropsSchema.parse(args) as ButtonProps} >
      {args?.icon && <Button.Icon icon={args?.icon} className={args.className?.[2]} />}
      <Button.Content children={args.children} className={args.className?.[1]} />
    </Button.Root>,
  args: {
    styleType: 'primary',
    icon: AtSign,
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
    icon: AtSign,
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
  render: (args) =>
    <Button.ToggleRoot {...ButtonToggleRootPropsSchema.parse(args) as ButtonToggleRootProps} >
      {args?.icon && <Button.Icon icon={args?.icon} className={args.className?.[2]} />}
      <Button.Content name={args.name} children={args.children} className={args.className?.[1]} />
    </Button.ToggleRoot>,
  args: {
    icon: AtSign,
  },
};
