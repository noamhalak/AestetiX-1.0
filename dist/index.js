import 'antd/dist/reset.css';
import { Button as Button$1, Input as Input$1, Select as Select$1, Modal as Modal$1, Tag as Tag$1, Avatar, Badge, Checkbox, Radio, Empty, Skeleton, Typography, ConfigProvider, Menu, Alert, Spin, Divider } from 'antd';
export { Alert, Avatar, Badge, Breadcrumb, Checkbox, Divider, Drawer, Empty, Menu, Pagination, Progress, Radio, Segmented, Skeleton, Spin, Steps, Switch, Table, Tabs, Tooltip, Typography, notification } from 'antd';
import heIL from 'antd/locale/he_IL';
import { jsx, jsxs } from 'react/jsx-runtime';
import React3 from 'react';

// src/index.ts

// src/theme/index.ts
var aesthetixTheme = {
  token: {
    // Brand
    colorPrimary: "#1677ff",
    colorInfo: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    // Typography
    fontFamily: '"Heebo", sans-serif',
    fontSize: 14,
    fontSizeSM: 12,
    fontSizeLG: 16,
    fontSizeXL: 20,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,
    // Spacing
    padding: 16,
    paddingSM: 12,
    paddingXS: 8,
    paddingXXS: 4,
    paddingLG: 24,
    paddingXL: 32,
    // Control heights
    controlHeight: 32,
    controlHeightSM: 24,
    controlHeightLG: 40,
    // Border radius
    borderRadius: 6,
    borderRadiusSM: 4,
    borderRadiusLG: 8,
    borderRadiusXS: 2,
    // Colors
    colorBgContainer: "#ffffff",
    colorBgLayout: "#f8f8f8",
    colorBgElevated: "#ffffff",
    colorBorder: "#d9d9d9",
    colorBorderSecondary: "#f0f0f0",
    colorText: "rgba(0,0,0,0.88)",
    colorTextSecondary: "rgba(0,0,0,0.45)",
    colorTextTertiary: "rgba(0,0,0,0.25)",
    colorTextDisabled: "rgba(0,0,0,0.25)",
    colorFill: "rgba(0,0,0,0.15)",
    colorFillSecondary: "rgba(0,0,0,0.06)",
    colorFillTertiary: "rgba(0,0,0,0.04)",
    colorFillQuaternary: "rgba(0,0,0,0.02)",
    // Shadows
    boxShadow: "0 1px 2px rgba(0,0,0,0.03), 0 1px 6px -1px rgba(0,0,0,0.02), 0 2px 4px rgba(0,0,0,0.02)",
    boxShadowSecondary: "0 6px 16px rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)",
    // Motion
    motionDurationFast: "0.1s",
    motionDurationMid: "0.2s",
    motionDurationSlow: "0.3s"
  },
  components: {
    Button: {
      primaryShadow: "none",
      defaultShadow: "none",
      dangerShadow: "none"
    },
    Input: {
      activeShadow: "0 0 0 2px rgba(22,119,255,0.2)",
      errorActiveShadow: "0 0 0 2px rgba(255,77,79,0.2)",
      warningActiveShadow: "0 0 0 2px rgba(250,173,20,0.2)"
    },
    Select: {
      optionSelectedFontWeight: 500
    },
    Table: {
      headerBg: "#fafafa",
      rowHoverBg: "rgba(0,0,0,0.02)"
    },
    Menu: {
      itemHeight: 40,
      itemBorderRadius: 6,
      subMenuItemBorderRadius: 4
    },
    Modal: {
      titleFontSize: 16
    }
  }
};
var AestetiXProvider = ({
  children,
  direction = "rtl",
  locale = heIL
}) => {
  return /* @__PURE__ */ jsx(ConfigProvider, { theme: aesthetixTheme, direction, locale, children });
};

// src/tokens/design-tokens.ts
var fontFamily = {
  base: '"Heebo", sans-serif'
};
var fontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900
};
var fontSize = {
  sm: 12,
  // Small
  base: 14,
  // Base / Normal
  lg: 16,
  // Large / Heading 5
  xl: 20,
  // Extra Large / Heading 4
  h4: 20,
  // Heading 4
  h3: 24,
  // Heading 3
  h2: 30,
  // Heading 2 (Ant Design standard)
  h1: 38
  // Heading 1
};
var lineHeight = {
  sm: 20,
  // Small  12px
  base: 22,
  // Base   14px
  lg: 24,
  // Large  16px
  xl: 28,
  // XL     20px
  h3: 32,
  // H3     24px
  h2: 38,
  // H2     30px
  h1: 46
  // H1     38px
};
var spacing = {
  0: 0,
  xxs: 4,
  // paddingXXS
  xs: 8,
  // paddingXS
  sm: 12,
  // paddingSM
  base: 16,
  // padding
  lg: 24,
  // paddingLG
  xl: 32,
  // paddingXL
  xxl: 48
  // paddingXXL
};
var controlHeight = {
  sm: 24,
  // controlHeightSM
  base: 32,
  // controlHeight
  lg: 40
  // controlHeightLG
};
var borderRadius = {
  sm: 4,
  // borderRadiusSM
  base: 6,
  // borderRadius
  lg: 8
  // borderRadiusLG / Corner/Small
};
var shadow = {
  base: "0px 0px 6px rgba(0, 0, 0, 0.12)",
  // DropShadowN&Y
  modal: "0px 0px 3px rgba(0, 0, 0, 0.12)"
};
var colorPrimary = {
  bg: "#e6f4ff",
  // colorPrimaryBG
  border: "#91caff",
  borderHover: "#69b1ff",
  hover: "#4096ff",
  // colorPrimaryHover
  base: "#1677ff",
  // colorPrimary
  active: "#0958d9",
  // colorPrimaryActive
  textHover: "#4096ff",
  text: "#1677ff",
  textActive: "#0958d9"
};
var colorNeutral = {
  bgLayout: "#f8f8f8",
  // colorBgLayout
  bgContainer: "#ffffff",
  // colorBgContainer (light)
  bgFloating: "#ffffff",
  // colorBgFloating
  bgTooltip: "rgba(0,0,0,0.875)",
  fill: "rgba(0,0,0,0.15)",
  // colorFill
  fillSecondary: "rgba(0,0,0,0.06)",
  // colorFillSecondary
  fillTertiary: "rgba(0,0,0,0.04)",
  // colorFillTertiary
  fillQuaternary: "rgba(0,0,0,0.02)",
  border: "#d9d9d9",
  // colorBorder (gray-5)
  borderSecondary: "#f0f0f0",
  // colorBorderSecondary (gray-4)
  split: "rgba(0,0,0,0.06)",
  // colorSplit
  text: "rgba(0,0,0,0.88)",
  // colorText
  textSecondary: "rgba(0,0,0,0.45)",
  // colorTextDescription
  textLabel: "rgba(0,0,0,0.65)",
  // colorTextLabel
  textDisabled: "rgba(0,0,0,0.25)",
  textSolid: "#ffffff",
  // colorTextSolid
  textPlaceholder: "rgba(0,0,0,0.25)",
  controlItemBgHover: "rgba(0,0,0,0.04)"
};
var colorNeutralDark = {
  bgLayout: "#141414",
  bgContainer: "#141414",
  bgFloating: "#1f1f1f",
  border: "#434343",
  borderSecondary: "#303030",
  text: "rgba(255,255,255,0.85)",
  textSecondary: "rgba(255,255,255,0.45)",
  textLabel: "rgba(255,255,255,0.65)",
  textDisabled: "rgba(255,255,255,0.25)",
  textSolid: "#ffffff"
};
var colorSemantic = {
  success: "#52c41a",
  successBg: "#f6ffed",
  successBorder: "#b7eb8f",
  successText: "#52c41a",
  successActive: "#389e0d",
  warning: "#faad14",
  warningBg: "#fffbe6",
  warningBorder: "#ffe58f",
  warningText: "#faad14",
  warningActive: "#d48806",
  error: "#ff4d4f",
  errorBg: "#fff1f0",
  errorBorder: "#ffa39e",
  errorText: "#ff4d4f",
  errorActive: "#d9363e",
  info: "#1677ff",
  infoBg: "#e6f4ff",
  infoBorder: "#91caff"
};
var gray = {
  1: "#ffffff",
  2: "#fafafa",
  3: "#f5f5f5",
  4: "#f0f0f0",
  5: "#d9d9d9",
  6: "#bfbfbf",
  7: "#8c8c8c",
  8: "#595959",
  9: "#434343",
  10: "#262626",
  11: "#1f1f1f",
  12: "#141414",
  13: "#000000"
};
var palette = {
  red: ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"],
  volcano: ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"],
  orange: ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"],
  gold: ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"],
  yellow: ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"],
  lime: ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5c8a00", "#3f6600", "#254000"],
  green: ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"],
  cyan: ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"],
  blue: ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"],
  geekBlue: ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"],
  purple: ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"],
  magenta: ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c2", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"]
};
var darkPalette = {
  red: ["#2a1215", "#431418", "#58181c", "#791a1f", "#a61d24", "#d32029", "#e84749", "#f37370", "#f89f9a", "#fac8c3"],
  volcano: ["#2b1611", "#441d12", "#592716", "#7c3118", "#aa3e19", "#d84a1b", "#e87040", "#f3956a", "#f8b692", "#fad4bc"],
  orange: ["#2b1d11", "#442a11", "#593815", "#7c4a15", "#aa6215", "#d87a16", "#e89a3c", "#f3b765", "#f8cf8d", "#fae3b7"],
  gold: ["#2b2111", "#443111", "#594214", "#7c5914", "#aa7714", "#d89614", "#e8b339", "#f3cc62", "#f8df8b", "#faedb5"],
  yellow: ["#2b2611", "#443b11", "#595014", "#7c6e14", "#aa9514", "#d8bd14", "#e8d639", "#f3ea62", "#f8f48b", "#fafab5"],
  lime: ["#1f2611", "#2e3c10", "#3e4f13", "#536d13", "#6f9412", "#8bbb11", "#a9d134", "#c9e75d", "#e4f88b", "#f0fab5"],
  green: ["#162312", "#1d3712", "#274916", "#306317", "#3c8618", "#49aa19", "#6abe39", "#8fd460", "#b2e58b", "#d5f2bb"],
  cyan: ["#112123", "#113536", "#144848", "#146262", "#138585", "#13a8a8", "#33bcb7", "#58d1c9", "#84e2d8", "#b2f1e8"],
  blue: ["#111a2c", "#112545", "#15325b", "#15417e", "#1554ad", "#1668dc", "#3c89e8", "#65a9f3", "#8dc5f8", "#b7dcfa"],
  geekBlue: ["#131629", "#161d40", "#1c2755", "#203175", "#263ea0", "#2b4acb", "#5273e0", "#7f9ef3", "#a8c1f8", "#d2e0fa"],
  purple: ["#1a1325", "#24163a", "#301c4d", "#3e2069", "#51258f", "#642ab5", "#854eca", "#ab7ae0", "#cda8f0", "#ebd7fa"],
  magenta: ["#291321", "#40162f", "#551c3b", "#75204f", "#a02669", "#cb2b83", "#e0529c", "#f37fb7", "#f8a8cc", "#fad2e3"]
};
var tokens = {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  spacing,
  controlHeight,
  borderRadius,
  shadow,
  colorPrimary,
  colorNeutral,
  colorNeutralDark,
  colorSemantic,
  gray,
  palette,
  darkPalette
};
var Button = React3.forwardRef(
  (props, ref) => /* @__PURE__ */ jsx(Button$1, { ref, ...props })
);
Button.displayName = "Button";
var Input = React3.forwardRef(
  ({ size = "middle", status = "", ...rest }, ref) => {
    return /* @__PURE__ */ jsx(Input$1, { ref, size, status, ...rest });
  }
);
Input.displayName = "Input";
var InputPassword = Input$1.Password;
var InputSearch = Input$1.Search;
var TextArea = Input$1.TextArea;
function Select({ size = "middle", status = "", variant = "outlined", ...rest }) {
  return /* @__PURE__ */ jsx(Select$1, { size, status, variant, ...rest });
}
Select.Option = Select$1.Option;
Select.OptGroup = Select$1.OptGroup;
var ModalInformation = ({
  open = true,
  status,
  title,
  description,
  okText = "\u05D0\u05D5\u05E7\u05D9\u05D9",
  cancelText = "\u05D1\u05D8\u05DC",
  onOk,
  onCancel
}) => /* @__PURE__ */ jsx(
  Modal$1,
  {
    open,
    title,
    okText,
    cancelText,
    onOk,
    onCancel,
    children: description && /* @__PURE__ */ jsx("p", { style: { margin: 0 }, children: description })
  }
);
var ModalConfirmation = ({
  open = true,
  title,
  description,
  okText = "\u05D0\u05E9\u05E8",
  cancelText = "\u05D1\u05D8\u05DC",
  danger = false,
  onOk,
  onCancel
}) => /* @__PURE__ */ jsx(
  Modal$1,
  {
    open,
    title,
    okText,
    cancelText,
    okButtonProps: { danger },
    onOk,
    onCancel,
    children: description && /* @__PURE__ */ jsx("p", { style: { margin: 0 }, children: description })
  }
);
var Modal = ({ ...props }) => /* @__PURE__ */ jsx(Modal$1, { ...props });
Modal.confirm = Modal$1.confirm;
Modal.info = Modal$1.info;
Modal.success = Modal$1.success;
Modal.warning = Modal$1.warning;
Modal.error = Modal$1.error;
Modal.destroyAll = Modal$1.destroyAll;
var Tag = (props) => /* @__PURE__ */ jsx(Tag$1, { ...props });
Tag.CheckableTag = Tag$1.CheckableTag;
var TagStatus = ({ status, text }) => /* @__PURE__ */ jsxs(Tag$1, { color: status, children: [
  status === "success" && "\u2713 ",
  status === "error" && "\u2715 ",
  status === "warning" && "\u26A0 ",
  text
] });
var AvatarGroup = Avatar.Group;
var BadgeRibbon = Badge.Ribbon;
var MenuTopNavigation = (props) => /* @__PURE__ */ jsx(Menu, { mode: "horizontal", ...props });
var CheckboxGroup = Checkbox.Group;
var RadioGroup = Radio.Group;
var RadioButton = Radio.Button;
var RadioGroupButtons = ({
  btnStyle = "outline",
  ...props
}) => /* @__PURE__ */ jsx(RadioGroup, { optionType: "button", buttonStyle: btnStyle, ...props });
var EMPTY_IMAGE_DEFAULT = Empty.PRESENTED_IMAGE_DEFAULT;
var EMPTY_IMAGE_SIMPLE = Empty.PRESENTED_IMAGE_SIMPLE;
var SkeletonAvatar = Skeleton.Avatar;
var SkeletonButton = Skeleton.Button;
var SkeletonInput = Skeleton.Input;
var SkeletonImage = Skeleton.Image;
var SkeletonNode = Skeleton.Node;
var { Title, Text, Link, Paragraph } = Typography;
var sizeMap = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
};
function resolveSize(size) {
  if (typeof size === "number") return size;
  return sizeMap[size] ?? 20;
}
var Icon = ({
  icon: IconComponent,
  size = "md",
  color,
  stroke = 2,
  className,
  style
}) => {
  const resolvedSize = resolveSize(size);
  return /* @__PURE__ */ jsx(
    IconComponent,
    {
      size: resolvedSize,
      color,
      stroke,
      className,
      style
    }
  );
};
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function EyeIcon({ open }) {
  return open ? /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
    /* @__PURE__ */ jsx("path", { d: "M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z", stroke: "rgba(0,0,0,0.45)", strokeWidth: "1.2", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx("circle", { cx: "8", cy: "8", r: "2", stroke: "rgba(0,0,0,0.45)", strokeWidth: "1.2" })
  ] }) : /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M1 1l14 14M6.5 6.6A2 2 0 0010.4 9.5M4.3 4.4C2.5 5.6 1 8 1 8s2.5 5 7 5a7.2 7.2 0 003.7-1M6.8 3.1A7 7 0 0115 8s-.9 1.8-2.3 3", stroke: "rgba(0,0,0,0.45)", strokeWidth: "1.2", strokeLinecap: "round" }) });
}
function LockIcon() {
  return /* @__PURE__ */ jsxs("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
    /* @__PURE__ */ jsx("circle", { cx: "24", cy: "24", r: "24", fill: "#fff2f0" }),
    /* @__PURE__ */ jsx("rect", { x: "14", y: "22", width: "20", height: "14", rx: "3", fill: "#ff4d4f", opacity: "0.15", stroke: "#ff4d4f", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsx("path", { d: "M18 22v-5a6 6 0 0112 0v5", stroke: "#ff4d4f", strokeWidth: "1.5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx("circle", { cx: "24", cy: "29", r: "2", fill: "#ff4d4f" })
  ] });
}
function SuccessIcon() {
  return /* @__PURE__ */ jsxs("svg", { width: "64", height: "64", viewBox: "0 0 64 64", fill: "none", children: [
    /* @__PURE__ */ jsx("circle", { cx: "32", cy: "32", r: "32", fill: "#f6ffed" }),
    /* @__PURE__ */ jsx("circle", { cx: "32", cy: "32", r: "20", fill: "#52c41a", opacity: "0.15" }),
    /* @__PURE__ */ jsx("path", { d: "M20 32l9 9 15-15", stroke: "#52c41a", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function MailIcon() {
  return /* @__PURE__ */ jsxs("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
    /* @__PURE__ */ jsx("circle", { cx: "24", cy: "24", r: "24", fill: "#e6f4ff" }),
    /* @__PURE__ */ jsx("rect", { x: "12", y: "16", width: "24", height: "17", rx: "2", stroke: "#1677ff", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsx("path", { d: "M12 19l12 8 12-8", stroke: "#1677ff", strokeWidth: "1.5", strokeLinecap: "round" })
  ] });
}
function LoginCard({ children, style }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        width: 400,
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.08), 0 3px 6px rgba(0,0,0,0.04)",
        padding: "40px 40px 32px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        fontFamily: '"Heebo", sans-serif',
        ...style
      },
      children
    }
  );
}
function LogoArea({ logoSrc, appName }) {
  return /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }, children: [
    logoSrc ? /* @__PURE__ */ jsx("img", { src: logoSrc, alt: appName, style: { height: 48, objectFit: "contain" } }) : /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          width: 48,
          height: 48,
          borderRadius: "12px",
          background: "linear-gradient(135deg, #1677ff 0%, #4096ff 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", stroke: "#fff", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    /* @__PURE__ */ jsx("span", { style: { fontSize: "20px", fontWeight: 700, color: "rgba(0,0,0,0.88)", lineHeight: "28px" }, children: appName ?? "AestetiX" })
  ] });
}
function LoginForm({
  appName,
  logoSrc,
  onSuccess,
  externalState
}) {
  const [email, setEmail] = React3.useState("");
  const [password, setPassword] = React3.useState("");
  const [rememberMe, setRememberMe] = React3.useState(false);
  const [showPassword, setShowPassword] = React3.useState(false);
  const [state, setState] = React3.useState(externalState ?? "idle");
  const [attempts, setAttempts] = React3.useState(0);
  React3.useEffect(() => {
    if (externalState) setState(externalState);
  }, [externalState]);
  const emailStatus = state === "error-empty" && !email ? "error" : state === "error-email" ? "error" : "";
  const passwordStatus = state === "error-empty" && !password ? "error" : state === "error-wrong" ? "error" : "";
  const handleSubmit = async () => {
    if (!email || !password) {
      setState("error-empty");
      return;
    }
    if (!isValidEmail(email)) {
      setState("error-email");
      return;
    }
    setState("loading");
    await new Promise((r) => setTimeout(r, 1400));
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    if (newAttempts >= 3) {
      setState("error-locked");
      return;
    }
    if (email === "demo@aesthetix.com" && password === "demo1234") {
      setState("success");
      onSuccess?.(email);
    } else {
      setState("error-wrong");
    }
  };
  if (state === "error-locked") {
    return /* @__PURE__ */ jsx(LoginCard, { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "8px 0" }, children: [
      /* @__PURE__ */ jsx(LockIcon, {}),
      /* @__PURE__ */ jsxs("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsx("div", { style: { fontSize: "18px", fontWeight: 700, color: "rgba(0,0,0,0.88)", lineHeight: "26px" }, children: "\u05D4\u05D7\u05E9\u05D1\u05D5\u05DF \u05E0\u05E2\u05D5\u05DC \u05D6\u05DE\u05E0\u05D9\u05EA" }),
        /* @__PURE__ */ jsxs("div", { style: { fontSize: "14px", color: "rgba(0,0,0,0.45)", marginTop: "8px", lineHeight: "22px" }, children: [
          "\u05D9\u05D5\u05EA\u05E8 \u05DE\u05D3\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05E0\u05D5\u05EA \u05DB\u05D5\u05E9\u05DC\u05D9\u05DD.",
          /* @__PURE__ */ jsx("br", {}),
          "\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D1\u05E2\u05D5\u05D3 15 \u05D3\u05E7\u05D5\u05EA."
        ] })
      ] }),
      /* @__PURE__ */ jsx(Alert, { type: "error", message: "\u05D9\u05E9 \u05DC\u05D0\u05E4\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4 \u05D0\u05D5 \u05DC\u05E4\u05E0\u05D5\u05EA \u05DC\u05EA\u05DE\u05D9\u05DB\u05D4", showIcon: true }),
      /* @__PURE__ */ jsx(Button, { type: "default", block: true, onClick: () => {
        setState("forgot");
        setAttempts(0);
      }, children: "\u05D0\u05E4\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4" }),
      /* @__PURE__ */ jsx(Link, { onClick: () => {
        setState("idle");
        setAttempts(0);
        setEmail("");
        setPassword("");
      }, children: "\u05D7\u05D6\u05D5\u05E8 \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA" })
    ] }) });
  }
  if (state === "success") {
    return /* @__PURE__ */ jsx(LoginCard, { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "16px 0" }, children: [
      /* @__PURE__ */ jsx(SuccessIcon, {}),
      /* @__PURE__ */ jsxs("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsx("div", { style: { fontSize: "18px", fontWeight: 700, color: "rgba(0,0,0,0.88)" }, children: "\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0!" }),
        /* @__PURE__ */ jsxs("div", { style: { fontSize: "14px", color: "rgba(0,0,0,0.45)", marginTop: "6px" }, children: [
          "\u05DE\u05EA\u05D7\u05D1\u05E8 \u05DC-",
          appName ?? "AestetiX",
          "\u2026"
        ] })
      ] }),
      /* @__PURE__ */ jsx(Spin, { size: "small" })
    ] }) });
  }
  return /* @__PURE__ */ jsxs(LoginCard, { children: [
    /* @__PURE__ */ jsx(LogoArea, { logoSrc, appName }),
    /* @__PURE__ */ jsx("div", { style: { textAlign: "center", marginTop: "-8px" }, children: /* @__PURE__ */ jsx("div", { style: { fontSize: "14px", color: "rgba(0,0,0,0.45)", lineHeight: "22px" }, children: "\u05D4\u05EA\u05D7\u05D1\u05E8 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA" }) }),
    state === "error-wrong" && /* @__PURE__ */ jsx(
      Alert,
      {
        type: "error",
        message: "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05D0\u05D5 \u05E1\u05D9\u05E1\u05DE\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D9\u05DD",
        description: `${3 - attempts} \u05E0\u05D9\u05E1\u05D9\u05D5\u05E0\u05D5\u05EA \u05E0\u05D5\u05EA\u05E8\u05D5 \u05DC\u05E4\u05E0\u05D9 \u05E0\u05E2\u05D9\u05DC\u05D4`,
        showIcon: true,
        closable: true,
        onClose: () => setState("typing")
      }
    ),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
        /* @__PURE__ */ jsx("label", { style: { fontSize: "14px", fontWeight: 500, color: "rgba(0,0,0,0.88)", lineHeight: "22px" }, children: "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: email,
            onChange: (e) => {
              setEmail(e.target.value);
              if (state !== "loading") setState("typing");
            },
            placeholder: "name@company.com",
            status: emailStatus || void 0,
            size: "large",
            type: "email",
            autoComplete: "email"
          }
        ),
        state === "error-empty" && !email && /* @__PURE__ */ jsx("span", { style: { fontSize: "12px", color: "#ff4d4f", lineHeight: "20px" }, children: "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4" }),
        state === "error-email" && /* @__PURE__ */ jsx("span", { style: { fontSize: "12px", color: "#ff4d4f", lineHeight: "20px" }, children: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4" })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ jsx("label", { style: { fontSize: "14px", fontWeight: 500, color: "rgba(0,0,0,0.88)", lineHeight: "22px" }, children: "\u05E1\u05D9\u05E1\u05DE\u05D4" }),
          /* @__PURE__ */ jsx(
            Link,
            {
              style: { fontSize: "14px" },
              onClick: () => setState("forgot"),
              children: "\u05E9\u05DB\u05D7\u05EA \u05E1\u05D9\u05E1\u05DE\u05D4?"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: password,
            onChange: (e) => {
              setPassword(e.target.value);
              if (state !== "loading") setState("typing");
            },
            placeholder: "\u05D4\u05DB\u05E0\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4",
            status: passwordStatus || void 0,
            size: "large",
            type: showPassword ? "text" : "password",
            autoComplete: "current-password",
            suffix: /* @__PURE__ */ jsx(
              "span",
              {
                style: { cursor: "pointer", display: "flex", alignItems: "center", padding: "0 4px" },
                onClick: () => setShowPassword((v) => !v),
                children: /* @__PURE__ */ jsx(EyeIcon, { open: showPassword })
              }
            )
          }
        ),
        state === "error-empty" && !password && /* @__PURE__ */ jsx("span", { style: { fontSize: "12px", color: "#ff4d4f", lineHeight: "20px" }, children: "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4" }),
        state === "error-wrong" && password && /* @__PURE__ */ jsx("span", { style: { fontSize: "12px", color: "#ff4d4f", lineHeight: "20px" }, children: "\u05E1\u05D9\u05E1\u05DE\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4" })
      ] }),
      /* @__PURE__ */ jsx(
        Checkbox,
        {
          checked: rememberMe,
          onChange: (e) => setRememberMe(e.target.checked),
          children: "\u05D6\u05DB\u05D5\u05E8 \u05D0\u05D5\u05EA\u05D9"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "primary",
          size: "large",
          block: true,
          loading: state === "loading",
          onClick: handleSubmit,
          style: { marginTop: "4px" },
          children: state === "loading" ? "\u05DE\u05EA\u05D7\u05D1\u05E8\u2026" : "\u05D4\u05EA\u05D7\u05D1\u05E8"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Divider, { plain: true, children: "\u05D0\u05D5" }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "default",
          size: "large",
          block: true,
          icon: /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 18 18", children: [
            /* @__PURE__ */ jsx("path", { d: "M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18z", fill: "#4285F4" }),
            /* @__PURE__ */ jsx("path", { d: "M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17z", fill: "#34A853" }),
            /* @__PURE__ */ jsx("path", { d: "M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z", fill: "#FBBC05" }),
            /* @__PURE__ */ jsx("path", { d: "M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.48a4.77 4.77 0 014.48-3.3z", fill: "#EA4335" })
          ] }),
          children: "\u05D4\u05DE\u05E9\u05DA \u05E2\u05DD Google"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "default",
          size: "large",
          block: true,
          icon: /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 18 18", children: /* @__PURE__ */ jsx("path", { d: "M9 1a8 8 0 100 16A8 8 0 009 1zm3.9 5H11c-.3 0-.6.4-.6.9v1.1H13l-.3 2H10.4V15H8.3v-5H7V8h1.3V6.9C8.3 5.3 9.3 4 11 4h1.9v2z", fill: "#1877F2" }) }),
          children: "\u05D4\u05DE\u05E9\u05DA \u05E2\u05DD Facebook"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", fontSize: "14px", color: "rgba(0,0,0,0.45)", lineHeight: "22px" }, children: [
      "\u05D0\u05D9\u05DF \u05DC\u05DA \u05D7\u05E9\u05D1\u05D5\u05DF?",
      " ",
      /* @__PURE__ */ jsx(Link, { style: { fontSize: "14px" }, children: "\u05D4\u05E8\u05E9\u05DD \u05E2\u05DB\u05E9\u05D9\u05D5" })
    ] })
  ] });
}
function ForgotForm({ onBack }) {
  const [email, setEmail] = React3.useState("");
  const [sent, setSent] = React3.useState(false);
  const [loading, setLoading] = React3.useState(false);
  const [emailError, setEmailError] = React3.useState("");
  const handleSend = async () => {
    if (!email) {
      setEmailError("\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError("\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4");
      return;
    }
    setEmailError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };
  if (sent) {
    return /* @__PURE__ */ jsx(LoginCard, { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "8px 0" }, children: [
      /* @__PURE__ */ jsx(MailIcon, {}),
      /* @__PURE__ */ jsxs("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsx("div", { style: { fontSize: "18px", fontWeight: 700, color: "rgba(0,0,0,0.88)", lineHeight: "26px" }, children: "\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC" }),
        /* @__PURE__ */ jsxs("div", { style: { fontSize: "14px", color: "rgba(0,0,0,0.45)", marginTop: "8px", lineHeight: "22px" }, children: [
          "\u05E9\u05DC\u05D7\u05E0\u05D5 \u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05D0\u05D9\u05E4\u05D5\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4 \u05DC\u05DB\u05EA\u05D5\u05D1\u05EA",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("strong", { style: { color: "rgba(0,0,0,0.88)" }, children: email })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        Alert,
        {
          type: "info",
          message: "\u05D4\u05E7\u05D9\u05E9\u05D5\u05E8 \u05D1\u05EA\u05D5\u05E7\u05E3 \u05DC-30 \u05D3\u05E7\u05D5\u05EA",
          showIcon: true
        }
      ),
      /* @__PURE__ */ jsx(Button, { type: "primary", block: true, onClick: onBack, children: "\u05D7\u05D6\u05D5\u05E8 \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA" }),
      /* @__PURE__ */ jsxs("div", { style: { fontSize: "14px", color: "rgba(0,0,0,0.45)" }, children: [
        "\u05DC\u05D0 \u05E7\u05D9\u05D1\u05DC\u05EA?",
        " ",
        /* @__PURE__ */ jsx(
          Link,
          {
            style: { fontSize: "14px" },
            onClick: () => setSent(false),
            children: "\u05E9\u05DC\u05D7 \u05E9\u05D5\u05D1"
          }
        )
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxs(LoginCard, { children: [
    /* @__PURE__ */ jsx(LogoArea, { appName: "\u05E9\u05D7\u05D6\u05D5\u05E8 \u05E1\u05D9\u05E1\u05DE\u05D4" }),
    /* @__PURE__ */ jsx("div", { style: { textAlign: "center", marginTop: "-8px" }, children: /* @__PURE__ */ jsxs("div", { style: { fontSize: "14px", color: "rgba(0,0,0,0.45)", lineHeight: "22px" }, children: [
      "\u05D4\u05D6\u05DF \u05D0\u05EA \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05E9\u05DC\u05DA \u05D5\u05E0\u05E9\u05DC\u05D7",
      /* @__PURE__ */ jsx("br", {}),
      "\u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05D0\u05D9\u05E4\u05D5\u05E1 \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4"
    ] }) }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
        /* @__PURE__ */ jsx("label", { style: { fontSize: "14px", fontWeight: 500, color: "rgba(0,0,0,0.88)", lineHeight: "22px" }, children: "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: email,
            onChange: (e) => {
              setEmail(e.target.value);
              setEmailError("");
            },
            placeholder: "name@company.com",
            status: emailError ? "error" : void 0,
            size: "large",
            type: "email"
          }
        ),
        emailError && /* @__PURE__ */ jsx("span", { style: { fontSize: "12px", color: "#ff4d4f", lineHeight: "20px" }, children: emailError })
      ] }),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "primary",
          size: "large",
          block: true,
          loading,
          onClick: handleSend,
          children: loading ? "\u05E9\u05D5\u05DC\u05D7\u2026" : "\u05E9\u05DC\u05D7 \u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05D0\u05D9\u05E4\u05D5\u05E1"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { style: { textAlign: "center" }, children: /* @__PURE__ */ jsx(Link, { onClick: onBack, style: { fontSize: "14px" }, children: "\u2190 \u05D7\u05D6\u05D5\u05E8 \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA" }) })
  ] });
}
function LoginPage({ onSuccess, logoSrc, appName, initialState }) {
  const [view, setView] = React3.useState("login");
  const [loginState, setLoginState] = React3.useState(initialState ?? "idle");
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #e6f4ff 0%, #f0f5ff 50%, #fafafa 100%)",
        padding: "24px",
        fontFamily: '"Heebo", sans-serif',
        direction: "rtl"
      },
      children: view === "forgot" ? /* @__PURE__ */ jsx(ForgotForm, { onBack: () => {
        setView("login");
        setLoginState("idle");
      } }) : /* @__PURE__ */ jsx(
        LoginForm,
        {
          appName,
          logoSrc,
          onSuccess,
          externalState: loginState
        }
      )
    }
  );
}
function LoginPageGallery() {
  const states = [
    { label: "1. \u05E8\u05D9\u05E7 (idle)", state: "idle" },
    { label: "2. \u05DE\u05D9\u05DC\u05D5\u05D9 (typing)", state: "typing" },
    { label: "3. \u05E9\u05D3\u05D5\u05EA \u05E8\u05D9\u05E7\u05D9\u05DD", state: "error-empty" },
    { label: "4. \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF", state: "error-email" },
    { label: "5. \u05E4\u05E8\u05D8\u05D9\u05DD \u05E9\u05D2\u05D5\u05D9\u05D9\u05DD", state: "error-wrong" },
    { label: "6. \u05D7\u05E9\u05D1\u05D5\u05DF \u05E0\u05E2\u05D5\u05DC", state: "error-locked" },
    { label: "7. \u05D8\u05D5\u05E2\u05DF (loading)", state: "loading" },
    { label: "8. \u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA \u05D4\u05E6\u05DC\u05D9\u05D7\u05D4 (success)", state: "success" }
  ];
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        minHeight: "100vh",
        background: "#f0f2f5",
        padding: "40px 24px",
        fontFamily: '"Heebo", sans-serif',
        direction: "rtl"
      },
      children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: "1400px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { marginBottom: "32px", textAlign: "center" }, children: [
          /* @__PURE__ */ jsx("div", { style: { fontSize: "28px", fontWeight: 700, color: "rgba(0,0,0,0.88)", lineHeight: "36px" }, children: "Login Page \u2014 \u05DB\u05DC \u05D4-Use Cases" }),
          /* @__PURE__ */ jsx("div", { style: { fontSize: "16px", color: "rgba(0,0,0,0.45)", marginTop: "8px" }, children: "AestetiX 1.0 Design System" })
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))",
              gap: "32px",
              alignItems: "start"
            },
            children: [
              states.map(({ label, state }) => /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    style: {
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "rgba(0,0,0,0.45)",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      textAlign: "center"
                    },
                    children: label
                  }
                ),
                /* @__PURE__ */ jsx("div", { style: { display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ jsx(LoginPageStatePreview, { state }) })
              ] }, state)),
              [
                { label: "9. \u05E9\u05DB\u05D7\u05EA \u05E1\u05D9\u05E1\u05DE\u05D4 (forgot)", isForgot: true, sent: false },
                { label: "10. \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05E0\u05E9\u05DC\u05D7 (forgot-sent)", isForgot: true, sent: true }
              ].map(({ label, isForgot, sent }) => /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    style: {
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "rgba(0,0,0,0.45)",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      textAlign: "center"
                    },
                    children: label
                  }
                ),
                /* @__PURE__ */ jsx("div", { style: { display: "flex", justifyContent: "center" }, children: sent ? /* @__PURE__ */ jsx(ForgotSentPreview, {}) : /* @__PURE__ */ jsx(ForgotFormPreview, {}) })
              ] }, label))
            ]
          }
        )
      ] })
    }
  );
}
function LoginPageStatePreview({ state }) {
  return /* @__PURE__ */ jsx(LoginForm, { externalState: state });
}
function ForgotFormPreview() {
  return /* @__PURE__ */ jsx(ForgotForm, { onBack: () => {
  } });
}
function ForgotSentPreview() {
  const [, setSent] = React3.useState(false);
  return /* @__PURE__ */ jsx(LoginCard, { children: /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "8px 0" }, children: [
    /* @__PURE__ */ jsx(MailIcon, {}),
    /* @__PURE__ */ jsxs("div", { style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("div", { style: { fontSize: "18px", fontWeight: 700, color: "rgba(0,0,0,0.88)", lineHeight: "26px" }, children: "\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC" }),
      /* @__PURE__ */ jsxs("div", { style: { fontSize: "14px", color: "rgba(0,0,0,0.45)", marginTop: "8px", lineHeight: "22px" }, children: [
        "\u05E9\u05DC\u05D7\u05E0\u05D5 \u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05D0\u05D9\u05E4\u05D5\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4 \u05DC\u05DB\u05EA\u05D5\u05D1\u05EA",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("strong", { style: { color: "rgba(0,0,0,0.88)" }, children: "demo@aesthetix.com" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Alert, { type: "info", message: "\u05D4\u05E7\u05D9\u05E9\u05D5\u05E8 \u05D1\u05EA\u05D5\u05E7\u05E3 \u05DC-30 \u05D3\u05E7\u05D5\u05EA", showIcon: true }),
    /* @__PURE__ */ jsx(Button, { type: "primary", block: true, children: "\u05D7\u05D6\u05D5\u05E8 \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA" }),
    /* @__PURE__ */ jsxs("div", { style: { fontSize: "14px", color: "rgba(0,0,0,0.45)" }, children: [
      "\u05DC\u05D0 \u05E7\u05D9\u05D1\u05DC\u05EA? ",
      /* @__PURE__ */ jsx(Link, { style: { fontSize: "14px" }, onClick: () => setSent(false), children: "\u05E9\u05DC\u05D7 \u05E9\u05D5\u05D1" })
    ] })
  ] }) });
}

export { AestetiXProvider, AvatarGroup, BadgeRibbon, Button, CheckboxGroup, EMPTY_IMAGE_DEFAULT, EMPTY_IMAGE_SIMPLE, Icon, Input, InputPassword, InputSearch, Link, LoginPage, LoginPageGallery, MenuTopNavigation, Modal, ModalConfirmation, ModalInformation, Paragraph, RadioButton, RadioGroup, RadioGroupButtons, Select, SkeletonAvatar, SkeletonButton, SkeletonImage, SkeletonInput, SkeletonNode, Tag, TagStatus, Text, TextArea, Title, aesthetixTheme, borderRadius, colorNeutral, colorNeutralDark, colorPrimary, colorSemantic, controlHeight, darkPalette, fontFamily, fontSize, fontWeight, gray, lineHeight, palette, resolveSize, shadow, spacing, tokens };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map