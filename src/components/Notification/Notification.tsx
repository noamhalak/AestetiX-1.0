import { notification } from 'antd';
import type { NotificationInstance, ArgsProps } from 'antd/es/notification/interface';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';
export type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'top' | 'bottom';

export { notification };
export type { NotificationInstance, ArgsProps as NotificationProps };

// useNotification hook re-export for hook-based usage
export { notification as useNotification };
