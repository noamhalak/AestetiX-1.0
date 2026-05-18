import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Progress } from '../components/Progress/Progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    percent: { control: { type: 'range', min: 0, max: 100, step: 1 }, description: 'אחוז השלמה' },
    type: {
      control: 'select',
      options: ['line', 'circle', 'dashboard'],
      description: 'סוג',
    },
    status: {
      control: 'select',
      options: ['normal', 'active', 'success', 'exception'],
      description: 'סטטוס',
    },
    showInfo: { control: 'boolean', description: 'הצג מידע' },
    size: {
      control: 'radio',
      options: ['default', 'small'],
      description: 'גודל (עבור line)',
    },
    strokeColor: { control: 'color', description: 'צבע הקו' },
    trailColor: { control: 'color', description: 'צבע הרקע' },
    width: { control: 'number', description: 'רוחב/גודל (עבור circle/dashboard)' },
  },
  args: {
    percent: 60,
    type: 'line',
    showInfo: true,
    size: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {};

export const Active: Story = {
  args: { percent: 70, status: 'active' },
};

export const Success: Story = {
  args: { percent: 100 },
};

export const Exception: Story = {
  args: { percent: 40, status: 'exception' },
};

export const Small: Story = {
  args: { size: 'small', percent: 50 },
};

export const Circle: Story = {
  args: { type: 'circle', percent: 75, width: 120 },
};

export const CircleSuccess: Story = {
  args: { type: 'circle', percent: 100, width: 120 },
};

export const Dashboard: Story = {
  args: { type: 'dashboard', percent: 65, width: 120 },
};

export const NoInfo: Story = {
  args: { showInfo: false, percent: 45 },
};

export const AllLineStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Progress percent={30} status="normal" />
      <Progress percent={50} status="active" />
      <Progress percent={100} status="success" />
      <Progress percent={70} status="exception" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllCircleTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Progress type="circle" percent={65} width={100} />
      <Progress type="circle" percent={100} width={100} />
      <Progress type="circle" percent={40} status="exception" width={100} />
      <Progress type="dashboard" percent={75} width={100} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};
