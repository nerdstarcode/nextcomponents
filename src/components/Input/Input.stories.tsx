import { Input } from './'
import { InputDescribeProps } from './Compositions/InputDescribe'
import { InputRootProps } from './Compositions/InputRoot'
import { InputLabelProps } from './Compositions/InputLabel'
import { InputTextProps } from './Compositions/InputText'
import { Meta, StoryObj } from '@storybook/react'

import { Accessibility, Activity, Airplay, AtSign } from 'lucide-react';
import { z } from 'zod'
const exampleIcons = { none: undefined, atsign: AtSign, accessibility: Accessibility, activity: Activity, airplay: Airplay };
const zodExamples = { 'z.string().min(6).max(300)': z.string().min(6).max(300), 'z.string().email()': z.string().email(), 'z.string().url()': z.string().url(), "z.string().includes('iri')": z.string().includes('iri') };
const typeInput = { submit: 'submit', Input: 'Input', reset: 'reset' };

// @ts-ignore
interface InputPropsStory extends InputDescribeProps, InputRootProps, InputLabelProps, InputTextProps {
  className: string[],
  key: string[],
  id: string[],
  describtion: string[]
}
const meta: Meta<InputPropsStory> = {
  title: 'Input/Input',
  // @ts-ignore
  component: Input,
  args: {
    placeholder: 'Eu sou um input',
    formId: 'form-id',
    elementId: 'element-id',
    zodSchema: z.string().min(6).max(300),
    icon: undefined

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
    zodSchema: {
      description: 'Funcionalidade do botão',
      options: Object.keys(zodExamples),
      mapping: zodExamples,
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;
type Story = StoryObj<InputPropsStory>;


export const InputText: Story = {
  render: (args) =>
    <Input.Root>
      <Input.Label>
        Digita um texto ai
      </Input.Label>
      <Input.Context>
        <Input.Text placeholder={args.placeholder} icon={args.icon} formId={args.formId} id={args.elementId} zodSchema={args.zodSchema} />
        <Input.Describe formId={args.formId} elementId={args.elementId}>
          Minimum of 6 caracters
        </Input.Describe>
      </Input.Context>
    </Input.Root>,
  args: {
    icon: AtSign,
  },
  parameters: {
    docs: {
      description: {
        // story: StorieMarkdown.Primary,
      },
    },
  },
}