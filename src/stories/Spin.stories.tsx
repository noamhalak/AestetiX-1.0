import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Spin } from '../components/Spin/Spin';

const meta: Meta<typeof Spin> = {
  title: 'Components/Spin',
  component: Spin,
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
    spinning: { control: 'boolean', description: 'פעיל' },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'גודל',
    },
    tip: { control: 'text', description: 'טקסט תיאור' },
  },
  args: {
    spinning: true,
    size: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Spin>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: 'small' },
};

export const Large: Story = {
  args: { size: 'large' },
};

export const WithTip: Story = {
  args: { tip: 'טוען נתונים...' },
};

export const NotSpinning: Story = {
  args: { spinning: false },
};

export const WrappingContent: Story = {
  render: () => (
    <Spin spinning tip="טוען...">
      <div style={{
        padding: 24,
        background: '#fafafa',
        border: '1px solid #f0f0f0',
        borderRadius: 8,
        minHeight: 120,
        minWidth: 300,
      }}>
        <p style={{ margin: 0, fontSize: 14 }}>תוכן שנמצא מאחורי ספינר הטעינה.</p>
        <p style={{ margin: '8px 0 0', fontSize: 14 }}>שורה נוספת של תוכן.</p>
      </div>
    </Spin>
  ),
  parameters: { controls: { disable: true } },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Spin size="small" />
        <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', marginTop: 8 }}>קטן</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spin size="default" />
        <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', marginTop: 8 }}>רגיל</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spin size="large" />
        <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', marginTop: 8 }}>גדול</div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
