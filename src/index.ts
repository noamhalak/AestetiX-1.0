// ─────────────────────────────────────────────────────────────────
//  AestetiX 1.0 Design System
//  Re-exports all tokens and components
// ─────────────────────────────────────────────────────────────────

// Styles (CSS custom properties + component classes)
import './styles/index.css';

// Tokens
export * from './tokens/design-tokens';

// Components
export { Button }                              from './components/Button/Button';
export type { ButtonProps, ButtonType, ButtonSize, ButtonContent } from './components/Button/Button';

export { Input }                               from './components/Input/Input';
export type { InputProps, InputSize, InputStatus } from './components/Input/Input';

export {
  Modal,
  ModalInformation,
  ModalConfirmation,
}                                              from './components/Modal/Modal';
export type {
  ModalProps,
  ModalInformationProps,
  ModalConfirmationProps,
  InformationStatus,
}                                              from './components/Modal/Modal';

export { Tag, TagStatus }                      from './components/Tag/Tag';
export type { TagProps, TagColor, TagStatusProps, TagStatusColor } from './components/Tag/Tag';

export {
  Title,
  Text,
  Link,
  Code,
  Paragraph,
}                                              from './components/Typography/Typography';
export type {
  TitleProps,
  TitleLevel,
  TextProps,
  TextType,
  TextStyle,
  TextSize,
  LinkProps,
  CodeProps,
  ParagraphProps,
}                                              from './components/Typography/Typography';

export {
  Menu,
  MenuTopNavigation,
}                                              from './components/Menu/Menu';
export type {
  MenuProps,
  MenuMode,
  MenuTheme,
  MenuItemData,
  MenuGroupData,
  MenuTopNavigationProps,
  TopNavItemData,
}                                              from './components/Menu/Menu';

export { Table }                               from './components/Table/Table';
export type {
  TableProps,
  TableColumn,
  SortOrder,
  CellAlignment,
}                                              from './components/Table/Table';

export { Checkbox, CheckboxGroup }             from './components/Checkbox/Checkbox';
export type {
  CheckboxProps,
  CheckboxSize,
  CheckboxOption,
  CheckboxGroupProps,
}                                              from './components/Checkbox/Checkbox';

export {
  Radio,
  RadioGroup,
  RadioButton,
  RadioGroupButtons,
}                                              from './components/Radio/Radio';
export type {
  RadioProps,
  RadioSize,
  RadioOption,
  RadioGroupProps,
  RadioButtonProps,
  RadioButtonStyle,
  RadioButtonPosition,
  RadioGroupButtonsProps,
}                                              from './components/Radio/Radio';

export { Switch }                              from './components/Switch/Switch';
export type { SwitchProps, SwitchSize }        from './components/Switch/Switch';

export { Alert }                               from './components/Alert/Alert';
export type { AlertProps, AlertType }          from './components/Alert/Alert';

export { Pagination }                          from './components/Pagination/Pagination';
export type { PaginationProps }                from './components/Pagination/Pagination';

export { Steps }                               from './components/Steps/Steps';
export type {
  StepsProps,
  StepItem,
  StepStatus,
  StepsDirection,
  StepsSize,
}                                              from './components/Steps/Steps';

export { Tabs }                                from './components/Tabs/Tabs';
export type {
  TabsProps,
  TabItem,
  TabsType,
  TabsSize,
  TabsPosition,
}                                              from './components/Tabs/Tabs';

export { Badge }                               from './components/Badge/Badge';
export type { BadgeProps, BadgeStatus }        from './components/Badge/Badge';

export { Avatar, AvatarGroup }                 from './components/Avatar/Avatar';
export type {
  AvatarProps,
  AvatarGroupProps,
  AvatarSize,
  AvatarShape,
}                                              from './components/Avatar/Avatar';

export { Breadcrumb }                          from './components/Breadcrumb/Breadcrumb';
export type { BreadcrumbProps, BreadcrumbItem } from './components/Breadcrumb/Breadcrumb';

export { Progress }                            from './components/Progress/Progress';
export type {
  ProgressProps,
  ProgressType,
  ProgressStatus,
}                                              from './components/Progress/Progress';

export { Spin }                                from './components/Spin/Spin';
export type { SpinProps, SpinSize }            from './components/Spin/Spin';

export { Drawer }                              from './components/Drawer/Drawer';
export type {
  DrawerProps,
  DrawerPlacement,
  DrawerSize,
}                                              from './components/Drawer/Drawer';

export { NotificationContainer }              from './components/Notification/Notification';
export type {
  NotificationItem,
  NotificationContainerProps,
  NotificationType,
  NotificationPlacement,
}                                              from './components/Notification/Notification';

export { Tooltip }                             from './components/Tooltip/Tooltip';
export type { TooltipProps, TooltipPlacement } from './components/Tooltip/Tooltip';

export { Divider }                             from './components/Divider/Divider';
export type {
  DividerProps,
  DividerType,
  DividerOrientation,
}                                              from './components/Divider/Divider';

export { Select }                              from './components/Select/Select';
export type {
  SelectProps,
  SelectOption,
  SelectOptionGroup,
  SelectSize,
  SelectStatus,
  SelectVariant,
  SelectMode,
}                                              from './components/Select/Select';

export { Segmented }                           from './components/Segmented/Segmented';
export type {
  SegmentedProps,
  SegmentedOption,
  SegmentedSize,
}                                              from './components/Segmented/Segmented';

export {
  Empty,
  EMPTY_IMAGE_DEFAULT,
  EMPTY_IMAGE_SIMPLE,
}                                              from './components/Empty/Empty';
export type { EmptyProps }                     from './components/Empty/Empty';

export {
  Skeleton,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonInput,
  SkeletonImage,
}                                              from './components/Skeleton/Skeleton';
export type {
  SkeletonProps,
  SkeletonAvatarProps,
  SkeletonButtonProps,
  SkeletonInputProps,
  SkeletonImageProps,
}                                              from './components/Skeleton/Skeleton';

export {
  LoginPage,
  LoginPageGallery,
}                                              from './components/LoginPage/LoginPage';
export type { LoginPageProps, LoginState }     from './components/LoginPage/LoginPage';

export { Icon }                                from './components/Icon/Icon';
export type {
  IconProps,
  TablerIconProps,
  IconSize,
}                                              from './components/Icon/Icon';
export { resolveSize }                         from './components/Icon/Icon';
