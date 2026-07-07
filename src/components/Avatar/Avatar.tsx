import { Avatar as AntAvatar } from 'antd';
import type { AvatarProps, GroupProps } from 'antd/es/avatar';

export type AvatarSize = 'large' | 'small' | 'default' | number;
export type AvatarShape = 'circle' | 'square';

const AvatarGroup = AntAvatar.Group;

export { AntAvatar as Avatar, AvatarGroup };
export type { AvatarProps, GroupProps as AvatarGroupProps };
