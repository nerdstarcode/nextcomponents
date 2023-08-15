import { InputDescribe, InputDescribeProps } from './InputDescribe'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Input/Composition/Describe',
  component: InputDescribe,
  args: {
    id: 'story-input-describe',
    description: 'Texto que aparece para descrições do input',
    key: 'story-input-describe',
    children: 'Eu sou a descrição do input',
    error: false,

  },
  argTypes: {
    id: {
      description: 'Id do elemento html',
    },
    children:{
      description: 'Conteudo do elemento'
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
} as Meta<InputDescribeProps>


export const Default: StoryObj<InputDescribeProps> = {
  parameters: {
    docs: {
      story: 'Usado para descrição, pode ser manipulado facilmente para erros de zod, caso repasse corretamente as correlações do context form e os ids de inputs ou casos mais manuais passando a propriedade error como true e messageError como o que deseja mostrar'
    },
  },
}
export const Error: StoryObj<InputDescribeProps> = {
  args:{
    error: true,
    errorMessage: 'Mensagem de erro manual'
  },
  parameters: {
    docs: {
      description: {
        story: 'Usado para descrição, pode ser manipulado facilmente para erros de zod, caso repasse corretamente as correlações do context form e os ids de inputs ou casos mais manuais passando a propriedade error como true e errorMessage como o que deseja mostrar'
      },
    },
  },
}

export const SucessManual: StoryObj<InputDescribeProps> = {
  args:{
    error: false,
    children: 'Mensagem de sucesso',
    className: 'text-brand-success dark:text-success'
  },
  parameters: {
    docs: {
      description: {
        story: 'Também pode usar suas próprias validações para fazer algo diferente do padrão, caso queira um caso de sucesso é só passar manualmente o estilo que queira após suas validações'
      },
    },
  },
}