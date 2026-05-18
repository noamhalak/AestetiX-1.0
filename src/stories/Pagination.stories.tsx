import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Pagination } from '../components/Pagination/Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    current: { control: 'number', description: 'עמוד נוכחי' },
    defaultCurrent: { control: 'number', description: 'עמוד ברירת מחדל' },
    total: { control: 'number', description: 'סה"כ פריטים' },
    pageSize: { control: 'number', description: 'פריטים בעמוד' },
    showSizeChanger: { control: 'boolean', description: 'הצג בורר גודל עמוד' },
    showQuickJumper: { control: 'boolean', description: 'הצג קפיצה מהירה' },
    showTotal: { control: 'boolean', description: 'הצג סה"כ' },
    disabled: { control: 'boolean', description: 'מנוטרל' },
    mini: { control: 'boolean', description: 'גודל מיני' },
  },
  args: {
    total: 150,
    defaultCurrent: 1,
    pageSize: 10,
    disabled: false,
    mini: false,
    showSizeChanger: false,
    showQuickJumper: false,
    showTotal: false,
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};

export const WithSizeChanger: Story = {
  args: { showSizeChanger: true },
};

export const WithJumper: Story = {
  args: { showQuickJumper: true },
};

export const WithTotal: Story = {
  args: { showTotal: true },
};

export const Mini: Story = {
  args: { mini: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const FewPages: Story = {
  args: { total: 30, pageSize: 10 },
};

export const ManyPages: Story = {
  args: { total: 500, pageSize: 10, defaultCurrent: 5 },
};

export const Full: Story = {
  args: {
    total: 300,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-end' }}>
      <div>
        <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', marginBottom: 8 }}>בסיסי</div>
        <Pagination total={100} />
      </div>
      <div>
        <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', marginBottom: 8 }}>עם בורר גודל</div>
        <Pagination total={100} showSizeChanger />
      </div>
      <div>
        <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', marginBottom: 8 }}>מיני</div>
        <Pagination total={100} mini />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
