import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Steps — AestetiX 1.0
//  Figma page: ❖ Steps - ✅ 🎨🤖🤖
//
//  direction: horizontal | vertical
//  size: default | small
//  status: finish | process | wait | error
// ─────────────────────────────────────────────────────────────────

export type StepStatus = 'finish' | 'process' | 'wait' | 'error';
export type StepsDirection = 'horizontal' | 'vertical';
export type StepsSize = 'default' | 'small';

export interface StepItem {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  status?: StepStatus;
  subTitle?: React.ReactNode;
}

export interface StepsProps {
  current?: number;
  direction?: StepsDirection;
  size?: StepsSize;
  status?: StepStatus;
  items?: StepItem[];
  onChange?: (current: number) => void;
  className?: string;
  style?: React.CSSProperties;
}

const statusTokens: Record<StepStatus, { iconBg: string; iconBorder: string; iconColor: string }> = {
  finish:  { iconBg: '#1677ff', iconBorder: '#1677ff', iconColor: '#fff' },
  process: { iconBg: '#1677ff', iconBorder: '#1677ff', iconColor: '#fff' },
  wait:    { iconBg: '#fff',    iconBorder: '#d9d9d9', iconColor: 'rgba(0,0,0,0.25)' },
  error:   { iconBg: '#fff',    iconBorder: '#ff4d4f', iconColor: '#ff4d4f' },
};

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 2l6 6M8 2l-6 6" stroke="#ff4d4f" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

interface StepNodeProps {
  item: StepItem;
  index: number;
  stepStatus: StepStatus;
  size: StepsSize;
  isLast: boolean;
  direction: StepsDirection;
  clickable: boolean;
  onClick?: () => void;
}

function StepNode({ item, index, stepStatus, size, isLast, direction, clickable, onClick }: StepNodeProps) {
  const [hovered, setHovered] = React.useState(false);
  const t = statusTokens[stepStatus];
  const iconSize = size === 'small' ? 24 : 32;
  const fontSize = size === 'small' ? '12px' : '14px';
  const isHorizontal = direction === 'horizontal';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isHorizontal ? 'column' : 'row',
        alignItems: isHorizontal ? 'flex-start' : 'flex-start',
        flex: isHorizontal && !isLast ? 1 : 'none',
        cursor: clickable && !item.disabled ? 'pointer' : 'default',
        opacity: item.disabled ? 0.4 : 1,
      }}
      onMouseEnter={() => clickable && !item.disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => clickable && !item.disabled && onClick?.()}
    >
      {/* icon + connector row */}
      <div
        style={{
          display: 'flex',
          flexDirection: isHorizontal ? 'row' : 'column',
          alignItems: 'center',
          width: isHorizontal ? '100%' : 'auto',
        }}
      >
        {/* icon */}
        <div
          style={{
            width: iconSize,
            height: iconSize,
            borderRadius: '50%',
            border: `1px solid ${t.iconBorder}`,
            backgroundColor: t.iconBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.2s',
            boxShadow: hovered && stepStatus === 'process' ? '0 0 0 3px rgba(22,119,255,0.15)' : undefined,
          }}
        >
          {item.icon ? (
            <span style={{ display: 'flex', alignItems: 'center', color: t.iconColor, fontSize: iconSize * 0.5 }}>
              {item.icon}
            </span>
          ) : stepStatus === 'finish' ? (
            <CheckIcon />
          ) : stepStatus === 'error' ? (
            <CloseIcon />
          ) : (
            <span style={{ fontSize: size === 'small' ? '12px' : '14px', color: t.iconColor, fontFamily: '"Heebo", sans-serif', fontWeight: 600 }}>
              {index + 1}
            </span>
          )}
        </div>

        {/* connector */}
        {!isLast && (
          <div
            style={{
              flex: 1,
              backgroundColor: stepStatus === 'finish' ? '#1677ff' : '#f0f0f0',
              height: isHorizontal ? 1 : undefined,
              width: isHorizontal ? undefined : 1,
              minHeight: isHorizontal ? undefined : '24px',
              margin: isHorizontal ? '0 8px' : '4px auto',
              transition: 'background-color 0.3s',
            }}
          />
        )}
      </div>

      {/* content */}
      <div
        style={{
          paddingTop: isHorizontal ? '8px' : '0',
          paddingLeft: isHorizontal ? '0' : '12px',
          marginTop: isHorizontal ? 0 : 0,
          minWidth: isHorizontal ? 0 : undefined,
          paddingBottom: !isLast && !isHorizontal ? '24px' : 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontSize,
              lineHeight: size === 'small' ? '20px' : '22px',
              fontFamily: '"Heebo", sans-serif',
              fontWeight: stepStatus === 'process' ? 600 : 400,
              color:
                stepStatus === 'error'
                  ? '#ff4d4f'
                  : stepStatus === 'wait'
                    ? 'rgba(0,0,0,0.45)'
                    : 'rgba(0,0,0,0.88)',
            }}
          >
            {item.title}
          </span>
          {item.subTitle && (
            <span style={{ fontSize: '12px', color: 'rgba(0,0,0,0.45)', fontFamily: '"Heebo", sans-serif' }}>
              {item.subTitle}
            </span>
          )}
        </div>
        {item.description && (
          <div
            style={{
              fontSize: '12px',
              lineHeight: '20px',
              color: 'rgba(0,0,0,0.45)',
              fontFamily: '"Heebo", sans-serif',
              marginTop: '4px',
            }}
          >
            {item.description}
          </div>
        )}
      </div>
    </div>
  );
}

export function Steps({
  current = 0,
  direction = 'horizontal',
  size = 'default',
  status = 'process',
  items = [],
  onChange,
  className = '',
  style,
}: StepsProps) {
  const getStepStatus = (index: number, item: StepItem): StepStatus => {
    if (item.status) return item.status;
    if (index < current) return 'finish';
    if (index === current) return status;
    return 'wait';
  };

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        alignItems: direction === 'vertical' ? 'stretch' : 'flex-start',
        fontFamily: '"Heebo", sans-serif',
        ...style,
      }}
    >
      {items.map((item, i) => (
        <StepNode
          key={i}
          item={item}
          index={i}
          stepStatus={getStepStatus(i, item)}
          size={size}
          isLast={i === items.length - 1}
          direction={direction}
          clickable={!!onChange}
          onClick={() => onChange?.(i)}
        />
      ))}
    </div>
  );
}

export default Steps;
