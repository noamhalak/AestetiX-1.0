import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Empty } from '../components/Empty/Empty';
import { Button } from '../components/Button/Button';

const meta: Meta<typeof Empty> = {
  title: 'Components/Empty',
  component: Empty,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', minWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    image: {
      control: 'select',
      options: ['default', 'simple'],
      description: 'סוג האיור',
    },
    description: { control: 'text', description: 'טקסט תיאור' },
  },
  args: {
    image: 'default',
    description: 'אין נתונים להצגה',
  },
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {};

export const SimpleImage: Story = {
  args: { image: 'simple', description: 'אין פריטים' },
};

export const WithAction: Story = {
  args: {
    description: 'לא נמצאו תוצאות',
    children: <Button type="primary">צור פריט חדש</Button>,
  },
};

export const CustomDescription: Story = {
  args: { description: 'הרשימה ריקה כרגע. הוסף פריטים כדי להמשיך.' },
};

export const NoDescription: Story = {
  args: { description: false },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
      <Empty description="ברירת מחדל" />
      <Empty image="simple" description="פשוט" />
      <Empty description="עם פעולה">
        <Button type="primary" size="small">הוסף</Button>
      </Empty>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
