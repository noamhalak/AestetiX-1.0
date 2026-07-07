import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Button — AestetiX 1.0
//  Fix: CSS classes (ax-button*), aria-disabled, aria-busy
// ─────────────────────────────────────────────────────────────────

export type ButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link';
export type ButtonSize = 'small' | 'default' | 'large';
export type ButtonContent = 'default' | 'icon' | 'icon-left' | 'icon-right';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: ButtonType;
  size?: ButtonSize;
  content?: ButtonContent;
  danger?: boolean;
  ghost?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  block?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      btnType = 'default',
      size = 'default',
      content = 'default',
      danger = false,
      ghost = false,
      loading = false,
      icon,
      block = false,
      disabled,
      className = '',
      children,
      ...rest
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    const classes = [
      'ax-button',
      size === 'small' ? 'ax-button--small' : size === 'large' ? 'ax-button--large' : '',
      `ax-button--${btnType}`,
      danger ? 'ax-button--danger' : '',
      ghost ? 'ax-button--ghost' : '',
      block ? 'ax-button--block' : '',
      content === 'icon' ? 'ax-button--icon' : '',
      loading ? 'ax-button--loading' : '',
      isDisabled ? 'ax-button--disabled' : '',
      className,
    ].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={classes}
        aria-disabled={isDisabled}
        aria-busy={loading || undefined}
        {...rest}
      >
        {loading && (
          <span className="ax-button__spinner" aria-hidden="true" />
        )}
        {!loading && icon && (content === 'icon' || content === 'icon-left') && (
          <span className="ax-button__icon" aria-hidden="true">{icon}</span>
        )}
        {content !== 'icon' && children && (
          <span>{children}</span>
        )}
        {!loading && icon && content === 'icon-right' && (
          <span className="ax-button__icon" aria-hidden="true">{icon}</span>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default Button;
