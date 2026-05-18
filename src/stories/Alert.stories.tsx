import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Alert } from '../components/Alert/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
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
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
      description: 'סוג ההתראה',
    },
    message: { control: 'text', description: 'הודעה ראשית' },
    description: { control: 'text', description: 'תיאור נוסף' },
    banner: { control: 'boolean', description: 'תצוגת באנר ללא גבול' },
    closable: { control: 'boolean', description: 'ניתן לסגירה' },
    showIcon: { control: 'boolean', description: 'הצג אייקון' },
  },
  args: {
    type: 'info',
    message: 'זוהי הודעת מידע',
    showIcon: true,
    closable: false,
    banner: false,
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {};

export const Success: Story = {
  args: { type: 'success', message: 'הפעולה בוצעה בהצלחה' },
};

export const Info: Story = {
  args: { type: 'info', message: 'מידע כללי למשתמש' },
};

export const Warning: Story = {
  args: { type: 'warning', message: 'שים לב לפרטים הבאים' },
};

export const Error: Story = {
  args: { type: 'error', message: 'אירעה שגיאה בביצוע הפעולה' },
};

export const WithDescription: Story = {
  args: {
    type: 'warning',
    message: 'אזהרה חשובה',
    description: 'יש לבדוק את הנתונים לפני המשך. פעולה זו לא ניתנת לביטול לאחר אישורה.',
    showIcon: true,
  },
};

export const Closable: Story = {
  args: {
    type: 'info',
    message: 'ניתן לסגור הודעה זו',
    closable: true,
  },
};

export const Banner: Story = {
  args: {
    type: 'warning',
    message: 'זהו באנר ללא גבולות',
    banner: true,
    showIcon: true,
  },
};

export const NoIcon: Story = {
  args: {
    type: 'success',
    message: 'ללא אייקון',
    showIcon: false,
  },
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert type="success" message="הפעולה הצליחה" showIcon />
      <Alert type="info" message="פריט מידע חשוב" showIcon />
      <Alert type="warning" message="אזהרה: בדוק לפני המשך" showIcon />
      <Alert type="error" message="שגיאה: לא ניתן להשלים" showIcon />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllWithDescriptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert type="success" message="הרשמה הושלמה" description="ברוך הבא למערכת AestetiX. אנא אמת את כתובת האימייל שלך." showIcon closable />
      <Alert type="error" message="שגיאת חיבור" description="לא ניתן להתחבר לשרת. בדוק את חיבור האינטרנט ונסה שוב." showIcon closable />
    </div>
  ),
  parameters: { controls: { disable: true } },
};
