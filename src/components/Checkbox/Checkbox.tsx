import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Checkbox — AestetiX 1.0
//  Fix: native <input type="checkbox">, CSS classes, aria attrs
// ─────────────────────────────────────────────────────────────────

export type CheckboxSize = 'default' | 'small';

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  required?: boolean;
  size?: CheckboxSize;
  onChange?: (checked: boolean) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  name?: string;
  value?: string;
}

export function Checkbox({
  checked: controlledChecked,
  defaultChecked = false,
  indeterminate = false,
  disabled = false,
  required = false,
  size = 'default',
  onChange,
  children,
  className = '',
  style,
  id,
  name,
  value,
}: CheckboxProps) {
  const [checked, setChecked] = React.useState(controlledChecked ?? defaultChecked);

  React.useEffect(() => {
    if (controlledChecked !== undefined) setChecked(controlledChecked);
  }, [controlledChecked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const next = e.target.checked;
    setChecked(next);
    onChange?.(next);
  };

  const labelClasses = [
    'ax-checkbox',
    size === 'small' ? 'ax-checkbox--small' : '',
    disabled ? 'ax-checkbox--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  const boxClasses = [
    'ax-checkbox__box',
    indeterminate ? 'ax-checkbox__box--indeterminate' : '',
  ].filter(Boolean).join(' ');

  return (
    <label className={labelClasses} style={style}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        required={required}
        onChange={handleChange}
        className="ax-checkbox__input"
        aria-checked={indeterminate ? 'mixed' : checked}
        aria-disabled={disabled}
        aria-required={required || undefined}
      />
      <span className={boxClasses} aria-hidden="true" />
      {children && (
        <span className="ax-checkbox__label">{children}</span>
      )}
    </label>
  );
}

// ── Checkbox.Group ────────────────────────────────────────────────
export interface CheckboxOption {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface CheckboxGroupProps {
  options?: CheckboxOption[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (values: string[]) => void;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  size?: CheckboxSize;
  className?: string;
}

export function CheckboxGroup({
  options = [],
  value: controlledValue,
  defaultValue = [],
  onChange,
  disabled = false,
  direction = 'horizontal',
  size = 'default',
  className = '',
}: CheckboxGroupProps) {
  const [value, setValue] = React.useState<string[]>(controlledValue ?? defaultValue);

  React.useEffect(() => {
    if (controlledValue !== undefined) setValue(controlledValue);
  }, [controlledValue]);

  const toggle = (v: string) => {
    const next = value.includes(v) ? value.filter((x) => x !== v) : [...value, v];
    setValue(next);
    onChange?.(next);
  };

  const groupClasses = [
    'ax-checkbox-group',
    direction === 'vertical' ? 'ax-checkbox-group--vertical' : 'ax-checkbox-group--horizontal',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={groupClasses} role="group">
      {options.map((opt) => (
        <Checkbox
          key={opt.value}
          value={opt.value}
          checked={value.includes(opt.value)}
          disabled={disabled || opt.disabled}
          size={size}
          onChange={() => toggle(opt.value)}
        >
          {opt.label}
        </Checkbox>
      ))}
    </div>
  );
}

export default Checkbox;
