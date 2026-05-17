import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Menu — AestetiX 1.0
//  Figma page: ❖ Menu - ✅⏳ (node 4:19)
//
//  Components:
//    Menu            — inline | vertical, light | dark, collapsed
//    MenuItem        — state: default | hover | active | child-active | disabled
//    MenuSubmenu     — inline/vertical × light/dark × open/closed
//    MenuGroup       — light | dark
//    MenuTopNavigation — items 2-6 × light | dark
//
//  Measurements from Figma:
//    MenuItem: width=240, height=40 (or 22 for simple)
//    Menu (collapsed): width=72
//    TopNavigation item: height=46
//    Padding: 24px horizontal, 4px vertical
// ─────────────────────────────────────────────────────────────────

// ── Types ─────────────────────────────────────────────────────────
export type MenuMode = 'inline' | 'vertical';
export type MenuTheme = 'light' | 'dark';

export interface MenuItemData {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: MenuItemData[];
}

export interface MenuGroupData {
  key: string;
  label: React.ReactNode;
  children: MenuItemData[];
}

// ── Theme tokens (from Figma variables) ──────────────────────────
const themeTokens = {
  light: {
    bg:              '#ffffff',
    itemText:        'rgba(0,0,0,0.88)',
    itemTextHover:   'rgba(0,0,0,0.88)',
    itemTextActive:  '#1677ff',
    itemTextDisabled:'rgba(0,0,0,0.25)',
    itemBgHover:     'rgba(0,0,0,0.04)',      // colorFillTertiary
    itemBgActive:    '#e6f4ff',               // colorPrimaryBG
    subBg:           'rgba(0,0,0,0.02)',
    groupTitle:      'rgba(0,0,0,0.45)',
    border:          'none',
  },
  dark: {
    bg:              '#141414',               // colorBgContainer dark
    itemText:        'rgba(255,255,255,0.85)',
    itemTextHover:   'rgba(255,255,255,0.85)',
    itemTextActive:  '#1668dc',               // primary-6 dark
    itemTextDisabled:'rgba(255,255,255,0.25)',
    itemBgHover:     'rgba(255,255,255,0.08)',
    itemBgActive:    '#111a2c',               // blue-1 dark
    subBg:           'rgba(255,255,255,0.04)',
    groupTitle:      'rgba(255,255,255,0.45)',
    border:          'none',
  },
} as const;

// ── Chevron icon ──────────────────────────────────────────────────
function ChevronDown({ open, size = 12 }: { open?: boolean; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="currentColor"
      style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

// ── MenuItem ──────────────────────────────────────────────────────
interface MenuItemProps {
  item: MenuItemData;
  theme: MenuTheme;
  active?: boolean;
  childActive?: boolean;
  collapsed?: boolean;
  level?: number;
  onSelect?: (key: string) => void;
}

function MenuItem({ item, theme, active, childActive, collapsed, level = 0, onSelect }: MenuItemProps) {
  const t = themeTokens[theme];
  const [hovered, setHovered] = React.useState(false);

  const baseStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    height: '40px',
    paddingLeft: collapsed ? '24px' : `${24 + level * 16}px`,
    paddingRight: '24px',
    cursor: item.disabled ? 'not-allowed' : 'pointer',
    borderRadius: '6px',
    marginInline: '4px',
    transition: 'background-color 0.15s',
    color: item.disabled
      ? t.itemTextDisabled
      : active
        ? t.itemTextActive
        : t.itemText,
    backgroundColor: item.disabled
      ? 'transparent'
      : active
        ? t.itemBgActive
        : childActive
          ? t.subBg
          : hovered
            ? t.itemBgHover
            : 'transparent',
    fontFamily: '"Heebo", sans-serif',
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: active ? 600 : 400,
    whiteSpace: 'nowrap',
    overflow: collapsed ? 'hidden' : 'visible',
  };

  // Active indicator bar (left edge)
  const showIndicator = active && !collapsed;

  return (
    <li
      style={{ position: 'relative', listStyle: 'none' }}
      onMouseEnter={() => !item.disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => !item.disabled && onSelect?.(item.key)}
    >
      {showIndicator && (
        <span
          style={{
            position: 'absolute',
            right: 0,
            top: '4px',
            bottom: '4px',
            width: '3px',
            backgroundColor: t.itemTextActive,
            borderRadius: '2px 0 0 2px',
          }}
        />
      )}
      <div style={baseStyle}>
        {item.icon && (
          <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0, fontSize: '16px' }}>
            {item.icon}
          </span>
        )}
        {!collapsed && <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>}
      </div>
    </li>
  );
}

// ── MenuSubmenu ───────────────────────────────────────────────────
interface MenuSubmenuProps {
  item: MenuItemData;
  theme: MenuTheme;
  mode: MenuMode;
  activeKey?: string;
  collapsed?: boolean;
  level?: number;
  onSelect?: (key: string) => void;
}

function MenuSubmenu({ item, theme, mode, activeKey, collapsed, level = 0, onSelect }: MenuSubmenuProps) {
  const t = themeTokens[theme];
  const [open, setOpen] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const hasActiveChild = item.children?.some((c) => c.key === activeKey);

  return (
    <li style={{ listStyle: 'none' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          height: '40px',
          paddingLeft: collapsed ? '24px' : `${24 + level * 16}px`,
          paddingRight: '16px',
          cursor: 'pointer',
          borderRadius: '6px',
          marginInline: '4px',
          transition: 'background-color 0.15s',
          color: t.itemText,
          backgroundColor: hovered ? t.itemBgHover : hasActiveChild ? t.subBg : 'transparent',
          fontFamily: '"Heebo", sans-serif',
          fontSize: '14px',
          lineHeight: '22px',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => !collapsed && setOpen((v) => !v)}
      >
        {item.icon && (
          <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0, fontSize: '16px' }}>
            {item.icon}
          </span>
        )}
        {!collapsed && (
          <>
            <span style={{ flex: 1 }}>{item.label}</span>
            <ChevronDown open={open} />
          </>
        )}
      </div>
      {open && !collapsed && mode === 'inline' && (
        <ul style={{ margin: 0, padding: 0 }}>
          {item.children?.map((child) =>
            child.children ? (
              <MenuSubmenu
                key={child.key}
                item={child}
                theme={theme}
                mode={mode}
                activeKey={activeKey}
                level={level + 1}
                onSelect={onSelect}
              />
            ) : (
              <MenuItem
                key={child.key}
                item={child}
                theme={theme}
                active={child.key === activeKey}
                level={level + 1}
                onSelect={onSelect}
              />
            ),
          )}
        </ul>
      )}
    </li>
  );
}

// ── MenuGroup ─────────────────────────────────────────────────────
interface MenuGroupProps {
  group: MenuGroupData;
  theme: MenuTheme;
  mode: MenuMode;
  activeKey?: string;
  collapsed?: boolean;
  onSelect?: (key: string) => void;
}

function MenuGroup({ group, theme, mode, activeKey, collapsed, onSelect }: MenuGroupProps) {
  const t = themeTokens[theme];

  return (
    <li style={{ listStyle: 'none' }}>
      {!collapsed && (
        <div
          style={{
            padding: '8px 28px 4px',
            fontSize: '12px',
            lineHeight: '20px',
            color: t.groupTitle,
            fontFamily: '"Heebo", sans-serif',
            fontWeight: 400,
          }}
        >
          {group.label}
        </div>
      )}
      <ul style={{ margin: 0, padding: 0 }}>
        {group.children.map((child) =>
          child.children ? (
            <MenuSubmenu key={child.key} item={child} theme={theme} mode={mode} activeKey={activeKey} collapsed={collapsed} onSelect={onSelect} />
          ) : (
            <MenuItem key={child.key} item={child} theme={theme} active={child.key === activeKey} collapsed={collapsed} onSelect={onSelect} />
          ),
        )}
      </ul>
    </li>
  );
}

// ── Menu (root) ───────────────────────────────────────────────────
export interface MenuProps {
  items?: (MenuItemData | MenuGroupData)[];
  mode?: MenuMode;
  theme?: MenuTheme;
  activeKey?: string;
  defaultActiveKey?: string;
  collapsed?: boolean;
  onSelect?: (key: string) => void;
  style?: React.CSSProperties;
  className?: string;
  width?: number | string;
}

function isGroup(item: MenuItemData | MenuGroupData): item is MenuGroupData {
  return 'children' in item && !('icon' in item) && !('disabled' in item);
}

export function Menu({
  items = [],
  mode = 'inline',
  theme = 'light',
  activeKey: controlledActiveKey,
  defaultActiveKey,
  collapsed = false,
  onSelect,
  style,
  className = '',
  width,
}: MenuProps) {
  const t = themeTokens[theme];
  const [activeKey, setActiveKey] = React.useState(controlledActiveKey ?? defaultActiveKey ?? '');

  React.useEffect(() => {
    if (controlledActiveKey !== undefined) setActiveKey(controlledActiveKey);
  }, [controlledActiveKey]);

  const handleSelect = (key: string) => {
    setActiveKey(key);
    onSelect?.(key);
  };

  // Width: collapsed = 72px, expanded = 320px (from Figma)
  const menuWidth = width ?? (collapsed ? 72 : 320);

  return (
    <nav
      className={className}
      style={{
        backgroundColor: t.bg,
        width: menuWidth,
        padding: '4px 0',
        overflowX: 'hidden',
        overflowY: 'auto',
        transition: 'width 0.2s ease',
        fontFamily: '"Heebo", sans-serif',
        ...style,
      }}
    >
      <ul style={{ margin: 0, padding: 0 }}>
        {items.map((item) =>
          isGroup(item) ? (
            <MenuGroup
              key={item.key}
              group={item as MenuGroupData}
              theme={theme}
              mode={mode}
              activeKey={activeKey}
              collapsed={collapsed}
              onSelect={handleSelect}
            />
          ) : (item as MenuItemData).children ? (
            <MenuSubmenu
              key={item.key}
              item={item as MenuItemData}
              theme={theme}
              mode={mode}
              activeKey={activeKey}
              collapsed={collapsed}
              onSelect={handleSelect}
            />
          ) : (
            <MenuItem
              key={item.key}
              item={item as MenuItemData}
              theme={theme}
              active={(item as MenuItemData).key === activeKey}
              collapsed={collapsed}
              onSelect={handleSelect}
            />
          ),
        )}
      </ul>
    </nav>
  );
}

// ── MenuTopNavigation ─────────────────────────────────────────────
// Figma: .menu__topnavigation__item height=46, inline flex
// States: default | hover | active | disabled

export interface TopNavItemData {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface MenuTopNavigationProps {
  items?: TopNavItemData[];
  theme?: MenuTheme;
  activeKey?: string;
  defaultActiveKey?: string;
  onSelect?: (key: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function MenuTopNavigation({
  items = [],
  theme = 'light',
  activeKey: controlledActiveKey,
  defaultActiveKey,
  onSelect,
  className = '',
  style,
}: MenuTopNavigationProps) {
  const t = themeTokens[theme];
  const [activeKey, setActiveKey] = React.useState(controlledActiveKey ?? defaultActiveKey ?? '');

  React.useEffect(() => {
    if (controlledActiveKey !== undefined) setActiveKey(controlledActiveKey);
  }, [controlledActiveKey]);

  const handleSelect = (key: string) => {
    setActiveKey(key);
    onSelect?.(key);
  };

  return (
    <nav
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: t.bg,
        fontFamily: '"Heebo", sans-serif',
        ...style,
      }}
    >
      {items.map((item) => {
        const isActive = item.key === activeKey;
        return (
          <TopNavItem
            key={item.key}
            item={item}
            active={isActive}
            theme={theme}
            onSelect={handleSelect}
          />
        );
      })}
    </nav>
  );
}

interface TopNavItemProps {
  item: TopNavItemData;
  active?: boolean;
  theme: MenuTheme;
  onSelect?: (key: string) => void;
}

function TopNavItem({ item, active, theme, onSelect }: TopNavItemProps) {
  const t = themeTokens[theme];
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        height: '46px',
        padding: '0 16px',
        cursor: item.disabled ? 'not-allowed' : 'pointer',
        color: item.disabled ? t.itemTextDisabled : active ? t.itemTextActive : t.itemText,
        borderBottom: active ? `2px solid ${t.itemTextActive}` : '2px solid transparent',
        backgroundColor: hovered && !item.disabled ? t.itemBgHover : 'transparent',
        transition: 'color 0.15s, border-color 0.15s',
        fontFamily: '"Heebo", sans-serif',
        fontSize: '14px',
        lineHeight: '22px',
        fontWeight: active ? 600 : 400,
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={() => !item.disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => !item.disabled && onSelect?.(item.key)}
    >
      {item.icon && <span style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>{item.icon}</span>}
      <span>{item.label}</span>
    </div>
  );
}

export default Menu;
