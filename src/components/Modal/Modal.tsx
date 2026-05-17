import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Modal — AestetiX 1.0
//  Figma page: ❖ Modal - ✅ 🎨🤖🤖 (node 5:65)
//  Extracted from get_design_context node 137:4144
//
//  Variants:
//    Modal (Default, with_content)
//    Modal__Information: status = info | error | success | warning
//    Modal__Confirmation
//    Modal__Overlay: position = default | top | center
// ─────────────────────────────────────────────────────────────────

// ── Close icon (×) ────────────────────────────────────────────────
function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.8 3.2L3.2 12.8M3.2 3.2L12.8 12.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ── Status icons ──────────────────────────────────────────────────
function InfoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
      <path d="M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zm0 5a1.25 1.25 0 110 2.5A1.25 1.25 0 0111 5zm1.5 11h-3v-6h3v6z" />
    </svg>
  );
}
function SuccessIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
      <path d="M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zm5.207 7.793a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9.5 13.086l5.293-5.293a1 1 0 011.414 0z" />
    </svg>
  );
}
function WarningIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
      <path d="M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zm0 5a1.25 1.25 0 011.25 1.25v5.5a1.25 1.25 0 01-2.5 0v-5.5A1.25 1.25 0 0111 5zm0 9.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
    </svg>
  );
}
function ErrorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
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

// ── Slot placeholder ──────────────────────────────────────────────
function SlotPlaceholder() {
  return (
    <div className="flex items-center justify-center h-[120px] w-full border border-dashed border-neutral-border rounded-[6px] bg-neutral-fill-quaternary">
      <span className="text-[14px] leading-[22px] font-['Heebo',sans-serif] text-neutral-text">
        Slot component
      </span>
    </div>
  );
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
  if (!open) return null;

  const positionClasses: Record<string, string> = {
    default: 'items-end justify-center pb-[100px]',
    top:     'items-start justify-center pt-[100px]',
    center:  'items-center justify-center',
  };

  return (
    <div
      className={`fixed inset-0 z-[1000] flex ${positionClasses[position]} bg-black/45`}
      onClick={(e) => e.target === e.currentTarget && onCancel?.()}
    >
      {/* Modal panel — width=520, border-radius=8px (LG), shadow from Figma */}
      <div
        className={[
          'relative flex flex-col bg-neutral-bg-floating rounded-lg shadow-modal',
          'max-h-[90vh] overflow-hidden',
          className,
        ].join(' ')}
        style={{ width }}
      >
        {/* Head — padding: top 16, right 24, bottom 8, left 16 */}
        <div className="flex items-center gap-[8px] pt-[16px] pr-[24px] pb-[8px] pl-[16px] shrink-0">
          {/* Close button */}
          <button
            type="button"
            onClick={onCancel}
            className="flex items-center justify-center w-[32px] h-[32px] rounded-lg text-neutral-text-label hover:bg-neutral-fill-tertiary hover:text-neutral-text transition-colors shrink-0"
          >
            <CloseIcon />
          </button>
          {/* Title — 16px/24px Heebo Regular (Heading 5) */}
          <p
            dir="auto"
            className="flex-1 text-[16px] leading-[24px] font-normal font-['Heebo',sans-serif] text-neutral-text min-w-0 text-right"
          >
            {title}
          </p>
          {titleIcon && (
            <span className="flex items-center justify-center w-[24px] h-[24px] shrink-0">
              {titleIcon}
            </span>
          )}
        </div>

        {/* Content wrapper — padding: bottom 12, horizontal 24 */}
        <div className="flex flex-col items-start pb-[12px] px-[24px] shrink-0 overflow-y-auto">
          {children ?? <SlotPlaceholder />}
        </div>

        {/* Footer — padding: bottom 24, horizontal 24, gap 8 */}
        <div className="flex gap-[8px] items-center pb-[24px] px-[24px] shrink-0">
          {showOk && (
            <button
              type="button"
              onClick={onOk}
              className="flex items-center justify-center h-[32px] px-[16px] py-[4px] gap-[8px] bg-primary text-neutral-text-solid text-[14px] leading-[22px] font-normal font-['Heebo',sans-serif] rounded-lg transition-colors hover:bg-primary-hover active:bg-primary-active whitespace-nowrap"
              dir="auto"
            >
              {okText}
            </button>
          )}
          {showCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="flex items-center justify-center h-[32px] px-[16px] py-[4px] gap-[8px] bg-neutral-bg-container border border-solid border-neutral-border text-neutral-text text-[14px] leading-[22px] font-normal font-['Heebo',sans-serif] rounded-lg transition-colors hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active whitespace-nowrap"
              dir="auto"
            >
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
  if (!open) return null;
  const { icon: StatusIcon, color } = statusConfig[status];

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/45"
      onClick={(e) => e.target === e.currentTarget && onCancel?.()}
    >
      <div
        className="relative flex flex-col bg-neutral-bg-floating rounded-lg shadow-modal overflow-hidden"
        style={{ width }}
      >
        <div className="flex flex-col items-center text-center px-[24px] pt-[32px] pb-[24px] gap-[16px]">
          <div className={`text-[48px] ${color}`}>
            <StatusIcon className="w-[48px] h-[48px]" />
          </div>
          {title && (
            <p className="text-[16px] leading-[24px] font-semibold font-['Heebo',sans-serif] text-neutral-text">
              {title}
            </p>
          )}
          {description && (
            <p className="text-[14px] leading-[22px] font-normal font-['Heebo',sans-serif] text-neutral-text-secondary">
              {description}
            </p>
          )}
        </div>
        <div className="flex justify-center gap-[8px] pb-[24px] px-[24px]">
          {cancelText && (
            <button
              type="button"
              onClick={onCancel}
              className="h-[32px] px-[16px] bg-neutral-bg-container border border-solid border-neutral-border text-neutral-text text-[14px] font-['Heebo',sans-serif] rounded-lg hover:border-primary-hover hover:text-primary-hover transition-colors"
            >
              {cancelText}
            </button>
          )}
          <button
            type="button"
            onClick={onOk}
            className="h-[32px] px-[16px] bg-primary text-neutral-text-solid text-[14px] font-['Heebo',sans-serif] rounded-lg hover:bg-primary-hover active:bg-primary-active transition-colors"
          >
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
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/45"
      onClick={(e) => e.target === e.currentTarget && onCancel?.()}
    >
      <div
        className="relative flex flex-col bg-neutral-bg-floating rounded-lg shadow-modal overflow-hidden"
        style={{ width }}
      >
        <div className="px-[24px] pt-[24px] pb-[16px] flex items-start gap-[12px]">
          <WarningIcon className="w-[22px] h-[22px] shrink-0 mt-[1px] text-warning" />
          <div className="flex flex-col gap-[4px]">
            {title && (
              <p className="text-[16px] leading-[24px] font-semibold font-['Heebo',sans-serif] text-neutral-text">
                {title}
              </p>
            )}
            {description && (
              <p className="text-[14px] leading-[22px] font-normal font-['Heebo',sans-serif] text-neutral-text-secondary">
                {description}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-[8px] pb-[16px] px-[24px]">
          <button
            type="button"
            onClick={onCancel}
            className="h-[32px] px-[16px] bg-neutral-bg-container border border-solid border-neutral-border text-neutral-text text-[14px] font-['Heebo',sans-serif] rounded-lg hover:border-primary-hover hover:text-primary-hover transition-colors"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={onOk}
            className={[
              'h-[32px] px-[16px] text-neutral-text-solid text-[14px] font-["Heebo",sans-serif] rounded-lg transition-colors',
              danger
                ? 'bg-error hover:bg-[#ff7875] active:bg-error-active'
                : 'bg-primary hover:bg-primary-hover active:bg-primary-active',
            ].join(' ')}
          >
            {okText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
