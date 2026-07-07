import React from 'react';
import { Modal as AntModal } from 'antd';
import type { ModalProps as AntModalProps } from 'antd';

export interface ModalProps extends AntModalProps {}

export const Modal: React.FC<ModalProps> & {
  confirm: typeof AntModal.confirm;
  info: typeof AntModal.info;
  success: typeof AntModal.success;
  warning: typeof AntModal.warning;
  error: typeof AntModal.error;
  destroyAll: typeof AntModal.destroyAll;
} = ({ ...props }) => <AntModal {...props} />;

Modal.confirm = AntModal.confirm;
Modal.info = AntModal.info;
Modal.success = AntModal.success;
Modal.warning = AntModal.warning;
Modal.error = AntModal.error;
Modal.destroyAll = AntModal.destroyAll;
