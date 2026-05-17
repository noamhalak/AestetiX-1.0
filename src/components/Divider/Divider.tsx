import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Divider — AestetiX 1.0
//  Figma page: ❖ Divider - ✅ 🎨🤖🤖 (node 4:12)
//
//  type: horizontal | vertical
//  orientation: left | center | right
//  dashed: boolean
//  Line color: #f0f0f0
// ─────────────────────────────────────────────────────────────────

export type DividerType = 'horizontal' | 'vertical';
export type DividerOrientation = 'left' | 'center' | 'right';

export interface DividerProps {
  type?: DividerType;
  orientation?: DividerOrientation;
  dashed?: boolean;
  plain?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Divider({
  type = 'horizontal',
  orientation = 'center',
  dashed = false,
  plain = false,
  children,
  className = '',
  style,
}: DividerProps) {
  const lineColor = '#f0f0f0';
  const borderStyle = dashed ? 'dashed' : 'solid';

  if (type === 'vertical') {
    return (
      <span
        className={className}
        style={{
          display: 'inline-block',
          width: '1px',
          height: '0.9em',
          backgroundColor: lineColor,
          margin: '0 8px',
          verticalAlign: 'middle',
          ...style,
        }}
      />
    );
  }

  if (!children) {
    return (
      <div
        className={className}
        style={{
          borderTop: `1px ${borderStyle} ${lineColor}`,
          margin: '16px 0',
          ...style,
        }}
      />
    );
  }

  const leftFlex = orientation === 'left' ? '0 0 5%' : orientation === 'right' ? '1 1 auto' : '1 1 auto';
  const rightFlex = orientation === 'right' ? '0 0 5%' : orientation === 'left' ? '1 1 auto' : '1 1 auto';

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: '16px 0',
        ...style,
      }}
    >
      <span
        style={{
          flex: leftFlex,
          borderTop: `1px ${borderStyle} ${lineColor}`,
        }}
      />
      <span
        style={{
          padding: '0 16px',
          fontSize: plain ? '14px' : '14px',
          lineHeight: '22px',
          fontFamily: '"Heebo", sans-serif',
          fontWeight: plain ? 400 : 500,
          color: 'rgba(0,0,0,0.88)',
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </span>
      <span
        style={{
          flex: rightFlex,
          borderTop: `1px ${borderStyle} ${lineColor}`,
        }}
      />
    </div>
  );
}

export default Divider;
