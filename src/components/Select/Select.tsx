import React from 'react';
import { Select as AntSelect } from 'antd';
import type { SelectProps as AntSelectProps } from 'antd';

export type SelectSize = 'small' | 'middle' | 'large';
export type SelectStatus = '' | 'error' | 'warning';
export type SelectVariant = 'outlined' | 'filled' | 'borderless';

export interface SelectProps<T = string> extends Omit<AntSelectProps<T>, 'size' | 'status' | 'variant'> {
  size?: SelectSize;
  status?: SelectStatus;
  variant?: SelectVariant;
}

export function Select<T = string>({ size = 'middle', status = '', variant = 'outlined', ...rest }: SelectProps<T>) {
  return <AntSelect<T> size={size} status={status} variant={variant} {...rest} />;
}

Select.Option = AntSelect.Option;
Select.OptGroup = AntSelect.OptGroup;

export type { DefaultOptionType as SelectOption } from 'antd/es/select';
