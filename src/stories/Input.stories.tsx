import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Input } from '../components/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
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
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'גודל השדה',
    },
    status: {
      control: 'select',
      options: ['default', 'error', 'warning'],
      description: 'סטטוס אימות',
    },
    placeholder: { control: 'text', description: 'טקסט placeholder' },
    disabled: { control: 'boolean', description: 'מנוטרל' },
    allowClear: { control: 'boolean', description: 'כפתור ניקוי' },
    prefix: { control: 'text', description: 'תוכן לפני השדה' },
    suffix: { control: 'text', description: 'תוכן אחרי השדה' },
    addonBefore: { control: 'text', description: 'תוספת לפני' },
    addonAfter: { control: 'text', description: 'תוספת אחרי' },
  },
  args: {
    placeholder: 'הזן טקסט...',
    size: 'default',
    status: 'default',
    disabled: false,
    allowClear: false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { value: 'ישראל ישראלי' },
};

export const Disabled: Story = {
  args: { disabled: true, value: 'לא ניתן לעריכה' },
};

export const Error: Story = {
  args: { status: 'error', placeholder: 'שדה חובה' },
};

export const Warning: Story = {
  args: { status: 'warning', placeholder: 'בדוק את הערך' },
};

export const AllowClear: Story = {
  args: { allowClear: true, defaultValue: 'ניתן למחוק' },
};

export const WithPrefix: Story = {
  args: { prefix: '🔍', placeholder: 'חיפוש...' },
};

export const WithSuffix: Story = {
  args: { suffix: '₪', placeholder: '0.00' },
};

export const WithAddon: Story = {
  args: { addonBefore: 'https://', addonAfter: '.com', placeholder: 'example' },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Input size="small" placeholder="קטן" />
      <Input size="default" placeholder="רגיל" />
      <Input size="large" placeholder="גדול" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Input status="default" placeholder="ברירת מחדל" />
      <Input status="error" placeholder="שגיאה" />
      <Input status="warning" placeholder="אזהרה" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'הזן סיסמה',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'name@example.com',
  },
};
