import { Meta, Story } from '@storybook/react';

import Input, { InputProps } from '../components/Input';

const meta: Meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    onChange: {
      action: 'onChange',
    },
    onBlur: {
      action: 'onBlur',
    },
    onFocus: {
      action: 'onFocus',
    },
  },
};

export default meta;

const Template: Story<InputProps> = args => <Input {...args} />;

export const Main = Template.bind({});
Main.args = {
  label: 'Input Label',
  type: 'text',
  name: 'example',
  value: '',
  valid: true,
  invalidMessage: '',
  touched: false,
};

export const InvalidInput = Template.bind({});
InvalidInput.args = {
  label: 'Input Label',
  type: 'text',
  name: 'example',
  value: '',
  valid: false,
  invalidMessage: 'Invalid message sample',
  touched: true,
};
