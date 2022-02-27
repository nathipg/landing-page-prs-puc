import { Meta, Story } from '@storybook/react';

import UserIcon, { UserIconProps } from '../components/UserIcon';

const meta: Meta = {
  title: 'UserIcon',
  component: UserIcon,
  argTypes: {},
};

export default meta;

const Template: Story<UserIconProps> = args => <UserIcon {...args} />;

export const Main = Template.bind({});
Main.args = {
  picture: 'https://github.com/nathipg.png',
};
