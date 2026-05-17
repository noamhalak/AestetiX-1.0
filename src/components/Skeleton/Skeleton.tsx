import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Skeleton — AestetiX 1.0
//  Figma page: ❖ Skeleton - ✅ 🎨🤖🤖 (node 5:70)
//
//  Skeleton.Avatar  — size × shape
//  Skeleton.Input   — size × block
//  Skeleton.Button  — size × block × shape
//  Skeleton.Image   — size
//  Skeleton         — avatar × title × paragraph × rows
// ─────────────────────────────────────────────────────────────────

const shimmer: React.CSSProperties = {
  background: 'linear-gradient(90deg, #f5f5f5 25%, #ebebeb 37%, #f5f5f5 63%)',
  backgroundSize: '400% 100%',
  animation: 'skeleton-shimmer 1.4s ease infinite',
  borderRadius: '4px',
};

export interface SkeletonAvatarProps {
  size?: 'large' | 'default' | 'small' | number;
  shape?: 'circle' | 'square';
  style?: React.CSSProperties;
}

const avatarSizes: Record<'large' | 'default' | 'small', number> = {
  large: 40, default: 32, small: 24,
};

export function SkeletonAvatar({ size = 'default', shape = 'circle', style }: SkeletonAvatarProps) {
  const px = typeof size === 'number' ? size : avatarSizes[size];
  return (
    <span
      style={{
        ...shimmer,
        display: 'inline-block',
        width: px,
        height: px,
        borderRadius: shape === 'circle' ? '50%' : '6px',
        flexShrink: 0,
        ...style,
      }}
    />
  );
}

export interface SkeletonInputProps {
  size?: 'large' | 'default' | 'small';
  block?: boolean;
  active?: boolean;
  style?: React.CSSProperties;
}

const inputHeights: Record<'large' | 'default' | 'small', number> = {
  large: 40, default: 32, small: 24,
};

export function SkeletonInput({ size = 'default', block = false, style }: SkeletonInputProps) {
  return (
    <span
      style={{
        ...shimmer,
        display: 'inline-block',
        width: block ? '100%' : '160px',
        height: inputHeights[size],
        borderRadius: '6px',
        ...style,
      }}
    />
  );
}

export interface SkeletonButtonProps {
  size?: 'large' | 'default' | 'small';
  block?: boolean;
  shape?: 'default' | 'circle' | 'round';
  style?: React.CSSProperties;
}

const buttonHeights: Record<'large' | 'default' | 'small', number> = {
  large: 40, default: 32, small: 24,
};

export function SkeletonButton({ size = 'default', block = false, shape = 'default', style }: SkeletonButtonProps) {
  const h = buttonHeights[size];
  const radius = shape === 'circle' ? '50%' : shape === 'round' ? h / 2 : '6px';
  return (
    <span
      style={{
        ...shimmer,
        display: 'inline-block',
        width: block ? '100%' : shape === 'circle' ? h : '96px',
        height: h,
        borderRadius: radius,
        ...style,
      }}
    />
  );
}

export interface SkeletonImageProps {
  style?: React.CSSProperties;
}

export function SkeletonImage({ style }: SkeletonImageProps) {
  return (
    <span
      style={{
        ...shimmer,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '96px',
        height: '96px',
        borderRadius: '8px',
        ...style,
      }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="4" fill="rgba(0,0,0,0.08)" />
        <circle cx="15" cy="15" r="4" fill="rgba(0,0,0,0.15)" />
        <path d="M6 32l9-12 6 8 4-5 9 9" fill="rgba(0,0,0,0.1)" />
      </svg>
    </span>
  );
}

export interface SkeletonProps {
  loading?: boolean;
  active?: boolean;
  avatar?: boolean | SkeletonAvatarProps;
  title?: boolean | { width?: number | string };
  paragraph?: boolean | { rows?: number; width?: (number | string)[] };
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Skeleton({
  loading = true,
  avatar,
  title = true,
  paragraph = true,
  children,
  className = '',
  style,
}: SkeletonProps) {
  if (!loading) return <>{children}</>;

  const showAvatar = !!avatar;
  const avatarProps = typeof avatar === 'object' ? avatar : {};
  const titleWidth = typeof title === 'object' ? (title.width ?? '40%') : '40%';
  const rows = typeof paragraph === 'object' ? (paragraph.rows ?? 3) : 3;
  const rowWidths = typeof paragraph === 'object' && paragraph.width
    ? paragraph.width
    : ['100%', '100%', '72%'];

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        gap: '16px',
        fontFamily: '"Heebo", sans-serif',
        ...style,
      }}
    >
      {showAvatar && (
        <SkeletonAvatar size="large" shape="circle" {...avatarProps} />
      )}

      <div style={{ flex: 1, minWidth: 0 }}>
        {title !== false && (
          <div
            style={{
              ...shimmer,
              height: '16px',
              width: titleWidth,
              marginBottom: '16px',
              borderRadius: '4px',
            }}
          />
        )}

        {paragraph !== false && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Array.from({ length: rows }).map((_, i) => (
              <div
                key={i}
                style={{
                  ...shimmer,
                  height: '16px',
                  width: rowWidths[i] ?? '100%',
                  borderRadius: '4px',
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Skeleton;
