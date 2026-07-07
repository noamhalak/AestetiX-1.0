import React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';

export type ButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link';
export type ButtonSize = 'small' | 'middle' | 'large';
export type ButtonShape = 'default' | 'circle' | 'round';

export interface ButtonProps extends Omit<AntButtonProps, 'type' | 'size' | 'shape'> {
  btnType?: ButtonType;
  size?: ButtonSize;
  shape?: ButtonShape;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ btnType = 'default', size = 'middle', shape = 'default', ...rest }, ref) => {
    return (
      <AntButton
        ref={ref}
        type={btnType}
        size={size}
        shape={shape}
        {...rest}
      />
    );
  },
);

Button.displayName = 'Button';
