import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Icon — AestetiX 1.0
//  Figma page: ✅ Tabler (node 71670-7730)
//  Wraps @tabler/icons-react with design-system defaults.
//
//  Usage:
//    import { Icon } from '@/design-system';
//    import { IconHome } from '@tabler/icons-react';
//
//    <Icon icon={IconHome} />
//    <Icon icon={IconHome} size={20} color="#1677ff" strokeWidth={1.5} />
// ─────────────────────────────────────────────────────────────────

export interface IconProps {
  /** Any @tabler/icons-react component */
  icon: React.ComponentType<TablerIconProps>;
  /** px — default 24 */
  size?: number;
  /** CSS color — default currentColor */
  color?: string;
  /** SVG stroke-width — default 2 */
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}

export interface TablerIconProps {
  size?: number;
  color?: string;
  stroke?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function Icon({
  icon: TablerIcon,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  className,
  style,
}: IconProps) {
  return (
    <TablerIcon
      size={size}
      color={color}
      stroke={strokeWidth}
      className={className}
      style={style}
    />
  );
}

// ─────────────────────────────────────────────────────────────────
//  Convenience re-export: commonly used Tabler icons with AestetiX
//  defaults applied. Import the raw icon from @tabler/icons-react
//  if you need full control.
// ─────────────────────────────────────────────────────────────────

export type IconSize = 'sm' | 'md' | 'lg' | number;

const SIZE_MAP: Record<'sm' | 'md' | 'lg', number> = {
  sm: 16,
  md: 20,
  lg: 24,
};

export function resolveSize(s: IconSize): number {
  return typeof s === 'number' ? s : SIZE_MAP[s];
}

export default Icon;
