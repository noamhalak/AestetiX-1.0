import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Segmented } from '../components/Segmented/Segmented';
import { IconList, IconLayoutGrid, IconMap } from '@tabler/icons-react';

const meta: Meta<typeof Segmented> = {
  title: 'Components/Segmented',
  component: Segmented,
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
    size: {
      control: 'select',
      options: ['large', 'default', 'small'],
      description: 'גודל',
    },
    disabled: { control: 'boolean', description: 'מנוטרל' },
    block: { control: 'boolean', description: 'רוחב מלא' },
    defaultValue: { control: 'text', description: 'ערך ברירת מחדל' },
  },
  args: {
    options: ['יומי', 'שבועי', 'חודשי'],
    defaultValue: 'יומי',
    size: 'default',
    disabled: false,
    block: false,
  },
};

export default meta;
type Story = StoryObj<typeof Segmented>;

export const Default: Story = {};

export const Large: Story = {
  args: { size: 'large' },
};

export const Small: Story = {
  args: { size: 'small' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Block: Story = {
  args: { block: true },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', width: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { label: 'יומי', value: 'daily' },
      { label: 'שבועי', value: 'weekly' },
      { label: 'חודשי (מנוטרל)', value: 'monthly', disabled: true },
    ],
    defaultValue: 'daily',
  },
};

export const WithIcons: Story = {
  args: {
    options: [
      { label: 'רשימה', value: 'list', icon: <IconList size={14} /> },
      { label: 'רשת', value: 'grid', icon: <IconLayoutGrid size={14} /> },
      { label: 'מפה', value: 'map', icon: <IconMap size={14} /> },
    ],
    defaultValue: 'list',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Segmented size="large" options={['גדול', 'בינוני', 'קטן']} defaultValue="גדול" />
      <Segmented size="default" options={['גדול', 'בינוני', 'קטן']} defaultValue="בינוני" />
      <Segmented size="small" options={['גדול', 'בינוני', 'קטן']} defaultValue="קטן" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};
