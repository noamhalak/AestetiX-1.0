import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Avatar — AestetiX 1.0
//  Figma page: ❖ Avatar - ✅ 🎨🤖🤖 (node 72210:915)
//
//  size: large(40) | default(32) | small(24) | number
//  shape: circle | square
//  type: image | icon | text
// ─────────────────────────────────────────────────────────────────

export type AvatarSize = 'large' | 'default' | 'small' | number;
export type AvatarShape = 'circle' | 'square';

export interface AvatarProps {
  size?: AvatarSize;
  shape?: AvatarShape;
  src?: string;
  alt?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export interface AvatarGroupProps {
  maxCount?: number;
  maxStyle?: React.CSSProperties;
  size?: AvatarSize;
  shape?: AvatarShape;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const sizeMap: Record<'large' | 'default' | 'small', number> = {
  large: 40,
  default: 32,
  small: 24,
};

function getPixelSize(size: AvatarSize): number {
  if (typeof size === 'number') return size;
  return sizeMap[size];
}

function UserIcon({ size }: { size: number }) {
  return (
    <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 20 20" fill="currentColor">
      <circle cx="10" cy="7" r="4" />
      <path d="M2 18c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
    </svg>
  );
}

export function Avatar({
  size = 'default',
  shape = 'circle',
  src,
  alt,
  icon,
  children,
  style,
  className = '',
}: AvatarProps) {
  const [imgError, setImgError] = React.useState(false);
  const px = getPixelSize(size);
  const radius = shape === 'circle' ? '50%' : '6px';
  const fontSize = px <= 24 ? '12px' : px <= 32 ? '14px' : '18px';

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: px,
    height: px,
    borderRadius: radius,
    backgroundColor: '#1677ff',
    color: '#fff',
    fontSize,
    fontFamily: '"Heebo", sans-serif',
    fontWeight: 500,
    flexShrink: 0,
    overflow: 'hidden',
    userSelect: 'none',
    ...style,
  };

  if (src && !imgError) {
    return (
      <span className={className} style={baseStyle}>
        <img
          src={src}
          alt={alt}
          onError={() => setImgError(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </span>
    );
  }

  return (
    <span className={className} style={baseStyle}>
      {icon ?? children ?? <UserIcon size={px} />}
    </span>
  );
}

export function AvatarGroup({
  maxCount,
  maxStyle,
  size = 'default',
  shape = 'circle',
  children,
  className = '',
  style,
}: AvatarGroupProps) {
  const childArray = React.Children.toArray(children);
  const px = getPixelSize(size);
  const overlapOffset = Math.round(px * 0.3);

  const visible = maxCount !== undefined ? childArray.slice(0, maxCount) : childArray;
  const overflow = maxCount !== undefined ? childArray.length - maxCount : 0;

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        ...style,
      }}
    >
      {visible.map((child, i) => (
        <span
          key={i}
          style={{
            marginLeft: i === 0 ? 0 : -overlapOffset,
            zIndex: visible.length - i,
            position: 'relative',
            display: 'inline-flex',
            border: '2px solid #fff',
            borderRadius: shape === 'circle' ? '50%' : '6px',
          }}
        >
          {React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<AvatarProps>, { size, shape })
            : child}
        </span>
      ))}

      {overflow > 0 && (
        <span
          style={{
            marginLeft: -overlapOffset,
            zIndex: 0,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: px,
            height: px,
            borderRadius: shape === 'circle' ? '50%' : '6px',
            backgroundColor: 'rgba(0,0,0,0.25)',
            color: '#fff',
            fontSize: px <= 24 ? '10px' : '12px',
            fontFamily: '"Heebo", sans-serif',
            border: '2px solid #fff',
            position: 'relative',
            ...maxStyle,
          }}
        >
          +{overflow}
        </span>
      )}
    </div>
  );
}

export default Avatar;
