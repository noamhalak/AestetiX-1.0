import { Steps as AntSteps } from 'antd';
import type { StepsProps } from 'antd/es/steps';

export type StepStatus = 'wait' | 'process' | 'finish' | 'error';
export type StepsDirection = 'horizontal' | 'vertical';
export type StepsSize = 'default' | 'small';
export type StepItem = NonNullable<StepsProps['items']>[number];

export { AntSteps as Steps };
export type { StepsProps };
