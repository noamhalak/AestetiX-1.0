import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Button — AestetiX 1.0
//  Figma page: ❖ Button - ✅ 🎨🤖🤖 (node 4:7)
//  Variants extracted from Figma symbols:
//    type = primary | default | dashed | text | link
//    size = small | default | large
//    state = default | hover | focus | pressed | disabled | loading
//    content = default | icon | icon-left | icon-right
//    danger = boolean
//    ghost = boolean
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

// Height map — controlHeight from Figma: SM=24, base=32, LG=40
const heightMap: Record<ButtonSize, string> = {
  small:   'h-[24px]',
  default: 'h-[32px]',
  large:   'h-[40px]',
};

// Horizontal padding — matches Figma Auto Layout padding
const paddingMap: Record<ButtonSize, string> = {
  small:   'px-[7px]',    // paddingXS - 1
  default: 'px-[15px]',   // padding - 1
  large:   'px-[15px]',   // padding - 1
};

// Font size — Base=14px, SM=12px, LG=16px
const fontSizeMap: Record<ButtonSize, string> = {
  small:   'text-[12px] leading-[20px]',
  default: 'text-[14px] leading-[22px]',
  large:   'text-[16px] leading-[24px]',
};

// Border radius — borderRadiusLG=8 (all button sizes use LG)
const radiusBase = 'rounded-lg'; // 8px

function getVariantClasses(
  btnType: ButtonType,
  danger: boolean,
  ghost: boolean,
  disabled: boolean,
): string {
  if (disabled) {
    if (ghost) {
      return 'border border-solid border-neutral-border text-neutral-text-disabled bg-transparent cursor-not-allowed opacity-50';
    }
    // disabled — all types share same disabled visual
    return 'border border-solid border-neutral-border text-neutral-text-disabled bg-neutral-fill-tertiary cursor-not-allowed';
  }

  if (ghost) {
    const ghostDanger =
      'border border-solid border-error text-error bg-transparent hover:border-error/80 hover:text-error/80 active:border-error-active active:text-error-active';
    const ghostPrimary =
      'border border-solid border-primary text-primary bg-transparent hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active';
    if (danger) return ghostDanger;
    if (btnType === 'primary') return ghostPrimary;
    return 'border border-solid border-neutral-border text-neutral-text bg-transparent hover:border-primary hover:text-primary active:border-primary-active active:text-primary-active';
  }

  if (danger) {
    switch (btnType) {
      case 'primary':
        return 'bg-error text-neutral-text-solid border-transparent hover:bg-[#ff7875] active:bg-error-active';
      case 'dashed':
        return 'bg-neutral-bg-container border border-dashed border-error text-error hover:border-[#ff7875] hover:text-[#ff7875] active:border-error-active active:text-error-active';
      default:
        return 'bg-neutral-bg-container border border-solid border-error text-error hover:border-[#ff7875] hover:text-[#ff7875] active:border-error-active active:text-error-active';
    }
  }

  switch (btnType) {
    case 'primary':
      return 'bg-primary text-neutral-text-solid border-transparent hover:bg-primary-hover active:bg-primary-active';

    case 'default':
      return 'bg-neutral-bg-container border border-solid border-neutral-border text-neutral-text hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active';

    case 'dashed':
      return 'bg-neutral-bg-container border border-dashed border-neutral-border text-neutral-text hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active';

    case 'text':
      return 'bg-transparent border-transparent text-neutral-text hover:bg-neutral-fill-tertiary active:bg-neutral-fill-secondary';

    case 'link':
      return 'bg-transparent border-transparent text-primary underline-offset-4 hover:text-primary-hover active:text-primary-active';

    default:
      return '';
  }
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

    const baseClasses = [
      'inline-flex items-center justify-center gap-[8px]',
      'font-["Heebo",sans-serif]',
      'transition-colors duration-200',
      'select-none outline-none',
      'whitespace-nowrap',
      radiusBase,
      heightMap[size],
      fontSizeMap[size],
      block ? 'w-full' : '',
      content === 'icon' ? 'aspect-square px-0' : paddingMap[size],
      getVariantClasses(btnType, danger, ghost, !!isDisabled),
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button ref={ref} disabled={isDisabled} className={baseClasses} {...rest}>
        {loading && (
          <span className="inline-block w-[14px] h-[14px] border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {!loading && icon && (content === 'icon' || content === 'icon-left') && (
          <span className="flex items-center justify-center">{icon}</span>
        )}
        {content !== 'icon' && children && (
          <span>{children}</span>
        )}
        {!loading && icon && content === 'icon-right' && (
          <span className="flex items-center justify-center">{icon}</span>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default Button;
