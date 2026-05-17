import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Badge — AestetiX 1.0
//  Figma page: ❖ Badge - ✅ 🎨🤖🤖 (node 4:41)
//
//  count: number (shows number badge)
//  dot: boolean (shows small dot)
//  status: success | processing | default | error | warning
//  showZero: boolean
//  overflowCount: number (default 99)
// ─────────────────────────────────────────────────────────────────

export type BadgeStatus = 'success' | 'processing' | 'default' | 'error' | 'warning';

export interface BadgeProps {
  count?: number;
  dot?: boolean;
  status?: BadgeStatus;
  color?: string;
  text?: React.ReactNode;
  showZero?: boolean;
  overflowCount?: number;
  offset?: [number, number];
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const statusColors: Record<BadgeStatus, string> = {
  success:    '#52c41a',
  processing: '#1677ff',
  default:    'rgba(0,0,0,0.25)',
  error:      '#ff4d4f',
  warning:    '#faad14',
};

export function Badge({
  count,
  dot = false,
  status,
  color,
  text,
  showZero = false,
  overflowCount = 99,
  offset = [0, 0],
  children,
  className = '',
  style,
}: BadgeProps) {
  // Status badge (standalone, no children wrapping)
  if (status && !children) {
    const dotColor = color ?? statusColors[status];
    return (
      <span
        className={className}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: '"Heebo", sans-serif',
          fontSize: '14px',
          lineHeight: '22px',
          ...style,
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: dotColor,
            flexShrink: 0,
          }}
        >
          {status === 'processing' && (
            <span
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: dotColor,
                opacity: 0.5,
                animation: 'pulse 1.2s ease-in-out infinite',
              }}
            />
          )}
        </span>
        {text && <span style={{ color: 'rgba(0,0,0,0.88)' }}>{text}</span>}
      </span>
    );
  }

  const showCount = count !== undefined && (count > 0 || showZero);
  const displayCount = count !== undefined && count > overflowCount ? `${overflowCount}+` : String(count ?? 0);
  const showDot = dot || (status && children);
  const dotColor = color ?? (status ? statusColors[status] : '#ff4d4f');

  if (!children) {
    if (showCount) {
      return (
        <span
          className={className}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '20px',
            height: '20px',
            padding: '0 6px',
            backgroundColor: '#ff4d4f',
            borderRadius: '10px',
            fontSize: '12px',
            fontFamily: '"Heebo", sans-serif',
            color: '#fff',
            fontWeight: 400,
            lineHeight: '20px',
            ...style,
          }}
        >
          {displayCount}
        </span>
      );
    }
    return null;
  }

  return (
    <span
      className={className}
      style={{ position: 'relative', display: 'inline-flex', ...style }}
    >
      {children}

      {/* Dot badge */}
      {showDot && (
        <span
          style={{
            position: 'absolute',
            top: offset[1],
            right: -offset[0],
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: dotColor,
            border: '2px solid #fff',
            transform: 'translate(50%, -50%)',
          }}
        />
      )}

      {/* Count badge */}
      {showCount && !dot && (
        <span
          style={{
            position: 'absolute',
            top: offset[1],
            right: -offset[0],
            minWidth: '20px',
            height: '20px',
            padding: '0 6px',
            backgroundColor: '#ff4d4f',
            borderRadius: '10px',
            fontSize: '12px',
            fontFamily: '"Heebo", sans-serif',
            color: '#fff',
            lineHeight: '20px',
            textAlign: 'center',
            border: '2px solid #fff',
            transform: 'translate(50%, -50%)',
            whiteSpace: 'nowrap',
          }}
        >
          {displayCount}
        </span>
      )}
    </span>
  );
}

export default Badge;
