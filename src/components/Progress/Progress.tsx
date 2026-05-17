import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Progress — AestetiX 1.0
//  Figma page: ❖ Progress - ✅ 🎨🤖🤖 (node 5:68)
//
//  type: line | circle | dashboard
//  status: normal | active | success | exception
//  size: default (8px track) | small (6px track)
// ─────────────────────────────────────────────────────────────────

export type ProgressType = 'line' | 'circle' | 'dashboard';
export type ProgressStatus = 'normal' | 'active' | 'success' | 'exception';

export interface ProgressProps {
  percent?: number;
  type?: ProgressType;
  status?: ProgressStatus;
  showInfo?: boolean;
  strokeColor?: string;
  trailColor?: string;
  strokeWidth?: number;
  size?: 'default' | 'small';
  width?: number;
  format?: (percent?: number) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const statusColors: Record<ProgressStatus, string> = {
  normal:    '#1677ff',
  active:    '#1677ff',
  success:   '#52c41a',
  exception: '#ff4d4f',
};

function SuccessIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="6" fill="#52c41a" />
      <path d="M3 6l2.5 2.5 4-4" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="6" fill="#ff4d4f" />
      <path d="M4 4l4 4M8 4l-4 4" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function Progress({
  percent = 0,
  type = 'line',
  status,
  showInfo = true,
  strokeColor,
  trailColor = '#f5f5f5',
  strokeWidth,
  size = 'default',
  width = 120,
  format,
  className = '',
  style,
}: ProgressProps) {
  const resolvedStatus: ProgressStatus =
    status ?? (percent >= 100 ? 'success' : 'normal');

  const color = strokeColor ?? statusColors[resolvedStatus];
  const clamped = Math.max(0, Math.min(100, percent));

  const defaultInfo =
    resolvedStatus === 'success' ? <SuccessIcon /> :
    resolvedStatus === 'exception' ? <ErrorIcon /> :
    `${clamped}%`;

  const info = format ? format(clamped) : defaultInfo;

  // ── Line ──────────────────────────────────────────────────────
  if (type === 'line') {
    const trackH = strokeWidth ?? (size === 'small' ? 6 : 8);

    return (
      <div
        className={className}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          width: '100%',
          fontFamily: '"Heebo", sans-serif',
          ...style,
        }}
      >
        <div
          style={{
            flex: 1,
            height: trackH,
            backgroundColor: trailColor,
            borderRadius: trackH / 2,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${clamped}%`,
              backgroundColor: color,
              borderRadius: trackH / 2,
              transition: 'width 0.3s ease',
              position: 'relative',
              overflow: resolvedStatus === 'active' ? 'hidden' : 'visible',
            }}
          />
        </div>

        {showInfo && (
          <span
            style={{
              fontSize: '14px',
              color: resolvedStatus === 'exception' ? '#ff4d4f' : resolvedStatus === 'success' ? '#52c41a' : 'rgba(0,0,0,0.88)',
              minWidth: '38px',
              textAlign: 'right',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            {info}
          </span>
        )}
      </div>
    );
  }

  // ── Circle / Dashboard ───────────────────────────────────────
  const svgSize = width;
  const sw = strokeWidth ?? 8;
  const r = (svgSize - sw) / 2;
  const cx = svgSize / 2;
  const cy = svgSize / 2;

  const isDashboard = type === 'dashboard';
  const gapDeg = isDashboard ? 75 : 0;
  const fullArc = 360 - gapDeg;
  const circumference = (Math.PI * 2 * r * fullArc) / 360;
  const offset = circumference - (clamped / 100) * circumference;
  const startAngle = isDashboard ? 90 + gapDeg / 2 : -90;

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: svgSize,
        height: svgSize,
        fontFamily: '"Heebo", sans-serif',
        ...style,
      }}
    >
      <svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`}>
        {/* trail */}
        <circle
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke={trailColor}
          strokeWidth={sw}
          strokeDasharray={`${circumference} ${Math.PI * 2 * r}`}
          strokeDashoffset={0}
          strokeLinecap="round"
          transform={`rotate(${startAngle} ${cx} ${cy})`}
        />
        {/* progress */}
        <circle
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeDasharray={`${circumference} ${Math.PI * 2 * r}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(${startAngle} ${cx} ${cy})`}
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        />
      </svg>

      {showInfo && (
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: Math.max(12, svgSize * 0.16),
            color: resolvedStatus === 'exception' ? '#ff4d4f' : resolvedStatus === 'success' ? '#52c41a' : 'rgba(0,0,0,0.88)',
          }}
        >
          {info}
        </div>
      )}
    </div>
  );
}

export default Progress;
