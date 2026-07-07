import React from 'react';
import { Menu as AntMenu } from 'antd';
import type { MenuProps } from 'antd';

export type MenuMode = 'horizontal' | 'vertical' | 'inline';
export type MenuTheme = 'light' | 'dark';

export interface MenuTopNavigationProps extends Omit<MenuProps, 'mode'> {}

export const MenuTopNavigation: React.FC<MenuTopNavigationProps> = (props) => (
  <AntMenu mode="horizontal" {...props} />
);

export { AntMenu as Menu };
export type { MenuProps };
