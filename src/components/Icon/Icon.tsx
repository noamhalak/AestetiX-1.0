import React from 'react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

const sizeMap: Record<string, number> = {
  xs: 12, sm: 16, md: 20, lg: 24, xl: 32,
};

export function resolveSize(size: IconSize): number {
  if (typeof size === 'number') return size;
  return sizeMap[size] ?? 20;
}

export interface TablerIconProps {
  size?: IconSize;
  color?: string;
  stroke?: number;
  className?: string;
  style?: React.CSSProperties;
}

export interface IconProps extends TablerIconProps {
  icon: React.FC<TablerIconProps>;
}

export const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 'md',
  color,
  stroke = 2,
  className,
  style,
}) => {
  const resolvedSize = resolveSize(size);
  return (
    <IconComponent
      size={resolvedSize}
      color={color}
      stroke={stroke}
      className={className}
      style={style}
    />
  );
};
