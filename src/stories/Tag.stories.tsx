import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Tag, TagStatus } from '../components/Tag/Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
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
    color: {
      control: 'select',
      options: [
        'default', 'processing', 'success', 'warning', 'error',
        'red', 'volcano', 'orange', 'gold', 'yellow',
        'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple', 'magenta',
      ],
      description: 'צבע התגית',
    },
    closable: { control: 'boolean', description: 'ניתן לסגירה' },
    bordered: { control: 'boolean', description: 'עם גבול' },
    children: { control: 'text', description: 'תוכן' },
  },
  args: {
    color: 'default',
    closable: false,
    bordered: true,
    children: 'תגית',
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {};

export const Processing: Story = {
  args: { color: 'processing', children: 'מעבד' },
};

export const Success: Story = {
  args: { color: 'success', children: 'הצליח' },
};

export const Warning: Story = {
  args: { color: 'warning', children: 'אזהרה' },
};

export const Error: Story = {
  args: { color: 'error', children: 'שגיאה' },
};

export const Closable: Story = {
  args: { color: 'blue', closable: true, children: 'לחץ X לסגירה' },
};

export const NoBorder: Story = {
  args: { bordered: false, color: 'processing', children: 'ללא גבול' },
};

export const AllStatusColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Tag color="processing">מעבד</Tag>
      <Tag color="success">הצליח</Tag>
      <Tag color="warning">אזהרה</Tag>
      <Tag color="error">שגיאה</Tag>
      <Tag color="default">ברירת מחדל</Tag>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllPaletteColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {(['red', 'volcano', 'orange', 'gold', 'yellow', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple', 'magenta'] as const).map((color) => (
        <Tag key={color} color={color}>{color}</Tag>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StatusTags: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <TagStatus status="success" text="פעיל" />
      <TagStatus status="processing" text="מעבד..." />
      <TagStatus status="warning" text="אזהרה" />
      <TagStatus status="error" text="שגיאה" />
      <TagStatus status="default" text="לא פעיל" />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const ClosableGroup: Story = {
  render: () => {
    const [tags, setTags] = React.useState(['React', 'TypeScript', 'Storybook', 'Vite', 'Tailwind']);
    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {tags.map((tag) => (
          <Tag
            key={tag}
            color="blue"
            closable
            onClose={() => setTags((prev) => prev.filter((t) => t !== tag))}
          >
            {tag}
          </Tag>
        ))}
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};
