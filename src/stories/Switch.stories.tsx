import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Switch } from '../components/Switch/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
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
    checked: { control: 'boolean', description: 'מופעל' },
    defaultChecked: { control: 'boolean', description: 'ברירת מחדל' },
    disabled: { control: 'boolean', description: 'מנוטרל' },
    loading: { control: 'boolean', description: 'מצב טעינה' },
    size: {
      control: 'radio',
      options: ['default', 'small'],
      description: 'גודל',
    },
    checkedChildren: { control: 'text', description: 'תוכן כשפעיל' },
    unCheckedChildren: { control: 'text', description: 'תוכן כשלא פעיל' },
  },
  args: {
    size: 'default',
    disabled: false,
    loading: false,
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const On: Story = {
  args: { defaultChecked: true },
};

export const Off: Story = {
  args: { defaultChecked: false },
};

export const Small: Story = {
  args: { size: 'small' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledOn: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const Loading: Story = {
  args: { loading: true },
};

export const WithText: Story = {
  args: {
    checkedChildren: 'פעיל',
    unCheckedChildren: 'כבוי',
    defaultChecked: true,
  },
};

export const WithEmoji: Story = {
  args: {
    checkedChildren: '✓',
    unCheckedChildren: '✕',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {[
        { label: 'כבוי', props: {} },
        { label: 'פעיל', props: { defaultChecked: true } },
        { label: 'עם טקסט', props: { defaultChecked: true, checkedChildren: 'כן', unCheckedChildren: 'לא' } },
        { label: 'קטן', props: { size: 'small' as const } },
        { label: 'מנוטרל', props: { disabled: true } },
        { label: 'טוען', props: { loading: true } },
      ].map(({ label, props }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Switch {...props} />
          <span style={{ fontSize: 14, color: 'rgba(0,0,0,0.65)' }}>{label}</span>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};
