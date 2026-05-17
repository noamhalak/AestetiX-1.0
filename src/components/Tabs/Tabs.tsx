import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Tabs — AestetiX 1.0
//  Figma page: ❖ Tabs - ✅ 🎨🤖🤖 (node 5:56)
//
//  type: line | card | editable-card
//  size: large | default | small
//  position: top | right | bottom | left
// ─────────────────────────────────────────────────────────────────

export type TabsType = 'line' | 'card';
export type TabsSize = 'large' | 'default' | 'small';
export type TabsPosition = 'top' | 'right' | 'bottom' | 'left';

export interface TabItem {
  key: string;
  label: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  closable?: boolean;
}

export interface TabsProps {
  activeKey?: string;
  defaultActiveKey?: string;
  type?: TabsType;
  size?: TabsSize;
  tabPosition?: TabsPosition;
  items?: TabItem[];
  onChange?: (key: string) => void;
  onEdit?: (key: string, action: 'remove') => void;
  className?: string;
  style?: React.CSSProperties;
}

const tabFontSize: Record<TabsSize, string> = {
  large: '16px',
  default: '14px',
  small: '14px',
};

const tabPadding: Record<TabsSize, string> = {
  large: '12px 16px',
  default: '8px 16px',
  small: '4px 16px',
};

export function Tabs({
  activeKey: controlledActiveKey,
  defaultActiveKey,
  type = 'line',
  size = 'default',
  tabPosition = 'top',
  items = [],
  onChange,
  onEdit,
  className = '',
  style,
}: TabsProps) {
  const firstKey = items[0]?.key ?? '';
  const [activeKey, setActiveKey] = React.useState(controlledActiveKey ?? defaultActiveKey ?? firstKey);

  React.useEffect(() => {
    if (controlledActiveKey !== undefined) setActiveKey(controlledActiveKey);
  }, [controlledActiveKey]);

  const handleSelect = (key: string) => {
    setActiveKey(key);
    onChange?.(key);
  };

  const isVertical = tabPosition === 'left' || tabPosition === 'right';
  const isCard = type === 'card';

  const navStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isVertical ? 'column' : 'row',
    borderBottom: !isVertical && !isCard ? '1px solid #f0f0f0' : 'none',
    borderRight: tabPosition === 'left' && !isCard ? '1px solid #f0f0f0' : 'none',
    borderLeft: tabPosition === 'right' && !isCard ? '1px solid #f0f0f0' : 'none',
    borderTop: tabPosition === 'bottom' && !isCard ? '1px solid #f0f0f0' : 'none',
    gap: isCard ? '2px' : '0',
    padding: isCard ? '4px 4px 0' : '0',
    backgroundColor: isCard ? 'rgba(0,0,0,0.02)' : 'transparent',
  };

  const activeContent = items.find((item) => item.key === activeKey);

  const wrapStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection:
      tabPosition === 'bottom'
        ? 'column-reverse'
        : tabPosition === 'left'
          ? 'row'
          : tabPosition === 'right'
            ? 'row-reverse'
            : 'column',
    fontFamily: '"Heebo", sans-serif',
    ...style,
  };

  return (
    <div className={className} style={wrapStyle}>
      {/* Tab nav */}
      <div style={navStyle} role="tablist">
        {items.map((item) => {
          const isActive = item.key === activeKey;
          return (
            <TabNavItem
              key={item.key}
              item={item}
              active={isActive}
              type={type}
              size={size}
              tabPosition={tabPosition}
              fontSize={tabFontSize[size]}
              padding={tabPadding[size]}
              onSelect={handleSelect}
              onRemove={onEdit ? () => onEdit(item.key, 'remove') : undefined}
            />
          );
        })}
      </div>

      {/* Tab content */}
      {activeContent?.children !== undefined && (
        <div
          role="tabpanel"
          style={{
            padding: '16px 0',
            flex: 1,
            minWidth: 0,
          }}
        >
          {activeContent.children}
        </div>
      )}
    </div>
  );
}

interface TabNavItemProps {
  item: TabItem;
  active: boolean;
  type: TabsType;
  size: TabsSize;
  tabPosition: TabsPosition;
  fontSize: string;
  padding: string;
  onSelect: (key: string) => void;
  onRemove?: () => void;
}

function TabNavItem({ item, active, type, tabPosition, fontSize, padding, onSelect, onRemove }: TabNavItemProps) {
  const [hovered, setHovered] = React.useState(false);
  const isCard = type === 'card';
  const isVertical = tabPosition === 'left' || tabPosition === 'right';

  const lineIndicator: React.CSSProperties = !isCard
    ? {
        borderBottom: !isVertical && active ? '2px solid #1677ff' : '2px solid transparent',
        borderRight: tabPosition === 'left' && active ? '2px solid #1677ff' : tabPosition === 'left' ? '2px solid transparent' : 'none',
        borderLeft: tabPosition === 'right' && active ? '2px solid #1677ff' : tabPosition === 'right' ? '2px solid transparent' : 'none',
        borderTop: tabPosition === 'bottom' && active ? '2px solid #1677ff' : tabPosition === 'bottom' ? '2px solid transparent' : 'none',
      }
    : {};

  const cardStyle: React.CSSProperties = isCard
    ? {
        border: `1px solid ${active ? '#f0f0f0' : 'transparent'}`,
        borderBottom: active ? '1px solid #fff' : '1px solid transparent',
        borderRadius: '6px 6px 0 0',
        backgroundColor: active ? '#fff' : hovered ? 'rgba(0,0,0,0.04)' : 'transparent',
        marginBottom: active ? '-1px' : '0',
      }
    : {};

  return (
    <div
      role="tab"
      aria-selected={active}
      onClick={() => !item.disabled && onSelect(item.key)}
      onMouseEnter={() => !item.disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding,
        fontSize,
        lineHeight: '22px',
        fontFamily: '"Heebo", sans-serif',
        fontWeight: active ? 600 : 400,
        color: item.disabled
          ? 'rgba(0,0,0,0.25)'
          : active
            ? '#1677ff'
            : hovered
              ? '#4096ff'
              : 'rgba(0,0,0,0.88)',
        cursor: item.disabled ? 'not-allowed' : 'pointer',
        whiteSpace: 'nowrap',
        transition: 'color 0.15s',
        position: 'relative',
        ...lineIndicator,
        ...cardStyle,
      }}
    >
      {item.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>}
      {item.label}
      {item.closable && onRemove && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0 2px',
            color: 'rgba(0,0,0,0.45)',
            fontSize: '10px',
            lineHeight: 1,
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default Tabs;
