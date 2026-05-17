import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Segmented — AestetiX 1.0
//  Figma page: ❖ Segmented - ✅ 🎨🤖🤖 (node 5:53)
//
//  size: large | default | small
//  Track bg: rgba(0,0,0,0.04), selected item bg: #fff
//  height: large=40 | default=32 | small=24
// ─────────────────────────────────────────────────────────────────

export type SegmentedSize = 'large' | 'default' | 'small';

export interface SegmentedOption {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface SegmentedProps {
  value?: string;
  defaultValue?: string;
  options?: (SegmentedOption | string)[];
  size?: SegmentedSize;
  disabled?: boolean;
  block?: boolean;
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

const heights: Record<SegmentedSize, number> = { large: 40, default: 32, small: 24 };
const fontSizes: Record<SegmentedSize, string> = { large: '16px', default: '14px', small: '12px' };
const paddings: Record<SegmentedSize, string> = { large: '0 14px', default: '0 11px', small: '0 7px' };

function normalizeOption(opt: SegmentedOption | string): SegmentedOption {
  if (typeof opt === 'string') return { label: opt, value: opt };
  return opt;
}

export function Segmented({
  value: controlledValue,
  defaultValue,
  options = [],
  size = 'default',
  disabled = false,
  block = false,
  onChange,
  className = '',
  style,
}: SegmentedProps) {
  const normalized = options.map(normalizeOption);
  const firstVal = normalized[0]?.value ?? '';
  const [value, setValue] = React.useState(controlledValue ?? defaultValue ?? firstVal);

  React.useEffect(() => {
    if (controlledValue !== undefined) setValue(controlledValue);
  }, [controlledValue]);

  const handleSelect = (v: string) => {
    setValue(v);
    onChange?.(v);
  };

  const h = heights[size];
  const fs = fontSizes[size];
  const pad = paddings[size];
  const trackPad = 2;

  return (
    <div
      className={className}
      style={{
        display: block ? 'flex' : 'inline-flex',
        padding: `${trackPad}px`,
        backgroundColor: 'rgba(0,0,0,0.04)',
        borderRadius: '8px',
        gap: '2px',
        ...style,
      }}
    >
      {normalized.map((opt) => {
        const isActive = opt.value === value;
        const isDisabled = disabled || opt.disabled;
        return (
          <SegmentedItem
            key={opt.value}
            opt={opt}
            active={isActive}
            disabled={isDisabled}
            height={h - trackPad * 2}
            fontSize={fs}
            padding={pad}
            block={block}
            onSelect={handleSelect}
          />
        );
      })}
    </div>
  );
}

interface SegmentedItemProps {
  opt: SegmentedOption;
  active: boolean;
  disabled?: boolean;
  height: number;
  fontSize: string;
  padding: string;
  block?: boolean;
  onSelect: (v: string) => void;
}

function SegmentedItem({ opt, active, disabled, height, fontSize, padding, block, onSelect }: SegmentedItemProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onClick={() => !disabled && onSelect(opt.value)}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: block ? 1 : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        height,
        padding,
        fontSize,
        fontFamily: '"Heebo", sans-serif',
        fontWeight: active ? 600 : 400,
        color: disabled
          ? 'rgba(0,0,0,0.25)'
          : active
            ? 'rgba(0,0,0,0.88)'
            : hovered
              ? 'rgba(0,0,0,0.65)'
              : 'rgba(0,0,0,0.65)',
        backgroundColor: active
          ? '#fff'
          : hovered && !disabled
            ? 'rgba(0,0,0,0.06)'
            : 'transparent',
        borderRadius: '6px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s',
        whiteSpace: 'nowrap',
        boxShadow: active ? '0 1px 2px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      {opt.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{opt.icon}</span>}
      {opt.label}
    </div>
  );
}

export default Segmented;
