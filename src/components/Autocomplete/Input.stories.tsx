import { Autocomplete, AutocompleteInput } from './'
// import { InputDescribeProps } from './Compositions/InputDescribe'
// import { InputRootProps } from './Compositions/InputRoot'
// import { InputLabelProps } from './Compositions/InputLabel'
// import { InputTextProps } from './Compositions/InputText'
import { Meta, StoryObj } from '@storybook/react'

import { Accessibility, Activity, Airplay, AtSign } from 'lucide-react';
import { z } from 'zod'
import { AutoCompleteDTO, DefaultTemplateOptions } from './DTO/autocomplete.dto';
const exampleIcons = { none: undefined, atsign: AtSign, accessibility: Accessibility, activity: Activity, airplay: Airplay };
const zodExamples = { 'z.string().min(6).max(300)': z.string().min(6).max(300), 'z.string().email()': z.string().email(), 'z.string().url()': z.string().url(), "z.string().includes('iri')": z.string().includes('iri') };
const typeInput = { submit: 'submit', Input: 'Input', reset: 'reset' };

// @ts-ignore
interface InputPropsStory {
}
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