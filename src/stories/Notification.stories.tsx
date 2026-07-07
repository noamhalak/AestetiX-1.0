import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { notification } from '../components/Notification/Notification';
import { Button } from '../components/Button/Button';

const meta: Meta = {
  title: 'Components/Notification',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Success: Story = {
  render: () => {
    const [api, contextHolder] = notification.useNotification();
    return (
      <>
        {contextHolder}
        <Button type="primary" onClick={() => api.success({ message: 'הפעולה הושלמה', description: 'הנתונים נשמרו בהצלחה.' })}>
          הצג הצלחה
        </Button>
      </>
    );
  },
};

export const Error: Story = {
  render: () => {
    const [api, contextHolder] = notification.useNotification();
    return (
      <>
        {contextHolder}
        <Button danger onClick={() => api.error({ message: 'שגיאה בביצוע הפעולה', description: 'לא ניתן להתחבר לשרת.' })}>
          הצג שגיאה
        </Button>
      </>
    );
  },
};

export const Warning: Story = {
  render: () => {
    const [api, contextHolder] = notification.useNotification();
    return (
      <>
        {contextHolder}
        <Button onClick={() => api.warning({ message: 'אזהרה', description: 'החבילה שלך עומדת לפוג.' })}>
          הצג אזהרה
        </Button>
      </>
    );
  },
};

export const Info: Story = {
  render: () => {
    const [api, contextHolder] = notification.useNotification();
    return (
      <>
        {contextHolder}
        <Button onClick={() => api.info({ message: 'עדכון מערכת', description: 'גרסה חדשה זמינה.' })}>
          הצג מידע
        </Button>
      </>
    );
  },
};

export const AllTypes: Story = {
  render: () => {
    const [api, contextHolder] = notification.useNotification();
    return (
      <>
        {contextHolder}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button type="primary" onClick={() => api.success({ message: 'הצלחה', duration: 3 })}>הצלחה</Button>
          <Button onClick={() => api.info({ message: 'מידע', duration: 3 })}>מידע</Button>
          <Button onClick={() => api.warning({ message: 'אזהרה', duration: 3 })}>אזהרה</Button>
          <Button danger onClick={() => api.error({ message: 'שגיאה', duration: 3 })}>שגיאה</Button>
        </div>
      </>
    );
  },
  parameters: { controls: { disable: true } },
};

export const WithPlacement: Story = {
  render: () => {
    const [api, contextHolder] = notification.useNotification();
    return (
      <>
        {contextHolder}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {(['topRight', 'topLeft', 'bottomRight', 'bottomLeft'] as const).map((p) => (
            <Button key={p} onClick={() => api.info({ message: p, placement: p, duration: 3 })}>
              {p}
            </Button>
          ))}
        </div>
      </>
    );
  },
  parameters: { controls: { disable: true } },
};
