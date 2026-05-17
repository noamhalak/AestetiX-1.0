import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Input — AestetiX 1.0
//  Figma page: ❖ Input - ✅ 🎨🤖🤖 (node 4:29)
//  Sizes: SM (24px) | default (32px) | large (40px)
//  States: default | hover | focus | disabled | error | warning
// ─────────────────────────────────────────────────────────────────

export type InputSize = 'small' | 'default' | 'large';
export type InputStatus = 'default' | 'error' | 'warning';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  size?: InputSize;
  status?: InputStatus;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  allowClear?: boolean;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
}

const heightMap: Record<InputSize, string> = {
  small:   'h-[24px]',
  default: 'h-[32px]',
  large:   'h-[40px]',
};

const paddingMap: Record<InputSize, string> = {
  small:   'px-[7px] py-0',
  default: 'px-[11px] py-0',
  large:   'px-[11px] py-0',
};

const fontSizeMap: Record<InputSize, string> = {
  small:   'text-[12px] leading-[20px]',
  default: 'text-[14px] leading-[22px]',
  large:   'text-[16px] leading-[24px]',
};

const borderStatusMap: Record<InputStatus, string> = {
  default: 'border-neutral-border hover:border-primary focus-within:border-primary focus-within:shadow-input',
  error:   'border-error hover:border-error focus-within:border-error focus-within:shadow-input-error',
  warning: 'border-warning hover:border-warning focus-within:border-warning focus-within:shadow-input-warning',
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'default',
      status = 'default',
      prefix,
      suffix,
      allowClear,
      addonBefore,
      addonAfter,
      disabled,
      className = '',
      value,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState(value ?? '');

    React.useEffect(() => {
      if (value !== undefined) setInternalValue(value);
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(e.target.value);
      onChange?.(e);
    };

    const handleClear = () => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value',
      )?.set;
      const inputEl = (ref as React.RefObject<HTMLInputElement>)?.current;
      if (inputEl && nativeInputValueSetter) {
        nativeInputValueSetter.call(inputEl, '');
        inputEl.dispatchEvent(new Event('input', { bubbles: true }));
      }
      setInternalValue('');
    };

    const wrapperClasses = [
      'inline-flex items-center',
      'bg-neutral-bg-container',
      'border border-solid rounded-[6px]',
      'transition-all duration-200',
      heightMap[size],
      disabled
        ? 'border-neutral-border bg-neutral-fill-tertiary cursor-not-allowed opacity-60'
        : borderStatusMap[status],
      (addonBefore || addonAfter) ? 'rounded-none' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const inputClasses = [
      'flex-1 bg-transparent outline-none border-none',
      'text-neutral-text placeholder:text-neutral-text-placeholder',
      'font-["Heebo",sans-serif]',
      fontSizeMap[size],
      paddingMap[size],
      disabled ? 'cursor-not-allowed' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const addonClasses = [
      'inline-flex items-center justify-center',
      'bg-neutral-fill-tertiary border-neutral-border',
      heightMap[size],
      'px-[11px]',
      fontSizeMap[size],
      'text-neutral-text-label',
    ].join(' ');

    return (
      <span className="inline-flex items-stretch w-full">
        {addonBefore && (
          <span className={`${addonClasses} border border-solid rounded-l-[6px] border-r-0`}>
            {addonBefore}
          </span>
        )}
        <span
          className={[
            wrapperClasses,
            addonBefore ? 'rounded-l-none' : '',
            addonAfter ? 'rounded-r-none' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {prefix && (
            <span className={`flex items-center text-neutral-text-label pl-[11px] ${fontSizeMap[size]}`}>
              {prefix}
            </span>
          )}
          <input
            ref={ref}
            disabled={disabled}
            value={internalValue}
            onChange={handleChange}
            className={inputClasses}
            {...rest}
          />
          {allowClear && internalValue && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className="flex items-center pr-[11px] text-neutral-text-label hover:text-neutral-text transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 5.293L10.146 1.147a.5.5 0 01.708.708L6.707 6l4.147 4.146a.5.5 0 01-.708.708L6 6.707 1.854 10.854a.5.5 0 01-.708-.708L5.293 6 1.146 1.854A.5.5 0 011.854 1.146L6 5.293z" />
              </svg>
            </button>
          )}
          {suffix && (
            <span className={`flex items-center text-neutral-text-label pr-[11px] ${fontSizeMap[size]}`}>
              {suffix}
            </span>
          )}
        </span>
        {addonAfter && (
          <span className={`${addonClasses} border border-solid rounded-r-[6px] border-l-0`}>
            {addonAfter}
          </span>
        )}
      </span>
    );
  },
);

Input.displayName = 'Input';
export default Input;
