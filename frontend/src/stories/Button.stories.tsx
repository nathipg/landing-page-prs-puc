import { Meta, Story } from '@storybook/react';

import Button from '../components/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {},
};

export default meta;

const Template: Story = args => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: 'Default Button',
};
