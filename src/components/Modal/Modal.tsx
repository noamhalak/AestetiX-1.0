import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Modal — AestetiX 1.0
//  Fix: CSS classes, role="dialog", aria-modal, aria-labelledby
// ─────────────────────────────────────────────────────────────────

let _modalIdCounter = 0;

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M12.8 3.2L3.2 12.8M3.2 3.2L12.8 12.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
      <path d="M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zm0 5a1.25 1.25 0 110 2.5A1.25 1.25 0 0111 5zm1.5 11h-3v-6h3v6z" />
    </svg>
  );
}
function SuccessIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
      <path d="M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zm5.207 7.793a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9.5 13.086l5.293-5.293a1 1 0 011.414 0z" />
    </svg>
  );
}
function WarningIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="22" height="22" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
      <path d="M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zm0 5a1.25 1.25 0 011.25 1.25v5.5a1.25 1.25 0 01-2.5 0v-5.5A1.25 1.25 0 0111 5zm0 9.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
    </svg>
  );
}
function ErrorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
      <path d="M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zM9.293 7.879a1 1 0 011.414 0L11 8.172l.293-.293a1 1 0 111.414 1.414L12.414 9.586l.293.293a1 1 0 11-1.414 1.414L11 10.999l-.293.293a1 1 0 01-1.414-1.414L9.586 9.586l-.293-.293a1 1 0 010-1.414z" />
    </svg>
  );
}

const statusConfig = {
  info:    { icon: InfoIcon,    color: 'text-info',    bg: 'bg-info-bg' },
  success: { icon: SuccessIcon, color: 'text-success', bg: 'bg-success-bg' },
  warning: { icon: WarningIcon, color: 'text-warning', bg: 'bg-warning-bg' },
  error:   { icon: ErrorIcon,   color: 'text-error',   bg: 'bg-error-bg' },
} as const;

function SlotPlaceholder() {
  return <div className="ax-modal__slot">Slot component</div>;
}

// ── Modal (base) ──────────────────────────────────────────────────
export interface ModalProps {
  open?: boolean;
  title?: React.ReactNode;
  titleIcon?: React.ReactNode;
  children?: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  showOk?: boolean;
  showCancel?: boolean;
  position?: 'default' | 'top' | 'center';
  className?: string;
  width?: number | string;
}

export function Modal({
  open = true,
  title = 'כותרת מודל',
  titleIcon,
  children,
  onOk,
  onCancel,
  okText = 'אוקיי',
  cancelText = 'בטל',
  showOk = true,
  showCancel = true,
  position = 'default',
  className = '',
  width = 520,
}: ModalProps) {
  const titleId = React.useId();
  if (!open) return null;

  return (
    <div
      className={`ax-modal-overlay ax-modal-overlay--${position}`}
      onClick={(e) => e.target === e.currentTarget && onCancel?.()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`ax-modal ${className}`.trim()}
        style={{ width }}
      >
        <div className="ax-modal__head">
          <button
            type="button"
            onClick={onCancel}
            className="ax-modal__close"
            aria-label="סגור"
          >
            <CloseIcon />
          </button>
          <p id={titleId} dir="auto" className="ax-modal__title">{title}</p>
          {titleIcon && (
            <span className="ax-modal__title-icon" aria-hidden="true">{titleIcon}</span>
          )}
        </div>

        <div className="ax-modal__body">
          {children ?? <SlotPlaceholder />}
        </div>

        <div className="ax-modal__footer">
          {showOk && (
            <button type="button" onClick={onOk} className="ax-modal__btn ax-modal__btn--ok" dir="auto">
              {okText}
            </button>
          )}
          {showCancel && (
            <button type="button" onClick={onCancel} className="ax-modal__btn ax-modal__btn--cancel" dir="auto">
              {cancelText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Modal__Information ────────────────────────────────────────────
export type InformationStatus = 'info' | 'error' | 'success' | 'warning';

export interface ModalInformationProps {
  open?: boolean;
  status?: InformationStatus;
  title?: React.ReactNode;
  description?: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  width?: number | string;
}

export function ModalInformation({
  open = true,
  status = 'info',
  title,
  description,
  onOk,
  onCancel,
  okText = 'אוקיי',
  cancelText = 'בטל',
  width = 400,
}: ModalInformationProps) {
  const titleId = React.useId();
  const descId = React.useId();
  if (!open) return null;
  const { icon: StatusIcon, color } = statusConfig[status];

  return (
    <div
      className="ax-modal-overlay ax-modal-overlay--center"
      onClick={(e) => e.target === e.currentTarget && onCancel?.()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descId : undefined}
        className="ax-modal"
        style={{ width }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '32px 24px 24px', gap: '16px' }}>
          <div className={`ax-modal-info__icon-wrap ${color}`}>
            <StatusIcon className="ax-modal-info__icon" />
          </div>
          {title && <p id={titleId} className="ax-modal-info__title">{title}</p>}
          {description && <p id={descId} className="ax-modal-info__desc">{description}</p>}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', paddingBottom: '24px', paddingLeft: '24px', paddingRight: '24px' }}>
          {cancelText && (
            <button type="button" onClick={onCancel} className="ax-modal__btn ax-modal__btn--cancel">
              {cancelText}
            </button>
          )}
          <button type="button" onClick={onOk} className="ax-modal__btn ax-modal__btn--ok">
            {okText}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Modal__Confirmation ───────────────────────────────────────────
export interface ModalConfirmationProps {
  open?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  danger?: boolean;
  width?: number | string;
}

export function ModalConfirmation({
  open = true,
  title,
  description,
  onOk,
  onCancel,
  okText = 'כן',
  cancelText = 'לא',
  danger = false,
  width = 400,
}: ModalConfirmationProps) {
  const titleId = React.useId();
  const descId = React.useId();
  if (!open) return null;

  return (
    <div
      className="ax-modal-overlay ax-modal-overlay--center"
      onClick={(e) => e.target === e.currentTarget && onCancel?.()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descId : undefined}
        className="ax-modal"
        style={{ width }}
      >
        <div style={{ padding: '24px 24px 16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <WarningIcon className="ax-modal-confirm__warning-icon" style={{ color: 'var(--ax-color-warning)' } as React.CSSProperties} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {title && <p id={titleId} className="ax-modal-info__title">{title}</p>}
            {description && <p id={descId} className="ax-modal-info__desc">{description}</p>}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px' }}>
          <button type="button" onClick={onCancel} className="ax-modal__btn ax-modal__btn--cancel">
            {cancelText}
          </button>
          <button
            type="button"
            onClick={onOk}
            className={`ax-modal__btn ax-modal__btn--ok${danger ? ' ax-modal__btn--ok--danger' : ''}`}
          >
            {okText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
