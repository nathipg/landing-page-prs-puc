import { Meta, Story } from '@storybook/react';

import List from '../components/List';
import Review from '../components/Review';

const meta: Meta = {
  title: 'List',
  component: List,
  argTypes: {},
};

export default meta;

const Template: Story = args => (
  <List {...args}>
    <Review
      name="Teste"
      picture="https://github.com/nathipg.png"
      text="Example"
    />
    <Review
      name="Teste"
      picture="https://github.com/nathipg.png"
      text="Example"
    />
  </List>
);

export const Main = Template.bind({});
Main.args = {};
