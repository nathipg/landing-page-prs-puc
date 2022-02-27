import { Meta, Story } from '@storybook/react';

import Footer from '../components/Footer';

const meta: Meta = {
  title: 'Footer',
  component: Footer,
  argTypes: {},
};

export default meta;

const Template: Story = args => <Footer {...args} />;

export const Main = Template.bind({});
