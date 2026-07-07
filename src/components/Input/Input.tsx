import React from 'react';
import { Input as AntInput } from 'antd';
import type { InputProps as AntInputProps, InputRef } from 'antd';

export type InputSize = 'small' | 'middle' | 'large';
export type InputStatus = '' | 'error' | 'warning';

export interface InputProps extends Omit<AntInputProps, 'size' | 'status'> {
  size?: InputSize;
  status?: InputStatus;
}

export const Input = React.forwardRef<InputRef, InputProps>(
  ({ size = 'middle', status = '', ...rest }, ref) => {
    return <AntInput ref={ref} size={size} status={status} {...rest} />;
  },
);

Input.displayName = 'Input';

export const InputPassword = AntInput.Password;
export const InputSearch = AntInput.Search;
export const TextArea = AntInput.TextArea;
