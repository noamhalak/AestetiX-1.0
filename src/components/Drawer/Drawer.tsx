import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Drawer — AestetiX 1.0
//  Figma page: ❖ Drawer - ✅ 🎨🤖🤖 (node 5:63)
//
//  placement: right | left | top | bottom
//  size: default(378px) | large(736px)
//  Header: title 16px/24px, close button
//  Footer: optional
// ─────────────────────────────────────────────────────────────────

export type DrawerPlacement = 'right' | 'left' | 'top' | 'bottom';
export type DrawerSize = 'default' | 'large';

export interface DrawerProps {
  open?: boolean;
  placement?: DrawerPlacement;
  size?: DrawerSize;
  width?: number | string;
  height?: number | string;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  closable?: boolean;
  maskClosable?: boolean;
  mask?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 3l10 10M13 3L3 13" stroke="rgba(0,0,0,0.45)" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

const sizeMap: Record<DrawerSize, number> = {
  default: 378,
  large: 736,
};

export function Drawer({
  open = false,
  placement = 'right',
  size = 'default',
  width,
  height,
  title,
  footer,
  closable = true,
  maskClosable = true,
  mask = true,
  onClose,
  children,
  className = '',
  style,
  bodyStyle,
}: DrawerProps) {
  const isHorizontal = placement === 'left' || placement === 'right';
  const resolvedWidth = isHorizontal ? (width ?? sizeMap[size]) : '100%';
  const resolvedHeight = !isHorizontal ? (height ?? sizeMap[size]) : '100%';

  const translateFrom = {
    right:  'translateX(100%)',
    left:   'translateX(-100%)',
    top:    'translateY(-100%)',
    bottom: 'translateY(100%)',
  }[placement];

  const drawerStyle: React.CSSProperties = {
    position: 'fixed',
    [placement]: 0,
    top: placement === 'left' || placement === 'right' ? 0 : undefined,
    bottom: placement === 'bottom' ? 0 : undefined,
    width: resolvedWidth,
    height: resolvedHeight,
    backgroundColor: '#fff',
    boxShadow: '-6px 0 16px rgba(0,0,0,0.08), -3px 0 6px rgba(0,0,0,0.04)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1000,
    transform: open ? 'none' : translateFrom,
    transition: 'transform 0.3s cubic-bezier(0.7,0.3,0.1,1)',
    fontFamily: '"Heebo", sans-serif',
    ...style,
  };

  if (!open && !mask) return null;

  return (
    <>
      {mask && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.45)',
            zIndex: 999,
            opacity: open ? 1 : 0,
            transition: 'opacity 0.3s',
            pointerEvents: open ? 'auto' : 'none',
          }}
          onClick={() => maskClosable && onClose?.()}
        />
      )}

      <div className={className} style={drawerStyle}>
        {/* Header */}
        {(title || closable) && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 24px',
              borderBottom: '1px solid #f0f0f0',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: 600,
                color: 'rgba(0,0,0,0.88)',
              }}
            >
              {title}
            </span>
            {closable && (
              <button
                type="button"
                onClick={onClose}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '4px',
                  color: 'rgba(0,0,0,0.45)',
                }}
              >
                <CloseIcon />
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
            ...bodyStyle,
          }}
        >
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div
            style={{
              padding: '16px 24px',
              borderTop: '1px solid #f0f0f0',
              flexShrink: 0,
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </>
  );
}

export default Drawer;
