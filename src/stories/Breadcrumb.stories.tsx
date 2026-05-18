import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    separator: { control: 'text', description: 'מפריד בין פריטים' },
    items: { control: 'object', description: 'פריטי ה-Breadcrumb' },
  },
  args: {
    separator: '/',
    items: [
      { title: 'בית', href: '#' },
      { title: 'הגדרות', href: '#' },
      { title: 'פרופיל' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {};

export const TwoLevels: Story = {
  args: {
    items: [
      { title: 'בית', href: '#' },
      { title: 'לוח בקרה' },
    ],
  },
};

export const FourLevels: Story = {
  args: {
    items: [
      { title: 'בית', href: '#' },
      { title: 'פרויקטים', href: '#' },
      { title: 'AestetiX UI', href: '#' },
      { title: 'קומפוננטים' },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    separator: '>',
    items: [
      { title: 'בית', href: '#' },
      { title: 'קטגוריה', href: '#' },
      { title: 'פריט' },
    ],
  },
};

export const WithDisabled: Story = {
  args: {
    items: [
      { title: 'בית', href: '#' },
      { title: 'מנוטרל', href: '#', disabled: true },
      { title: 'עמוד נוכחי' },
    ],
  },
};
