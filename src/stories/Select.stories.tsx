import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Select } from '../components/Select/Select';

const cityOptions = [
  { label: 'תל אביב', value: 'tel-aviv' },
  { label: 'ירושלים', value: 'jerusalem' },
  { label: 'חיפה', value: 'haifa' },
  { label: 'באר שבע', value: 'beer-sheva' },
  { label: 'נתניה', value: 'netanya' },
  { label: 'ראשון לציון', value: 'rishon' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', maxWidth: 300, paddingBottom: 300 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'גודל',
    },
    status: {
      control: 'select',
      options: ['', 'error', 'warning'],
      description: 'סטטוס',
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'borderless'],
      description: 'סגנון גבול',
    },
    mode: {
      control: 'select',
      options: ['default', 'multiple', 'tags'],
      description: 'מצב בחירה',
    },
    placeholder: { control: 'text', description: 'טקסט placeholder' },
    disabled: { control: 'boolean', description: 'מנוטרל' },
    allowClear: { control: 'boolean', description: 'אפשר ניקוי' },
    showSearch: { control: 'boolean', description: 'חיפוש בתוך הרשימה' },
    loading: { control: 'boolean', description: 'טוען' },
  },
  args: {
    placeholder: 'בחר עיר...',
    size: 'default',
    status: '',
    variant: 'outlined',
    mode: 'default',
    disabled: false,
    allowClear: false,
    showSearch: false,
    loading: false,
    options: cityOptions,
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { value: 'tel-aviv' },
};

export const Disabled: Story = {
  args: { disabled: true, value: 'tel-aviv' },
};

export const Error: Story = {
  args: { status: 'error', placeholder: 'שגיאה' },
};

export const Warning: Story = {
  args: { status: 'warning', placeholder: 'אזהרה' },
};

export const WithSearch: Story = {
  args: { showSearch: true, placeholder: 'חפש עיר...' },
};

export const AllowClear: Story = {
  args: { allowClear: true, value: 'haifa' },
};

export const Multiple: Story = {
  args: {
    mode: 'multiple',
    placeholder: 'בחר ערים...',
    defaultValue: ['tel-aviv', 'haifa'],
  },
};

export const Filled: Story = {
  args: { variant: 'filled' },
};

export const Borderless: Story = {
  args: { variant: 'borderless' },
};

export const Loading: Story = {
  args: { loading: true, placeholder: 'טוען...' },
};

export const WithGroups: Story = {
  args: {
    placeholder: 'בחר עיר...',
    options: [
      {
        label: 'מרכז',
        options: [
          { label: 'תל אביב', value: 'tel-aviv' },
          { label: 'ראשון לציון', value: 'rishon' },
          { label: 'נתניה', value: 'netanya' },
        ],
      },
      {
        label: 'צפון',
        options: [
          { label: 'חיפה', value: 'haifa' },
          { label: 'נצרת', value: 'nazareth' },
        ],
      },
      {
        label: 'דרום',
        options: [
          { label: 'באר שבע', value: 'beer-sheva' },
          { label: 'אילת', value: 'eilat' },
        ],
      },
    ],
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Select size="small" placeholder="קטן" options={cityOptions} />
      <Select size="default" placeholder="רגיל" options={cityOptions} />
      <Select size="large" placeholder="גדול" options={cityOptions} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};
