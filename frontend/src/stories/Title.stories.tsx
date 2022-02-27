import { Meta, Story } from '@storybook/react';

import Title, { TitleProps } from '../components/Title';

const meta: Meta = {
  title: 'Title',
  component: Title,
  argTypes: {},
};

export default meta;

const Template: Story<TitleProps> = args => <Title {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: 'Default Title',
  as: 'h1'
};

export const SubtitleExample = Template.bind({});
SubtitleExample.args = {
  children: 'Subtitle',
  as: 'h2',
};
