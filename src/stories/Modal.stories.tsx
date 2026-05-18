import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Modal, ModalInformation, ModalConfirmation } from '../components/Modal/Modal';
import { Button } from '../components/Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', height: '100vh', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    open: { control: 'boolean', description: 'פתוח/סגור' },
    title: { control: 'text', description: 'כותרת' },
    okText: { control: 'text', description: 'טקסט כפתור אישור' },
    cancelText: { control: 'text', description: 'טקסט כפתור ביטול' },
    showOk: { control: 'boolean', description: 'הצג כפתור אישור' },
    showCancel: { control: 'boolean', description: 'הצג כפתור ביטול' },
    position: {
      control: 'select',
      options: ['default', 'top', 'center'],
      description: 'מיקום המודל',
    },
    width: { control: 'number', description: 'רוחב' },
  },
  args: {
    open: true,
    title: 'כותרת המודל',
    okText: 'אוקיי',
    cancelText: 'בטל',
    showOk: true,
    showCancel: true,
    position: 'default',
    width: 520,
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: (
      <p style={{ margin: 0, fontSize: 14, color: 'rgba(0,0,0,0.65)', lineHeight: '22px' }}>
        תוכן המודל מוצג כאן. ניתן להוסיף כל תוכן רצוי.
      </p>
    ),
  },
};

export const CenterPosition: Story = {
  args: { position: 'center', children: <p>מודל ממורכז</p> },
};

export const TopPosition: Story = {
  args: { position: 'top', children: <p>מודל בחלק העליון</p> },
};

export const NoButtons: Story = {
  args: { showOk: false, showCancel: false, children: <p>מודל ללא כפתורים</p> },
};

export const InformationSuccess: Story = {
  render: () => (
    <ModalInformation
      open
      status="success"
      title="הפעולה הצליחה!"
      description="הנתונים נשמרו בהצלחה במערכת."
      okText="המשך"
      cancelText="סגור"
    />
  ),
  parameters: { controls: { disable: true } },
};

export const InformationError: Story = {
  render: () => (
    <ModalInformation
      open
      status="error"
      title="אירעה שגיאה"
      description="לא ניתן להשלים את הפעולה. נסה שוב מאוחר יותר."
      okText="נסה שוב"
      cancelText="בטל"
    />
  ),
  parameters: { controls: { disable: true } },
};

export const InformationWarning: Story = {
  render: () => (
    <ModalInformation
      open
      status="warning"
      title="שים לב!"
      description="פעולה זו תמחק את כל הנתונים ולא ניתן יהיה לשחזרם."
      okText="הבנתי"
      cancelText="בטל"
    />
  ),
  parameters: { controls: { disable: true } },
};

export const Confirmation: Story = {
  render: () => (
    <ModalConfirmation
      open
      title="האם למחוק את הפריט?"
      description="פעולה זו לא ניתנת לביטול לאחר אישורה."
      okText="מחק"
      cancelText="ביטול"
      danger
    />
  ),
  parameters: { controls: { disable: true } },
};

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div style={{ padding: 24 }}>
        <Button type="primary" onClick={() => setOpen(true)}>פתח מודל</Button>
        <Modal
          open={open}
          title="הגדרות חשבון"
          okText="שמור"
          cancelText="בטל"
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        >
          <p style={{ margin: 0, fontSize: 14, color: 'rgba(0,0,0,0.65)' }}>
            כאן ניתן לשנות את הגדרות החשבון שלך.
          </p>
        </Modal>
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};
