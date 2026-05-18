import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Icon } from '../components/Icon/Icon';
import {
  IconBell,
  IconUser,
  IconHome,
  IconSettings,
  IconSearch,
  IconHeart,
  IconStar,
  IconTrash,
  IconEdit,
  IconCheck,
  IconX,
  IconChevronDown,
  IconPlus,
  IconMail,
  IconPhone,
} from '@tabler/icons-react';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
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
    size: { control: 'number', description: 'גודל בפיקסלים (ברירת מחדל 24)' },
    color: { control: 'color', description: 'צבע האייקון' },
    strokeWidth: { control: 'number', description: 'עובי קו SVG' },
  },
  args: {
    icon: IconBell,
    size: 24,
    color: 'currentColor',
    strokeWidth: 2,
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

export const Bell: Story = {
  args: { icon: IconBell },
};

export const User: Story = {
  args: { icon: IconUser },
};

export const Home: Story = {
  args: { icon: IconHome },
};

export const Settings: Story = {
  args: { icon: IconSettings },
};

export const Large: Story = {
  args: { icon: IconStar, size: 40, color: '#faad14' },
};

export const Small: Story = {
  args: { icon: IconCheck, size: 16, color: '#52c41a' },
};

export const Colored: Story = {
  args: { icon: IconHeart, size: 32, color: '#ff4d4f' },
};

export const ThinStroke: Story = {
  args: { icon: IconSearch, strokeWidth: 1 },
};

export const AllCommonIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
      {[
        { icon: IconHome, name: 'בית' },
        { icon: IconUser, name: 'משתמש' },
        { icon: IconBell, name: 'פעמון' },
        { icon: IconSettings, name: 'הגדרות' },
        { icon: IconSearch, name: 'חיפוש' },
        { icon: IconHeart, name: 'לב' },
        { icon: IconStar, name: 'כוכב' },
        { icon: IconTrash, name: 'מחיקה' },
        { icon: IconEdit, name: 'עריכה' },
        { icon: IconCheck, name: 'אישור' },
        { icon: IconX, name: 'סגירה' },
        { icon: IconPlus, name: 'הוספה' },
        { icon: IconMail, name: 'מייל' },
        { icon: IconPhone, name: 'טלפון' },
        { icon: IconChevronDown, name: 'חץ' },
      ].map(({ icon, name }) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <Icon icon={icon} size={24} />
          <span style={{ fontSize: 11, color: 'rgba(0,0,0,0.45)' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const SizeScale: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Icon icon={IconStar} size={16} />
      <Icon icon={IconStar} size={20} />
      <Icon icon={IconStar} size={24} />
      <Icon icon={IconStar} size={32} />
      <Icon icon={IconStar} size={48} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};
