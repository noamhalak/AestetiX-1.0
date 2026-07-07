// AestetiX 1.0 — React component library built on top of Ant Design
// All components wrap antd; AestetiX theme applied via AestetiXProvider

import 'antd/dist/reset.css';

// ── Theme & Provider ─────────────────────────────────────────────
export { AestetiXProvider } from './components/Provider/AestetiXProvider';
export type { AestetiXProviderProps } from './components/Provider/AestetiXProvider';
export { aesthetixTheme } from './theme';

// ── Tokens ───────────────────────────────────────────────────────
export * from './tokens/design-tokens';

// ── Button ───────────────────────────────────────────────────────
export { Button } from './components/Button/Button';
export type { ButtonProps, ButtonType, ButtonSize, ButtonShape } from './components/Button/Button';

// ── Input ────────────────────────────────────────────────────────
export { Input, InputPassword, InputSearch, TextArea } from './components/Input/Input';
export type { InputProps, InputSize, InputStatus } from './components/Input/Input';

// ── Select ───────────────────────────────────────────────────────
export { Select } from './components/Select/Select';
export type { SelectProps, SelectSize, SelectStatus, SelectVariant, SelectOption } from './components/Select/Select';

// ── Alert ────────────────────────────────────────────────────────
export { Alert } from './components/Alert/Alert';
export type { AlertProps, AlertType } from './components/Alert/Alert';

// ── Modal ────────────────────────────────────────────────────────
export { Modal, ModalInformation, ModalConfirmation } from './components/Modal/Modal';
export type { ModalProps, ModalInformationProps, ModalConfirmationProps, ModalStatusType } from './components/Modal/Modal';

// ── Tag ──────────────────────────────────────────────────────────
export { Tag, TagStatus } from './components/Tag/Tag';
export type { TagProps, TagStatusProps, TagStatusColor } from './components/Tag/Tag';

// ── Avatar ───────────────────────────────────────────────────────
export { Avatar, AvatarGroup } from './components/Avatar/Avatar';
export type { AvatarProps, AvatarGroupProps, AvatarSize, AvatarShape } from './components/Avatar/Avatar';

// ── Badge ────────────────────────────────────────────────────────
export { Badge, BadgeRibbon } from './components/Badge/Badge';
export type { BadgeProps, BadgeStatus } from './components/Badge/Badge';

// ── Table ────────────────────────────────────────────────────────
export { Table } from './components/Table/Table';
export type { TableProps, TableColumn, SortOrder } from './components/Table/Table';

// ── Menu ─────────────────────────────────────────────────────────
export { Menu, MenuTopNavigation } from './components/Menu/Menu';
export type { MenuProps, MenuMode, MenuTheme, MenuTopNavigationProps } from './components/Menu/Menu';

// ── Tabs ─────────────────────────────────────────────────────────
export { Tabs } from './components/Tabs/Tabs';
export type { TabsProps, TabsType, TabsSize, TabsPosition } from './components/Tabs/Tabs';

// ── Pagination ───────────────────────────────────────────────────
export { Pagination } from './components/Pagination/Pagination';
export type { PaginationProps } from './components/Pagination/Pagination';

// ── Checkbox ─────────────────────────────────────────────────────
export { Checkbox, CheckboxGroup } from './components/Checkbox/Checkbox';
export type { CheckboxProps, CheckboxGroupProps, CheckboxSize } from './components/Checkbox/Checkbox';

// ── Radio ────────────────────────────────────────────────────────
export { Radio, RadioGroup, RadioButton, RadioGroupButtons } from './components/Radio/Radio';
export type { RadioProps, RadioGroupProps, RadioGroupButtonsProps } from './components/Radio/Radio';

// ── Switch ───────────────────────────────────────────────────────
export { Switch } from './components/Switch/Switch';
export type { SwitchProps, SwitchSize } from './components/Switch/Switch';

// ── Segmented ────────────────────────────────────────────────────
export { Segmented } from './components/Segmented/Segmented';
export type { SegmentedProps, SegmentedSize, SegmentedOption } from './components/Segmented/Segmented';

// ── Steps ────────────────────────────────────────────────────────
export { Steps } from './components/Steps/Steps';
export type { StepsProps, StepItem, StepStatus, StepsDirection, StepsSize } from './components/Steps/Steps';

// ── Breadcrumb ───────────────────────────────────────────────────
export { Breadcrumb } from './components/Breadcrumb/Breadcrumb';
export type { BreadcrumbProps, BreadcrumbItem } from './components/Breadcrumb/Breadcrumb';

// ── Progress ─────────────────────────────────────────────────────
export { Progress } from './components/Progress/Progress';
export type { ProgressProps, ProgressType, ProgressStatus } from './components/Progress/Progress';

// ── Spin ─────────────────────────────────────────────────────────
export { Spin } from './components/Spin/Spin';
export type { SpinProps, SpinSize } from './components/Spin/Spin';

// ── Drawer ───────────────────────────────────────────────────────
export { Drawer } from './components/Drawer/Drawer';
export type { DrawerProps, DrawerPlacement, DrawerSize } from './components/Drawer/Drawer';

// ── Tooltip ──────────────────────────────────────────────────────
export { Tooltip } from './components/Tooltip/Tooltip';
export type { TooltipProps, TooltipPlacement } from './components/Tooltip/Tooltip';

// ── Divider ──────────────────────────────────────────────────────
export { Divider } from './components/Divider/Divider';
export type { DividerProps, DividerType, DividerOrientation } from './components/Divider/Divider';

// ── Empty ────────────────────────────────────────────────────────
export { Empty, EMPTY_IMAGE_DEFAULT, EMPTY_IMAGE_SIMPLE } from './components/Empty/Empty';
export type { EmptyProps } from './components/Empty/Empty';

// ── Skeleton ─────────────────────────────────────────────────────
export { Skeleton, SkeletonAvatar, SkeletonButton, SkeletonInput, SkeletonImage, SkeletonNode } from './components/Skeleton/Skeleton';
export type { SkeletonProps } from './components/Skeleton/Skeleton';

// ── Notification ─────────────────────────────────────────────────
export { notification } from './components/Notification/Notification';
export type { NotificationProps, NotificationType, NotificationPlacement } from './components/Notification/Notification';

// ── Typography ───────────────────────────────────────────────────
export { Typography, Title, Text, Link, Paragraph } from './components/Typography/Typography';
export type { TitleProps, TextProps, LinkProps, ParagraphProps } from './components/Typography/Typography';

// ── Icon ─────────────────────────────────────────────────────────
export { Icon, resolveSize } from './components/Icon/Icon';
export type { IconProps, TablerIconProps, IconSize } from './components/Icon/Icon';

// ── LoginPage ────────────────────────────────────────────────────
export { LoginPage, LoginPageGallery } from './components/LoginPage/LoginPage';
export type { LoginPageProps, LoginState } from './components/LoginPage/LoginPage';
