import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState, useMemo } from 'react';
import { Icon } from '../components/Icon/Icon';
import * as TablerIcons from '@tabler/icons-react';

type TablerIconComponent = React.FC<{ size?: number; color?: string; stroke?: number }>;

const allIcons = Object.entries(TablerIcons).filter(
  ([name]) => name.startsWith('Icon') && name !== 'IconBaselineDensityLarge'
) as [string, TablerIconComponent][];

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'number', description: 'גודל (px)' },
    color: { control: 'color', description: 'צבע' },
    stroke: { control: 'number', description: 'עובי קו' },
  },
  args: {
    icon: TablerIcons.IconBell as TablerIconComponent,
    size: 24,
    color: 'currentColor',
    stroke: 2,
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

export const AllIcons: Story = {
  render: () => {
    const [search, setSearch] = useState('');
    const [copied, setCopied] = useState('');

    const filtered = useMemo(() => {
      const q = search.toLowerCase().replace(/\s+/g, '');
      return q ? allIcons.filter(([name]) => name.toLowerCase().includes(q)) : allIcons;
    }, [search]);

    const copy = (name: string) => {
      navigator.clipboard.writeText(`<${name} />`);
      setCopied(name);
      setTimeout(() => setCopied(''), 1500);
    };

    return (
      <div style={{ fontFamily: '"Heebo", sans-serif', width: 900 }}>
        <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <input
            placeholder="חפש אייקון..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              padding: '8px 12px',
              border: '1px solid #d9d9d9',
              borderRadius: 6,
              fontSize: 14,
              direction: 'rtl',
              outline: 'none',
            }}
          />
          <span style={{ color: '#888', fontSize: 13, whiteSpace: 'nowrap' }}>
            {filtered.length.toLocaleString()} אייקונים
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
          gap: 4,
          maxHeight: 600,
          overflowY: 'auto',
          padding: 4,
        }}>
          {filtered.map(([name, IconComp]) => (
            <div
              key={name}
              title={name}
              onClick={() => copy(name)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                padding: '10px 4px',
                borderRadius: 6,
                cursor: 'pointer',
                background: copied === name ? '#e6f4ff' : 'transparent',
                border: copied === name ? '1px solid #91caff' : '1px solid transparent',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => {
                if (copied !== name) (e.currentTarget as HTMLDivElement).style.background = '#f5f5f5';
              }}
              onMouseLeave={(e) => {
                if (copied !== name) (e.currentTarget as HTMLDivElement).style.background = 'transparent';
              }}
            >
              <IconComp size={22} stroke={1.5} />
              <span style={{
                fontSize: 9,
                color: '#888',
                textAlign: 'center',
                wordBreak: 'break-all',
                lineHeight: 1.3,
                maxWidth: 80,
              }}>
                {name.replace('Icon', '')}
              </span>
            </div>
          ))}
        </div>

        {copied && (
          <div style={{
            position: 'fixed',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#141414',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: 6,
            fontSize: 13,
            zIndex: 9999,
          }}>
            {`<${copied} />`} הועתק
          </div>
        )}
      </div>
    );
  },
  parameters: { controls: { disable: true }, layout: 'padded' },
};

export const SizeScale: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      {[16, 20, 24, 32, 48].map((s) => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <TablerIcons.IconStar size={s} />
          <span style={{ fontSize: 11, color: '#888' }}>{s}px</span>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const StrokeWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
      {[1, 1.5, 2, 2.5, 3].map((w) => (
        <div key={w} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <TablerIcons.IconHeart size={28} stroke={w} />
          <span style={{ fontSize: 11, color: '#888' }}>stroke {w}</span>
        </div>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};
