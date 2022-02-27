import { Meta, Story } from '@storybook/react';

import Brand from '../components/Brand';

const meta: Meta = {
  title: 'Brand',
  component: Brand,
  argTypes: {},
};

export default meta;

const Template: Story = args => <Brand {...args} />;

export const Main = Template.bind({});
