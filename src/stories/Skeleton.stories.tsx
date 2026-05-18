import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Skeleton, SkeletonAvatar, SkeletonButton, SkeletonInput, SkeletonImage } from '../components/Skeleton/Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    loading: { control: 'boolean', description: 'מצב טעינה' },
    avatar: { control: 'boolean', description: 'הצג אווטאר' },
    title: { control: 'boolean', description: 'הצג כותרת' },
    paragraph: { control: 'boolean', description: 'הצג פסקה' },
  },
  args: {
    loading: true,
    avatar: false,
    title: true,
    paragraph: true,
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};

export const WithAvatar: Story = {
  args: { avatar: true },
};

export const TitleOnly: Story = {
  args: { paragraph: false },
};

export const NotLoading: Story = {
  args: {
    loading: false,
    children: <p style={{ margin: 0 }}>התוכן האמיתי מוצג כאן לאחר הטעינה.</p>,
  },
};

export const AvatarVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <div>
        <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.45)', marginBottom: 8 }}>גדול עגול</div>
        <SkeletonAvatar size="large" shape="circle" />
      </div>
      <div>
        <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.45)', marginBottom: 8 }}>רגיל עגול</div>
        <SkeletonAvatar size="default" shape="circle" />
      </div>
      <div>
        <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.45)', marginBottom: 8 }}>קטן ריבוע</div>
        <SkeletonAvatar size="small" shape="square" />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const InputVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <SkeletonInput size="small" />
      <SkeletonInput size="default" />
      <SkeletonInput size="large" />
      <SkeletonInput block />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const ButtonVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <SkeletonButton size="small" />
      <SkeletonButton size="default" />
      <SkeletonButton size="large" />
      <SkeletonButton shape="round" />
      <SkeletonButton shape="circle" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const ImageVariant: Story = {
  render: () => <SkeletonImage />,
  parameters: { controls: { disable: true } },
};

export const CardSkeleton: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {[1, 2].map((i) => (
        <div key={i} style={{ padding: 16, border: '1px solid #f0f0f0', borderRadius: 8 }}>
          <Skeleton avatar loading>
            <div />
          </Skeleton>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};
