import React from 'react';
import { Tag as AntTag } from 'antd';
import type { TagProps as AntTagProps } from 'antd';

export interface TagProps extends AntTagProps {}

export type TagStatusColor = 'success' | 'processing' | 'error' | 'warning' | 'default';

export interface TagStatusProps {
  status: TagStatusColor;
  text?: React.ReactNode;
}

export const Tag: React.FC<TagProps> & { CheckableTag: typeof AntTag.CheckableTag } = (props) => (
  <AntTag {...props} />
);
Tag.CheckableTag = AntTag.CheckableTag;

export const TagStatus: React.FC<TagStatusProps> = ({ status, text }) => (
  <AntTag color={status}>
    {status === 'success' && '✓ '}
    {status === 'error' && '✕ '}
    {status === 'warning' && '⚠ '}
    {text}
  </AntTag>
);
