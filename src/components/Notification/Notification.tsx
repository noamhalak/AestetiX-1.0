import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Notification — AestetiX 1.0
//  Figma page: ❖ Notification - ✅ 🎨🤖🤖 (node 5:66)
//
//  type: success | info | warning | error
//  placement: topRight | topLeft | bottomRight | bottomLeft
//  width: 384px, padding: 16px 24px
// ─────────────────────────────────────────────────────────────────

export type NotificationType = 'success' | 'info' | 'warning' | 'error';
export type NotificationPlacement = 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft';

export interface NotificationItem {
  key: string;
  type?: NotificationType;
  message: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  duration?: number;
  closable?: boolean;
  btn?: React.ReactNode;
  onClose?: () => void;
}

export interface NotificationContainerProps {
  items?: NotificationItem[];
  placement?: NotificationPlacement;
  onClose?: (key: string) => void;
  style?: React.CSSProperties;
}

const typeColors: Record<NotificationType, { iconColor: string }> = {
  success: { iconColor: '#52c41a' },
  info:    { iconColor: '#1677ff' },
  warning: { iconColor: '#faad14' },
  error:   { iconColor: '#ff4d4f' },
};

function TypeIcon({ type }: { type: NotificationType }) {
  const { iconColor } = typeColors[type];
  if (type === 'success') {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="11" fill={iconColor} />
        <path d="M5 11l4.5 4.5 8-8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === 'error') {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="11" fill={iconColor} />
        <path d="M7 7l8 8M15 7l-8 8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === 'warning') {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L21 20H1L11 2z" fill={iconColor} />
        <rect x="10.15" y="8.5" width="1.7" height="5" rx="0.85" fill="#fff" />
        <circle cx="11" cy="16" r="1" fill="#fff" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="11" fill={iconColor} />
      <rect x="10.15" y="6" width="1.7" height="6" rx="0.85" fill="#fff" />
      <circle cx="11" cy="15.5" r="1" fill="#fff" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 2l8 8M10 2l-8 8" stroke="rgba(0,0,0,0.45)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

interface NotificationCardProps {
  item: NotificationItem;
  onClose: (key: string) => void;
}

function NotificationCard({ item, onClose }: NotificationCardProps) {
  React.useEffect(() => {
    if (item.duration === 0) return;
    const t = setTimeout(() => {
      onClose(item.key);
      item.onClose?.();
    }, (item.duration ?? 4.5) * 1000);
    return () => clearTimeout(t);
  }, [item.key, item.duration]);

  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        padding: '16px 24px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 6px 16px rgba(0,0,0,0.08), 0 3px 6px rgba(0,0,0,0.04)',
        width: '384px',
        fontFamily: '"Heebo", sans-serif',
        position: 'relative',
      }}
    >
      {item.type && (
        <span style={{ flexShrink: 0, marginTop: '1px' }}>
          {item.icon ?? <TypeIcon type={item.type} />}
        </span>
      )}

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 600,
            color: 'rgba(0,0,0,0.88)',
            paddingRight: item.closable !== false ? '24px' : 0,
          }}
        >
          {item.message}
        </div>
        {item.description && (
          <div
            style={{
              fontSize: '14px',
              lineHeight: '22px',
              color: 'rgba(0,0,0,0.65)',
              marginTop: '8px',
            }}
          >
            {item.description}
          </div>
        )}
        {item.btn && (
          <div style={{ marginTop: '16px' }}>
            {item.btn}
          </div>
        )}
      </div>

      {item.closable !== false && (
        <button
          type="button"
          onClick={() => { onClose(item.key); item.onClose?.(); }}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            display: 'flex',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '2px',
            color: 'rgba(0,0,0,0.45)',
          }}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
}

const placementStyle: Record<NotificationPlacement, React.CSSProperties> = {
  topRight:    { top: 24, right: 24, alignItems: 'flex-end' },
  topLeft:     { top: 24, left: 24, alignItems: 'flex-start' },
  bottomRight: { bottom: 24, right: 24, alignItems: 'flex-end' },
  bottomLeft:  { bottom: 24, left: 24, alignItems: 'flex-start' },
};

export function NotificationContainer({
  items = [],
  placement = 'topRight',
  onClose,
  style,
}: NotificationContainerProps) {
  const handleClose = (key: string) => {
    onClose?.(key);
  };

  if (items.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 1100,
        display: 'flex',
        flexDirection: placement.startsWith('top') ? 'column' : 'column-reverse',
        gap: '16px',
        pointerEvents: 'none',
        ...placementStyle[placement],
        ...style,
      }}
    >
      {items.map((item) => (
        <div key={item.key} style={{ pointerEvents: 'auto' }}>
          <NotificationCard item={item} onClose={handleClose} />
        </div>
      ))}
    </div>
  );
}

export default NotificationContainer;
