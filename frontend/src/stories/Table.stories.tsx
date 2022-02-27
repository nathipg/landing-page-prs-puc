import { Meta, Story } from '@storybook/react';

import {
  TableWrapper,
  Table,
  THead,
  THRow,
  THCol,
  TBody,
  TRow,
  TCol,
} from '../components/Table';

const meta: Meta = {
  title: 'Table',
  component: Table,
  subcomponents: {
    TableWrapper,
    THead,
    THRow,
    THCol,
    TBody,
    TRow,
    TCol,
  },
  argTypes: {},
};

export default meta;

const Template: Story = args => (
  <TableWrapper>
    <Table>
      <THead>
        <THRow>
          <THCol>name</THCol>
          <THCol>email</THCol>
        </THRow>
      </THead>

      {args.content && (
        <TBody>
          <TRow key={1}>
            <TCol>Name 1</TCol>
            <TCol>Email 1</TCol>
          </TRow>
          <TRow key={2}>
            <TCol>Name 2</TCol>
            <TCol>Email 2</TCol>
          </TRow>
          <TRow key={3}>
            <TCol>Name 3</TCol>
            <TCol>Email 3</TCol>
          </TRow>
          <TRow key={4}>
            <TCol>Name 4</TCol>
            <TCol>Email 4</TCol>
          </TRow>
        </TBody>
      )}

      {!args.content && (
        <TBody>
          <TRow>
            <TCol colSpan={2}>No clients found</TCol>
          </TRow>
        </TBody>
      )}
    </Table>
  </TableWrapper>
);

export const Main = Template.bind({});
Main.args = {
  content: true,
};

export const NoContentExample = Template.bind({});
NoContentExample.args = {
  content: false,
};
