import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Switch — AestetiX 1.0
//  Fix: CSS classes, role="switch", aria-checked, aria-disabled
// ─────────────────────────────────────────────────────────────────

export type SwitchSize = 'default' | 'small';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: SwitchSize;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  onChange?: (checked: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
}

export function Switch({
  checked: controlledChecked,
  defaultChecked = false,
  disabled = false,
  loading = false,
  size = 'default',
  checkedChildren,
  unCheckedChildren,
  onChange,
  className = '',
  style,
  'aria-label': ariaLabel,
}: SwitchProps) {
  const [checked, setChecked] = React.useState(controlledChecked ?? defaultChecked);
  const [pressed, setPressed] = React.useState(false);

  React.useEffect(() => {
    if (controlledChecked !== undefined) setChecked(controlledChecked);
  }, [controlledChecked]);

  const handleClick = () => {
    if (disabled || loading) return;
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };

  const isSmall = size === 'small';
  const thumbSize = isSmall ? 12 : 18;
  const borderSize = isSmall ? 1.5 : 2;

  const classes = [
    'ax-switch',
    isSmall ? 'ax-switch--small' : '',
    checked ? 'ax-switch--checked' : '',
    disabled ? 'ax-switch--disabled' : '',
    loading ? 'ax-switch--loading' : '',
    pressed ? 'ax-switch--pressed' : '',
    className,
  ].filter(Boolean).join(' ');

  const childrenLeft = checked
    ? (isSmall ? (thumbSize + 2 + 4) : (thumbSize + 2 + 4))
    : 'auto';
  const childrenRight = !checked
    ? (isSmall ? (thumbSize + 2 + 4) : (thumbSize + 2 + 4))
    : 'auto';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      disabled={disabled}
      className={classes}
      onClick={handleClick}
      onMouseDown={() => !disabled && !loading && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={style}
    >
      {(checkedChildren || unCheckedChildren) && (
        <span
          className="ax-switch__children"
          style={{
            left: checked ? childrenLeft : 'auto',
            right: !checked ? childrenRight : 'auto',
          }}
          aria-hidden="true"
        >
          {checked ? checkedChildren : unCheckedChildren}
        </span>
      )}
      <span className="ax-switch__thumb" aria-hidden="true">
        {loading && (
          <span
            className="ax-switch__loader"
            style={{
              width: thumbSize - 4,
              height: thumbSize - 4,
              border: `${borderSize}px solid var(--ax-color-primary)`,
            }}
          />
        )}
      </span>
    </button>
  );
}

export default Switch;
