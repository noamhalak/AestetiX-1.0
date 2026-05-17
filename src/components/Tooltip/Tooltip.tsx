import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Tooltip — AestetiX 1.0
//  Figma page: ❖ Tooltip - ✅ 🎨🤖🤖 (node 5:59)
//
//  placement: top | bottom | left | right (+ start/end variants)
//  Bubble: bg #1f1f1f, text #fff, 14px/22px Heebo, padding 6px 8px, radius 6px
//  Arrow: 6px
// ─────────────────────────────────────────────────────────────────

export type TooltipPlacement =
  | 'top' | 'topLeft' | 'topRight'
  | 'bottom' | 'bottomLeft' | 'bottomRight'
  | 'left' | 'leftTop' | 'leftBottom'
  | 'right' | 'rightTop' | 'rightBottom';

export interface TooltipProps {
  title?: React.ReactNode;
  placement?: TooltipPlacement;
  open?: boolean;
  defaultOpen?: boolean;
  disabled?: boolean;
  color?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function getTooltipPosition(placement: TooltipPlacement): React.CSSProperties {
  const base = placement.replace('Left', '').replace('Right', '').replace('Top', '').replace('Bottom', '') as 'top' | 'bottom' | 'left' | 'right';
  const offset = 10;

  switch (base) {
    case 'top':    return { bottom: `calc(100% + ${offset}px)`, left: '50%', transform: 'translateX(-50%)' };
    case 'bottom': return { top: `calc(100% + ${offset}px)`, left: '50%', transform: 'translateX(-50%)' };
    case 'left':   return { right: `calc(100% + ${offset}px)`, top: '50%', transform: 'translateY(-50%)' };
    case 'right':  return { left: `calc(100% + ${offset}px)`, top: '50%', transform: 'translateY(-50%)' };
  }
}

function getArrowStyle(placement: TooltipPlacement, bg: string): React.CSSProperties {
  const base = placement.replace('Left', '').replace('Right', '').replace('Top', '').replace('Bottom', '') as 'top' | 'bottom' | 'left' | 'right';
  const size = 6;

  const common: React.CSSProperties = {
    position: 'absolute',
    width: 0,
    height: 0,
    border: `${size}px solid transparent`,
  };

  switch (base) {
    case 'top':    return { ...common, top: '100%', left: '50%', transform: 'translateX(-50%)', borderTopColor: bg, borderBottom: 'none' };
    case 'bottom': return { ...common, bottom: '100%', left: '50%', transform: 'translateX(-50%)', borderBottomColor: bg, borderTop: 'none' };
    case 'left':   return { ...common, left: '100%', top: '50%', transform: 'translateY(-50%)', borderLeftColor: bg, borderRight: 'none' };
    case 'right':  return { ...common, right: '100%', top: '50%', transform: 'translateY(-50%)', borderRightColor: bg, borderLeft: 'none' };
  }
}

export function Tooltip({
  title,
  placement = 'top',
  open: controlledOpen,
  defaultOpen = false,
  disabled = false,
  color = '#1f1f1f',
  children,
  className = '',
  style,
}: TooltipProps) {
  const [visible, setVisible] = React.useState(controlledOpen ?? defaultOpen);

  React.useEffect(() => {
    if (controlledOpen !== undefined) setVisible(controlledOpen);
  }, [controlledOpen]);

  if (!title || disabled) {
    return <>{children}</>;
  }

  return (
    <span
      className={className}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        ...style,
      }}
      onMouseEnter={() => controlledOpen === undefined && setVisible(true)}
      onMouseLeave={() => controlledOpen === undefined && setVisible(false)}
    >
      {children}

      {visible && (
        <span
          role="tooltip"
          style={{
            position: 'absolute',
            ...getTooltipPosition(placement),
            zIndex: 1070,
            backgroundColor: color,
            color: '#fff',
            fontSize: '14px',
            lineHeight: '22px',
            fontFamily: '"Heebo", sans-serif',
            padding: '6px 8px',
            borderRadius: '6px',
            whiteSpace: 'nowrap',
            maxWidth: '320px',
            wordBreak: 'break-word',
            whiteSpace: 'pre-line' as 'pre-line',
            boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
            pointerEvents: 'none',
          }}
        >
          {title}
          <span style={getArrowStyle(placement, color)} />
        </span>
      )}
    </span>
  );
}

export default Tooltip;
