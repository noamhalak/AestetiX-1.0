import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Avatar, AvatarGroup } from '../components/Avatar/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'default', 'small'],
      description: 'גודל האווטאר',
    },
    shape: {
      control: 'radio',
      options: ['circle', 'square'],
      description: 'צורת האווטאר',
    },
    src: { control: 'text', description: 'כתובת תמונה' },
    alt: { control: 'text', description: 'טקסט חלופי לתמונה' },
    children: { control: 'text', description: 'אות/ים לאווטאר טקסט' },
  },
  args: {
    size: 'default',
    shape: 'circle',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const WithText: Story = {
  args: { children: 'ד' },
};

export const WithImage: Story = {
  args: {
    src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    alt: 'אווטאר משתמש',
  },
};

export const Square: Story = {
  args: { shape: 'square', children: 'אב' },
};

export const Large: Story = {
  args: { size: 'large', children: 'ד' },
};

export const Small: Story = {
  args: { size: 'small', children: 'ד' },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar size="large">ג</Avatar>
      <Avatar size="default">ד</Avatar>
      <Avatar size="small">מ</Avatar>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllShapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar shape="circle" size="large">ע</Avatar>
      <Avatar shape="square" size="large">ע</Avatar>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const Group: Story = {
  render: () => (
    <AvatarGroup maxCount={3} size="default" shape="circle">
      <Avatar>ד</Avatar>
      <Avatar>מ</Avatar>
      <Avatar>ע</Avatar>
      <Avatar>ר</Avatar>
      <Avatar>ה</Avatar>
    </AvatarGroup>
  ),
  parameters: { controls: { disable: true } },
};
