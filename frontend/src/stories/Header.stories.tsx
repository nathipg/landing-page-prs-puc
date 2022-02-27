import { Meta, Story } from '@storybook/react';

import Header from '../components/Header';

const meta: Meta = {
  title: 'Header',
  component: Header,
  argTypes: {},
};

export default meta;

const Template: Story = args => <Header {...args} />;

export const Main = Template.bind({});
