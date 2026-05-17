import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Breadcrumb — AestetiX 1.0
//  Figma page: ❖ Breadcrumb - ✅ 🎨🤖🤖 (node 4:17)
//
//  Item height: 22px, font 14px/22px Heebo
//  separator: default '/'
// ─────────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  title: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function BreadcrumbLink({
  item,
  isLast,
}: {
  item: BreadcrumbItem;
  isLast: boolean;
}) {
  const [hovered, setHovered] = React.useState(false);
  const isClickable = !isLast && !item.disabled && (item.href || item.onClick);

  const textStyle: React.CSSProperties = {
    fontSize: '14px',
    lineHeight: '22px',
    fontFamily: '"Heebo", sans-serif',
    color: isLast
      ? 'rgba(0,0,0,0.88)'
      : item.disabled
        ? 'rgba(0,0,0,0.25)'
        : hovered
          ? '#4096ff'
          : 'rgba(0,0,0,0.45)',
    cursor: isClickable ? 'pointer' : 'default',
    textDecoration: 'none',
    transition: 'color 0.15s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
  };

  const content = (
    <>
      {item.icon && (
        <span style={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
          {item.icon}
        </span>
      )}
      {item.title}
    </>
  );

  if (item.href && !isLast && !item.disabled) {
    return (
      <a
        href={item.href}
        style={textStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={item.onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <span
      style={textStyle}
      onMouseEnter={() => isClickable && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={isClickable ? item.onClick : undefined}
    >
      {content}
    </span>
  );
}

export function Breadcrumb({
  items = [],
  separator = '/',
  className = '',
  style,
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px',
        fontFamily: '"Heebo", sans-serif',
        ...style,
      }}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            <BreadcrumbLink item={item} isLast={isLast} />
            {!isLast && (
              <span
                style={{
                  fontSize: '14px',
                  lineHeight: '22px',
                  color: 'rgba(0,0,0,0.45)',
                  userSelect: 'none',
                }}
              >
                {separator}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;
