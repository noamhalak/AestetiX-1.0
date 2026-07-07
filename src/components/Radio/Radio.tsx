import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Radio — AestetiX 1.0
//  Fix: native <input type="radio">, CSS classes, aria attrs
// ─────────────────────────────────────────────────────────────────

export type RadioSize = 'small' | 'default' | 'large';

export interface RadioProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: string;
  name?: string;
  onChange?: (value: string) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Radio({
  checked: controlledChecked,
  defaultChecked = false,
  disabled = false,
  value = '',
  name,
  onChange,
  children,
  className = '',
  style,
}: RadioProps) {
  const [checked, setChecked] = React.useState(controlledChecked ?? defaultChecked);

  React.useEffect(() => {
    if (controlledChecked !== undefined) setChecked(controlledChecked);
  }, [controlledChecked]);

  const handleChange = () => {
    if (disabled) return;
    setChecked(true);
    onChange?.(value);
  };

  const labelClasses = [
    'ax-radio',
    disabled ? 'ax-radio--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <label className={labelClasses} style={style}>
      <input
        type="radio"
        value={value}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="ax-radio__input"
        aria-checked={checked}
        aria-disabled={disabled}
      />
      <span className="ax-radio__dot" aria-hidden="true" />
      {children && (
        <span className="ax-radio__label">{children}</span>
      )}
    </label>
  );
}

// ── Radio.Group (Basic) ───────────────────────────────────────────
export interface RadioOption {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options?: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  className?: string;
  name?: string;
}

export function RadioGroup({
  options = [],
  value: controlled,
  defaultValue,
  onChange,
  disabled = false,
  direction = 'horizontal',
  className = '',
  name,
}: RadioGroupProps) {
  const [value, setValue] = React.useState(controlled ?? defaultValue ?? '');

  React.useEffect(() => {
    if (controlled !== undefined) setValue(controlled);
  }, [controlled]);

  const handleChange = (v: string) => {
    setValue(v);
    onChange?.(v);
  };

  const groupClasses = [
    'ax-radio-group',
    direction === 'vertical' ? 'ax-radio-group--vertical' : 'ax-radio-group--horizontal',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={groupClasses} role="radiogroup">
      {options.map((opt) => (
        <Radio
          key={opt.value}
          value={opt.value}
          name={name}
          checked={value === opt.value}
          disabled={disabled || opt.disabled}
          onChange={handleChange}
        >
          {opt.label}
        </Radio>
      ))}
    </div>
  );
}

// ── RadioButton (Button style item) ──────────────────────────────
export type RadioButtonStyle = 'outlined' | 'solid';
export type RadioButtonPosition = 'first' | 'center' | 'last' | 'only';

export interface RadioButtonProps {
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  size?: RadioSize;
  btnStyle?: RadioButtonStyle;
  position?: RadioButtonPosition;
  onChange?: (value: string) => void;
  children?: React.ReactNode;
}

export function RadioButton({
  value = '',
  checked = false,
  disabled = false,
  size = 'default',
  btnStyle = 'outlined',
  position = 'center',
  onChange,
  children,
}: RadioButtonProps) {
  const classes = [
    'ax-radio-btn',
    size === 'small' ? 'ax-radio-btn--small' : size === 'large' ? 'ax-radio-btn--large' : '',
    `ax-radio-btn--${position}`,
    checked ? `ax-radio-btn--checked ax-radio-btn--${btnStyle}` : '',
    disabled ? 'ax-radio-btn--disabled' : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => !disabled && onChange?.(value)}
      className={classes}
      aria-pressed={checked}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}

// ── RadioGroup.Buttons ────────────────────────────────────────────
export interface RadioGroupButtonsProps {
  options?: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  size?: RadioSize;
  btnStyle?: RadioButtonStyle;
  className?: string;
}

export function RadioGroupButtons({
  options = [],
  value: controlled,
  defaultValue,
  onChange,
  disabled = false,
  size = 'default',
  btnStyle = 'outlined',
  className = '',
}: RadioGroupButtonsProps) {
  const [value, setValue] = React.useState(controlled ?? defaultValue ?? '');

  React.useEffect(() => {
    if (controlled !== undefined) setValue(controlled);
  }, [controlled]);

  const handleChange = (v: string) => {
    setValue(v);
    onChange?.(v);
  };

  const getPosition = (i: number): RadioButtonPosition => {
    if (options.length === 1) return 'only';
    if (i === 0) return 'first';
    if (i === options.length - 1) return 'last';
    return 'center';
  };

  return (
    <div className={`ax-radio-group-buttons ${className}`.trim()} role="group">
      {options.map((opt, i) => (
        <RadioButton
          key={opt.value}
          value={opt.value}
          checked={value === opt.value}
          disabled={disabled || opt.disabled}
          size={size}
          btnStyle={btnStyle}
          position={getPosition(i)}
          onChange={handleChange}
        >
          {opt.label}
        </RadioButton>
      ))}
    </div>
  );
}

export default Radio;
