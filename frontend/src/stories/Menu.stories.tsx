import { Meta, Story } from '@storybook/react';

import { Menu, MenuOption } from '../components/Menu';

const meta: Meta = {
  title: 'Menu',
  component: Menu,
  subcomponents: {
    MenuOption,
  },
  argTypes: {},
};

export default meta;

const Template: Story = args => (
  <Menu {...args}>
    <MenuOption to="/">Item 1</MenuOption>
    <MenuOption to="/">Item 2</MenuOption>
    <MenuOption to="/">Item 3</MenuOption>
  </Menu>
);

export const Main = Template.bind({});
