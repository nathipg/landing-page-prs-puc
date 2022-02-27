import { Meta, Story } from '@storybook/react';

import SignUpForm, { SignUpFormProps } from '../components/SignUpForm';

const meta: Meta = {
  title: 'SignUpForm',
  component: SignUpForm,
  argTypes: {
    addClientHandler: {
      action: 'addClientHandler',
    },
  },
};

export default meta;

const Template: Story<SignUpFormProps> = args => <SignUpForm {...args} />;

export const Main = Template.bind({});
