import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Spin — AestetiX 1.0
//  Figma page: ❖ Spin - ✅ 🎨🤖🤖 (node 5:72)
//
//  size: small(16) | default(24) | large(40)
//  spinning: boolean
//  tip: string (label shown under spinner)
// ─────────────────────────────────────────────────────────────────

export type SpinSize = 'small' | 'default' | 'large';

export interface SpinProps {
  spinning?: boolean;
  size?: SpinSize;
  tip?: React.ReactNode;
  delay?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const spinSizePx: Record<SpinSize, number> = {
  small: 16,
  default: 24,
  large: 40,
};

function SpinIndicator({ size, color = '#1677ff' }: { size: number; color?: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        border: `${Math.max(2, size / 8)}px solid ${color}`,
        borderTopColor: 'transparent',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
        flexShrink: 0,
      }}
    />
  );
}

export function Spin({
  spinning = true,
  size = 'default',
  tip,
  children,
  className = '',
  style,
}: SpinProps) {
  const [active, setActive] = React.useState(spinning);
  const px = spinSizePx[size];

  React.useEffect(() => {
    setActive(spinning);
  }, [spinning]);

  if (!children) {
    if (!active) return null;
    return (
      <div
        className={className}
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          ...style,
        }}
      >
        <SpinIndicator size={px} />
        {tip && (
          <span
            style={{
              fontSize: '14px',
              lineHeight: '22px',
              fontFamily: '"Heebo", sans-serif',
              color: 'rgba(0,0,0,0.88)',
            }}
          >
            {tip}
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        ...style,
      }}
    >
      {children}
      {active && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255,255,255,0.65)',
            zIndex: 10,
          }}
        >
          <SpinIndicator size={px} />
          {tip && (
            <span
              style={{
                fontSize: '14px',
                lineHeight: '22px',
                fontFamily: '"Heebo", sans-serif',
                color: '#1677ff',
              }}
            >
              {tip}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default Spin;
