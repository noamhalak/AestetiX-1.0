import { Progress as AntProgress } from 'antd';
import type { ProgressProps } from 'antd';

export type ProgressType = 'line' | 'circle' | 'dashboard';
export type ProgressStatus = 'success' | 'exception' | 'normal' | 'active';

export { AntProgress as Progress };
export type { ProgressProps };
