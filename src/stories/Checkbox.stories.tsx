import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Checkbox, CheckboxGroup } from '../components/Checkbox/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    checked: { control: 'boolean', description: 'מסומן' },
    defaultChecked: { control: 'boolean', description: 'ערך ברירת מחדל' },
    indeterminate: { control: 'boolean', description: 'מצב ביניים' },
    disabled: { control: 'boolean', description: 'מנוטרל' },
    size: {
      control: 'radio',
      options: ['default', 'small'],
      description: 'גודל',
    },
    children: { control: 'text', description: 'תווית' },
  },
  args: {
    children: 'זכור אותי',
    size: 'default',
    disabled: false,
    indeterminate: false,
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: { checked: true, children: 'מסומן' },
};

export const Unchecked: Story = {
  args: { checked: false, children: 'לא מסומן' },
};

export const Indeterminate: Story = {
  args: { indeterminate: true, children: 'מצב ביניים' },
};

export const Disabled: Story = {
  args: { disabled: true, children: 'מנוטרל' },
};

export const DisabledChecked: Story = {
  args: { disabled: true, checked: true, children: 'מנוטרל ומסומן' },
};

export const Small: Story = {
  args: { size: 'small', children: 'קטן' },
};

export const NoLabel: Story = {
  args: { children: undefined },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox>לא מסומן</Checkbox>
      <Checkbox checked>מסומן</Checkbox>
      <Checkbox indeterminate>מצב ביניים</Checkbox>
      <Checkbox disabled>מנוטרל</Checkbox>
      <Checkbox disabled checked>מנוטרל ומסומן</Checkbox>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const GroupHorizontal: Story = {
  render: () => (
    <CheckboxGroup
      defaultValue={['apple']}
      options={[
        { label: 'תפוח', value: 'apple' },
        { label: 'בננה', value: 'banana' },
        { label: 'דובדבן', value: 'cherry' },
        { label: 'מנגו (מנוטרל)', value: 'mango', disabled: true },
      ]}
    />
  ),
  parameters: { controls: { disable: true } },
};

export const GroupVertical: Story = {
  render: () => (
    <CheckboxGroup
      defaultValue={['tel-aviv']}
      direction="vertical"
      options={[
        { label: 'תל אביב', value: 'tel-aviv' },
        { label: 'ירושלים', value: 'jerusalem' },
        { label: 'חיפה', value: 'haifa' },
        { label: 'באר שבע', value: 'beer-sheva' },
      ]}
    />
  ),
  parameters: { controls: { disable: true } },
};
