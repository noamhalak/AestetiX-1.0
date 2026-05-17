import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Radio — AestetiX 1.0
//  Figma page: ❖ Radio - ✅ 🎨🤖🤖 (node 4:31)
//
//  Components:
//    Radio         — state × checked (height 22px)
//    Radio.Group   — items=2-6 × direction=vertical/horizontal
//    RadioButton   — state × size × style(outlined/solid) × position(first/center/last)
//    RadioGroup.Buttons — items=2-6 × size × style
// ─────────────────────────────────────────────────────────────────

export type RadioSize = 'small' | 'default' | 'large';

export interface RadioProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: string;
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
  onChange,
  children,
  className = '',
  style,
}: RadioProps) {
  const [checked, setChecked] = React.useState(controlledChecked ?? defaultChecked);
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  React.useEffect(() => {
    if (controlledChecked !== undefined) setChecked(controlledChecked);
  }, [controlledChecked]);

  const handleChange = () => {
    if (disabled) return;
    setChecked(true);
    onChange?.(value);
  };

  const outerBorder = disabled
    ? '#d9d9d9'
    : checked
      ? '#1677ff'
      : hovered || focused
        ? '#1677ff'
        : '#d9d9d9';

  const shadow = focused && !disabled ? '0 0 0 2px rgba(22,119,255,0.2)' : undefined;

  return (
    <label
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        ...style,
      }}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <input
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      {/* outer ring */}
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 16,
          height: 16,
          border: `1px solid ${outerBorder}`,
          borderRadius: '50%',
          backgroundColor: disabled ? '#f5f5f5' : '#fff',
          boxShadow: shadow,
          flexShrink: 0,
          transition: 'all 0.2s',
        }}
      >
        {checked && (
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: disabled ? '#bfbfbf' : '#1677ff',
              transition: 'transform 0.2s',
            }}
          />
        )}
      </span>
      {children && (
        <span
          style={{
            fontSize: '14px',
            lineHeight: '22px',
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
}

export function RadioGroup({
  options = [],
  value: controlled,
  defaultValue,
  onChange,
  disabled = false,
  direction = 'horizontal',
  className = '',
}: RadioGroupProps) {
  const [value, setValue] = React.useState(controlled ?? defaultValue ?? '');

  React.useEffect(() => {
    if (controlled !== undefined) setValue(controlled);
  }, [controlled]);

  const handleChange = (v: string) => {
    setValue(v);
    onChange?.(v);
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
        <Radio
          key={opt.value}
          value={opt.value}
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
// Figma: state=default/hover/active/disabled × size=small/default/large × style=outlined/solid × position=first/center/last
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

const rbHeight: Record<RadioSize, number> = { small: 24, default: 32, large: 40 };
const rbFontSize: Record<RadioSize, string> = { small: '12px', default: '14px', large: '16px' };
const rbPadding: Record<RadioSize, string> = { small: '0 7px', default: '0 15px', large: '0 15px' };

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
  const [hovered, setHovered] = React.useState(false);

  const radius: Record<RadioButtonPosition, string> = {
    first:  '6px 0 0 6px',
    center: '0',
    last:   '0 6px 6px 0',
    only:   '6px',
  };

  let bg: string;
  let border: string;
  let color: string;

  if (disabled) {
    bg = '#f5f5f5';
    border = '#d9d9d9';
    color = 'rgba(0,0,0,0.25)';
  } else if (checked) {
    if (btnStyle === 'solid') {
      bg = '#1677ff';
      border = '#1677ff';
      color = '#fff';
    } else {
      bg = '#e6f4ff';
      border = '#1677ff';
      color = '#1677ff';
    }
  } else if (hovered) {
    bg = btnStyle === 'solid' ? 'rgba(0,0,0,0.04)' : '#fff';
    border = '#1677ff';
    color = btnStyle === 'solid' ? 'rgba(0,0,0,0.88)' : '#1677ff';
  } else {
    bg = btnStyle === 'solid' ? '#fff' : '#fff';
    border = '#d9d9d9';
    color = 'rgba(0,0,0,0.88)';
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => !disabled && onChange?.(value)}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height: rbHeight[size],
        padding: rbPadding[size],
        fontSize: rbFontSize[size],
        lineHeight: '1',
        fontFamily: '"Heebo", sans-serif',
        fontWeight: checked ? 600 : 400,
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: radius[position],
        color,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s',
        whiteSpace: 'nowrap',
        marginLeft: position === 'center' || position === 'last' ? -1 : 0,
        position: 'relative',
        zIndex: checked ? 1 : 0,
      }}
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
    <div className={className} style={{ display: 'inline-flex' }}>
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
