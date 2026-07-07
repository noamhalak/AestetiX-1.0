import { Segmented as AntSegmented } from 'antd';
import type { SegmentedProps } from 'antd/es/segmented';

export type SegmentedSize = 'large' | 'middle' | 'small';
export type SegmentedOption = NonNullable<SegmentedProps['options']>[number];

export { AntSegmented as Segmented };
export type { SegmentedProps };
