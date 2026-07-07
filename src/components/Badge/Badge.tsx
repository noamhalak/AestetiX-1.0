import { Badge as AntBadge } from 'antd';
import type { BadgeProps } from 'antd';

export type BadgeStatus = 'success' | 'processing' | 'default' | 'error' | 'warning';

const BadgeRibbon = AntBadge.Ribbon;

export { AntBadge as Badge, BadgeRibbon };
export type { BadgeProps };
