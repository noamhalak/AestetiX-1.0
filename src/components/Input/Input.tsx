import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Input — AestetiX 1.0
//  Fix: CSS classes, aria-invalid, aria-required
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
  required?: boolean;
  helperText?: string;
  label?: string;
}

const sizeClass: Record<InputSize, string> = {
  small:   'ax-input--small',
  default: '',
  large:   'ax-input--large',
};
const fieldSizeClass: Record<InputSize, string> = {
  small:   'ax-input__field--small',
  default: '',
  large:   'ax-input__field--large',
};
const addonSizeClass: Record<InputSize, string> = {
  small:   'ax-input__addon--small',
  default: '',
  large:   'ax-input__addon--large',
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
      required,
      helperText,
      label,
      id,
      'aria-describedby': ariaDescribedBy,
      ...rest
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState(value ?? '');
    const helperId = helperText && id ? `${id}-helper` : undefined;

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
      'ax-input',
      sizeClass[size],
      disabled ? 'ax-input--disabled' : status === 'error' ? 'ax-input--error' : status === 'warning' ? 'ax-input--warning' : '',
      addonBefore ? 'ax-input--addon-before' : '',
      addonAfter ? 'ax-input--addon-after' : '',
      className,
    ].filter(Boolean).join(' ');

    const fieldClasses = [
      'ax-input__field',
      fieldSizeClass[size],
    ].filter(Boolean).join(' ');

    const describedBy = [helperId, ariaDescribedBy].filter(Boolean).join(' ') || undefined;

    return (
      <span className="ax-input-wrapper">
        {addonBefore && (
          <span className={`ax-input__addon ax-input__addon--before ${addonSizeClass[size]}`.trim()}>
            {addonBefore}
          </span>
        )}
        <span className={wrapperClasses}>
          {prefix && (
            <span className="ax-input__prefix" aria-hidden="true">
              {prefix}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            value={internalValue}
            onChange={handleChange}
            className={fieldClasses}
            aria-invalid={status === 'error' || undefined}
            aria-required={required || undefined}
            aria-describedby={describedBy}
            required={required}
            {...rest}
          />
          {allowClear && internalValue && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className="ax-input__clear"
              aria-label="נקה שדה"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M6 5.293L10.146 1.147a.5.5 0 01.708.708L6.707 6l4.147 4.146a.5.5 0 01-.708.708L6 6.707 1.854 10.854a.5.5 0 01-.708-.708L5.293 6 1.146 1.854A.5.5 0 011.854 1.146L6 5.293z" />
              </svg>
            </button>
          )}
          {suffix && (
            <span className="ax-input__suffix">{suffix}</span>
          )}
        </span>
        {addonAfter && (
          <span className={`ax-input__addon ax-input__addon--after ${addonSizeClass[size]}`.trim()}>
            {addonAfter}
          </span>
        )}
        {helperText && id && (
          <span id={helperId} style={{ display: 'none' }}>{helperText}</span>
        )}
      </span>
    );
  },
);

Input.displayName = 'Input';
export default Input;
