import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Radio, RadioGroup, RadioGroupButtons } from '../components/Radio/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
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
    checked: { control: 'boolean', description: 'מסומן' },
    defaultChecked: { control: 'boolean', description: 'ערך ברירת מחדל' },
    disabled: { control: 'boolean', description: 'מנוטרל' },
    value: { control: 'text', description: 'ערך' },
    children: { control: 'text', description: 'תווית' },
  },
  args: {
    children: 'אפשרות',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {};

export const Checked: Story = {
  args: { checked: true, children: 'מסומן' },
};

export const Disabled: Story = {
  args: { disabled: true, children: 'מנוטרל' },
};

export const DisabledChecked: Story = {
  args: { disabled: true, checked: true, children: 'מנוטרל ומסומן' },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Radio>לא מסומן</Radio>
      <Radio checked>מסומן</Radio>
      <Radio disabled>מנוטרל</Radio>
      <Radio disabled checked>מנוטרל ומסומן</Radio>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const GroupHorizontal: Story = {
  render: () => (
    <RadioGroup
      defaultValue="tel-aviv"
      options={[
        { label: 'תל אביב', value: 'tel-aviv' },
        { label: 'ירושלים', value: 'jerusalem' },
        { label: 'חיפה', value: 'haifa' },
        { label: 'אילת (מנוטרל)', value: 'eilat', disabled: true },
      ]}
    />
  ),
  parameters: { controls: { disable: true } },
};

export const GroupVertical: Story = {
  render: () => (
    <RadioGroup defaultValue="daily">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Radio value="daily">יומי</Radio>
        <Radio value="weekly">שבועי</Radio>
        <Radio value="monthly">חודשי</Radio>
        <Radio value="yearly">שנתי</Radio>
      </div>
    </RadioGroup>
  ),
  parameters: { controls: { disable: true } },
};

export const ButtonGroupOutlined: Story = {
  render: () => (
    <RadioGroupButtons
      defaultValue="mon"
      options={[
        { label: 'ראשון', value: 'sun' },
        { label: 'שני', value: 'mon' },
        { label: 'שלישי', value: 'tue' },
        { label: 'רביעי', value: 'wed' },
      ]}
    />
  ),
  parameters: { controls: { disable: true } },
};

export const ButtonGroupSolid: Story = {
  render: () => (
    <RadioGroupButtons
      defaultValue="year"
      btnStyle="solid"
      options={[
        { label: 'יום', value: 'day' },
        { label: 'שבוע', value: 'week' },
        { label: 'חודש', value: 'month' },
        { label: 'שנה', value: 'year' },
      ]}
    />
  ),
  parameters: { controls: { disable: true } },
};

export const ButtonGroupSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <RadioGroupButtons size="large" defaultValue="a" options={[{ label: 'גדול', value: 'a' }, { label: 'בינוני', value: 'b' }]} />
      <RadioGroupButtons size="default" defaultValue="a" options={[{ label: 'רגיל', value: 'a' }, { label: 'בינוני', value: 'b' }]} />
      <RadioGroupButtons size="small" defaultValue="a" options={[{ label: 'קטן', value: 'a' }, { label: 'מיני', value: 'b' }]} />
    </div>
  ),
  parameters: { controls: { disable: true } },
};
