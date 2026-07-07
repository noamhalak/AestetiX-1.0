import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Alert — AestetiX 1.0
//  Fix: CSS classes, role="alert"/"status", no inline styles
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
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="7" fill={color} />
      <path d="M3.5 7l2.5 2.5 4.5-4.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InfoIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="7" fill={color} />
      <rect x="6.3" y="6" width="1.4" height="4.5" rx="0.7" fill="#fff" />
      <circle cx="7" cy="4.2" r="0.8" fill="#fff" />
    </svg>
  );
}

function WarningIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1L13.5 12H0.5L7 1z" fill={color} />
      <rect x="6.3" y="5.5" width="1.4" height="3.5" rx="0.7" fill="#fff" />
      <circle cx="7" cy="10.5" r="0.8" fill="#fff" />
    </svg>
  );
}

function ErrorIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
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

  // role="alert" for error/warning (assertive), role="status" for info/success (polite)
  const role = type === 'error' || type === 'warning' ? 'alert' : 'status';
  const ariaLive = type === 'error' || type === 'warning' ? 'assertive' : 'polite';

  const classes = [
    'ax-alert',
    `ax-alert--${type}`,
    description ? 'ax-alert--with-description' : '',
    banner ? 'ax-alert--banner' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      role={role}
      aria-live={ariaLive}
      style={{
        ...(banner ? {} : { backgroundColor: bg, borderColor: border }),
        ...(banner ? { backgroundColor: bg } : {}),
        ...style,
      }}
    >
      {showIcon && (
        <span className="ax-alert__icon" aria-hidden="true">
          {icon ?? <AlertIcon type={type} />}
        </span>
      )}

      <span className="ax-alert__content">
        <span className="ax-alert__message">{message}</span>
        {description && (
          <span className="ax-alert__description">{description}</span>
        )}
      </span>

      {closable && (
        <button
          type="button"
          onClick={handleClose}
          className="ax-alert__close"
          aria-label="סגור התראה"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
}

export default Alert;
