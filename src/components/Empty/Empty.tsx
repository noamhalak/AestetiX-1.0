import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Empty — AestetiX 1.0
//  Figma page: ❖ Empty - ✅ 🎨🤖🤖 (node 5:49)
//
//  Default illustration + description + optional extra content
// ─────────────────────────────────────────────────────────────────

export interface EmptyProps {
  image?: React.ReactNode | 'default' | 'simple';
  imageStyle?: React.CSSProperties;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function DefaultImage() {
  return (
    <svg width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0 1)" fill="none" fillRule="evenodd">
        <ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7" />
        <g fillRule="nonzero" stroke="#d9d9d9">
          <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" />
          <path
            d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
            fill="#fafafa"
          />
        </g>
      </g>
    </svg>
  );
}

function SimpleImage() {
  return (
    <svg width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0 1)" fill="none" fillRule="evenodd">
        <ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7" />
        <g fillRule="nonzero" stroke="#d9d9d9">
          <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" fill="#f5f5f5" />
        </g>
      </g>
    </svg>
  );
}

export const EMPTY_IMAGE_DEFAULT = 'default' as const;
export const EMPTY_IMAGE_SIMPLE = 'simple' as const;

export function Empty({
  image = 'default',
  imageStyle,
  description = 'אין נתונים',
  children,
  className = '',
  style,
}: EmptyProps) {
  const renderImage = () => {
    if (image === 'default') return <DefaultImage />;
    if (image === 'simple') return <SimpleImage />;
    if (image === null || image === false) return null;
    return image;
  };

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 8px',
        fontFamily: '"Heebo", sans-serif',
        ...style,
      }}
    >
      <div style={{ marginBottom: '8px', ...imageStyle }}>
        {renderImage()}
      </div>

      {description !== false && description !== null && (
        <p
          style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            lineHeight: '22px',
            color: 'rgba(0,0,0,0.25)',
          }}
        >
          {description}
        </p>
      )}

      {children}
    </div>
  );
}

export default Empty;
