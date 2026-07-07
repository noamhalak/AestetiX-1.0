import { Tabs as AntTabs } from 'antd';
import type { TabsProps, TabPaneProps } from 'antd/es/tabs';

export type TabsType = 'line' | 'card' | 'editable-card';
export type TabsSize = 'large' | 'default' | 'small';
export type TabsPosition = 'top' | 'right' | 'bottom' | 'left';

export { AntTabs as Tabs };
export type { TabsProps, TabPaneProps };
