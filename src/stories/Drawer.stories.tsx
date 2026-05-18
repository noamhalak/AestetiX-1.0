import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Drawer } from '../components/Drawer/Drawer';
import { Button } from '../components/Button/Button';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
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
    placement: {
      control: 'select',
      options: ['right', 'left', 'top', 'bottom'],
      description: 'מיקום המגירה',
    },
    size: {
      control: 'radio',
      options: ['default', 'large'],
      description: 'גודל המגירה',
    },
    title: { control: 'text', description: 'כותרת' },
    closable: { control: 'boolean', description: 'כפתור סגירה' },
    maskClosable: { control: 'boolean', description: 'סגירה בלחיצה על הרקע' },
    mask: { control: 'boolean', description: 'הצג רקע כהה' },
    width: { control: 'number', description: 'רוחב (בפיקסלים)' },
  },
  args: {
    open: true,
    placement: 'right',
    size: 'default',
    title: 'הגדרות משתמש',
    closable: true,
    maskClosable: true,
    mask: true,
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p style={{ margin: 0, fontSize: 14, color: 'rgba(0,0,0,0.65)', lineHeight: '22px' }}>
          כאן תוכל לשנות את הגדרות המשתמש שלך.
        </p>
        <p style={{ margin: 0, fontSize: 14, color: 'rgba(0,0,0,0.65)', lineHeight: '22px' }}>
          הגדרות אלה ישמרו אוטומטית.
        </p>
      </div>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    title: 'עריכת פרויקט',
    footer: (
      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
        <Button type="default">בטל</Button>
        <Button type="primary">שמור</Button>
      </div>
    ),
    children: (
      <p style={{ margin: 0, fontSize: 14, color: 'rgba(0,0,0,0.65)' }}>
        תוכן הטופס יופיע כאן.
      </p>
    ),
  },
};

export const LeftPlacement: Story = {
  args: { placement: 'left', title: 'ניווט ראשי' },
};

export const BottomPlacement: Story = {
  args: { placement: 'bottom', title: 'פאנל תחתון', height: 300 },
};

export const LargeSize: Story = {
  args: { size: 'large', title: 'תצוגה מורחבת' },
};

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div style={{ padding: 24 }}>
        <Button type="primary" onClick={() => setOpen(true)}>פתח מגירה</Button>
        <Drawer
          open={open}
          title="הגדרות"
          onClose={() => setOpen(false)}
          footer={
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <Button type="default" onClick={() => setOpen(false)}>בטל</Button>
              <Button type="primary" onClick={() => setOpen(false)}>שמור</Button>
            </div>
          }
        >
          <p style={{ margin: 0, fontSize: 14 }}>תוכן המגירה מוצג כאן.</p>
        </Drawer>
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};
