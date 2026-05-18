import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Steps } from '../components/Steps/Steps';

const basicItems = [
  { title: 'כניסה פרטים', description: 'מלא את הפרטים האישיים' },
  { title: 'אישור', description: 'בדוק ואשר את הפרטים' },
  { title: 'תשלום', description: 'השלם את התשלום' },
  { title: 'סיום', description: 'ההזמנה בוצעה' },
];

const meta: Meta<typeof Steps> = {
  title: 'Components/Steps',
  component: Steps,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', maxWidth: 700 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    current: { control: { type: 'range', min: 0, max: 3, step: 1 }, description: 'שלב נוכחי' },
    direction: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'כיוון',
    },
    size: {
      control: 'radio',
      options: ['default', 'small'],
      description: 'גודל',
    },
    status: {
      control: 'select',
      options: ['finish', 'process', 'wait', 'error'],
      description: 'סטטוס שלב נוכחי',
    },
  },
  args: {
    current: 1,
    direction: 'horizontal',
    size: 'default',
    status: 'process',
    items: basicItems,
  },
};

export default meta;
type Story = StoryObj<typeof Steps>;

export const Default: Story = {};

export const FirstStep: Story = {
  args: { current: 0 },
};

export const LastStep: Story = {
  args: { current: 3 },
};

export const ErrorStep: Story = {
  args: { current: 1, status: 'error' },
};

export const Vertical: Story = {
  args: { direction: 'vertical', current: 1 },
};

export const Small: Story = {
  args: { size: 'small' },
};

export const Clickable: Story = {
  render: () => {
    const [current, setCurrent] = React.useState(0);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Steps
          current={current}
          onChange={setCurrent}
          items={basicItems}
        />
        <div style={{ padding: 16, background: '#fafafa', borderRadius: 8, border: '1px solid #f0f0f0', fontSize: 14 }}>
          <strong>שלב {current + 1}:</strong> {basicItems[current]?.description}
        </div>
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

export const AllStatuses: Story = {
  render: () => (
    <Steps
      current={2}
      items={[
        { title: 'הושלם', description: 'שלב זה הסתיים' },
        { title: 'שגיאה', description: 'אירעה בעיה', status: 'error' },
        { title: 'בתהליך', description: 'מתבצע כעת' },
        { title: 'ממתין', description: 'טרם התחיל' },
      ]}
    />
  ),
  parameters: { controls: { disable: true } },
};
