import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Checkbox — AestetiX 1.0
//  Figma page: ❖ Checkbox - ✅ 🎨🤖🤖 (node 4:26)
//  States: default | hover | focused | disabled
//  Sizes: default (16×16 box, height 22px) | small
// ─────────────────────────────────────────────────────────────────

export type CheckboxSize = 'default' | 'small';

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  size?: CheckboxSize;
  onChange?: (checked: boolean) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function CheckboxBox({
  checked,
  indeterminate,
  disabled,
  focused,
  hovered,
  size,
}: {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  focused?: boolean;
  hovered?: boolean;
  size: CheckboxSize;
}) {
  const boxSize = size === 'small' ? 14 : 16;
  const isChecked = checked || indeterminate;

  const borderColor = disabled
    ? '#d9d9d9'
    : isChecked
      ? '#1677ff'
      : hovered || focused
        ? '#1677ff'
        : '#d9d9d9';

  const bg = disabled
    ? isChecked ? '#bfbfbf' : '#f5f5f5'
    : isChecked
      ? '#1677ff'
      : '#ffffff';

  const shadow = focused && !disabled ? '0 0 0 2px rgba(22,119,255,0.2)' : undefined;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: boxSize,
        height: boxSize,
        border: `1px solid ${borderColor}`,
        borderRadius: 2,
        backgroundColor: bg,
        boxShadow: shadow,
        flexShrink: 0,
        transition: 'all 0.2s',
      }}
    >
      {checked && !indeterminate && (
        <svg width={boxSize - 4} height={boxSize - 4} viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {indeterminate && (
        <svg width={boxSize - 4} height={boxSize - 4} viewBox="0 0 12 12" fill="none">
          <line x1="2" y1="6" x2="10" y2="6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );
}

export function Checkbox({
  checked: controlledChecked,
  defaultChecked = false,
  indeterminate = false,
  disabled = false,
  size = 'default',
  onChange,
  children,
  className = '',
  style,
}: CheckboxProps) {
  const [checked, setChecked] = React.useState(controlledChecked ?? defaultChecked);
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  React.useEffect(() => {
    if (controlledChecked !== undefined) setChecked(controlledChecked);
  }, [controlledChecked]);

  const handleChange = () => {
    if (disabled) return;
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };

  const labelSize = size === 'small' ? '12px' : '14px';
  const labelLine = size === 'small' ? '20px' : '22px';

  return (
    <label
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        opacity: disabled ? 0.65 : 1,
        ...style,
      }}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <CheckboxBox
        checked={checked}
        indeterminate={indeterminate}
        disabled={disabled}
        focused={focused}
        hovered={hovered}
        size={size}
      />
      {children && (
        <span
          style={{
            fontSize: labelSize,
            lineHeight: labelLine,
            fontFamily: '"Heebo", sans-serif',
            color: disabled ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.88)',
          }}
        >
          {children}
        </span>
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

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        gap: direction === 'vertical' ? '8px' : '16px',
        flexWrap: 'wrap',
      }}
    >
      {options.map((opt) => (
        <Checkbox
          key={opt.value}
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
