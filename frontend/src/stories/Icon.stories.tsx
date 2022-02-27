import { Meta, Story } from '@storybook/react';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';

import Icon, { IconProps } from '../components/Icon';

const meta: Meta = {
  title: 'Icon',
  component: Icon,
  argTypes: {},
};

export default meta;

const Template: Story<IconProps> = args => <Icon {...args}></Icon>;

export const Main = Template.bind({});
Main.args = {
  icon: faMeteor,
  children: '',
};

export const Primary = Template.bind({});
Primary.args = {
  icon: faMeteor,
  variant: 'primary',
};

export const DefaultNextToContent = Template.bind({});
DefaultNextToContent.args = {
  icon: faMeteor,
  children: 'Meteor',
};

export const PrimaryNextToContent = Template.bind({});
PrimaryNextToContent.args = {
  icon: faMeteor,
  variant: 'primary',
  children: 'Meteor',
};
