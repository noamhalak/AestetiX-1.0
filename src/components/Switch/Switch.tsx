import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Switch — AestetiX 1.0
//  Figma page: ❖ Switch - ✅ 🎨🤖🤖 (node 4:35)
//
//  state: default | pressed | loading | disabled
//  active: true | false
//  size: default (44×22px) | small (28×16px)
//  content: none | icon | text
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

  const isDefault = size === 'default';
  const trackW = isDefault ? 44 : 28;
  const trackH = isDefault ? 22 : 16;
  const thumbSize = isDefault ? 18 : 12;
  const thumbOffset = isDefault ? 2 : 2;
  const thumbTravel = trackW - thumbSize - thumbOffset * 2;

  const trackBg = disabled
    ? 'rgba(0,0,0,0.25)'
    : checked
      ? '#1677ff'
      : 'rgba(0,0,0,0.25)';

  const thumbScale = pressed && !disabled && !loading ? 1.1 : 1;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className={className}
      onClick={handleClick}
      onMouseDown={() => !disabled && !loading && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        width: trackW,
        height: trackH,
        borderRadius: trackH / 2,
        backgroundColor: trackBg,
        border: 'none',
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        padding: 0,
        transition: 'background-color 0.2s',
        flexShrink: 0,
        ...style,
      }}
    >
      {/* children text/icon inside track */}
      {(checkedChildren || unCheckedChildren) && (
        <span
          style={{
            position: 'absolute',
            left: checked ? thumbOffset + thumbSize + 4 : 'auto',
            right: checked ? 'auto' : thumbOffset + thumbSize + 4,
            color: '#fff',
            fontSize: isDefault ? '12px' : '10px',
            lineHeight: 1,
            transition: 'all 0.2s',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {checked ? checkedChildren : unCheckedChildren}
        </span>
      )}

      {/* thumb */}
      <span
        style={{
          position: 'absolute',
          left: checked ? thumbOffset + thumbTravel : thumbOffset,
          width: thumbSize,
          height: thumbSize,
          borderRadius: '50%',
          backgroundColor: '#fff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          transition: 'left 0.2s, transform 0.15s',
          transform: `scale(${thumbScale})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {loading && (
          <span
            style={{
              width: thumbSize - 4,
              height: thumbSize - 4,
              border: '1.5px solid #1677ff',
              borderTopColor: 'transparent',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
              display: 'block',
            }}
          />
        )}
      </span>
    </button>
  );
}

export default Switch;
