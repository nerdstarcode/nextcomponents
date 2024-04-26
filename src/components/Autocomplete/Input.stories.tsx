import { AutocompleteInput } from './'
import { Meta, StoryObj } from '@storybook/react'

import { AutoCompleteDTO, DefaultTemplateOptions } from './DTO/autocomplete.dto';

const meta: Meta<AutoCompleteDTO> = {
  title: 'Input/Autocomplete',
  // @ts-ignore
  component: AutocompleteInput,
  args: {
    placeholder: 'Eu sou um input',
  },
  argTypes: {
    position: {
      type: 'string',
      options: ['bottom', 'top'],
      control: {
        type: 'select'
      }
    }
  },
};

export default meta;
type Story = StoryObj<AutoCompleteDTO>;


export const Default: Story = {
  render: (args: DefaultTemplateOptions) =>
    <AutocompleteInput.Templates.Default {...args}>
    </AutocompleteInput.Templates.Default>,
  args: {
    options: [
      {
        "value": 1,
        "label": "Opção 1"
      },
      {
        "value": 2,
        "label": "Opção 2"
      },
      {
        "value": 3,
        "label": "Opção 3"
      },
      {
        "value": 4,
        "label": "Opção 4"
      },
      {
        "value": 1,
        "label": "Opção 1"
      },
      {
        "value": 2,
        "label": "Opção 2"
      },
      {
        "value": 3,
        "label": "Opção 3"
      },
      {
        "value": 4,
        "label": "Opção 4"
      }
    ],
    placeholder: "Autocomplete",
    id: 'Autocomplete',
    position: 'bottom'
  },
  parameters: {
    docs: {
      description: {
        // story: StorieMarkdown.Primary,
      },
    },
  },
}

export const Glassmorphism: Story = {
  render: (args: DefaultTemplateOptions) =>
    <div className='relative bg-default-bg pt-2 pb-48 object-fill bg-no-repeat bg-cover'>
      <AutocompleteInput.Templates.Glassmorphism {...args}>
      </AutocompleteInput.Templates.Glassmorphism>
    </div>,
  args: {
    options: [
      {
        "value": 1,
        "label": "Opção 1"
      },
      {
        "value": 2,
        "label": "Opção 2"
      },
      {
        "value": 3,
        "label": "Opção 3"
      },
      {
        "value": 4,
        "label": "Opção 4"
      },
    ],
    placeholder: "Autocomplete",
    id: 'Autocomplete',
    position: 'bottom'
  },
  parameters: {
    docs: {
      description: {
        // story: StorieMarkdown.Primary,
      },
    },
  },
}