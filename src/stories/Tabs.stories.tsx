import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Tabs } from '../components/Tabs/Tabs';
import { IconHome, IconUser, IconSettings } from '@tabler/icons-react';

const basicItems = [
  { key: 'tab1', label: 'לשונית ראשונה', children: <p style={{ margin: 0, fontSize: 14 }}>תוכן הלשונית הראשונה</p> },
  { key: 'tab2', label: 'לשונית שנייה', children: <p style={{ margin: 0, fontSize: 14 }}>תוכן הלשונית השנייה</p> },
  { key: 'tab3', label: 'לשונית שלישית', children: <p style={{ margin: 0, fontSize: 14 }}>תוכן הלשונית השלישית</p> },
  { key: 'tab4', label: 'מנוטרל', disabled: true, children: <p style={{ margin: 0 }}>לא נגיש</p> },
];

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', maxWidth: 600 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    type: {
      control: 'radio',
      options: ['line', 'card'],
      description: 'סוג הלשוניות',
    },
    size: {
      control: 'select',
      options: ['large', 'default', 'small'],
      description: 'גודל',
    },
    tabPosition: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'מיקום הלשוניות',
    },
    defaultActiveKey: { control: 'text', description: 'לשונית פעילה ברירת מחדל' },
  },
  args: {
    type: 'line',
    size: 'default',
    tabPosition: 'top',
    defaultActiveKey: 'tab1',
    items: basicItems,
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {};

export const Card: Story = {
  args: { type: 'card' },
};

export const Large: Story = {
  args: { size: 'large' },
};

export const Small: Story = {
  args: { size: 'small' },
};

export const BottomPosition: Story = {
  args: { tabPosition: 'bottom' },
};

export const LeftPosition: Story = {
  args: { tabPosition: 'left' },
};

export const WithIcons: Story = {
  args: {
    items: [
      { key: 'home', label: 'בית', icon: <IconHome size={14} />, children: <p style={{ margin: 0 }}>עמוד הבית</p> },
      { key: 'user', label: 'משתמש', icon: <IconUser size={14} />, children: <p style={{ margin: 0 }}>פרופיל המשתמש</p> },
      { key: 'settings', label: 'הגדרות', icon: <IconSettings size={14} />, children: <p style={{ margin: 0 }}>הגדרות המערכת</p> },
    ],
    defaultActiveKey: 'home',
  },
};

export const Closable: Story = {
  render: () => {
    const [items, setItems] = React.useState([
      { key: 'tab1', label: 'לשונית 1', closable: true, children: <p style={{ margin: 0 }}>תוכן 1</p> },
      { key: 'tab2', label: 'לשונית 2', closable: true, children: <p style={{ margin: 0 }}>תוכן 2</p> },
      { key: 'tab3', label: 'לשונית 3', closable: true, children: <p style={{ margin: 0 }}>תוכן 3</p> },
    ]);

    return (
      <Tabs
        type="card"
        defaultActiveKey="tab1"
        items={items}
        onEdit={(key) => setItems((prev) => prev.filter((i) => i.key !== key))}
      />
    );
  },
  parameters: { controls: { disable: true } },
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', marginBottom: 8 }}>Line</div>
        <Tabs type="line" defaultActiveKey="tab1" items={basicItems.slice(0, 3)} />
      </div>
      <div>
        <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', marginBottom: 8 }}>Card</div>
        <Tabs type="card" defaultActiveKey="tab1" items={basicItems.slice(0, 3)} />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};
