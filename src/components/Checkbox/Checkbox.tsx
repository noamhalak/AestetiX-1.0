import { Checkbox as AntCheckbox } from 'antd';
import type { CheckboxProps, CheckboxGroupProps } from 'antd/es/checkbox';

export type CheckboxSize = 'small' | 'middle' | 'large';

const CheckboxGroup = AntCheckbox.Group;

export { AntCheckbox as Checkbox, CheckboxGroup };
export type { CheckboxProps, CheckboxGroupProps };
