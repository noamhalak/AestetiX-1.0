import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { NotificationContainer } from '../components/Notification/Notification';
import type { NotificationItem } from '../components/Notification/Notification';
import { Button } from '../components/Button/Button';

const sampleItems: NotificationItem[] = [
  {
    key: '1',
    type: 'success',
    message: 'הפעולה הושלמה',
    description: 'הנתונים נשמרו בהצלחה.',
    duration: 0,
  },
];

const meta: Meta<typeof NotificationContainer> = {
  title: 'Components/Notification',
  component: NotificationContainer,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', height: '100vh', background: '#f0f2f5', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    placement: {
      control: 'select',
      options: ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'],
      description: 'מיקום ההתראות',
    },
  },
  args: {
    placement: 'topRight',
    items: sampleItems,
  },
};

export default meta;
type Story = StoryObj<typeof NotificationContainer>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    items: [{
      key: '1',
      type: 'success',
      message: 'הפעולה הושלמה בהצלחה',
      description: 'הנתונים נשמרו ועודכנו.',
      duration: 0,
    }],
  },
};

export const Error: Story = {
  args: {
    items: [{
      key: '1',
      type: 'error',
      message: 'שגיאה בביצוע הפעולה',
      description: 'לא ניתן להתחבר לשרת. בדוק את חיבור האינטרנט.',
      duration: 0,
    }],
  },
};

export const Warning: Story = {
  args: {
    items: [{
      key: '1',
      type: 'warning',
      message: 'אזהרה',
      description: 'החבילה שלך עומדת לפוג. חדש אותה כדי להמשיך.',
      duration: 0,
    }],
  },
};

export const Info: Story = {
  args: {
    items: [{
      key: '1',
      type: 'info',
      message: 'עדכון מערכת',
      description: 'גרסה חדשה זמינה. עדכן כדי ליהנות מהתכונות החדשות.',
      duration: 0,
    }],
  },
};

export const MultipleNotifications: Story = {
  args: {
    placement: 'topRight',
    items: [
      { key: '1', type: 'success', message: 'נשמר בהצלחה', duration: 0 },
      { key: '2', type: 'info', message: 'עדכון זמין', description: 'גרסה 2.0 זמינה.', duration: 0 },
      { key: '3', type: 'warning', message: 'אזהרה: מקום אחסון נמוך', duration: 0 },
    ],
  },
};

export const WithButton: Story = {
  args: {
    items: [{
      key: '1',
      type: 'info',
      message: 'הוזמנת לפרויקט',
      description: 'דני לוי הזמין אותך לפרויקט AestetiX.',
      duration: 0,
      btn: (
        <div style={{ display: 'flex', gap: 8 }}>
          <Button type="primary" size="small">קבל</Button>
          <Button type="default" size="small">דחה</Button>
        </div>
      ),
    }],
  },
};

export const BottomLeft: Story = {
  args: { placement: 'bottomLeft' },
};

export const Interactive: Story = {
  render: () => {
    const [items, setItems] = React.useState<NotificationItem[]>([]);
    let counter = React.useRef(0);

    const add = (type: NotificationItem['type']) => {
      const key = String(++counter.current);
      const messages: Record<string, { message: string; description?: string }> = {
        success: { message: 'הושלם בהצלחה', description: 'הפעולה בוצעה.' },
        error:   { message: 'שגיאה', description: 'נסה שוב.' },
        warning: { message: 'אזהרה', description: 'שים לב לפרטים.' },
        info:    { message: 'מידע', description: 'עדכון חדש זמין.' },
      };
      setItems((prev) => [...prev, { key, type, ...messages[type!], duration: 3 }]);
    };

    return (
      <div style={{ padding: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button type="primary" onClick={() => add('success')}>הצלחה</Button>
        <Button type="default" onClick={() => add('info')}>מידע</Button>
        <Button danger onClick={() => add('error')}>שגיאה</Button>
        <Button onClick={() => add('warning')}>אזהרה</Button>
        <NotificationContainer
          placement="topRight"
          items={items}
          onClose={(key) => setItems((prev) => prev.filter((i) => i.key !== key))}
        />
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};
