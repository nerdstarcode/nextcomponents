import { Meta, StoryObj } from '@storybook/react'
import MultiStepForm from '.';
import { ThemeProvider } from '../../contexts/ThemeContext';
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

const meta: Meta<any> = {
  title: 'Forms/MultiStep',
  component: MultiStepForm,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story/>
      </ThemeProvider >
    ),
  ]
};

export default meta;
type Story = StoryObj<any>;
export const ButtonPrimary: Story = {
  parameters: {
    docs: {
      description: {
        story: StorieMarkdown.Primary,
      },
    },
  },
};
