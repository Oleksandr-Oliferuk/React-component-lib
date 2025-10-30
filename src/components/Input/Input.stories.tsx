import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['text', 'password'],
    },
    clearable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    label: 'Text',
    type: 'text',
    placeholder: 'Enter text',
    clearable: true,
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    clearable: true,
  },
};

export const NoClear: Story = {
  args: {
    label: 'Text (no clear)',
    type: 'text',
    placeholder: 'Enter text',
    clearable: false,
  },
};
