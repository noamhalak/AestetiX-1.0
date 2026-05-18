import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Button } from '../components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'General/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'default', 'dashed', 'text', 'link'],
      description: 'סוג הכפתור',
    },
    size: {
      control: 'select',
      options: ['large', 'default', 'small'],
      description: 'גודל הכפתור',
    },
    disabled: { control: 'boolean', description: 'מנוטרל' },
    loading: { control: 'boolean', description: 'מצב טעינה' },
    danger: { control: 'boolean', description: 'סגנון סכנה/מחיקה' },
    block: { control: 'boolean', description: 'רוחב מלא' },
    children: { control: 'text' },
  },
  args: { children: 'לחץ כאן' },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { type: 'primary' } };
export const Default: Story = { args: { type: 'default' } };
export const Dashed: Story = { args: { type: 'dashed' } };
export const Text: Story = { args: { type: 'text' } };
export const Link: Story = { args: { type: 'link' } };
export const Danger: Story = { args: { type: 'primary', danger: true, children: 'מחק' } };
export const Loading: Story = { args: { type: 'primary', loading: true } };
export const Disabled: Story = { args: { type: 'primary', disabled: true } };
export const Large: Story = { args: { type: 'primary', size: 'large', children: 'כפתור גדול' } };
export const Small: Story = { args: { type: 'primary', size: 'small', children: 'כפתור קטן' } };
export const Block: Story = { args: { type: 'primary', block: true, children: 'רוחב מלא' } };

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button type="primary">ראשי</Button>
      <Button type="default">ברירת מחדל</Button>
      <Button type="dashed">מקווקו</Button>
      <Button type="text">טקסט</Button>
      <Button type="link">קישור</Button>
      <Button type="primary" danger>מחיקה</Button>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Button type="primary" size="large">גדול</Button>
      <Button type="primary" size="default">רגיל</Button>
      <Button type="primary" size="small">קטן</Button>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
