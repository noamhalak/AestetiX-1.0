import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Badge } from '../components/Badge/Badge';
import { Avatar } from '../components/Avatar/Avatar';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', padding: 16 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    count: { control: 'number', description: 'מספר לתצוגה' },
    dot: { control: 'boolean', description: 'נקודה קטנה במקום מספר' },
    status: {
      control: 'select',
      options: ['success', 'processing', 'default', 'error', 'warning'],
      description: 'סטטוס (לעמידה עצמאית)',
    },
    showZero: { control: 'boolean', description: 'הצג גם כשהערך 0' },
    overflowCount: { control: 'number', description: 'ספרה מקסימלית לפני +' },
    color: { control: 'color', description: 'צבע מותאם' },
    text: { control: 'text', description: 'טקסט לצד הנקודה (במצב סטטוס)' },
  },
  args: { count: 5 },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (args) => (
    <Badge {...args}>
      <Avatar shape="square">פ</Avatar>
    </Badge>
  ),
};

export const WithCount: Story = {
  render: () => (
    <Badge count={12}>
      <Avatar shape="square">פ</Avatar>
    </Badge>
  ),
};

export const Overflow: Story = {
  render: () => (
    <Badge count={120} overflowCount={99}>
      <Avatar shape="square">פ</Avatar>
    </Badge>
  ),
};

export const DotBadge: Story = {
  render: () => (
    <Badge dot>
      <Avatar shape="square">פ</Avatar>
    </Badge>
  ),
};

export const StandaloneCount: Story = {
  render: () => <Badge count={8} />,
};

export const StatusBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Badge status="success" text="פעיל" />
      <Badge status="processing" text="מעבד..." />
      <Badge status="default" text="לא פעיל" />
      <Badge status="error" text="שגיאה" />
      <Badge status="warning" text="אזהרה" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge count={5}><Avatar shape="square">ה</Avatar></Badge>
      <Badge count={0} showZero><Avatar shape="square">ה</Avatar></Badge>
      <Badge dot><Avatar shape="square">ה</Avatar></Badge>
      <Badge count={100} overflowCount={99}><Avatar shape="square">ה</Avatar></Badge>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
