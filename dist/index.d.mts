import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

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
type ButtonSize = 'small' | 'default' | 'large';
type ButtonContent = 'default' | 'icon' | 'icon-left' | 'icon-right';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: ButtonType;
    size?: ButtonSize;
    content?: ButtonContent;
    danger?: boolean;
    ghost?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    block?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

type InputSize = 'small' | 'default' | 'large';
type InputStatus = 'default' | 'error' | 'warning';
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
    size?: InputSize;
    status?: InputStatus;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    allowClear?: boolean;
    addonBefore?: React.ReactNode;
    addonAfter?: React.ReactNode;
    required?: boolean;
    helperText?: string;
    label?: string;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface ModalProps {
    open?: boolean;
    title?: React.ReactNode;
    titleIcon?: React.ReactNode;
    children?: React.ReactNode;
    onOk?: () => void;
    onCancel?: () => void;
    okText?: string;
    cancelText?: string;
    showOk?: boolean;
    showCancel?: boolean;
    position?: 'default' | 'top' | 'center';
    className?: string;
    width?: number | string;
}
declare function Modal({ open, title, titleIcon, children, onOk, onCancel, okText, cancelText, showOk, showCancel, position, className, width, }: ModalProps): react_jsx_runtime.JSX.Element | null;
type InformationStatus = 'info' | 'error' | 'success' | 'warning';
interface ModalInformationProps {
    open?: boolean;
    status?: InformationStatus;
    title?: React.ReactNode;
    description?: React.ReactNode;
    onOk?: () => void;
    onCancel?: () => void;
    okText?: string;
    cancelText?: string;
    width?: number | string;
}
declare function ModalInformation({ open, status, title, description, onOk, onCancel, okText, cancelText, width, }: ModalInformationProps): react_jsx_runtime.JSX.Element | null;
interface ModalConfirmationProps {
    open?: boolean;
    title?: React.ReactNode;
    description?: React.ReactNode;
    onOk?: () => void;
    onCancel?: () => void;
    okText?: string;
    cancelText?: string;
    danger?: boolean;
    width?: number | string;
}
declare function ModalConfirmation({ open, title, description, onOk, onCancel, okText, cancelText, danger, width, }: ModalConfirmationProps): react_jsx_runtime.JSX.Element | null;

type TagColor = 'default' | 'processing' | 'success' | 'warning' | 'error' | 'red' | 'volcano' | 'orange' | 'gold' | 'yellow' | 'lime' | 'green' | 'cyan' | 'blue' | 'geekblue' | 'purple' | 'magenta';
interface TagProps {
    color?: TagColor;
    closable?: boolean;
    onClose?: (e: React.MouseEvent) => void;
    bordered?: boolean;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare function Tag({ color, closable, onClose, bordered, icon, children, className, style, }: TagProps): react_jsx_runtime.JSX.Element | null;
type TagStatusColor = 'default' | 'processing' | 'success' | 'warning' | 'error';
interface TagStatusProps {
    status?: TagStatusColor;
    text?: React.ReactNode;
    className?: string;
}
declare function TagStatus({ status, text, className }: TagStatusProps): react_jsx_runtime.JSX.Element;

type TitleLevel = 1 | 2 | 3 | 4 | 5;
interface TitleProps {
    level?: TitleLevel;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
}
declare function Title({ level, children, className, style, disabled }: TitleProps): react_jsx_runtime.JSX.Element;
type TextType = 'default' | 'secondary' | 'success' | 'warning' | 'error' | 'disabled' | 'mark';
type TextStyle = 'default' | 'underline' | 'delete' | 'italic' | 'strong' | 'medium';
type TextSize = 'small' | 'default' | 'large' | 'extra-large';
interface TextProps {
    type?: TextType;
    textStyle?: TextStyle;
    size?: TextSize;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare function Text({ type, textStyle, size, children, className, style }: TextProps): react_jsx_runtime.JSX.Element;
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    underlined?: boolean;
    disabled?: boolean;
    size?: TextSize;
    children?: React.ReactNode;
}
declare function Link({ underlined, disabled, size, children, className, style, ...rest }: LinkProps): react_jsx_runtime.JSX.Element;
interface CodeProps {
    children?: React.ReactNode;
    className?: string;
}
declare function Code({ children, className }: CodeProps): react_jsx_runtime.JSX.Element;
interface ParagraphProps {
    type?: TextType;
    size?: TextSize;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare function Paragraph({ type, size, children, className, style }: ParagraphProps): react_jsx_runtime.JSX.Element;

type MenuMode = 'inline' | 'vertical';
type MenuTheme = 'light' | 'dark';
interface MenuItemData {
    key: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
    children?: MenuItemData[];
}
interface MenuGroupData {
    key: string;
    label: React.ReactNode;
    children: MenuItemData[];
}
interface MenuProps {
    items?: (MenuItemData | MenuGroupData)[];
    mode?: MenuMode;
    theme?: MenuTheme;
    activeKey?: string;
    defaultActiveKey?: string;
    collapsed?: boolean;
    onSelect?: (key: string) => void;
    style?: React.CSSProperties;
    className?: string;
    width?: number | string;
}
declare function Menu({ items, mode, theme, activeKey: controlledActiveKey, defaultActiveKey, collapsed, onSelect, style, className, width, }: MenuProps): react_jsx_runtime.JSX.Element;
interface TopNavItemData {
    key: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
}
interface MenuTopNavigationProps {
    items?: TopNavItemData[];
    theme?: MenuTheme;
    activeKey?: string;
    defaultActiveKey?: string;
    onSelect?: (key: string) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare function MenuTopNavigation({ items, theme, activeKey: controlledActiveKey, defaultActiveKey, onSelect, className, style, }: MenuTopNavigationProps): react_jsx_runtime.JSX.Element;

type SortOrder = 'asc' | 'desc' | null;
type CellAlignment = 'left' | 'center' | 'right';
interface TableColumn<T = Record<string, unknown>> {
    key: string;
    title: React.ReactNode;
    dataIndex?: keyof T;
    width?: number | string;
    align?: CellAlignment;
    sorter?: boolean;
    sortOrder?: SortOrder;
    onSort?: (order: SortOrder) => void;
    filterable?: boolean;
    onFilter?: () => void;
    render?: (value: unknown, record: T, index: number) => React.ReactNode;
    fixed?: 'left' | 'right';
}
interface TableProps<T = Record<string, unknown>> {
    columns: TableColumn<T>[];
    dataSource: T[];
    rowKey?: keyof T | ((record: T) => string);
    selectedRowKeys?: string[];
    onSelectChange?: (keys: string[]) => void;
    selectable?: boolean;
    loading?: boolean;
    empty?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare function Table<T extends Record<string, unknown> = Record<string, unknown>>({ columns, dataSource, rowKey, selectedRowKeys, onSelectChange, selectable, loading, empty, className, style, }: TableProps<T>): react_jsx_runtime.JSX.Element;

type CheckboxSize = 'default' | 'small';
interface CheckboxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    required?: boolean;
    size?: CheckboxSize;
    onChange?: (checked: boolean) => void;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    name?: string;
    value?: string;
}
declare function Checkbox({ checked: controlledChecked, defaultChecked, indeterminate, disabled, required, size, onChange, children, className, style, id, name, value, }: CheckboxProps): react_jsx_runtime.JSX.Element;
interface CheckboxOption {
    label: React.ReactNode;
    value: string;
    disabled?: boolean;
}
interface CheckboxGroupProps {
    options?: CheckboxOption[];
    value?: string[];
    defaultValue?: string[];
    onChange?: (values: string[]) => void;
    disabled?: boolean;
    direction?: 'horizontal' | 'vertical';
    size?: CheckboxSize;
    className?: string;
}
declare function CheckboxGroup({ options, value: controlledValue, defaultValue, onChange, disabled, direction, size, className, }: CheckboxGroupProps): react_jsx_runtime.JSX.Element;

type RadioSize = 'small' | 'default' | 'large';
interface RadioProps {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    value?: string;
    name?: string;
    onChange?: (value: string) => void;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare function Radio({ checked: controlledChecked, defaultChecked, disabled, value, name, onChange, children, className, style, }: RadioProps): react_jsx_runtime.JSX.Element;
interface RadioOption {
    label: React.ReactNode;
    value: string;
    disabled?: boolean;
}
interface RadioGroupProps {
    options?: RadioOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    direction?: 'horizontal' | 'vertical';
    className?: string;
    name?: string;
}
declare function RadioGroup({ options, value: controlled, defaultValue, onChange, disabled, direction, className, name, }: RadioGroupProps): react_jsx_runtime.JSX.Element;
type RadioButtonStyle = 'outlined' | 'solid';
type RadioButtonPosition = 'first' | 'center' | 'last' | 'only';
interface RadioButtonProps {
    value?: string;
    checked?: boolean;
    disabled?: boolean;
    size?: RadioSize;
    btnStyle?: RadioButtonStyle;
    position?: RadioButtonPosition;
    onChange?: (value: string) => void;
    children?: React.ReactNode;
}
declare function RadioButton({ value, checked, disabled, size, btnStyle, position, onChange, children, }: RadioButtonProps): react_jsx_runtime.JSX.Element;
interface RadioGroupButtonsProps {
    options?: RadioOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    size?: RadioSize;
    btnStyle?: RadioButtonStyle;
    className?: string;
}
declare function RadioGroupButtons({ options, value: controlled, defaultValue, onChange, disabled, size, btnStyle, className, }: RadioGroupButtonsProps): react_jsx_runtime.JSX.Element;

type SwitchSize = 'default' | 'small';
interface SwitchProps {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    loading?: boolean;
    size?: SwitchSize;
    checkedChildren?: React.ReactNode;
    unCheckedChildren?: React.ReactNode;
    onChange?: (checked: boolean) => void;
    className?: string;
    style?: React.CSSProperties;
    'aria-label'?: string;
}
declare function Switch({ checked: controlledChecked, defaultChecked, disabled, loading, size, checkedChildren, unCheckedChildren, onChange, className, style, 'aria-label': ariaLabel, }: SwitchProps): react_jsx_runtime.JSX.Element;

type AlertType = 'success' | 'info' | 'warning' | 'error';
interface AlertProps {
    type?: AlertType;
    message: React.ReactNode;
    description?: React.ReactNode;
    banner?: boolean;
    closable?: boolean;
    showIcon?: boolean;
    icon?: React.ReactNode;
    onClose?: () => void;
    className?: string;
    style?: React.CSSProperties;
}
declare function Alert({ type, message, description, banner, closable, showIcon, icon, onClose, className, style, }: AlertProps): react_jsx_runtime.JSX.Element | null;

interface PaginationProps {
    current?: number;
    defaultCurrent?: number;
    total?: number;
    pageSize?: number;
    defaultPageSize?: number;
    showSizeChanger?: boolean;
    showQuickJumper?: boolean;
    showTotal?: boolean | ((total: number, range: [number, number]) => React.ReactNode);
    disabled?: boolean;
    mini?: boolean;
    onChange?: (page: number, pageSize: number) => void;
    onShowSizeChange?: (current: number, size: number) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare function Pagination({ current: controlledCurrent, defaultCurrent, total, pageSize: controlledPageSize, defaultPageSize, showSizeChanger, showQuickJumper, showTotal, disabled, mini, onChange, onShowSizeChange, className, style, }: PaginationProps): react_jsx_runtime.JSX.Element;

type StepStatus = 'finish' | 'process' | 'wait' | 'error';
type StepsDirection = 'horizontal' | 'vertical';
type StepsSize = 'default' | 'small';
interface StepItem {
    title: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
    status?: StepStatus;
    subTitle?: React.ReactNode;
}
interface StepsProps {
    current?: number;
    direction?: StepsDirection;
    size?: StepsSize;
    status?: StepStatus;
    items?: StepItem[];
    onChange?: (current: number) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare function Steps({ current, direction, size, status, items, onChange, className, style, }: StepsProps): react_jsx_runtime.JSX.Element;

type TabsType = 'line' | 'card';
type TabsSize = 'large' | 'default' | 'small';
type TabsPosition = 'top' | 'right' | 'bottom' | 'left';
interface TabItem {
    key: string;
    label: React.ReactNode;
    children?: React.ReactNode;
    disabled?: boolean;
    icon?: React.ReactNode;
    closable?: boolean;
}
interface TabsProps {
    activeKey?: string;
    defaultActiveKey?: string;
    type?: TabsType;
    size?: TabsSize;
    tabPosition?: TabsPosition;
    items?: TabItem[];
    onChange?: (key: string) => void;
    onEdit?: (key: string, action: 'remove') => void;
    className?: string;
    style?: React.CSSProperties;
}
declare function Tabs({ activeKey: controlledActiveKey, defaultActiveKey, type, size, tabPosition, items, onChange, onEdit, className, style, }: TabsProps): react_jsx_runtime.JSX.Element;

type BadgeStatus = 'success' | 'processing' | 'default' | 'error' | 'warning';
interface BadgeProps {
    count?: number;
    dot?: boolean;
    status?: BadgeStatus;
    color?: string;
    text?: React.ReactNode;
    showZero?: boolean;
    overflowCount?: number;
    offset?: [number, number];
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare function Badge({ count, dot, status, color, text, showZero, overflowCount, offset, children, className, style, }: BadgeProps): react_jsx_runtime.JSX.Element | null;

type AvatarSize = 'large' | 'default' | 'small' | number;
type AvatarShape = 'circle' | 'square';
interface AvatarProps {
    size?: AvatarSize;
    shape?: AvatarShape;
    src?: string;
    alt?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}
interface AvatarGroupProps {
    maxCount?: number;
    maxStyle?: React.CSSProperties;
    size?: AvatarSize;
    shape?: AvatarShape;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare function Avatar({ size, shape, src, alt, icon, children, style, className, }: AvatarProps): react_jsx_runtime.JSX.Element;
declare function AvatarGroup({ maxCount, maxStyle, size, shape, children, className, style, }: AvatarGroupProps): react_jsx_runtime.JSX.Element;

interface BreadcrumbItem {
    title: React.ReactNode;
    href?: string;
    onClick?: (e: React.MouseEvent) => void;
    icon?: React.ReactNode;
    disabled?: boolean;
}
interface BreadcrumbProps {
    items?: BreadcrumbItem[];
    separator?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare function Breadcrumb({ items, separator, className, style, }: BreadcrumbProps): react_jsx_runtime.JSX.Element;

type ProgressType = 'line' | 'circle' | 'dashboard';
type ProgressStatus = 'normal' | 'active' | 'success' | 'exception';
interface ProgressProps {
    percent?: number;
    type?: ProgressType;
    status?: ProgressStatus;
    showInfo?: boolean;
    strokeColor?: string;
    trailColor?: string;
    strokeWidth?: number;
    size?: 'default' | 'small';
    width?: number;
    format?: (percent?: number) => React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare function Progress({ percent, type, status, showInfo, strokeColor, trailColor, strokeWidth, size, width, format, className, style, }: ProgressProps): react_jsx_runtime.JSX.Element;

type SpinSize = 'small' | 'default' | 'large';
interface SpinProps {
    spinning?: boolean;
    size?: SpinSize;
    tip?: React.ReactNode;
    delay?: number;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare function Spin({ spinning, size, tip, children, className, style, }: SpinProps): react_jsx_runtime.JSX.Element | null;

type DrawerPlacement = 'right' | 'left' | 'top' | 'bottom';
type DrawerSize = 'default' | 'large';
interface DrawerProps {
    open?: boolean;
    placement?: DrawerPlacement;
    size?: DrawerSize;
    width?: number | string;
    height?: number | string;
    title?: React.ReactNode;
    footer?: React.ReactNode;
    closable?: boolean;
    maskClosable?: boolean;
    mask?: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    bodyStyle?: React.CSSProperties;
}
declare function Drawer({ open, placement, size, width, height, title, footer, closable, maskClosable, mask, onClose, children, className, style, bodyStyle, }: DrawerProps): react_jsx_runtime.JSX.Element | null;

type NotificationType = 'success' | 'info' | 'warning' | 'error';
type NotificationPlacement = 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft';
interface NotificationItem {
    key: string;
    type?: NotificationType;
    message: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    duration?: number;
    closable?: boolean;
    btn?: React.ReactNode;
    onClose?: () => void;
}
interface NotificationContainerProps {
    items?: NotificationItem[];
    placement?: NotificationPlacement;
    onClose?: (key: string) => void;
    style?: React.CSSProperties;
}
declare function NotificationContainer({ items, placement, onClose, style, }: NotificationContainerProps): react_jsx_runtime.JSX.Element | null;

type TooltipPlacement = 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'left' | 'leftTop' | 'leftBottom' | 'right' | 'rightTop' | 'rightBottom';
interface TooltipProps {
    title?: React.ReactNode;
    placement?: TooltipPlacement;
    open?: boolean;
    defaultOpen?: boolean;
    disabled?: boolean;
    color?: string;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare function Tooltip({ title, placement, open: controlledOpen, defaultOpen, disabled, color, children, className, style, }: TooltipProps): react_jsx_runtime.JSX.Element;

type DividerType = 'horizontal' | 'vertical';
type DividerOrientation = 'left' | 'center' | 'right';
interface DividerProps {
    type?: DividerType;
    orientation?: DividerOrientation;
    dashed?: boolean;
    plain?: boolean;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare function Divider({ type, orientation, dashed, plain, children, className, style, }: DividerProps): react_jsx_runtime.JSX.Element;

type SelectSize = 'small' | 'default' | 'large';
type SelectStatus = '' | 'error' | 'warning';
type SelectVariant = 'outlined' | 'filled' | 'borderless';
type SelectMode = 'default' | 'multiple' | 'tags';
interface SelectOption {
    label: React.ReactNode;
    value: string;
    disabled?: boolean;
}
interface SelectOptionGroup {
    label: React.ReactNode;
    options: SelectOption[];
}
interface SelectProps {
    value?: string | string[];
    defaultValue?: string | string[];
    placeholder?: string;
    options?: (SelectOption | SelectOptionGroup)[];
    mode?: SelectMode;
    size?: SelectSize;
    status?: SelectStatus;
    variant?: SelectVariant;
    disabled?: boolean;
    allowClear?: boolean;
    showSearch?: boolean;
    loading?: boolean;
    open?: boolean;
    onChange?: (value: string | string[]) => void;
    onSearch?: (value: string) => void;
    onDropdownVisibleChange?: (open: boolean) => void;
    className?: string;
    style?: React.CSSProperties;
    dropdownStyle?: React.CSSProperties;
}
declare function Select({ value: controlledValue, defaultValue, placeholder, options, mode, size, status, variant, disabled, allowClear, showSearch, loading, open: controlledOpen, onChange, onSearch, onDropdownVisibleChange, className, style, dropdownStyle, }: SelectProps): react_jsx_runtime.JSX.Element;

type SegmentedSize = 'large' | 'default' | 'small';
interface SegmentedOption {
    label: React.ReactNode;
    value: string;
    disabled?: boolean;
    icon?: React.ReactNode;
}
interface SegmentedProps {
    value?: string;
    defaultValue?: string;
    options?: (SegmentedOption | string)[];
    size?: SegmentedSize;
    disabled?: boolean;
    block?: boolean;
    onChange?: (value: string) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare function Segmented({ value: controlledValue, defaultValue, options, size, disabled, block, onChange, className, style, }: SegmentedProps): react_jsx_runtime.JSX.Element;

interface EmptyProps {
    image?: React.ReactNode | 'default' | 'simple';
    imageStyle?: React.CSSProperties;
    description?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare const EMPTY_IMAGE_DEFAULT: "default";
declare const EMPTY_IMAGE_SIMPLE: "simple";
declare function Empty({ image, imageStyle, description, children, className, style, }: EmptyProps): react_jsx_runtime.JSX.Element;

interface SkeletonAvatarProps {
    size?: 'large' | 'default' | 'small' | number;
    shape?: 'circle' | 'square';
    style?: React.CSSProperties;
}
declare function SkeletonAvatar({ size, shape, style }: SkeletonAvatarProps): react_jsx_runtime.JSX.Element;
interface SkeletonInputProps {
    size?: 'large' | 'default' | 'small';
    block?: boolean;
    active?: boolean;
    style?: React.CSSProperties;
}
declare function SkeletonInput({ size, block, style }: SkeletonInputProps): react_jsx_runtime.JSX.Element;
interface SkeletonButtonProps {
    size?: 'large' | 'default' | 'small';
    block?: boolean;
    shape?: 'default' | 'circle' | 'round';
    style?: React.CSSProperties;
}
declare function SkeletonButton({ size, block, shape, style }: SkeletonButtonProps): react_jsx_runtime.JSX.Element;
interface SkeletonImageProps {
    style?: React.CSSProperties;
}
declare function SkeletonImage({ style }: SkeletonImageProps): react_jsx_runtime.JSX.Element;
interface SkeletonProps {
    loading?: boolean;
    active?: boolean;
    avatar?: boolean | SkeletonAvatarProps;
    title?: boolean | {
        width?: number | string;
    };
    paragraph?: boolean | {
        rows?: number;
        width?: (number | string)[];
    };
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare function Skeleton({ loading, avatar, title, paragraph, children, className, style, }: SkeletonProps): react_jsx_runtime.JSX.Element;

type LoginState = 'idle' | 'typing' | 'error-empty' | 'error-email' | 'error-wrong' | 'error-locked' | 'loading' | 'success' | 'forgot' | 'forgot-sent';
interface LoginPageProps {
    onSuccess?: (email: string) => void;
    logoSrc?: string;
    appName?: string;
    initialState?: LoginState;
}
declare function LoginPage({ onSuccess, logoSrc, appName, initialState }: LoginPageProps): react_jsx_runtime.JSX.Element;
declare function LoginPageGallery(): react_jsx_runtime.JSX.Element;

interface IconProps {
    /** Any @tabler/icons-react component */
    icon: React.ComponentType<TablerIconProps>;
    /** px — default 24 */
    size?: number;
    /** CSS color — default currentColor */
    color?: string;
    /** SVG stroke-width — default 2 */
    strokeWidth?: number;
    className?: string;
    style?: React.CSSProperties;
}
interface TablerIconProps {
    size?: number;
    color?: string;
    stroke?: number;
    className?: string;
    style?: React.CSSProperties;
}
declare function Icon({ icon: TablerIcon, size, color, strokeWidth, className, style, }: IconProps): react_jsx_runtime.JSX.Element;
type IconSize = 'sm' | 'md' | 'lg' | number;
declare function resolveSize(s: IconSize): number;

export { Alert, type AlertProps, type AlertType, Avatar, AvatarGroup, type AvatarGroupProps, type AvatarProps, type AvatarShape, type AvatarSize, Badge, type BadgeProps, type BadgeStatus, Breadcrumb, type BreadcrumbItem, type BreadcrumbProps, Button, type ButtonContent, type ButtonProps, type ButtonSize, type ButtonType, type CellAlignment, Checkbox, CheckboxGroup, type CheckboxGroupProps, type CheckboxOption, type CheckboxProps, type CheckboxSize, Code, type CodeProps, Divider, type DividerOrientation, type DividerProps, type DividerType, Drawer, type DrawerPlacement, type DrawerProps, type DrawerSize, EMPTY_IMAGE_DEFAULT, EMPTY_IMAGE_SIMPLE, Empty, type EmptyProps, Icon, type IconProps, type IconSize, type InformationStatus, Input, type InputProps, type InputSize, type InputStatus, Link, type LinkProps, LoginPage, LoginPageGallery, type LoginPageProps, type LoginState, Menu, type MenuGroupData, type MenuItemData, type MenuMode, type MenuProps, type MenuTheme, MenuTopNavigation, type MenuTopNavigationProps, Modal, ModalConfirmation, type ModalConfirmationProps, ModalInformation, type ModalInformationProps, type ModalProps, NotificationContainer, type NotificationContainerProps, type NotificationItem, type NotificationPlacement, type NotificationType, Pagination, type PaginationProps, Paragraph, type ParagraphProps, Progress, type ProgressProps, type ProgressStatus, type ProgressType, Radio, RadioButton, type RadioButtonPosition, type RadioButtonProps, type RadioButtonStyle, RadioGroup, RadioGroupButtons, type RadioGroupButtonsProps, type RadioGroupProps, type RadioOption, type RadioProps, type RadioSize, Segmented, type SegmentedOption, type SegmentedProps, type SegmentedSize, Select, type SelectMode, type SelectOption, type SelectOptionGroup, type SelectProps, type SelectSize, type SelectStatus, type SelectVariant, Skeleton, SkeletonAvatar, type SkeletonAvatarProps, SkeletonButton, type SkeletonButtonProps, SkeletonImage, type SkeletonImageProps, SkeletonInput, type SkeletonInputProps, type SkeletonProps, type SortOrder, Spin, type SpinProps, type SpinSize, type StepItem, type StepStatus, Steps, type StepsDirection, type StepsProps, type StepsSize, Switch, type SwitchProps, type SwitchSize, type TabItem, Table, type TableColumn, type TableProps, type TablerIconProps, Tabs, type TabsPosition, type TabsProps, type TabsSize, type TabsType, Tag, type TagColor, type TagProps, TagStatus, type TagStatusColor, type TagStatusProps, Text, type TextProps, type TextSize, type TextStyle, type TextType, Title, type TitleLevel, type TitleProps, type Tokens, Tooltip, type TooltipPlacement, type TooltipProps, type TopNavItemData, borderRadius, colorNeutral, colorNeutralDark, colorPrimary, colorSemantic, controlHeight, darkPalette, fontFamily, fontSize, fontWeight, gray, lineHeight, palette, resolveSize, shadow, spacing, tokens };
