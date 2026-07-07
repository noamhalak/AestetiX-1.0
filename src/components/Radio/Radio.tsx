import React from 'react';
import { Radio as AntRadio } from 'antd';
import type { RadioProps, RadioGroupProps } from 'antd/es/radio';

const RadioGroup = AntRadio.Group;
const RadioButton = AntRadio.Button;

export interface RadioGroupButtonsProps extends Omit<RadioGroupProps, 'optionType'> {
  btnStyle?: 'outline' | 'solid';
}

export const RadioGroupButtons: React.FC<RadioGroupButtonsProps> = ({
  btnStyle = 'outline',
  ...props
}) => (
  <RadioGroup optionType="button" buttonStyle={btnStyle} {...props} />
);

export { AntRadio as Radio, RadioGroup, RadioButton };
export type { RadioProps, RadioGroupProps };
