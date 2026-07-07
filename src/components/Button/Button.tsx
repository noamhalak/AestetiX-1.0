import React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';

export type ButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link';
export type ButtonSize = 'small' | 'middle' | 'large';
export type ButtonShape = 'default' | 'circle' | 'round';

export interface ButtonProps extends AntButtonProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <AntButton ref={ref} {...props} />,
);

Button.displayName = 'Button';
