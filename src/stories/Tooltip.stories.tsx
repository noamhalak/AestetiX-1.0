import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { Button } from '../components/Button/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', padding: 60 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: { control: 'text', description: 'תוכן ה-tooltip' },
    placement: {
      control: 'select',
      options: [
        'top', 'topLeft', 'topRight',
        'bottom', 'bottomLeft', 'bottomRight',
        'left', 'leftTop', 'leftBottom',
        'right', 'rightTop', 'rightBottom',
      ],
      description: 'מיקום',
    },
    open: { control: 'boolean', description: 'מוצג תמיד (controlled)' },
    defaultOpen: { control: 'boolean', description: 'פתוח בברירת מחדל' },
    disabled: { control: 'boolean', description: 'מנוטרל' },
    color: { control: 'color', description: 'צבע רקע' },
  },
  args: {
    title: 'טקסט ה-tooltip מוצג כאן',
    placement: 'top',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: <Button type="default">רחף מעלי</Button>,
  },
};

export const AlwaysVisible: Story = {
  args: {
    open: true,
    title: 'תמיד גלוי',
    children: <Button type="default">tooltip קבוע</Button>,
  },
};

export const Bottom: Story = {
  args: {
    placement: 'bottom',
    title: 'מתחת',
    children: <Button type="default">כיוון תחתון</Button>,
  },
};

export const Left: Story = {
  args: {
    placement: 'left',
    title: 'משמאל',
    children: <Button type="default">כיוון שמאל</Button>,
  },
};

export const Right: Story = {
  args: {
    placement: 'right',
    title: 'מימין',
    children: <Button type="default">כיוון ימין</Button>,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    title: 'לא יוצג',
    children: <Button type="default">tooltip מנוטרל</Button>,
  },
};

export const CustomColor: Story = {
  args: {
    color: '#722ed1',
    title: 'tooltip בצבע מותאם',
    children: <Button type="default">צבע מותאם</Button>,
  },
};

export const AllPlacements: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 16, placeItems: 'center' }}>
      {(
        [
          'topLeft', 'top', 'topRight',
          'leftTop', '', 'rightTop',
          'left', '', 'right',
          'leftBottom', '', 'rightBottom',
          'bottomLeft', 'bottom', 'bottomRight',
        ] as const
      ).map((placement, i) =>
        placement ? (
          <Tooltip key={i} title={placement} placement={placement} open>
            <Button type="default" size="small">{placement}</Button>
          </Tooltip>
        ) : (
          <span key={i} />
        )
      )}
    </div>
  ),
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', padding: 80 }}>
        <Story />
      </div>
    ),
  ],
  parameters: { controls: { disable: true } },
};
