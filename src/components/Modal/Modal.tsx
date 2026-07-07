import React from 'react';
import { Modal as AntModal } from 'antd';
import type { ModalProps as AntModalProps } from 'antd';

export interface ModalProps extends AntModalProps {}

export type ModalStatusType = 'success' | 'error' | 'warning' | 'info';

export interface ModalInformationProps {
  open?: boolean;
  status: ModalStatusType;
  title: React.ReactNode;
  description?: React.ReactNode;
  okText?: string;
  cancelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
}

export const ModalInformation: React.FC<ModalInformationProps> = ({
  open = true,
  status,
  title,
  description,
  okText = 'אוקיי',
  cancelText = 'בטל',
  onOk,
  onCancel,
}) => (
  <AntModal
    open={open}
    title={title}
    okText={okText}
    cancelText={cancelText}
    onOk={onOk}
    onCancel={onCancel}
  >
    {description && <p style={{ margin: 0 }}>{description}</p>}
  </AntModal>
);

export interface ModalConfirmationProps {
  open?: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  okText?: string;
  cancelText?: string;
  danger?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
}

export const ModalConfirmation: React.FC<ModalConfirmationProps> = ({
  open = true,
  title,
  description,
  okText = 'אשר',
  cancelText = 'בטל',
  danger = false,
  onOk,
  onCancel,
}) => (
  <AntModal
    open={open}
    title={title}
    okText={okText}
    cancelText={cancelText}
    okButtonProps={{ danger }}
    onOk={onOk}
    onCancel={onCancel}
  >
    {description && <p style={{ margin: 0 }}>{description}</p>}
  </AntModal>
);

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
