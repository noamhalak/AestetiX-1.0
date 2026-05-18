import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Menu, MenuTopNavigation } from '../components/Menu/Menu';
import { IconHome, IconSettings, IconUser, IconBell, IconSearch, IconStar } from '@tabler/icons-react';

const sampleItems = [
  { key: 'home', label: 'בית', icon: <IconHome size={16} /> },
  { key: 'users', label: 'משתמשים', icon: <IconUser size={16} /> },
  {
    key: 'settings',
    label: 'הגדרות',
    icon: <IconSettings size={16} />,
    children: [
      { key: 'settings-general', label: 'כללי' },
      { key: 'settings-security', label: 'אבטחה' },
      { key: 'settings-notifications', label: 'התראות' },
    ],
  },
  { key: 'notifications', label: 'התראות', icon: <IconBell size={16} /> },
  { key: 'disabled', label: 'מנוטרל', icon: <IconStar size={16} />, disabled: true },
];

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', background: '#f5f5f5', padding: 16 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    mode: {
      control: 'radio',
      options: ['inline', 'vertical'],
      description: 'מצב תצוגה',
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: 'ערכת צבעים',
    },
    collapsed: { control: 'boolean', description: 'מכווץ' },
    defaultActiveKey: { control: 'text', description: 'פריט פעיל ברירת מחדל' },
  },
  args: {
    mode: 'inline',
    theme: 'light',
    collapsed: false,
    items: sampleItems,
    defaultActiveKey: 'home',
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {};

export const Dark: Story = {
  args: { theme: 'dark' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', background: '#141414', padding: 16 }}>
        <Story />
      </div>
    ),
  ],
};

export const Collapsed: Story = {
  args: { collapsed: true },
};

export const CollapsedDark: Story = {
  args: { collapsed: true, theme: 'dark' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', background: '#141414', padding: 16 }}>
        <Story />
      </div>
    ),
  ],
};

export const WithGroups: Story = {
  args: {
    items: [
      {
        key: 'group-main',
        label: 'ראשי',
        children: [
          { key: 'home', label: 'בית', icon: <IconHome size={16} /> },
          { key: 'search', label: 'חיפוש', icon: <IconSearch size={16} /> },
        ],
      },
      {
        key: 'group-settings',
        label: 'הגדרות',
        children: [
          { key: 'profile', label: 'פרופיל', icon: <IconUser size={16} /> },
          { key: 'config', label: 'הגדרות', icon: <IconSettings size={16} /> },
        ],
      },
    ],
    defaultActiveKey: 'home',
  },
};

export const TopNavigation: Story = {
  render: () => (
    <MenuTopNavigation
      defaultActiveKey="home"
      items={[
        { key: 'home', label: 'בית', icon: <IconHome size={16} /> },
        { key: 'products', label: 'מוצרים' },
        { key: 'about', label: 'אודות' },
        { key: 'contact', label: 'צור קשר' },
        { key: 'disabled', label: 'מנוטרל', disabled: true },
      ]}
    />
  ),
  parameters: { controls: { disable: true } },
};

export const TopNavigationDark: Story = {
  render: () => (
    <div style={{ background: '#141414', padding: '0 16px' }}>
      <MenuTopNavigation
        theme="dark"
        defaultActiveKey="home"
        items={[
          { key: 'home', label: 'בית' },
          { key: 'products', label: 'מוצרים' },
          { key: 'about', label: 'אודות' },
          { key: 'contact', label: 'צור קשר' },
        ]}
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};
