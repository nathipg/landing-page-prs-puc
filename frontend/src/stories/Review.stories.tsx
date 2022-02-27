import { Meta, Story } from '@storybook/react';

import Review, { ReviewProps } from '../components/Review';

const meta: Meta = {
  title: 'Review',
  component: Review,
  argTypes: {},
};

export default meta;

const Template: Story<ReviewProps> = args => <Review {...args} />;

export const Main = Template.bind({});
Main.args = {
  name: 'Teste',
  picture: 'https://github.com/nathipg.png',
  text: 'Example',
};
