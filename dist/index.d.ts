import * as React$1 from 'react';
import React__default from 'react';
import * as antd from 'antd';
import { ConfigProvider, ThemeConfig, ButtonProps as ButtonProps$1, InputProps as InputProps$1, InputRef, SelectProps as SelectProps$1, ModalProps as ModalProps$1, Modal as Modal$1, TagProps as TagProps$1, Tag as Tag$1, MenuProps, BreadcrumbProps, TooltipProps } from 'antd';
export { Alert, AlertProps, Avatar, Badge, BadgeProps, Breadcrumb, BreadcrumbProps, Checkbox, Divider, DividerProps, Drawer, DrawerProps, Empty, EmptyProps, Menu, MenuProps, Pagination, PaginationProps, Progress, ProgressProps, Radio, Segmented, Skeleton, SkeletonProps, Spin, SpinProps, Steps, Switch, SwitchProps, Table, Tabs, Tooltip, TooltipProps, Typography, notification } from 'antd';
import * as antd_es_input_TextArea from 'antd/es/input/TextArea';
import * as antd_es_input from 'antd/es/input';
import * as _rc_component_select_lib_OptGroup from '@rc-component/select/lib/OptGroup';
import * as _rc_component_select_lib_Option from '@rc-component/select/lib/Option';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as antd_es_avatar_AvatarGroup from 'antd/es/avatar/AvatarGroup';
import * as antd_es_badge from 'antd/es/badge';
export { ColumnType as TableColumn, TableProps } from 'antd/es/table';
export { SortOrder } from 'antd/es/table/interface';
import { CheckboxGroupProps } from 'antd/es/checkbox';
export { CheckboxGroupProps, CheckboxProps } from 'antd/es/checkbox';
import * as antd_es_radio_radioButton from 'antd/es/radio/radioButton';
import { RadioGroupProps } from 'antd/es/radio';
export { RadioGroupProps, RadioProps } from 'antd/es/radio';
import { SegmentedProps } from 'antd/es/segmented';
export { SegmentedProps } from 'antd/es/segmented';
import { StepsProps } from 'antd/es/steps';
export { StepsProps } from 'antd/es/steps';
import * as antd_es_skeleton_Node from 'antd/es/skeleton/Node';
import * as antd_es_skeleton_Image from 'antd/es/skeleton/Image';
import * as antd_es_skeleton_Input from 'antd/es/skeleton/Input';
import * as antd_es_skeleton_Button from 'antd/es/skeleton/Button';
import * as antd_es_skeleton_Avatar from 'antd/es/skeleton/Avatar';
import * as antd_es_typography_Paragraph from 'antd/es/typography/Paragraph';
export { ParagraphProps } from 'antd/es/typography/Paragraph';
import * as antd_es_typography_Link from 'antd/es/typography/Link';
export { LinkProps } from 'antd/es/typography/Link';
import * as antd_es_typography_Text from 'antd/es/typography/Text';
export { TextProps } from 'antd/es/typography/Text';
import * as antd_es_typography_Title from 'antd/es/typography/Title';
export { TitleProps } from 'antd/es/typography/Title';
export { GroupProps as AvatarGroupProps, AvatarProps } from 'antd/es/avatar';
export { ArgsProps as NotificationProps } from 'antd/es/notification/interface';
export { DefaultOptionType as SelectOption } from 'antd/es/select';
export { TabsProps } from 'antd/es/tabs';

interface AestetiXProviderProps {
    children: React__default.ReactNode;
    direction?: 'rtl' | 'ltr';
    locale?: React__default.ComponentProps<typeof ConfigProvider>['locale'];
}
declare const AestetiXProvider: React__default.FC<AestetiXProviderProps>;

declare const aesthetixTheme: ThemeConfig;

declare const fontFamily: {
    readonly base: "\"Heebo\", sans-serif";
};
declare const fontWeight: {
    readonly thin: 100;
    readonly extraLight: 200;
    readonly light: 300;
    readonly regular: 400;
    readonly medium: 500;
    readonly semiBold: 600;
    readonly bold: 700;
    readonly extraBold: 800;
    readonly black: 900;
};
declare const fontSize: {
    readonly sm: 12;
    readonly base: 14;
    readonly lg: 16;
    readonly xl: 20;
    readonly h4: 20;
    readonly h3: 24;
    readonly h2: 30;
    readonly h1: 38;
};
declare const lineHeight: {
    readonly sm: 20;
    readonly base: 22;
    readonly lg: 24;
    readonly xl: 28;
    readonly h3: 32;
    readonly h2: 38;
    readonly h1: 46;
};
declare const spacing: {
    readonly 0: 0;
    readonly xxs: 4;
    readonly xs: 8;
    readonly sm: 12;
    readonly base: 16;
    readonly lg: 24;
    readonly xl: 32;
    readonly xxl: 48;
};
declare const controlHeight: {
    readonly sm: 24;
    readonly base: 32;
    readonly lg: 40;
};
declare const borderRadius: {
    readonly sm: 4;
    readonly base: 6;
    readonly lg: 8;
};
declare const shadow: {
    readonly base: "0px 0px 6px rgba(0, 0, 0, 0.12)";
    readonly modal: "0px 0px 3px rgba(0, 0, 0, 0.12)";
};
declare const colorPrimary: {
    readonly bg: "#e6f4ff";
    readonly border: "#91caff";
    readonly borderHover: "#69b1ff";
    readonly hover: "#4096ff";
    readonly base: "#1677ff";
    readonly active: "#0958d9";
    readonly textHover: "#4096ff";
    readonly text: "#1677ff";
    readonly textActive: "#0958d9";
};
declare const colorNeutral: {
    readonly bgLayout: "#f8f8f8";
    readonly bgContainer: "#ffffff";
    readonly bgFloating: "#ffffff";
    readonly bgTooltip: "rgba(0,0,0,0.875)";
    readonly fill: "rgba(0,0,0,0.15)";
    readonly fillSecondary: "rgba(0,0,0,0.06)";
    readonly fillTertiary: "rgba(0,0,0,0.04)";
    readonly fillQuaternary: "rgba(0,0,0,0.02)";
    readonly border: "#d9d9d9";
    readonly borderSecondary: "#f0f0f0";
    readonly split: "rgba(0,0,0,0.06)";
    readonly text: "rgba(0,0,0,0.88)";
    readonly textSecondary: "rgba(0,0,0,0.45)";
    readonly textLabel: "rgba(0,0,0,0.65)";
    readonly textDisabled: "rgba(0,0,0,0.25)";
    readonly textSolid: "#ffffff";
    readonly textPlaceholder: "rgba(0,0,0,0.25)";
    readonly controlItemBgHover: "rgba(0,0,0,0.04)";
};
declare const colorNeutralDark: {
    readonly bgLayout: "#141414";
    readonly bgContainer: "#141414";
    readonly bgFloating: "#1f1f1f";
    readonly border: "#434343";
    readonly borderSecondary: "#303030";
    readonly text: "rgba(255,255,255,0.85)";
    readonly textSecondary: "rgba(255,255,255,0.45)";
    readonly textLabel: "rgba(255,255,255,0.65)";
    readonly textDisabled: "rgba(255,255,255,0.25)";
    readonly textSolid: "#ffffff";
};
declare const colorSemantic: {
    readonly success: "#52c41a";
    readonly successBg: "#f6ffed";
    readonly successBorder: "#b7eb8f";
    readonly successText: "#52c41a";
    readonly successActive: "#389e0d";
    readonly warning: "#faad14";
    readonly warningBg: "#fffbe6";
    readonly warningBorder: "#ffe58f";
    readonly warningText: "#faad14";
    readonly warningActive: "#d48806";
    readonly error: "#ff4d4f";
    readonly errorBg: "#fff1f0";
    readonly errorBorder: "#ffa39e";
    readonly errorText: "#ff4d4f";
    readonly errorActive: "#d9363e";
    readonly info: "#1677ff";
    readonly infoBg: "#e6f4ff";
    readonly infoBorder: "#91caff";
};
declare const gray: {
    readonly 1: "#ffffff";
    readonly 2: "#fafafa";
    readonly 3: "#f5f5f5";
    readonly 4: "#f0f0f0";
    readonly 5: "#d9d9d9";
    readonly 6: "#bfbfbf";
    readonly 7: "#8c8c8c";
    readonly 8: "#595959";
    readonly 9: "#434343";
    readonly 10: "#262626";
    readonly 11: "#1f1f1f";
    readonly 12: "#141414";
    readonly 13: "#000000";
};
declare const palette: {
    readonly red: readonly ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
    readonly volcano: readonly ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
    readonly orange: readonly ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
    readonly gold: readonly ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
    readonly yellow: readonly ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
    readonly lime: readonly ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5c8a00", "#3f6600", "#254000"];
    readonly green: readonly ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
    readonly cyan: readonly ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
    readonly blue: readonly ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
    readonly geekBlue: readonly ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
    readonly purple: readonly ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
    readonly magenta: readonly ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c2", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
};
declare const darkPalette: {
    readonly red: readonly ["#2a1215", "#431418", "#58181c", "#791a1f", "#a61d24", "#d32029", "#e84749", "#f37370", "#f89f9a", "#fac8c3"];
    readonly volcano: readonly ["#2b1611", "#441d12", "#592716", "#7c3118", "#aa3e19", "#d84a1b", "#e87040", "#f3956a", "#f8b692", "#fad4bc"];
    readonly orange: readonly ["#2b1d11", "#442a11", "#593815", "#7c4a15", "#aa6215", "#d87a16", "#e89a3c", "#f3b765", "#f8cf8d", "#fae3b7"];
    readonly gold: readonly ["#2b2111", "#443111", "#594214", "#7c5914", "#aa7714", "#d89614", "#e8b339", "#f3cc62", "#f8df8b", "#faedb5"];
    readonly yellow: readonly ["#2b2611", "#443b11", "#595014", "#7c6e14", "#aa9514", "#d8bd14", "#e8d639", "#f3ea62", "#f8f48b", "#fafab5"];
    readonly lime: readonly ["#1f2611", "#2e3c10", "#3e4f13", "#536d13", "#6f9412", "#8bbb11", "#a9d134", "#c9e75d", "#e4f88b", "#f0fab5"];
    readonly green: readonly ["#162312", "#1d3712", "#274916", "#306317", "#3c8618", "#49aa19", "#6abe39", "#8fd460", "#b2e58b", "#d5f2bb"];
    readonly cyan: readonly ["#112123", "#113536", "#144848", "#146262", "#138585", "#13a8a8", "#33bcb7", "#58d1c9", "#84e2d8", "#b2f1e8"];
    readonly blue: readonly ["#111a2c", "#112545", "#15325b", "#15417e", "#1554ad", "#1668dc", "#3c89e8", "#65a9f3", "#8dc5f8", "#b7dcfa"];
    readonly geekBlue: readonly ["#131629", "#161d40", "#1c2755", "#203175", "#263ea0", "#2b4acb", "#5273e0", "#7f9ef3", "#a8c1f8", "#d2e0fa"];
    readonly purple: readonly ["#1a1325", "#24163a", "#301c4d", "#3e2069", "#51258f", "#642ab5", "#854eca", "#ab7ae0", "#cda8f0", "#ebd7fa"];
    readonly magenta: readonly ["#291321", "#40162f", "#551c3b", "#75204f", "#a02669", "#cb2b83", "#e0529c", "#f37fb7", "#f8a8cc", "#fad2e3"];
};
declare const tokens: {
    readonly fontFamily: {
        readonly base: "\"Heebo\", sans-serif";
    };
    readonly fontWeight: {
        readonly thin: 100;
        readonly extraLight: 200;
        readonly light: 300;
        readonly regular: 400;
        readonly medium: 500;
        readonly semiBold: 600;
        readonly bold: 700;
        readonly extraBold: 800;
        readonly black: 900;
    };
    readonly fontSize: {
        readonly sm: 12;
        readonly base: 14;
        readonly lg: 16;
        readonly xl: 20;
        readonly h4: 20;
        readonly h3: 24;
        readonly h2: 30;
        readonly h1: 38;
    };
    readonly lineHeight: {
        readonly sm: 20;
        readonly base: 22;
        readonly lg: 24;
        readonly xl: 28;
        readonly h3: 32;
        readonly h2: 38;
        readonly h1: 46;
    };
    readonly spacing: {
        readonly 0: 0;
        readonly xxs: 4;
        readonly xs: 8;
        readonly sm: 12;
        readonly base: 16;
        readonly lg: 24;
        readonly xl: 32;
        readonly xxl: 48;
    };
    readonly controlHeight: {
        readonly sm: 24;
        readonly base: 32;
        readonly lg: 40;
    };
    readonly borderRadius: {
        readonly sm: 4;
        readonly base: 6;
        readonly lg: 8;
    };
    readonly shadow: {
        readonly base: "0px 0px 6px rgba(0, 0, 0, 0.12)";
        readonly modal: "0px 0px 3px rgba(0, 0, 0, 0.12)";
    };
    readonly colorPrimary: {
        readonly bg: "#e6f4ff";
        readonly border: "#91caff";
        readonly borderHover: "#69b1ff";
        readonly hover: "#4096ff";
        readonly base: "#1677ff";
        readonly active: "#0958d9";
        readonly textHover: "#4096ff";
        readonly text: "#1677ff";
        readonly textActive: "#0958d9";
    };
    readonly colorNeutral: {
        readonly bgLayout: "#f8f8f8";
        readonly bgContainer: "#ffffff";
        readonly bgFloating: "#ffffff";
        readonly bgTooltip: "rgba(0,0,0,0.875)";
        readonly fill: "rgba(0,0,0,0.15)";
        readonly fillSecondary: "rgba(0,0,0,0.06)";
        readonly fillTertiary: "rgba(0,0,0,0.04)";
        readonly fillQuaternary: "rgba(0,0,0,0.02)";
        readonly border: "#d9d9d9";
        readonly borderSecondary: "#f0f0f0";
        readonly split: "rgba(0,0,0,0.06)";
        readonly text: "rgba(0,0,0,0.88)";
        readonly textSecondary: "rgba(0,0,0,0.45)";
        readonly textLabel: "rgba(0,0,0,0.65)";
        readonly textDisabled: "rgba(0,0,0,0.25)";
        readonly textSolid: "#ffffff";
        readonly textPlaceholder: "rgba(0,0,0,0.25)";
        readonly controlItemBgHover: "rgba(0,0,0,0.04)";
    };
    readonly colorNeutralDark: {
        readonly bgLayout: "#141414";
        readonly bgContainer: "#141414";
        readonly bgFloating: "#1f1f1f";
        readonly border: "#434343";
        readonly borderSecondary: "#303030";
        readonly text: "rgba(255,255,255,0.85)";
        readonly textSecondary: "rgba(255,255,255,0.45)";
        readonly textLabel: "rgba(255,255,255,0.65)";
        readonly textDisabled: "rgba(255,255,255,0.25)";
        readonly textSolid: "#ffffff";
    };
    readonly colorSemantic: {
        readonly success: "#52c41a";
        readonly successBg: "#f6ffed";
        readonly successBorder: "#b7eb8f";
        readonly successText: "#52c41a";
        readonly successActive: "#389e0d";
        readonly warning: "#faad14";
        readonly warningBg: "#fffbe6";
        readonly warningBorder: "#ffe58f";
        readonly warningText: "#faad14";
        readonly warningActive: "#d48806";
        readonly error: "#ff4d4f";
        readonly errorBg: "#fff1f0";
        readonly errorBorder: "#ffa39e";
        readonly errorText: "#ff4d4f";
        readonly errorActive: "#d9363e";
        readonly info: "#1677ff";
        readonly infoBg: "#e6f4ff";
        readonly infoBorder: "#91caff";
    };
    readonly gray: {
        readonly 1: "#ffffff";
        readonly 2: "#fafafa";
        readonly 3: "#f5f5f5";
        readonly 4: "#f0f0f0";
        readonly 5: "#d9d9d9";
        readonly 6: "#bfbfbf";
        readonly 7: "#8c8c8c";
        readonly 8: "#595959";
        readonly 9: "#434343";
        readonly 10: "#262626";
        readonly 11: "#1f1f1f";
        readonly 12: "#141414";
        readonly 13: "#000000";
    };
    readonly palette: {
        readonly red: readonly ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
        readonly volcano: readonly ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
        readonly orange: readonly ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
        readonly gold: readonly ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
        readonly yellow: readonly ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
        readonly lime: readonly ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5c8a00", "#3f6600", "#254000"];
        readonly green: readonly ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
        readonly cyan: readonly ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
        readonly blue: readonly ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
        readonly geekBlue: readonly ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
        readonly purple: readonly ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
        readonly magenta: readonly ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c2", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
    };
    readonly darkPalette: {
        readonly red: readonly ["#2a1215", "#431418", "#58181c", "#791a1f", "#a61d24", "#d32029", "#e84749", "#f37370", "#f89f9a", "#fac8c3"];
        readonly volcano: readonly ["#2b1611", "#441d12", "#592716", "#7c3118", "#aa3e19", "#d84a1b", "#e87040", "#f3956a", "#f8b692", "#fad4bc"];
        readonly orange: readonly ["#2b1d11", "#442a11", "#593815", "#7c4a15", "#aa6215", "#d87a16", "#e89a3c", "#f3b765", "#f8cf8d", "#fae3b7"];
        readonly gold: readonly ["#2b2111", "#443111", "#594214", "#7c5914", "#aa7714", "#d89614", "#e8b339", "#f3cc62", "#f8df8b", "#faedb5"];
        readonly yellow: readonly ["#2b2611", "#443b11", "#595014", "#7c6e14", "#aa9514", "#d8bd14", "#e8d639", "#f3ea62", "#f8f48b", "#fafab5"];
        readonly lime: readonly ["#1f2611", "#2e3c10", "#3e4f13", "#536d13", "#6f9412", "#8bbb11", "#a9d134", "#c9e75d", "#e4f88b", "#f0fab5"];
        readonly green: readonly ["#162312", "#1d3712", "#274916", "#306317", "#3c8618", "#49aa19", "#6abe39", "#8fd460", "#b2e58b", "#d5f2bb"];
        readonly cyan: readonly ["#112123", "#113536", "#144848", "#146262", "#138585", "#13a8a8", "#33bcb7", "#58d1c9", "#84e2d8", "#b2f1e8"];
        readonly blue: readonly ["#111a2c", "#112545", "#15325b", "#15417e", "#1554ad", "#1668dc", "#3c89e8", "#65a9f3", "#8dc5f8", "#b7dcfa"];
        readonly geekBlue: readonly ["#131629", "#161d40", "#1c2755", "#203175", "#263ea0", "#2b4acb", "#5273e0", "#7f9ef3", "#a8c1f8", "#d2e0fa"];
        readonly purple: readonly ["#1a1325", "#24163a", "#301c4d", "#3e2069", "#51258f", "#642ab5", "#854eca", "#ab7ae0", "#cda8f0", "#ebd7fa"];
        readonly magenta: readonly ["#291321", "#40162f", "#551c3b", "#75204f", "#a02669", "#cb2b83", "#e0529c", "#f37fb7", "#f8a8cc", "#fad2e3"];
    };
};
type Tokens = typeof tokens;

type ButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link';
type ButtonSize = 'small' | 'middle' | 'large';
type ButtonShape = 'default' | 'circle' | 'round';
interface ButtonProps extends ButtonProps$1 {
}
declare const Button: React__default.ForwardRefExoticComponent<ButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

type InputSize = 'small' | 'middle' | 'large';
type InputStatus = '' | 'error' | 'warning';
interface InputProps extends Omit<InputProps$1, 'size' | 'status'> {
    size?: InputSize;
    status?: InputStatus;
}
declare const Input: React__default.ForwardRefExoticComponent<InputProps & React__default.RefAttributes<InputRef>>;
declare const InputPassword: React__default.ForwardRefExoticComponent<antd_es_input.PasswordProps & React__default.RefAttributes<InputRef>>;
declare const InputSearch: React__default.ForwardRefExoticComponent<antd_es_input.SearchProps & React__default.RefAttributes<InputRef>>;
declare const TextArea: React__default.ForwardRefExoticComponent<antd_es_input.TextAreaProps & React__default.RefAttributes<antd_es_input_TextArea.TextAreaRef>>;

type SelectSize = 'small' | 'middle' | 'large';
type SelectStatus = '' | 'error' | 'warning';
type SelectVariant = 'outlined' | 'filled' | 'borderless';
interface SelectProps<T = string> extends Omit<SelectProps$1<T>, 'size' | 'status' | 'variant'> {
    size?: SelectSize;
    status?: SelectStatus;
    variant?: SelectVariant;
}
declare function Select<T = string>({ size, status, variant, ...rest }: SelectProps<T>): react_jsx_runtime.JSX.Element;
declare namespace Select {
    var Option: _rc_component_select_lib_Option.OptionFC;
    var OptGroup: _rc_component_select_lib_OptGroup.OptionGroupFC;
}

type AlertType = 'success' | 'info' | 'warning' | 'error';

interface ModalProps extends ModalProps$1 {
}
type ModalStatusType = 'success' | 'error' | 'warning' | 'info';
interface ModalInformationProps {
    open?: boolean;
    status: ModalStatusType;
    title: React__default.ReactNode;
    description?: React__default.ReactNode;
    okText?: string;
    cancelText?: string;
    onOk?: () => void;
    onCancel?: () => void;
}
declare const ModalInformation: React__default.FC<ModalInformationProps>;
interface ModalConfirmationProps {
    open?: boolean;
    title: React__default.ReactNode;
    description?: React__default.ReactNode;
    okText?: string;
    cancelText?: string;
    danger?: boolean;
    onOk?: () => void;
    onCancel?: () => void;
}
declare const ModalConfirmation: React__default.FC<ModalConfirmationProps>;
declare const Modal: React__default.FC<ModalProps> & {
    confirm: typeof Modal$1.confirm;
    info: typeof Modal$1.info;
    success: typeof Modal$1.success;
    warning: typeof Modal$1.warning;
    error: typeof Modal$1.error;
    destroyAll: typeof Modal$1.destroyAll;
};

interface TagProps extends TagProps$1 {
}
type TagStatusColor = 'success' | 'processing' | 'error' | 'warning' | 'default';
interface TagStatusProps {
    status: TagStatusColor;
    text?: React__default.ReactNode;
}
declare const Tag: React__default.FC<TagProps> & {
    CheckableTag: typeof Tag$1.CheckableTag;
};
declare const TagStatus: React__default.FC<TagStatusProps>;

type AvatarSize = 'large' | 'small' | 'default' | number;
type AvatarShape = 'circle' | 'square';
declare const AvatarGroup: React$1.FC<antd_es_avatar_AvatarGroup.AvatarGroupProps>;

type BadgeStatus = 'success' | 'processing' | 'default' | 'error' | 'warning';
declare const BadgeRibbon: React$1.FC<antd_es_badge.RibbonProps>;

type MenuMode = 'horizontal' | 'vertical' | 'inline';
type MenuTheme = 'light' | 'dark';
interface MenuTopNavigationProps extends Omit<MenuProps, 'mode'> {
}
declare const MenuTopNavigation: React__default.FC<MenuTopNavigationProps>;

type TabsType = 'line' | 'card' | 'editable-card';
type TabsSize = 'large' | 'default' | 'small';
type TabsPosition = 'top' | 'right' | 'bottom' | 'left';

type CheckboxSize = 'small' | 'middle' | 'large';
declare const CheckboxGroup: <T = any>(props: CheckboxGroupProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement;

declare const RadioGroup: React__default.NamedExoticComponent<RadioGroupProps & React__default.RefAttributes<HTMLDivElement>>;
declare const RadioButton: React__default.ForwardRefExoticComponent<antd_es_radio_radioButton.RadioButtonProps & React__default.RefAttributes<antd.CheckboxRef>>;
interface RadioGroupButtonsProps extends Omit<RadioGroupProps, 'optionType'> {
    btnStyle?: 'outline' | 'solid';
}
declare const RadioGroupButtons: React__default.FC<RadioGroupButtonsProps>;

type SwitchSize = 'default' | 'small';

type SegmentedSize = 'large' | 'middle' | 'small';
type SegmentedOption = NonNullable<SegmentedProps['options']>[number];

type StepStatus = 'wait' | 'process' | 'finish' | 'error';
type StepsDirection = 'horizontal' | 'vertical';
type StepsSize = 'default' | 'small';
type StepItem = NonNullable<StepsProps['items']>[number];

type BreadcrumbItem = NonNullable<BreadcrumbProps['items']>[number];

type ProgressType = 'line' | 'circle' | 'dashboard';
type ProgressStatus = 'success' | 'exception' | 'normal' | 'active';

type SpinSize = 'small' | 'default' | 'large';

type DrawerPlacement = 'top' | 'right' | 'bottom' | 'left';
type DrawerSize = 'default' | 'large';

type TooltipPlacement = TooltipProps['placement'];

type DividerType = 'horizontal' | 'vertical';
type DividerOrientation = 'left' | 'right' | 'center';

declare const EMPTY_IMAGE_DEFAULT: React$1.ReactNode;
declare const EMPTY_IMAGE_SIMPLE: React$1.ReactNode;

declare const SkeletonAvatar: React$1.FC<antd_es_skeleton_Avatar.AvatarProps>;
declare const SkeletonButton: React$1.FC<antd_es_skeleton_Button.SkeletonButtonProps>;
declare const SkeletonInput: React$1.FC<antd_es_skeleton_Input.SkeletonInputProps>;
declare const SkeletonImage: React$1.FC<antd_es_skeleton_Image.SkeletonImageProps>;
declare const SkeletonNode: React$1.FC<antd_es_skeleton_Node.SkeletonNodeProps>;

type NotificationType = 'success' | 'info' | 'warning' | 'error';
type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'top' | 'bottom';

declare const Title: React$1.ForwardRefExoticComponent<antd_es_typography_Title.TitleProps & React$1.RefAttributes<HTMLElement>>;
declare const Text: React$1.ForwardRefExoticComponent<antd_es_typography_Text.TextProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const Link: React$1.ForwardRefExoticComponent<antd_es_typography_Link.LinkProps & React$1.RefAttributes<HTMLElement>>;
declare const Paragraph: React$1.ForwardRefExoticComponent<antd_es_typography_Paragraph.ParagraphProps & React$1.RefAttributes<HTMLElement>>;

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
declare function resolveSize(size: IconSize): number;
interface TablerIconProps {
    size?: IconSize;
    color?: string;
    stroke?: number;
    className?: string;
    style?: React__default.CSSProperties;
}
interface IconProps extends TablerIconProps {
    icon: React__default.FC<TablerIconProps>;
}
declare const Icon: React__default.FC<IconProps>;

type LoginState = 'idle' | 'typing' | 'error-empty' | 'error-email' | 'error-wrong' | 'error-locked' | 'loading' | 'success' | 'forgot' | 'forgot-sent';
interface LoginPageProps {
    onSuccess?: (email: string) => void;
    logoSrc?: string;
    appName?: string;
    initialState?: LoginState;
}
declare function LoginPage({ onSuccess, logoSrc, appName, initialState }: LoginPageProps): react_jsx_runtime.JSX.Element;
declare function LoginPageGallery(): react_jsx_runtime.JSX.Element;

export { AestetiXProvider, type AestetiXProviderProps, type AlertType, AvatarGroup, type AvatarShape, type AvatarSize, BadgeRibbon, type BadgeStatus, type BreadcrumbItem, Button, type ButtonProps, type ButtonShape, type ButtonSize, type ButtonType, CheckboxGroup, type CheckboxSize, type DividerOrientation, type DividerType, type DrawerPlacement, type DrawerSize, EMPTY_IMAGE_DEFAULT, EMPTY_IMAGE_SIMPLE, Icon, type IconProps, type IconSize, Input, InputPassword, type InputProps, InputSearch, type InputSize, type InputStatus, Link, LoginPage, LoginPageGallery, type LoginPageProps, type LoginState, type MenuMode, type MenuTheme, MenuTopNavigation, type MenuTopNavigationProps, Modal, ModalConfirmation, type ModalConfirmationProps, ModalInformation, type ModalInformationProps, type ModalProps, type ModalStatusType, type NotificationPlacement, type NotificationType, Paragraph, type ProgressStatus, type ProgressType, RadioButton, RadioGroup, RadioGroupButtons, type RadioGroupButtonsProps, type SegmentedOption, type SegmentedSize, Select, type SelectProps, type SelectSize, type SelectStatus, type SelectVariant, SkeletonAvatar, SkeletonButton, SkeletonImage, SkeletonInput, SkeletonNode, type SpinSize, type StepItem, type StepStatus, type StepsDirection, type StepsSize, type SwitchSize, type TablerIconProps, type TabsPosition, type TabsSize, type TabsType, Tag, type TagProps, TagStatus, type TagStatusColor, type TagStatusProps, Text, TextArea, Title, type Tokens, type TooltipPlacement, aesthetixTheme, borderRadius, colorNeutral, colorNeutralDark, colorPrimary, colorSemantic, controlHeight, darkPalette, fontFamily, fontSize, fontWeight, gray, lineHeight, palette, resolveSize, shadow, spacing, tokens };
