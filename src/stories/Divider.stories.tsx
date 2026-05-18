import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Divider } from '../components/Divider/Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', maxWidth: 600 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    type: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'כיוון המפריד',
    },
    orientation: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'מיקום הטקסט',
    },
    dashed: { control: 'boolean', description: 'קו מקווקו' },
    plain: { control: 'boolean', description: 'טקסט רגיל (ללא עיצוב כותרת)' },
    children: { control: 'text', description: 'טקסט במרכז המפריד' },
  },
  args: {
    type: 'horizontal',
    orientation: 'center',
    dashed: false,
    plain: false,
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const WithText: Story = {
  args: { children: 'או' },
};

export const Dashed: Story = {
  args: { dashed: true },
};

export const DashedWithText: Story = {
  args: { dashed: true, children: 'הגדרות נוספות' },
};

export const TextLeft: Story = {
  args: { children: 'כותרת שמאלית', orientation: 'left' },
};

export const TextRight: Story = {
  args: { children: 'כותרת ימנית', orientation: 'right' },
};

export const Plain: Story = {
  args: { children: 'טקסט רגיל', plain: true },
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
      <span>טקסט ראשון</span>
      <Divider type="vertical" />
      <span>טקסט שני</span>
      <Divider type="vertical" />
      <span>טקסט שלישי</span>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllOrientations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      <Divider orientation="right">ימין</Divider>
      <Divider orientation="center">מרכז</Divider>
      <Divider orientation="left">שמאל</Divider>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
