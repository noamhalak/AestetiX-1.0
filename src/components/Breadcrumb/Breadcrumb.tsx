import { Breadcrumb as AntBreadcrumb } from 'antd';
import type { BreadcrumbProps } from 'antd';

export { AntBreadcrumb as Breadcrumb };
export type { BreadcrumbProps };
export type BreadcrumbItem = NonNullable<BreadcrumbProps['items']>[number];
