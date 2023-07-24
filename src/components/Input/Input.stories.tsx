import { Meta, StoryObj } from '@storybook/react'

import { ThemeProvider } from '../../contexts/ThemeContext';
import { InputRoot } from '.';


const meta: Meta<any> = {
  title: 'Input/Input',
  component: InputRoot,
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
        // story: StorieMarkdown.Primary,
      },
    },
  },
};
