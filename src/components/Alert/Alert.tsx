import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Alert — AestetiX 1.0
//  Figma page: ❖ Alert - ✅ 🎨🤖🤖 (node 4:38)
//
//  type: success | info | warning | error
//  banner: boolean (no border/radius, full-width)
//  showDescription: boolean
//  closable: boolean
// ─────────────────────────────────────────────────────────────────

export type AlertType = 'success' | 'info' | 'warning' | 'error';

export interface AlertProps {
  type?: AlertType;
  message: React.ReactNode;
  description?: React.ReactNode;
  banner?: boolean;
  closable?: boolean;
  showIcon?: boolean;
  icon?: React.ReactNode;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const alertTokens: Record<AlertType, { bg: string; border: string; iconColor: string }> = {
  success: { bg: '#f6ffed', border: '#b7eb8f', iconColor: '#52c41a' },
  info:    { bg: '#e6f4ff', border: '#91caff', iconColor: '#1677ff' },
  warning: { bg: '#fffbe6', border: '#ffe58f', iconColor: '#faad14' },
  error:   { bg: '#fff2f0', border: '#ffccc7', iconColor: '#ff4d4f' },
};

function SuccessIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="7" fill={color} />
      <path d="M3.5 7l2.5 2.5 4.5-4.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InfoIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="7" fill={color} />
      <rect x="6.3" y="6" width="1.4" height="4.5" rx="0.7" fill="#fff" />
      <circle cx="7" cy="4.2" r="0.8" fill="#fff" />
    </svg>
  );
}

function WarningIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1L13.5 12H0.5L7 1z" fill={color} />
      <rect x="6.3" y="5.5" width="1.4" height="3.5" rx="0.7" fill="#fff" />
      <circle cx="7" cy="10.5" r="0.8" fill="#fff" />
    </svg>
  );
}

function ErrorIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="7" fill={color} />
      <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function AlertIcon({ type }: { type: AlertType }) {
  const { iconColor } = alertTokens[type];
  switch (type) {
    case 'success': return <SuccessIcon color={iconColor} />;
    case 'info':    return <InfoIcon color={iconColor} />;
    case 'warning': return <WarningIcon color={iconColor} />;
    case 'error':   return <ErrorIcon color={iconColor} />;
  }
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 2l8 8M10 2l-8 8" stroke="rgba(0,0,0,0.45)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function Alert({
  type = 'info',
  message,
  description,
  banner = false,
  closable = false,
  showIcon = true,
  icon,
  onClose,
  className = '',
  style,
}: AlertProps) {
  const [closed, setClosed] = React.useState(false);

  if (closed) return null;

  const { bg, border } = alertTokens[type];

  const handleClose = () => {
    setClosed(true);
    onClose?.();
  };

  return (
    <div
      className={className}
      role="alert"
      style={{
        display: 'flex',
        alignItems: description ? 'flex-start' : 'center',
        gap: '8px',
        padding: description ? '12px 16px' : '8px 16px',
        backgroundColor: bg,
        border: banner ? 'none' : `1px solid ${border}`,
        borderRadius: banner ? 0 : '6px',
        fontFamily: '"Heebo", sans-serif',
        fontSize: '14px',
        lineHeight: '22px',
        color: 'rgba(0,0,0,0.88)',
        ...style,
      }}
    >
      {showIcon && (
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
            marginTop: description ? '4px' : 0,
          }}
        >
          {icon ?? <AlertIcon type={type} />}
        </span>
      )}

      <span style={{ flex: 1, minWidth: 0 }}>
        <span
          style={{
            display: 'block',
            fontWeight: description ? 600 : 400,
            fontSize: '14px',
            lineHeight: '22px',
          }}
        >
          {message}
        </span>
        {description && (
          <span
            style={{
              display: 'block',
              fontSize: '14px',
              lineHeight: '22px',
              color: 'rgba(0,0,0,0.65)',
              marginTop: '4px',
            }}
          >
            {description}
          </span>
        )}
      </span>

      {closable && (
        <button
          type="button"
          onClick={handleClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            flexShrink: 0,
            marginTop: description ? '2px' : 0,
          }}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
}

export default Alert;
