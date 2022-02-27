import { Meta, Story } from '@storybook/react';

import Toast, { ToastProps } from '../components/Toast';

const meta: Meta = {
  title: 'Toast',
  component: Toast,
  argTypes: {
    hideHandler: {
      action: 'hideHandler',
    },
  },
};

export default meta;

const Template: Story<ToastProps> = args => <Toast {...args} />;

export const Main = Template.bind({});
Main.args = {
  status: 'success',
  message: 'Message example',
};

export const ToastError = Template.bind({});
ToastError.args = {
  status: 'error',
  message: 'Message example',
};
