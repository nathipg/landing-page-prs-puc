import { Meta, Story } from '@storybook/react';

import Loading from '../components/Loading';

const meta: Meta = {
  title: 'Loading',
  component: Loading,
  argTypes: {},
};

export default meta;

const Template: Story = args => <Loading {...args} />;

export const Main = Template.bind({});
