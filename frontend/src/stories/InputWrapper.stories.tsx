import { Meta, Story } from '@storybook/react';

import Input from '../components/Input';
import InputsWrapper from '../components/InputsWrapper';

const meta: Meta = {
  title: 'InputsWrapper',
  component: InputsWrapper,
  argTypes: {},
};

export default meta;

const Template: Story = args => (
  <InputsWrapper {...args}>
    <Input
      label="Example"
      name="example"
      invalidMessage=""
      touched={false}
      valid={true}
      type="text"
      value=""
      onChange={() => {}}
      onFocus={() => {}}
      onBlur={() => {}}
    />
    <Input
      label="Example"
      name="example"
      invalidMessage=""
      touched={false}
      valid={true}
      type="text"
      value=""
      onChange={() => {}}
      onFocus={() => {}}
      onBlur={() => {}}
    />
  </InputsWrapper>
);

export const Main = Template.bind({});
Main.args = {};
