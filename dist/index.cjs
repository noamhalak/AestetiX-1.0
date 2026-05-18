'use strict';

var React20 = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React20__default = /*#__PURE__*/_interopDefault(React20);

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
var heightMap = {
  small: "h-[24px]",
  default: "h-[32px]",
  large: "h-[40px]"
};
var paddingMap = {
  small: "px-[7px]",
  // paddingXS - 1
  default: "px-[15px]",
  // padding - 1
  large: "px-[15px]"
  // padding - 1
};
var fontSizeMap = {
  small: "text-[12px] leading-[20px]",
  default: "text-[14px] leading-[22px]",
  large: "text-[16px] leading-[24px]"
};
var radiusBase = "rounded-lg";
function getVariantClasses(btnType, danger, ghost, disabled) {
  if (disabled) {
    if (ghost) {
      return "border border-solid border-neutral-border text-neutral-text-disabled bg-transparent cursor-not-allowed opacity-50";
    }
    return "border border-solid border-neutral-border text-neutral-text-disabled bg-neutral-fill-tertiary cursor-not-allowed";
  }
  if (ghost) {
    const ghostDanger = "border border-solid border-error text-error bg-transparent hover:border-error/80 hover:text-error/80 active:border-error-active active:text-error-active";
    const ghostPrimary = "border border-solid border-primary text-primary bg-transparent hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active";
    if (danger) return ghostDanger;
    if (btnType === "primary") return ghostPrimary;
    return "border border-solid border-neutral-border text-neutral-text bg-transparent hover:border-primary hover:text-primary active:border-primary-active active:text-primary-active";
  }
  if (danger) {
    switch (btnType) {
      case "primary":
        return "bg-error text-neutral-text-solid border-transparent hover:bg-[#ff7875] active:bg-error-active";
      case "dashed":
        return "bg-neutral-bg-container border border-dashed border-error text-error hover:border-[#ff7875] hover:text-[#ff7875] active:border-error-active active:text-error-active";
      default:
        return "bg-neutral-bg-container border border-solid border-error text-error hover:border-[#ff7875] hover:text-[#ff7875] active:border-error-active active:text-error-active";
    }
  }
  switch (btnType) {
    case "primary":
      return "bg-primary text-neutral-text-solid border-transparent hover:bg-primary-hover active:bg-primary-active";
    case "default":
      return "bg-neutral-bg-container border border-solid border-neutral-border text-neutral-text hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active";
    case "dashed":
      return "bg-neutral-bg-container border border-dashed border-neutral-border text-neutral-text hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active";
    case "text":
      return "bg-transparent border-transparent text-neutral-text hover:bg-neutral-fill-tertiary active:bg-neutral-fill-secondary";
    case "link":
      return "bg-transparent border-transparent text-primary underline-offset-4 hover:text-primary-hover active:text-primary-active";
    default:
      return "";
  }
}
var Button = React20__default.default.forwardRef(
  ({
    btnType = "default",
    size = "default",
    content = "default",
    danger = false,
    ghost = false,
    loading = false,
    icon,
    block = false,
    disabled,
    className = "",
    children,
    ...rest
  }, ref) => {
    const isDisabled = disabled || loading;
    const baseClasses = [
      "inline-flex items-center justify-center gap-[8px]",
      'font-["Heebo",sans-serif]',
      "transition-colors duration-200",
      "select-none outline-none",
      "whitespace-nowrap",
      radiusBase,
      heightMap[size],
      fontSizeMap[size],
      block ? "w-full" : "",
      content === "icon" ? "aspect-square px-0" : paddingMap[size],
      getVariantClasses(btnType, danger, ghost, !!isDisabled),
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxRuntime.jsxs("button", { ref, disabled: isDisabled, className: baseClasses, ...rest, children: [
      loading && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-block w-[14px] h-[14px] border-2 border-current border-t-transparent rounded-full animate-spin" }),
      !loading && icon && (content === "icon" || content === "icon-left") && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex items-center justify-center", children: icon }),
      content !== "icon" && children && /* @__PURE__ */ jsxRuntime.jsx("span", { children }),
      !loading && icon && content === "icon-right" && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex items-center justify-center", children: icon })
    ] });
  }
);
Button.displayName = "Button";
var heightMap2 = {
  small: "h-[24px]",
  default: "h-[32px]",
  large: "h-[40px]"
};
var paddingMap2 = {
  small: "px-[7px] py-0",
  default: "px-[11px] py-0",
  large: "px-[11px] py-0"
};
var fontSizeMap2 = {
  small: "text-[12px] leading-[20px]",
  default: "text-[14px] leading-[22px]",
  large: "text-[16px] leading-[24px]"
};
var borderStatusMap = {
  default: "border-neutral-border hover:border-primary focus-within:border-primary focus-within:shadow-input",
  error: "border-error hover:border-error focus-within:border-error focus-within:shadow-input-error",
  warning: "border-warning hover:border-warning focus-within:border-warning focus-within:shadow-input-warning"
};
var Input = React20__default.default.forwardRef(
  ({
    size = "default",
    status = "default",
    prefix,
    suffix,
    allowClear,
    addonBefore,
    addonAfter,
    disabled,
    className = "",
    value,
    onChange,
    ...rest
  }, ref) => {
    const [internalValue, setInternalValue] = React20__default.default.useState(value ?? "");
    React20__default.default.useEffect(() => {
      if (value !== void 0) setInternalValue(value);
    }, [value]);
    const handleChange = (e) => {
      setInternalValue(e.target.value);
      onChange?.(e);
    };
    const handleClear = () => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      )?.set;
      const inputEl = ref?.current;
      if (inputEl && nativeInputValueSetter) {
        nativeInputValueSetter.call(inputEl, "");
        inputEl.dispatchEvent(new Event("input", { bubbles: true }));
      }
      setInternalValue("");
    };
    const wrapperClasses = [
      "inline-flex items-center",
      "bg-neutral-bg-container",
      "border border-solid rounded-[6px]",
      "transition-all duration-200",
      heightMap2[size],
      disabled ? "border-neutral-border bg-neutral-fill-tertiary cursor-not-allowed opacity-60" : borderStatusMap[status],
      addonBefore || addonAfter ? "rounded-none" : "",
      className
    ].filter(Boolean).join(" ");
    const inputClasses = [
      "flex-1 bg-transparent outline-none border-none",
      "text-neutral-text placeholder:text-neutral-text-placeholder",
      'font-["Heebo",sans-serif]',
      fontSizeMap2[size],
      paddingMap2[size],
      disabled ? "cursor-not-allowed" : ""
    ].filter(Boolean).join(" ");
    const addonClasses = [
      "inline-flex items-center justify-center",
      "bg-neutral-fill-tertiary border-neutral-border",
      heightMap2[size],
      "px-[11px]",
      fontSizeMap2[size],
      "text-neutral-text-label"
    ].join(" ");
    return /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "inline-flex items-stretch w-full", children: [
      addonBefore && /* @__PURE__ */ jsxRuntime.jsx("span", { className: `${addonClasses} border border-solid rounded-l-[6px] border-r-0`, children: addonBefore }),
      /* @__PURE__ */ jsxRuntime.jsxs(
        "span",
        {
          className: [
            wrapperClasses,
            addonBefore ? "rounded-l-none" : "",
            addonAfter ? "rounded-r-none" : ""
          ].filter(Boolean).join(" "),
          children: [
            prefix && /* @__PURE__ */ jsxRuntime.jsx("span", { className: `flex items-center text-neutral-text-label pl-[11px] ${fontSizeMap2[size]}`, children: prefix }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "input",
              {
                ref,
                disabled,
                value: internalValue,
                onChange: handleChange,
                className: inputClasses,
                ...rest
              }
            ),
            allowClear && internalValue && !disabled && /* @__PURE__ */ jsxRuntime.jsx(
              "button",
              {
                type: "button",
                onClick: handleClear,
                className: "flex items-center pr-[11px] text-neutral-text-label hover:text-neutral-text transition-colors",
                children: /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 5.293L10.146 1.147a.5.5 0 01.708.708L6.707 6l4.147 4.146a.5.5 0 01-.708.708L6 6.707 1.854 10.854a.5.5 0 01-.708-.708L5.293 6 1.146 1.854A.5.5 0 011.854 1.146L6 5.293z" }) })
              }
            ),
            suffix && /* @__PURE__ */ jsxRuntime.jsx("span", { className: `flex items-center text-neutral-text-label pr-[11px] ${fontSizeMap2[size]}`, children: suffix })
          ]
        }
      ),
      addonAfter && /* @__PURE__ */ jsxRuntime.jsx("span", { className: `${addonClasses} border border-solid rounded-r-[6px] border-l-0`, children: addonAfter })
    ] });
  }
);
Input.displayName = "Input";
function CloseIcon() {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntime.jsx(
    "path",
    {
      d: "M12.8 3.2L3.2 12.8M3.2 3.2L12.8 12.8",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }
  ) });
}
function InfoIcon({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { className, width: "22", height: "22", viewBox: "0 0 22 22", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zm0 5a1.25 1.25 0 110 2.5A1.25 1.25 0 0111 5zm1.5 11h-3v-6h3v6z" }) });
}
function SuccessIcon({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { className, width: "22", height: "22", viewBox: "0 0 22 22", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zm5.207 7.793a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9.5 13.086l5.293-5.293a1 1 0 011.414 0z" }) });
}
function WarningIcon({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { className, width: "22", height: "22", viewBox: "0 0 22 22", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zm0 5a1.25 1.25 0 011.25 1.25v5.5a1.25 1.25 0 01-2.5 0v-5.5A1.25 1.25 0 0111 5zm0 9.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" }) });
}
function ErrorIcon({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { className, width: "22", height: "22", viewBox: "0 0 22 22", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zM9.293 7.879a1 1 0 011.414 0L11 8.172l.293-.293a1 1 0 111.414 1.414L12.414 9.586l.293.293a1 1 0 11-1.414 1.414L11 10.999l-.293.293a1 1 0 01-1.414-1.414L9.586 9.586l-.293-.293a1 1 0 010-1.414z" }) });
}
var statusConfig = {
  info: { icon: InfoIcon, color: "text-info", bg: "bg-info-bg" },
  success: { icon: SuccessIcon, color: "text-success", bg: "bg-success-bg" },
  warning: { icon: WarningIcon, color: "text-warning", bg: "bg-warning-bg" },
  error: { icon: ErrorIcon, color: "text-error", bg: "bg-error-bg" }
};
function SlotPlaceholder() {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center h-[120px] w-full border border-dashed border-neutral-border rounded-[6px] bg-neutral-fill-quaternary", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-[14px] leading-[22px] font-['Heebo',sans-serif] text-neutral-text", children: "Slot component" }) });
}
function Modal({
  open = true,
  title = "\u05DB\u05D5\u05EA\u05E8\u05EA \u05DE\u05D5\u05D3\u05DC",
  titleIcon,
  children,
  onOk,
  onCancel,
  okText = "\u05D0\u05D5\u05E7\u05D9\u05D9",
  cancelText = "\u05D1\u05D8\u05DC",
  showOk = true,
  showCancel = true,
  position = "default",
  className = "",
  width = 520
}) {
  if (!open) return null;
  const positionClasses = {
    default: "items-end justify-center pb-[100px]",
    top: "items-start justify-center pt-[100px]",
    center: "items-center justify-center"
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: `fixed inset-0 z-[1000] flex ${positionClasses[position]} bg-black/45`,
      onClick: (e) => e.target === e.currentTarget && onCancel?.(),
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: [
            "relative flex flex-col bg-neutral-bg-floating rounded-lg shadow-modal",
            "max-h-[90vh] overflow-hidden",
            className
          ].join(" "),
          style: { width },
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-[8px] pt-[16px] pr-[24px] pb-[8px] pl-[16px] shrink-0", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  type: "button",
                  onClick: onCancel,
                  className: "flex items-center justify-center w-[32px] h-[32px] rounded-lg text-neutral-text-label hover:bg-neutral-fill-tertiary hover:text-neutral-text transition-colors shrink-0",
                  children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon, {})
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "p",
                {
                  dir: "auto",
                  className: "flex-1 text-[16px] leading-[24px] font-normal font-['Heebo',sans-serif] text-neutral-text min-w-0 text-right",
                  children: title
                }
              ),
              titleIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex items-center justify-center w-[24px] h-[24px] shrink-0", children: titleIcon })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-col items-start pb-[12px] px-[24px] shrink-0 overflow-y-auto", children: children ?? /* @__PURE__ */ jsxRuntime.jsx(SlotPlaceholder, {}) }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-[8px] items-center pb-[24px] px-[24px] shrink-0", children: [
              showOk && /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  type: "button",
                  onClick: onOk,
                  className: "flex items-center justify-center h-[32px] px-[16px] py-[4px] gap-[8px] bg-primary text-neutral-text-solid text-[14px] leading-[22px] font-normal font-['Heebo',sans-serif] rounded-lg transition-colors hover:bg-primary-hover active:bg-primary-active whitespace-nowrap",
                  dir: "auto",
                  children: okText
                }
              ),
              showCancel && /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  type: "button",
                  onClick: onCancel,
                  className: "flex items-center justify-center h-[32px] px-[16px] py-[4px] gap-[8px] bg-neutral-bg-container border border-solid border-neutral-border text-neutral-text text-[14px] leading-[22px] font-normal font-['Heebo',sans-serif] rounded-lg transition-colors hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active whitespace-nowrap",
                  dir: "auto",
                  children: cancelText
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function ModalInformation({
  open = true,
  status = "info",
  title,
  description,
  onOk,
  onCancel,
  okText = "\u05D0\u05D5\u05E7\u05D9\u05D9",
  cancelText = "\u05D1\u05D8\u05DC",
  width = 400
}) {
  if (!open) return null;
  const { icon: StatusIcon, color } = statusConfig[status];
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: "fixed inset-0 z-[1000] flex items-center justify-center bg-black/45",
      onClick: (e) => e.target === e.currentTarget && onCancel?.(),
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: "relative flex flex-col bg-neutral-bg-floating rounded-lg shadow-modal overflow-hidden",
          style: { width },
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center text-center px-[24px] pt-[32px] pb-[24px] gap-[16px]", children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: `text-[48px] ${color}`, children: /* @__PURE__ */ jsxRuntime.jsx(StatusIcon, { className: "w-[48px] h-[48px]" }) }),
              title && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-[16px] leading-[24px] font-semibold font-['Heebo',sans-serif] text-neutral-text", children: title }),
              description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-[14px] leading-[22px] font-normal font-['Heebo',sans-serif] text-neutral-text-secondary", children: description })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-center gap-[8px] pb-[24px] px-[24px]", children: [
              cancelText && /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  type: "button",
                  onClick: onCancel,
                  className: "h-[32px] px-[16px] bg-neutral-bg-container border border-solid border-neutral-border text-neutral-text text-[14px] font-['Heebo',sans-serif] rounded-lg hover:border-primary-hover hover:text-primary-hover transition-colors",
                  children: cancelText
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  type: "button",
                  onClick: onOk,
                  className: "h-[32px] px-[16px] bg-primary text-neutral-text-solid text-[14px] font-['Heebo',sans-serif] rounded-lg hover:bg-primary-hover active:bg-primary-active transition-colors",
                  children: okText
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function ModalConfirmation({
  open = true,
  title,
  description,
  onOk,
  onCancel,
  okText = "\u05DB\u05DF",
  cancelText = "\u05DC\u05D0",
  danger = false,
  width = 400
}) {
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: "fixed inset-0 z-[1000] flex items-center justify-center bg-black/45",
      onClick: (e) => e.target === e.currentTarget && onCancel?.(),
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: "relative flex flex-col bg-neutral-bg-floating rounded-lg shadow-modal overflow-hidden",
          style: { width },
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "px-[24px] pt-[24px] pb-[16px] flex items-start gap-[12px]", children: [
              /* @__PURE__ */ jsxRuntime.jsx(WarningIcon, { className: "w-[22px] h-[22px] shrink-0 mt-[1px] text-warning" }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-[4px]", children: [
                title && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-[16px] leading-[24px] font-semibold font-['Heebo',sans-serif] text-neutral-text", children: title }),
                description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-[14px] leading-[22px] font-normal font-['Heebo',sans-serif] text-neutral-text-secondary", children: description })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex justify-end gap-[8px] pb-[16px] px-[24px]", children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  type: "button",
                  onClick: onCancel,
                  className: "h-[32px] px-[16px] bg-neutral-bg-container border border-solid border-neutral-border text-neutral-text text-[14px] font-['Heebo',sans-serif] rounded-lg hover:border-primary-hover hover:text-primary-hover transition-colors",
                  children: cancelText
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  type: "button",
                  onClick: onOk,
                  className: [
                    'h-[32px] px-[16px] text-neutral-text-solid text-[14px] font-["Heebo",sans-serif] rounded-lg transition-colors',
                    danger ? "bg-error hover:bg-[#ff7875] active:bg-error-active" : "bg-primary hover:bg-primary-hover active:bg-primary-active"
                  ].join(" "),
                  children: okText
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
var colorPresets = {
  default: { bg: "rgba(0,0,0,0.02)", border: "#d9d9d9", text: "rgba(0,0,0,0.88)" },
  processing: { bg: "#e6f4ff", border: "#91caff", text: "#1677ff", dot: "#1677ff" },
  success: { bg: "#f6ffed", border: "#b7eb8f", text: "#52c41a", dot: "#52c41a" },
  warning: { bg: "#fffbe6", border: "#ffe58f", text: "#faad14", dot: "#faad14" },
  error: { bg: "#fff1f0", border: "#ffa39e", text: "#ff4d4f", dot: "#ff4d4f" },
  red: { bg: "#fff1f0", border: "#ffa39e", text: "#cf1322" },
  volcano: { bg: "#fff2e8", border: "#ffbb96", text: "#d4380d" },
  orange: { bg: "#fff7e6", border: "#ffd591", text: "#d46b08" },
  gold: { bg: "#fffbe6", border: "#ffe58f", text: "#d48806" },
  yellow: { bg: "#feffe6", border: "#fffb8f", text: "#d4b106" },
  lime: { bg: "#fcffe6", border: "#eaff8f", text: "#7cb305" },
  green: { bg: "#f6ffed", border: "#b7eb8f", text: "#389e0d" },
  cyan: { bg: "#e6fffb", border: "#87e8de", text: "#08979c" },
  blue: { bg: "#e6f4ff", border: "#91caff", text: "#0958d9" },
  geekblue: { bg: "#f0f5ff", border: "#adc6ff", text: "#1d39c4" },
  purple: { bg: "#f9f0ff", border: "#d3adf7", text: "#531dab" },
  magenta: { bg: "#fff0f6", border: "#ffadd2", text: "#c41d7f" }
};
function Tag({
  color = "default",
  closable = false,
  onClose,
  bordered = true,
  icon,
  children,
  className = "",
  style
}) {
  const [visible, setVisible] = React20__default.default.useState(true);
  if (!visible) return null;
  const preset = colorPresets[color];
  const handleClose = (e) => {
    e.stopPropagation();
    onClose?.(e);
    setVisible(false);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      className: [
        "inline-flex items-center gap-[4px]",
        "h-[22px] px-[8px]",
        'text-[12px] leading-[20px] font-normal font-["Heebo",sans-serif]',
        "rounded-[4px]",
        "whitespace-nowrap",
        bordered ? "border border-solid" : "border-transparent",
        className
      ].filter(Boolean).join(" "),
      style: {
        backgroundColor: preset.bg,
        borderColor: bordered ? preset.border : "transparent",
        color: preset.text,
        ...style
      },
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-flex items-center", children: icon }),
        children,
        closable && /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            type: "button",
            onClick: handleClose,
            className: "inline-flex items-center justify-center ml-[2px] opacity-60 hover:opacity-100 transition-opacity",
            style: { color: preset.text },
            children: /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.6 2.4L2.4 9.6M2.4 2.4l7.2 7.2", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", fill: "none" }) })
          }
        )
      ]
    }
  );
}
var statusDotColors = {
  default: "#d9d9d9",
  processing: "#1677ff",
  success: "#52c41a",
  warning: "#faad14",
  error: "#ff4d4f"
};
var statusTextColors = {
  default: "rgba(0,0,0,0.88)",
  processing: "rgba(0,0,0,0.88)",
  success: "rgba(0,0,0,0.88)",
  warning: "rgba(0,0,0,0.88)",
  error: "rgba(0,0,0,0.88)"
};
function TagStatus({ status = "default", text, className = "" }) {
  const dotColor = statusDotColors[status];
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      className: [
        "inline-flex items-center gap-[6px]",
        'text-[12px] leading-[20px] font-normal font-["Heebo",sans-serif]',
        className
      ].join(" "),
      style: { color: statusTextColors[status] },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            className: "inline-block w-[6px] h-[6px] rounded-full shrink-0",
            style: {
              backgroundColor: dotColor,
              boxShadow: status === "processing" ? `0 0 0 4px ${dotColor}33` : void 0
            }
          }
        ),
        text
      ]
    }
  );
}
var titleStyles = {
  1: { fontSize: "38px", lineHeight: "46px", weight: 600 },
  // Figma: 38/46 w400, using 600 for heading
  2: { fontSize: "30px", lineHeight: "38px", weight: 600 },
  3: { fontSize: "24px", lineHeight: "32px", weight: 600 },
  // Heading 3: 24/32
  4: { fontSize: "20px", lineHeight: "28px", weight: 600 },
  // Heading 4: 20/28
  5: { fontSize: "16px", lineHeight: "24px", weight: 600 }
  // Heading 5: 16/24
};
var titleTags = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5"
};
function Title({ level = 1, children, className = "", style, disabled }) {
  const Tag2 = titleTags[level];
  const { fontSize: fontSize2, lineHeight: lineHeight2, weight } = titleStyles[level];
  return /* @__PURE__ */ jsxRuntime.jsx(
    Tag2,
    {
      className: [
        "font-['Heebo',sans-serif]",
        "m-0",
        disabled ? "text-neutral-text-disabled cursor-not-allowed" : "text-neutral-text",
        className
      ].join(" "),
      style: { fontSize: fontSize2, lineHeight: lineHeight2, fontWeight: weight, ...style },
      children
    }
  );
}
var textColorMap = {
  default: "text-neutral-text",
  secondary: "text-neutral-text-secondary",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
  disabled: "text-neutral-text-disabled cursor-not-allowed",
  mark: "bg-yellow-200 text-neutral-text"
};
var textSizeMap = {
  "small": { fontSize: "12px", lineHeight: "20px" },
  "default": { fontSize: "14px", lineHeight: "22px" },
  "large": { fontSize: "16px", lineHeight: "24px" },
  "extra-large": { fontSize: "20px", lineHeight: "28px" }
};
function Text({ type = "default", textStyle = "default", size = "default", children, className = "", style }) {
  const { fontSize: fontSize2, lineHeight: lineHeight2 } = textSizeMap[size];
  const colorClass = textColorMap[type];
  const fontWeight2 = textStyle === "strong" ? 700 : textStyle === "medium" ? 500 : 400;
  const textDecoration = textStyle === "underline" ? "underline" : textStyle === "delete" ? "line-through" : "none";
  const fontStyle = textStyle === "italic" ? "italic" : "normal";
  const tag = textStyle === "strong" ? "strong" : textStyle === "delete" ? "del" : textStyle === "italic" ? "em" : type === "mark" ? "mark" : "span";
  const Tag2 = tag;
  return /* @__PURE__ */ jsxRuntime.jsx(
    Tag2,
    {
      className: [
        "font-['Heebo',sans-serif]",
        colorClass,
        className
      ].join(" "),
      style: { fontSize: fontSize2, lineHeight: lineHeight2, fontWeight: fontWeight2, textDecoration, fontStyle, ...style },
      children
    }
  );
}
function Link({ underlined = false, disabled = false, size = "default", children, className = "", style, ...rest }) {
  const { fontSize: fontSize2, lineHeight: lineHeight2 } = textSizeMap[size];
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    {
      className: [
        "font-['Heebo',sans-serif]",
        disabled ? "text-neutral-text-disabled pointer-events-none cursor-not-allowed" : "text-primary hover:text-primary-hover active:text-primary-active",
        underlined ? "underline underline-offset-2" : "no-underline",
        className
      ].join(" "),
      style: { fontSize: fontSize2, lineHeight: lineHeight2, ...style },
      "aria-disabled": disabled,
      ...rest,
      children
    }
  );
}
function Code({ children, className = "" }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "code",
    {
      className: [
        "font-['Heebo',sans-serif]",
        "text-[14px] leading-[22px]",
        "px-[4px] py-[1px]",
        "bg-neutral-fill-tertiary",
        "border border-solid border-neutral-border-secondary",
        "rounded-[3px]",
        "text-neutral-text",
        className
      ].join(" "),
      children
    }
  );
}
function Paragraph({ type = "default", size = "default", children, className = "", style }) {
  const { fontSize: fontSize2, lineHeight: lineHeight2 } = textSizeMap[size];
  const colorClass = textColorMap[type];
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    {
      className: [
        "font-['Heebo',sans-serif] font-normal m-0",
        colorClass,
        className
      ].join(" "),
      style: { fontSize: fontSize2, lineHeight: lineHeight2, ...style },
      children
    }
  );
}
var themeTokens = {
  light: {
    bg: "#ffffff",
    itemText: "rgba(0,0,0,0.88)",
    itemTextHover: "rgba(0,0,0,0.88)",
    itemTextActive: "#1677ff",
    itemTextDisabled: "rgba(0,0,0,0.25)",
    itemBgHover: "rgba(0,0,0,0.04)",
    // colorFillTertiary
    itemBgActive: "#e6f4ff",
    // colorPrimaryBG
    subBg: "rgba(0,0,0,0.02)",
    groupTitle: "rgba(0,0,0,0.45)",
    border: "none"
  },
  dark: {
    bg: "#141414",
    // colorBgContainer dark
    itemText: "rgba(255,255,255,0.85)",
    itemTextHover: "rgba(255,255,255,0.85)",
    itemTextActive: "#1668dc",
    // primary-6 dark
    itemTextDisabled: "rgba(255,255,255,0.25)",
    itemBgHover: "rgba(255,255,255,0.08)",
    itemBgActive: "#111a2c",
    // blue-1 dark
    subBg: "rgba(255,255,255,0.04)",
    groupTitle: "rgba(255,255,255,0.45)",
    border: "none"
  }
};
function ChevronDown({ open, size = 12 }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 12 12",
      fill: "currentColor",
      style: { transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" },
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 4l4 4 4-4", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
    }
  );
}
function MenuItem({ item, theme, active, childActive, collapsed, level = 0, onSelect }) {
  const t = themeTokens[theme];
  const [hovered, setHovered] = React20__default.default.useState(false);
  const baseStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    height: "40px",
    paddingLeft: collapsed ? "24px" : `${24 + level * 16}px`,
    paddingRight: "24px",
    cursor: item.disabled ? "not-allowed" : "pointer",
    borderRadius: "6px",
    marginInline: "4px",
    transition: "background-color 0.15s",
    color: item.disabled ? t.itemTextDisabled : active ? t.itemTextActive : t.itemText,
    backgroundColor: item.disabled ? "transparent" : active ? t.itemBgActive : childActive ? t.subBg : hovered ? t.itemBgHover : "transparent",
    fontFamily: '"Heebo", sans-serif',
    fontSize: "14px",
    lineHeight: "22px",
    fontWeight: active ? 600 : 400,
    whiteSpace: "nowrap",
    overflow: collapsed ? "hidden" : "visible"
  };
  const showIndicator = active && !collapsed;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "li",
    {
      style: { position: "relative", listStyle: "none" },
      onMouseEnter: () => !item.disabled && setHovered(true),
      onMouseLeave: () => setHovered(false),
      onClick: () => !item.disabled && onSelect?.(item.key),
      children: [
        showIndicator && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              position: "absolute",
              right: 0,
              top: "4px",
              bottom: "4px",
              width: "3px",
              backgroundColor: t.itemTextActive,
              borderRadius: "2px 0 0 2px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { style: baseStyle, children: [
          item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { display: "flex", alignItems: "center", flexShrink: 0, fontSize: "16px" }, children: item.icon }),
          !collapsed && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis" }, children: item.label })
        ] })
      ]
    }
  );
}
function MenuSubmenu({ item, theme, mode, activeKey, collapsed, level = 0, onSelect }) {
  const t = themeTokens[theme];
  const [open, setOpen] = React20__default.default.useState(false);
  const [hovered, setHovered] = React20__default.default.useState(false);
  const hasActiveChild = item.children?.some((c) => c.key === activeKey);
  return /* @__PURE__ */ jsxRuntime.jsxs("li", { style: { listStyle: "none" }, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          height: "40px",
          paddingLeft: collapsed ? "24px" : `${24 + level * 16}px`,
          paddingRight: "16px",
          cursor: "pointer",
          borderRadius: "6px",
          marginInline: "4px",
          transition: "background-color 0.15s",
          color: t.itemText,
          backgroundColor: hovered ? t.itemBgHover : hasActiveChild ? t.subBg : "transparent",
          fontFamily: '"Heebo", sans-serif',
          fontSize: "14px",
          lineHeight: "22px"
        },
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        onClick: () => !collapsed && setOpen((v) => !v),
        children: [
          item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { display: "flex", alignItems: "center", flexShrink: 0, fontSize: "16px" }, children: item.icon }),
          !collapsed && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { style: { flex: 1 }, children: item.label }),
            /* @__PURE__ */ jsxRuntime.jsx(ChevronDown, { open })
          ] })
        ]
      }
    ),
    open && !collapsed && mode === "inline" && /* @__PURE__ */ jsxRuntime.jsx("ul", { style: { margin: 0, padding: 0 }, children: item.children?.map(
      (child) => child.children ? /* @__PURE__ */ jsxRuntime.jsx(
        MenuSubmenu,
        {
          item: child,
          theme,
          mode,
          activeKey,
          level: level + 1,
          onSelect
        },
        child.key
      ) : /* @__PURE__ */ jsxRuntime.jsx(
        MenuItem,
        {
          item: child,
          theme,
          active: child.key === activeKey,
          level: level + 1,
          onSelect
        },
        child.key
      )
    ) })
  ] });
}
function MenuGroup({ group, theme, mode, activeKey, collapsed, onSelect }) {
  const t = themeTokens[theme];
  return /* @__PURE__ */ jsxRuntime.jsxs("li", { style: { listStyle: "none" }, children: [
    !collapsed && /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        style: {
          padding: "8px 28px 4px",
          fontSize: "12px",
          lineHeight: "20px",
          color: t.groupTitle,
          fontFamily: '"Heebo", sans-serif',
          fontWeight: 400
        },
        children: group.label
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx("ul", { style: { margin: 0, padding: 0 }, children: group.children.map(
      (child) => child.children ? /* @__PURE__ */ jsxRuntime.jsx(MenuSubmenu, { item: child, theme, mode, activeKey, collapsed, onSelect }, child.key) : /* @__PURE__ */ jsxRuntime.jsx(MenuItem, { item: child, theme, active: child.key === activeKey, collapsed, onSelect }, child.key)
    ) })
  ] });
}
function isGroup(item) {
  return "children" in item && !("icon" in item) && !("disabled" in item);
}
function Menu({
  items = [],
  mode = "inline",
  theme = "light",
  activeKey: controlledActiveKey,
  defaultActiveKey,
  collapsed = false,
  onSelect,
  style,
  className = "",
  width
}) {
  const t = themeTokens[theme];
  const [activeKey, setActiveKey] = React20__default.default.useState(controlledActiveKey ?? defaultActiveKey ?? "");
  React20__default.default.useEffect(() => {
    if (controlledActiveKey !== void 0) setActiveKey(controlledActiveKey);
  }, [controlledActiveKey]);
  const handleSelect = (key) => {
    setActiveKey(key);
    onSelect?.(key);
  };
  const menuWidth = width ?? (collapsed ? 72 : 320);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    {
      className,
      style: {
        backgroundColor: t.bg,
        width: menuWidth,
        padding: "4px 0",
        overflowX: "hidden",
        overflowY: "auto",
        transition: "width 0.2s ease",
        fontFamily: '"Heebo", sans-serif',
        ...style
      },
      children: /* @__PURE__ */ jsxRuntime.jsx("ul", { style: { margin: 0, padding: 0 }, children: items.map(
        (item) => isGroup(item) ? /* @__PURE__ */ jsxRuntime.jsx(
          MenuGroup,
          {
            group: item,
            theme,
            mode,
            activeKey,
            collapsed,
            onSelect: handleSelect
          },
          item.key
        ) : item.children ? /* @__PURE__ */ jsxRuntime.jsx(
          MenuSubmenu,
          {
            item,
            theme,
            mode,
            activeKey,
            collapsed,
            onSelect: handleSelect
          },
          item.key
        ) : /* @__PURE__ */ jsxRuntime.jsx(
          MenuItem,
          {
            item,
            theme,
            active: item.key === activeKey,
            collapsed,
            onSelect: handleSelect
          },
          item.key
        )
      ) })
    }
  );
}
function MenuTopNavigation({
  items = [],
  theme = "light",
  activeKey: controlledActiveKey,
  defaultActiveKey,
  onSelect,
  className = "",
  style
}) {
  const t = themeTokens[theme];
  const [activeKey, setActiveKey] = React20__default.default.useState(controlledActiveKey ?? defaultActiveKey ?? "");
  React20__default.default.useEffect(() => {
    if (controlledActiveKey !== void 0) setActiveKey(controlledActiveKey);
  }, [controlledActiveKey]);
  const handleSelect = (key) => {
    setActiveKey(key);
    onSelect?.(key);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    {
      className,
      style: {
        display: "flex",
        alignItems: "center",
        backgroundColor: t.bg,
        fontFamily: '"Heebo", sans-serif',
        ...style
      },
      children: items.map((item) => {
        const isActive = item.key === activeKey;
        return /* @__PURE__ */ jsxRuntime.jsx(
          TopNavItem,
          {
            item,
            active: isActive,
            theme,
            onSelect: handleSelect
          },
          item.key
        );
      })
    }
  );
}
function TopNavItem({ item, active, theme, onSelect }) {
  const t = themeTokens[theme];
  const [hovered, setHovered] = React20__default.default.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      style: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        height: "46px",
        padding: "0 16px",
        cursor: item.disabled ? "not-allowed" : "pointer",
        color: item.disabled ? t.itemTextDisabled : active ? t.itemTextActive : t.itemText,
        borderBottom: active ? `2px solid ${t.itemTextActive}` : "2px solid transparent",
        backgroundColor: hovered && !item.disabled ? t.itemBgHover : "transparent",
        transition: "color 0.15s, border-color 0.15s",
        fontFamily: '"Heebo", sans-serif',
        fontSize: "14px",
        lineHeight: "22px",
        fontWeight: active ? 600 : 400,
        whiteSpace: "nowrap"
      },
      onMouseEnter: () => !item.disabled && setHovered(true),
      onMouseLeave: () => setHovered(false),
      onClick: () => !item.disabled && onSelect?.(item.key),
      children: [
        item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { display: "flex", alignItems: "center", fontSize: "16px" }, children: item.icon }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: item.label })
      ]
    }
  );
}
function SortIcon({ order }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("span", { style: { display: "inline-flex", flexDirection: "column", gap: "2px", marginLeft: "4px" }, children: [
    /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "8", height: "5", viewBox: "0 0 8 5", fill: order === "asc" ? "#1677ff" : "#bfbfbf", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 0L0 5h8L4 0z" }) }),
    /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "8", height: "5", viewBox: "0 0 8 5", fill: order === "desc" ? "#1677ff" : "#bfbfbf", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 5L8 0H0l4 5z" }) })
  ] });
}
function FilterIcon({ active }) {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: active ? "#1677ff" : "#bfbfbf", style: { marginLeft: "4px" }, children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M1 2h12L8 8v4l-2-1V8L1 2z" }) });
}
function CheckboxIcon({ checked, indeterminate }) {
  const borderColor = checked || indeterminate ? "#1677ff" : "#d9d9d9";
  const bg = checked || indeterminate ? "#1677ff" : "#fff";
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", children: [
    /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "14", height: "14", x: "1", y: "1", rx: "2", fill: bg, stroke: borderColor, strokeWidth: "1.5" }),
    checked && /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 8l3 3 7-7", stroke: "#fff", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
    indeterminate && /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "4", y1: "8", x2: "12", y2: "8", stroke: "#fff", strokeWidth: "1.5", strokeLinecap: "round" })
  ] });
}
function ThCell({ column, style }) {
  const [hovered, setHovered] = React20__default.default.useState(false);
  const [sortOrder, setSortOrder] = React20__default.default.useState(column.sortOrder ?? null);
  const handleSort = () => {
    if (!column.sorter) return;
    const next = sortOrder === null ? "asc" : sortOrder === "asc" ? "desc" : null;
    setSortOrder(next);
    column.onSort?.(next);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "th",
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onClick: handleSort,
      style: {
        height: "40px",
        padding: "0 8px",
        textAlign: column.align ?? "left",
        fontSize: "14px",
        lineHeight: "22px",
        fontWeight: 600,
        fontFamily: '"Heebo", sans-serif',
        color: "rgba(0,0,0,0.88)",
        backgroundColor: hovered ? "rgba(0,0,0,0.04)" : "#fafafa",
        borderBottom: "1px solid #f0f0f0",
        whiteSpace: "nowrap",
        cursor: column.sorter ? "pointer" : "default",
        userSelect: "none",
        width: column.width,
        ...style
      },
      children: /* @__PURE__ */ jsxRuntime.jsxs("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
        column.title,
        column.sorter && /* @__PURE__ */ jsxRuntime.jsx(SortIcon, { order: sortOrder }),
        column.filterable && /* @__PURE__ */ jsxRuntime.jsx(FilterIcon, { active: false })
      ] })
    }
  );
}
function TdCell({ children, align, rowHovered, selected, style }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "td",
    {
      style: {
        height: "40px",
        padding: "0 8px",
        textAlign: align ?? "left",
        fontSize: "14px",
        lineHeight: "22px",
        fontFamily: '"Heebo", sans-serif',
        color: "rgba(0,0,0,0.88)",
        backgroundColor: selected ? "#e6f4ff" : rowHovered ? "rgba(0,0,0,0.02)" : "#ffffff",
        borderBottom: "1px solid #f0f0f0",
        transition: "background-color 0.15s",
        ...style
      },
      children
    }
  );
}
function Table({
  columns,
  dataSource,
  rowKey = "key",
  selectedRowKeys = [],
  onSelectChange,
  selectable = false,
  loading = false,
  empty,
  className = "",
  style
}) {
  const [hoveredKey, setHoveredKey] = React20__default.default.useState(null);
  const getRowKey = (record, index) => {
    if (typeof rowKey === "function") return rowKey(record);
    return String(record[rowKey] ?? index);
  };
  const allKeys = dataSource.map((r, i) => getRowKey(r, i));
  const allSelected = allKeys.length > 0 && allKeys.every((k) => selectedRowKeys.includes(k));
  const someSelected = allKeys.some((k) => selectedRowKeys.includes(k)) && !allSelected;
  const toggleAll = () => {
    if (allSelected) {
      onSelectChange?.([]);
    } else {
      onSelectChange?.(allKeys);
    }
  };
  const toggleRow = (key) => {
    if (selectedRowKeys.includes(key)) {
      onSelectChange?.(selectedRowKeys.filter((k) => k !== key));
    } else {
      onSelectChange?.([...selectedRowKeys, key]);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className,
      style: {
        width: "100%",
        overflowX: "auto",
        borderRadius: "8px",
        border: "1px solid #f0f0f0",
        fontFamily: '"Heebo", sans-serif',
        ...style
      },
      children: [
        loading && /* @__PURE__ */ jsxRuntime.jsx("div", { style: { padding: "24px", textAlign: "center", color: "rgba(0,0,0,0.45)" }, children: /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              display: "inline-block",
              width: "24px",
              height: "24px",
              border: "2px solid #1677ff",
              borderTopColor: "transparent",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite"
            }
          }
        ) }),
        !loading && /* @__PURE__ */ jsxRuntime.jsxs("table", { style: { width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }, children: [
          /* @__PURE__ */ jsxRuntime.jsx("thead", { children: /* @__PURE__ */ jsxRuntime.jsxs("tr", { children: [
            selectable && /* @__PURE__ */ jsxRuntime.jsx(
              "th",
              {
                style: {
                  width: "40px",
                  height: "40px",
                  padding: "0 8px",
                  backgroundColor: "#fafafa",
                  borderBottom: "1px solid #f0f0f0",
                  textAlign: "center"
                },
                children: /* @__PURE__ */ jsxRuntime.jsx(
                  "span",
                  {
                    style: { cursor: "pointer", display: "inline-flex" },
                    onClick: toggleAll,
                    children: /* @__PURE__ */ jsxRuntime.jsx(CheckboxIcon, { checked: allSelected, indeterminate: someSelected })
                  }
                )
              }
            ),
            columns.map((col) => /* @__PURE__ */ jsxRuntime.jsx(ThCell, { column: col }, col.key))
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx("tbody", { children: dataSource.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx("tr", { children: /* @__PURE__ */ jsxRuntime.jsx(
            "td",
            {
              colSpan: columns.length + (selectable ? 1 : 0),
              style: {
                padding: "32px",
                textAlign: "center",
                color: "rgba(0,0,0,0.25)",
                fontSize: "14px"
              },
              children: empty ?? "\u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD"
            }
          ) }) : dataSource.map((record, index) => {
            const key = getRowKey(record, index);
            const isSelected = selectedRowKeys.includes(key);
            const isHovered = hoveredKey === key;
            return /* @__PURE__ */ jsxRuntime.jsxs(
              "tr",
              {
                onMouseEnter: () => setHoveredKey(key),
                onMouseLeave: () => setHoveredKey(null),
                children: [
                  selectable && /* @__PURE__ */ jsxRuntime.jsx(TdCell, { rowHovered: isHovered, selected: isSelected, align: "center", children: /* @__PURE__ */ jsxRuntime.jsx(
                    "span",
                    {
                      style: { cursor: "pointer", display: "inline-flex" },
                      onClick: () => toggleRow(key),
                      children: /* @__PURE__ */ jsxRuntime.jsx(CheckboxIcon, { checked: isSelected })
                    }
                  ) }),
                  columns.map((col) => /* @__PURE__ */ jsxRuntime.jsx(
                    TdCell,
                    {
                      align: col.align,
                      rowHovered: isHovered,
                      selected: isSelected,
                      children: col.render ? col.render(col.dataIndex ? record[col.dataIndex] : void 0, record, index) : col.dataIndex ? String(record[col.dataIndex] ?? "") : null
                    },
                    col.key
                  ))
                ]
              },
              key
            );
          }) })
        ] })
      ]
    }
  );
}
function CheckboxBox({
  checked,
  indeterminate,
  disabled,
  focused,
  hovered,
  size
}) {
  const boxSize = size === "small" ? 14 : 16;
  const isChecked = checked || indeterminate;
  const borderColor = disabled ? "#d9d9d9" : isChecked ? "#1677ff" : hovered || focused ? "#1677ff" : "#d9d9d9";
  const bg = disabled ? isChecked ? "#bfbfbf" : "#f5f5f5" : isChecked ? "#1677ff" : "#ffffff";
  const shadow2 = focused && !disabled ? "0 0 0 2px rgba(22,119,255,0.2)" : void 0;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: boxSize,
        height: boxSize,
        border: `1px solid ${borderColor}`,
        borderRadius: 2,
        backgroundColor: bg,
        boxShadow: shadow2,
        flexShrink: 0,
        transition: "all 0.2s"
      },
      children: [
        checked && !indeterminate && /* @__PURE__ */ jsxRuntime.jsx("svg", { width: boxSize - 4, height: boxSize - 4, viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 6l3 3 5-5", stroke: "#fff", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }),
        indeterminate && /* @__PURE__ */ jsxRuntime.jsx("svg", { width: boxSize - 4, height: boxSize - 4, viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsxRuntime.jsx("line", { x1: "2", y1: "6", x2: "10", y2: "6", stroke: "#fff", strokeWidth: "1.5", strokeLinecap: "round" }) })
      ]
    }
  );
}
function Checkbox({
  checked: controlledChecked,
  defaultChecked = false,
  indeterminate = false,
  disabled = false,
  size = "default",
  onChange,
  children,
  className = "",
  style
}) {
  const [checked, setChecked] = React20__default.default.useState(controlledChecked ?? defaultChecked);
  const [hovered, setHovered] = React20__default.default.useState(false);
  const [focused, setFocused] = React20__default.default.useState(false);
  React20__default.default.useEffect(() => {
    if (controlledChecked !== void 0) setChecked(controlledChecked);
  }, [controlledChecked]);
  const handleChange = () => {
    if (disabled) return;
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };
  const labelSize = size === "small" ? "12px" : "14px";
  const labelLine = size === "small" ? "20px" : "22px";
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "label",
    {
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        cursor: disabled ? "not-allowed" : "pointer",
        userSelect: "none",
        opacity: disabled ? 0.65 : 1,
        ...style
      },
      onMouseEnter: () => !disabled && setHovered(true),
      onMouseLeave: () => setHovered(false),
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            type: "checkbox",
            checked,
            disabled,
            onChange: handleChange,
            style: { position: "absolute", opacity: 0, width: 0, height: 0 }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          CheckboxBox,
          {
            checked,
            indeterminate,
            disabled,
            focused,
            hovered,
            size
          }
        ),
        children && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              fontSize: labelSize,
              lineHeight: labelLine,
              fontFamily: '"Heebo", sans-serif',
              color: disabled ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.88)"
            },
            children
          }
        )
      ]
    }
  );
}
function CheckboxGroup({
  options = [],
  value: controlledValue,
  defaultValue = [],
  onChange,
  disabled = false,
  direction = "horizontal",
  size = "default",
  className = ""
}) {
  const [value, setValue] = React20__default.default.useState(controlledValue ?? defaultValue);
  React20__default.default.useEffect(() => {
    if (controlledValue !== void 0) setValue(controlledValue);
  }, [controlledValue]);
  const toggle = (v) => {
    const next = value.includes(v) ? value.filter((x) => x !== v) : [...value, v];
    setValue(next);
    onChange?.(next);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className,
      style: {
        display: "flex",
        flexDirection: direction === "vertical" ? "column" : "row",
        gap: direction === "vertical" ? "8px" : "16px",
        flexWrap: "wrap"
      },
      children: options.map((opt) => /* @__PURE__ */ jsxRuntime.jsx(
        Checkbox,
        {
          checked: value.includes(opt.value),
          disabled: disabled || opt.disabled,
          size,
          onChange: () => toggle(opt.value),
          children: opt.label
        },
        opt.value
      ))
    }
  );
}
function Radio({
  checked: controlledChecked,
  defaultChecked = false,
  disabled = false,
  value = "",
  onChange,
  children,
  className = "",
  style
}) {
  const [checked, setChecked] = React20__default.default.useState(controlledChecked ?? defaultChecked);
  const [hovered, setHovered] = React20__default.default.useState(false);
  const [focused, setFocused] = React20__default.default.useState(false);
  React20__default.default.useEffect(() => {
    if (controlledChecked !== void 0) setChecked(controlledChecked);
  }, [controlledChecked]);
  const handleChange = () => {
    if (disabled) return;
    setChecked(true);
    onChange?.(value);
  };
  const outerBorder = disabled ? "#d9d9d9" : checked ? "#1677ff" : hovered || focused ? "#1677ff" : "#d9d9d9";
  const shadow2 = focused && !disabled ? "0 0 0 2px rgba(22,119,255,0.2)" : void 0;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "label",
    {
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        cursor: disabled ? "not-allowed" : "pointer",
        userSelect: "none",
        ...style
      },
      onMouseEnter: () => !disabled && setHovered(true),
      onMouseLeave: () => setHovered(false),
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            type: "radio",
            checked,
            disabled,
            onChange: handleChange,
            style: { position: "absolute", opacity: 0, width: 0, height: 0 }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 16,
              height: 16,
              border: `1px solid ${outerBorder}`,
              borderRadius: "50%",
              backgroundColor: disabled ? "#f5f5f5" : "#fff",
              boxShadow: shadow2,
              flexShrink: 0,
              transition: "all 0.2s"
            },
            children: checked && /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                style: {
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: disabled ? "#bfbfbf" : "#1677ff",
                  transition: "transform 0.2s"
                }
              }
            )
          }
        ),
        children && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              fontSize: "14px",
              lineHeight: "22px",
              fontFamily: '"Heebo", sans-serif',
              color: disabled ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.88)"
            },
            children
          }
        )
      ]
    }
  );
}
function RadioGroup({
  options = [],
  value: controlled,
  defaultValue,
  onChange,
  disabled = false,
  direction = "horizontal",
  className = ""
}) {
  const [value, setValue] = React20__default.default.useState(controlled ?? defaultValue ?? "");
  React20__default.default.useEffect(() => {
    if (controlled !== void 0) setValue(controlled);
  }, [controlled]);
  const handleChange = (v) => {
    setValue(v);
    onChange?.(v);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className,
      style: {
        display: "flex",
        flexDirection: direction === "vertical" ? "column" : "row",
        gap: direction === "vertical" ? "8px" : "16px",
        flexWrap: "wrap"
      },
      children: options.map((opt) => /* @__PURE__ */ jsxRuntime.jsx(
        Radio,
        {
          value: opt.value,
          checked: value === opt.value,
          disabled: disabled || opt.disabled,
          onChange: handleChange,
          children: opt.label
        },
        opt.value
      ))
    }
  );
}
var rbHeight = { small: 24, default: 32, large: 40 };
var rbFontSize = { small: "12px", default: "14px", large: "16px" };
var rbPadding = { small: "0 7px", default: "0 15px", large: "0 15px" };
function RadioButton({
  value = "",
  checked = false,
  disabled = false,
  size = "default",
  btnStyle = "outlined",
  position = "center",
  onChange,
  children
}) {
  const [hovered, setHovered] = React20__default.default.useState(false);
  const radius = {
    first: "6px 0 0 6px",
    center: "0",
    last: "0 6px 6px 0",
    only: "6px"
  };
  let bg;
  let border;
  let color;
  if (disabled) {
    bg = "#f5f5f5";
    border = "#d9d9d9";
    color = "rgba(0,0,0,0.25)";
  } else if (checked) {
    if (btnStyle === "solid") {
      bg = "#1677ff";
      border = "#1677ff";
      color = "#fff";
    } else {
      bg = "#e6f4ff";
      border = "#1677ff";
      color = "#1677ff";
    }
  } else if (hovered) {
    bg = btnStyle === "solid" ? "rgba(0,0,0,0.04)" : "#fff";
    border = "#1677ff";
    color = btnStyle === "solid" ? "rgba(0,0,0,0.88)" : "#1677ff";
  } else {
    bg = btnStyle === "solid" ? "#fff" : "#fff";
    border = "#d9d9d9";
    color = "rgba(0,0,0,0.88)";
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      disabled,
      onClick: () => !disabled && onChange?.(value),
      onMouseEnter: () => !disabled && setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        height: rbHeight[size],
        padding: rbPadding[size],
        fontSize: rbFontSize[size],
        lineHeight: "1",
        fontFamily: '"Heebo", sans-serif',
        fontWeight: checked ? 600 : 400,
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: radius[position],
        color,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.2s",
        whiteSpace: "nowrap",
        marginLeft: position === "center" || position === "last" ? -1 : 0,
        position: "relative",
        zIndex: checked ? 1 : 0
      },
      children
    }
  );
}
function RadioGroupButtons({
  options = [],
  value: controlled,
  defaultValue,
  onChange,
  disabled = false,
  size = "default",
  btnStyle = "outlined",
  className = ""
}) {
  const [value, setValue] = React20__default.default.useState(controlled ?? defaultValue ?? "");
  React20__default.default.useEffect(() => {
    if (controlled !== void 0) setValue(controlled);
  }, [controlled]);
  const handleChange = (v) => {
    setValue(v);
    onChange?.(v);
  };
  const getPosition = (i) => {
    if (options.length === 1) return "only";
    if (i === 0) return "first";
    if (i === options.length - 1) return "last";
    return "center";
  };
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className, style: { display: "inline-flex" }, children: options.map((opt, i) => /* @__PURE__ */ jsxRuntime.jsx(
    RadioButton,
    {
      value: opt.value,
      checked: value === opt.value,
      disabled: disabled || opt.disabled,
      size,
      btnStyle,
      position: getPosition(i),
      onChange: handleChange,
      children: opt.label
    },
    opt.value
  )) });
}
function Switch({
  checked: controlledChecked,
  defaultChecked = false,
  disabled = false,
  loading = false,
  size = "default",
  checkedChildren,
  unCheckedChildren,
  onChange,
  className = "",
  style
}) {
  const [checked, setChecked] = React20__default.default.useState(controlledChecked ?? defaultChecked);
  const [pressed, setPressed] = React20__default.default.useState(false);
  React20__default.default.useEffect(() => {
    if (controlledChecked !== void 0) setChecked(controlledChecked);
  }, [controlledChecked]);
  const handleClick = () => {
    if (disabled || loading) return;
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };
  const isDefault = size === "default";
  const trackW = isDefault ? 44 : 28;
  const trackH = isDefault ? 22 : 16;
  const thumbSize = isDefault ? 18 : 12;
  const thumbOffset = isDefault ? 2 : 2;
  const thumbTravel = trackW - thumbSize - thumbOffset * 2;
  const trackBg = disabled ? "rgba(0,0,0,0.25)" : checked ? "#1677ff" : "rgba(0,0,0,0.25)";
  const thumbScale = pressed && !disabled && !loading ? 1.1 : 1;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": checked,
      disabled,
      className,
      onClick: handleClick,
      onMouseDown: () => !disabled && !loading && setPressed(true),
      onMouseUp: () => setPressed(false),
      onMouseLeave: () => setPressed(false),
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        width: trackW,
        height: trackH,
        borderRadius: trackH / 2,
        backgroundColor: trackBg,
        border: "none",
        cursor: disabled || loading ? "not-allowed" : "pointer",
        padding: 0,
        transition: "background-color 0.2s",
        flexShrink: 0,
        ...style
      },
      children: [
        (checkedChildren || unCheckedChildren) && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              position: "absolute",
              left: checked ? thumbOffset + thumbSize + 4 : "auto",
              right: checked ? "auto" : thumbOffset + thumbSize + 4,
              color: "#fff",
              fontSize: isDefault ? "12px" : "10px",
              lineHeight: 1,
              transition: "all 0.2s",
              pointerEvents: "none",
              whiteSpace: "nowrap"
            },
            children: checked ? checkedChildren : unCheckedChildren
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              position: "absolute",
              left: checked ? thumbOffset + thumbTravel : thumbOffset,
              width: thumbSize,
              height: thumbSize,
              borderRadius: "50%",
              backgroundColor: "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              transition: "left 0.2s, transform 0.15s",
              transform: `scale(${thumbScale})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: loading && /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                style: {
                  width: thumbSize - 4,
                  height: thumbSize - 4,
                  border: "1.5px solid #1677ff",
                  borderTopColor: "transparent",
                  borderRadius: "50%",
                  animation: "spin 0.8s linear infinite",
                  display: "block"
                }
              }
            )
          }
        )
      ]
    }
  );
}
var alertTokens = {
  success: { bg: "#f6ffed", border: "#b7eb8f", iconColor: "#52c41a" },
  info: { bg: "#e6f4ff", border: "#91caff", iconColor: "#1677ff" },
  warning: { bg: "#fffbe6", border: "#ffe58f", iconColor: "#faad14" },
  error: { bg: "#fff2f0", border: "#ffccc7", iconColor: "#ff4d4f" }
};
function SuccessIcon2({ color }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: [
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "7", cy: "7", r: "7", fill: color }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3.5 7l2.5 2.5 4.5-4.5", stroke: "#fff", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function InfoIcon2({ color }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: [
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "7", cy: "7", r: "7", fill: color }),
    /* @__PURE__ */ jsxRuntime.jsx("rect", { x: "6.3", y: "6", width: "1.4", height: "4.5", rx: "0.7", fill: "#fff" }),
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "7", cy: "4.2", r: "0.8", fill: "#fff" })
  ] });
}
function WarningIcon2({ color }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: [
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 1L13.5 12H0.5L7 1z", fill: color }),
    /* @__PURE__ */ jsxRuntime.jsx("rect", { x: "6.3", y: "5.5", width: "1.4", height: "3.5", rx: "0.7", fill: "#fff" }),
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "7", cy: "10.5", r: "0.8", fill: "#fff" })
  ] });
}
function ErrorIcon2({ color }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: [
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "7", cy: "7", r: "7", fill: color }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4.5 4.5l5 5M9.5 4.5l-5 5", stroke: "#fff", strokeWidth: "1.4", strokeLinecap: "round" })
  ] });
}
function AlertIcon({ type }) {
  const { iconColor } = alertTokens[type];
  switch (type) {
    case "success":
      return /* @__PURE__ */ jsxRuntime.jsx(SuccessIcon2, { color: iconColor });
    case "info":
      return /* @__PURE__ */ jsxRuntime.jsx(InfoIcon2, { color: iconColor });
    case "warning":
      return /* @__PURE__ */ jsxRuntime.jsx(WarningIcon2, { color: iconColor });
    case "error":
      return /* @__PURE__ */ jsxRuntime.jsx(ErrorIcon2, { color: iconColor });
  }
}
function CloseIcon2() {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 2l8 8M10 2l-8 8", stroke: "rgba(0,0,0,0.45)", strokeWidth: "1.2", strokeLinecap: "round" }) });
}
function Alert({
  type = "info",
  message,
  description,
  banner = false,
  closable = false,
  showIcon = true,
  icon,
  onClose,
  className = "",
  style
}) {
  const [closed, setClosed] = React20__default.default.useState(false);
  if (closed) return null;
  const { bg, border } = alertTokens[type];
  const handleClose = () => {
    setClosed(true);
    onClose?.();
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className,
      role: "alert",
      style: {
        display: "flex",
        alignItems: description ? "flex-start" : "center",
        gap: "8px",
        padding: description ? "12px 16px" : "8px 16px",
        backgroundColor: bg,
        border: banner ? "none" : `1px solid ${border}`,
        borderRadius: banner ? 0 : "6px",
        fontFamily: '"Heebo", sans-serif',
        fontSize: "14px",
        lineHeight: "22px",
        color: "rgba(0,0,0,0.88)",
        ...style
      },
      children: [
        showIcon && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              marginTop: description ? "4px" : 0
            },
            children: icon ?? /* @__PURE__ */ jsxRuntime.jsx(AlertIcon, { type })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("span", { style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              style: {
                display: "block",
                fontWeight: description ? 600 : 400,
                fontSize: "14px",
                lineHeight: "22px"
              },
              children: message
            }
          ),
          description && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              style: {
                display: "block",
                fontSize: "14px",
                lineHeight: "22px",
                color: "rgba(0,0,0,0.65)",
                marginTop: "4px"
              },
              children: description
            }
          )
        ] }),
        closable && /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            type: "button",
            onClick: handleClose,
            style: {
              display: "flex",
              alignItems: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              flexShrink: 0,
              marginTop: description ? "2px" : 0
            },
            children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon2, {})
          }
        )
      ]
    }
  );
}
function ChevronLeft() {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "7", height: "12", viewBox: "0 0 7 12", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 1L1 6l5 5", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }) });
}
function ChevronRight() {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "7", height: "12", viewBox: "0 0 7 12", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M1 1l5 5-5 5", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }) });
}
function DotsIcon() {
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "rgba(0,0,0,0.45)", children: [
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "4", cy: "8", r: "1.2" }),
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "8", cy: "8", r: "1.2" }),
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "12", cy: "8", r: "1.2" })
  ] });
}
var PAGE_SIZES = [10, 20, 50, 100];
function getPageNumbers(current, totalPages) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const pages = [1];
  if (current > 3) pages.push("...");
  for (let i = Math.max(2, current - 1); i <= Math.min(totalPages - 1, current + 1); i++) {
    pages.push(i);
  }
  if (current < totalPages - 2) pages.push("...");
  pages.push(totalPages);
  return pages;
}
function Pagination({
  current: controlledCurrent,
  defaultCurrent = 1,
  total = 0,
  pageSize: controlledPageSize,
  defaultPageSize = 10,
  showSizeChanger = false,
  showQuickJumper = false,
  showTotal = false,
  disabled = false,
  mini = false,
  onChange,
  onShowSizeChange,
  className = "",
  style
}) {
  const [current, setCurrent] = React20__default.default.useState(controlledCurrent ?? defaultCurrent);
  const [pageSize, setPageSize] = React20__default.default.useState(controlledPageSize ?? defaultPageSize);
  const [jumperValue, setJumperValue] = React20__default.default.useState("");
  React20__default.default.useEffect(() => {
    if (controlledCurrent !== void 0) setCurrent(controlledCurrent);
  }, [controlledCurrent]);
  React20__default.default.useEffect(() => {
    if (controlledPageSize !== void 0) setPageSize(controlledPageSize);
  }, [controlledPageSize]);
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const gotoPage = (page) => {
    const clamped = Math.max(1, Math.min(totalPages, page));
    setCurrent(clamped);
    onChange?.(clamped, pageSize);
  };
  const itemH = mini ? 24 : 32;
  const fontSize2 = mini ? "12px" : "14px";
  const minW = mini ? 24 : 32;
  const itemStyle = (active, isDisabled) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: minW,
    height: itemH,
    padding: "0 6px",
    fontSize: fontSize2,
    fontFamily: '"Heebo", sans-serif',
    lineHeight: "1",
    border: `1px solid ${active ? "#1677ff" : "#d9d9d9"}`,
    borderRadius: "6px",
    backgroundColor: active ? "#1677ff" : "#fff",
    color: active ? "#fff" : isDisabled ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.88)",
    cursor: isDisabled ? "not-allowed" : "pointer",
    userSelect: "none",
    transition: "all 0.2s",
    flexShrink: 0
  });
  const pages = getPageNumbers(current, totalPages);
  const range = [
    (current - 1) * pageSize + 1,
    Math.min(current * pageSize, total)
  ];
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: '"Heebo", sans-serif',
        fontSize: fontSize2,
        ...style
      },
      children: [
        showTotal && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { color: "rgba(0,0,0,0.88)", whiteSpace: "nowrap" }, children: typeof showTotal === "function" ? showTotal(total, range) : `${range[0]}-${range[1]} \u05DE\u05EA\u05D5\u05DA ${total}` }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: itemStyle(false, disabled || current === 1),
            onClick: () => !disabled && current > 1 && gotoPage(current - 1),
            children: /* @__PURE__ */ jsxRuntime.jsx(ChevronLeft, {})
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("div", { style: { display: "inline-flex", alignItems: "center", gap: "4px" }, children: pages.map(
          (p, i) => p === "..." ? /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              style: { ...itemStyle(), border: "none", cursor: "default", color: "rgba(0,0,0,0.45)" },
              children: /* @__PURE__ */ jsxRuntime.jsx(DotsIcon, {})
            },
            `dots-${i}`
          ) : /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              style: itemStyle(p === current, disabled),
              onClick: () => !disabled && gotoPage(p),
              children: p
            },
            p
          )
        ) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: itemStyle(false, disabled || current === totalPages),
            onClick: () => !disabled && current < totalPages && gotoPage(current + 1),
            children: /* @__PURE__ */ jsxRuntime.jsx(ChevronRight, {})
          }
        ),
        showSizeChanger && /* @__PURE__ */ jsxRuntime.jsx(
          "select",
          {
            disabled,
            value: pageSize,
            onChange: (e) => {
              const s = Number(e.target.value);
              setPageSize(s);
              setCurrent(1);
              onShowSizeChange?.(1, s);
              onChange?.(1, s);
            },
            style: {
              height: itemH,
              padding: `0 ${mini ? 4 : 8}px`,
              fontSize: fontSize2,
              fontFamily: '"Heebo", sans-serif',
              border: "1px solid #d9d9d9",
              borderRadius: "6px",
              cursor: disabled ? "not-allowed" : "pointer",
              backgroundColor: "#fff",
              color: "rgba(0,0,0,0.88)"
            },
            children: PAGE_SIZES.map((s) => /* @__PURE__ */ jsxRuntime.jsxs("option", { value: s, children: [
              s,
              " / \u05E2\u05DE\u05D5\u05D3"
            ] }, s))
          }
        ),
        showQuickJumper && /* @__PURE__ */ jsxRuntime.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: "4px", fontSize: fontSize2, color: "rgba(0,0,0,0.88)" }, children: [
          "\u05E2\u05DE\u05D5\u05D3",
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              type: "text",
              value: jumperValue,
              disabled,
              onChange: (e) => setJumperValue(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter") {
                  const n = parseInt(jumperValue, 10);
                  if (!isNaN(n)) {
                    gotoPage(n);
                    setJumperValue("");
                  }
                }
              },
              style: {
                width: mini ? 40 : 50,
                height: itemH,
                padding: "0 6px",
                fontSize: fontSize2,
                fontFamily: '"Heebo", sans-serif',
                border: "1px solid #d9d9d9",
                borderRadius: "6px",
                textAlign: "center",
                outline: "none"
              }
            }
          )
        ] })
      ]
    }
  );
}
var statusTokens = {
  finish: { iconBg: "#1677ff", iconBorder: "#1677ff", iconColor: "#fff" },
  process: { iconBg: "#1677ff", iconBorder: "#1677ff", iconColor: "#fff" },
  wait: { iconBg: "#fff", iconBorder: "#d9d9d9", iconColor: "rgba(0,0,0,0.25)" },
  error: { iconBg: "#fff", iconBorder: "#ff4d4f", iconColor: "#ff4d4f" }
};
function CheckIcon() {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 6l3 3 5-5", stroke: "#fff", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function CloseIcon3() {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 2l6 6M8 2l-6 6", stroke: "#ff4d4f", strokeWidth: "1.3", strokeLinecap: "round" }) });
}
function StepNode({ item, index, stepStatus, size, isLast, direction, clickable, onClick }) {
  const [hovered, setHovered] = React20__default.default.useState(false);
  const t = statusTokens[stepStatus];
  const iconSize = size === "small" ? 24 : 32;
  const fontSize2 = size === "small" ? "12px" : "14px";
  const isHorizontal = direction === "horizontal";
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: isHorizontal ? "column" : "row",
        alignItems: isHorizontal ? "flex-start" : "flex-start",
        flex: isHorizontal && !isLast ? 1 : "none",
        cursor: clickable && !item.disabled ? "pointer" : "default",
        opacity: item.disabled ? 0.4 : 1
      },
      onMouseEnter: () => clickable && !item.disabled && setHovered(true),
      onMouseLeave: () => setHovered(false),
      onClick: () => clickable && !item.disabled && onClick?.(),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: isHorizontal ? "row" : "column",
              alignItems: "center",
              width: isHorizontal ? "100%" : "auto"
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    width: iconSize,
                    height: iconSize,
                    borderRadius: "50%",
                    border: `1px solid ${t.iconBorder}`,
                    backgroundColor: t.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.2s",
                    boxShadow: hovered && stepStatus === "process" ? "0 0 0 3px rgba(22,119,255,0.15)" : void 0
                  },
                  children: item.icon ? /* @__PURE__ */ jsxRuntime.jsx("span", { style: { display: "flex", alignItems: "center", color: t.iconColor, fontSize: iconSize * 0.5 }, children: item.icon }) : stepStatus === "finish" ? /* @__PURE__ */ jsxRuntime.jsx(CheckIcon, {}) : stepStatus === "error" ? /* @__PURE__ */ jsxRuntime.jsx(CloseIcon3, {}) : /* @__PURE__ */ jsxRuntime.jsx("span", { style: { fontSize: size === "small" ? "12px" : "14px", color: t.iconColor, fontFamily: '"Heebo", sans-serif', fontWeight: 600 }, children: index + 1 })
                }
              ),
              !isLast && /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    flex: 1,
                    backgroundColor: stepStatus === "finish" ? "#1677ff" : "#f0f0f0",
                    height: isHorizontal ? 1 : void 0,
                    width: isHorizontal ? void 0 : 1,
                    minHeight: isHorizontal ? void 0 : "24px",
                    margin: isHorizontal ? "0 8px" : "4px auto",
                    transition: "background-color 0.3s"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: {
              paddingTop: isHorizontal ? "8px" : "0",
              paddingLeft: isHorizontal ? "0" : "12px",
              marginTop: isHorizontal ? 0 : 0,
              minWidth: isHorizontal ? 0 : void 0,
              paddingBottom: !isLast && !isHorizontal ? "24px" : 0
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "baseline",
                    gap: "8px"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      "span",
                      {
                        style: {
                          fontSize: fontSize2,
                          lineHeight: size === "small" ? "20px" : "22px",
                          fontFamily: '"Heebo", sans-serif',
                          fontWeight: stepStatus === "process" ? 600 : 400,
                          color: stepStatus === "error" ? "#ff4d4f" : stepStatus === "wait" ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.88)"
                        },
                        children: item.title
                      }
                    ),
                    item.subTitle && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { fontSize: "12px", color: "rgba(0,0,0,0.45)", fontFamily: '"Heebo", sans-serif' }, children: item.subTitle })
                  ]
                }
              ),
              item.description && /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "rgba(0,0,0,0.45)",
                    fontFamily: '"Heebo", sans-serif',
                    marginTop: "4px"
                  },
                  children: item.description
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function Steps({
  current = 0,
  direction = "horizontal",
  size = "default",
  status = "process",
  items = [],
  onChange,
  className = "",
  style
}) {
  const getStepStatus = (index, item) => {
    if (item.status) return item.status;
    if (index < current) return "finish";
    if (index === current) return status;
    return "wait";
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className,
      style: {
        display: "flex",
        flexDirection: direction === "vertical" ? "column" : "row",
        alignItems: direction === "vertical" ? "stretch" : "flex-start",
        fontFamily: '"Heebo", sans-serif',
        ...style
      },
      children: items.map((item, i) => /* @__PURE__ */ jsxRuntime.jsx(
        StepNode,
        {
          item,
          index: i,
          stepStatus: getStepStatus(i, item),
          size,
          isLast: i === items.length - 1,
          direction,
          clickable: !!onChange,
          onClick: () => onChange?.(i)
        },
        i
      ))
    }
  );
}
var tabFontSize = {
  large: "16px",
  default: "14px",
  small: "14px"
};
var tabPadding = {
  large: "12px 16px",
  default: "8px 16px",
  small: "4px 16px"
};
function Tabs({
  activeKey: controlledActiveKey,
  defaultActiveKey,
  type = "line",
  size = "default",
  tabPosition = "top",
  items = [],
  onChange,
  onEdit,
  className = "",
  style
}) {
  const firstKey = items[0]?.key ?? "";
  const [activeKey, setActiveKey] = React20__default.default.useState(controlledActiveKey ?? defaultActiveKey ?? firstKey);
  React20__default.default.useEffect(() => {
    if (controlledActiveKey !== void 0) setActiveKey(controlledActiveKey);
  }, [controlledActiveKey]);
  const handleSelect = (key) => {
    setActiveKey(key);
    onChange?.(key);
  };
  const isVertical = tabPosition === "left" || tabPosition === "right";
  const isCard = type === "card";
  const navStyle = {
    display: "flex",
    flexDirection: isVertical ? "column" : "row",
    borderBottom: !isVertical && !isCard ? "1px solid #f0f0f0" : "none",
    borderRight: tabPosition === "left" && !isCard ? "1px solid #f0f0f0" : "none",
    borderLeft: tabPosition === "right" && !isCard ? "1px solid #f0f0f0" : "none",
    borderTop: tabPosition === "bottom" && !isCard ? "1px solid #f0f0f0" : "none",
    gap: isCard ? "2px" : "0",
    padding: isCard ? "4px 4px 0" : "0",
    backgroundColor: isCard ? "rgba(0,0,0,0.02)" : "transparent"
  };
  const activeContent = items.find((item) => item.key === activeKey);
  const wrapStyle = {
    display: "flex",
    flexDirection: tabPosition === "bottom" ? "column-reverse" : tabPosition === "left" ? "row" : tabPosition === "right" ? "row-reverse" : "column",
    fontFamily: '"Heebo", sans-serif',
    ...style
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className, style: wrapStyle, children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { style: navStyle, role: "tablist", children: items.map((item) => {
      const isActive = item.key === activeKey;
      return /* @__PURE__ */ jsxRuntime.jsx(
        TabNavItem,
        {
          item,
          active: isActive,
          type,
          size,
          tabPosition,
          fontSize: tabFontSize[size],
          padding: tabPadding[size],
          onSelect: handleSelect,
          onRemove: onEdit ? () => onEdit(item.key, "remove") : void 0
        },
        item.key
      );
    }) }),
    activeContent?.children !== void 0 && /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        role: "tabpanel",
        style: {
          padding: "16px 0",
          flex: 1,
          minWidth: 0
        },
        children: activeContent.children
      }
    )
  ] });
}
function TabNavItem({ item, active, type, tabPosition, fontSize: fontSize2, padding, onSelect, onRemove }) {
  const [hovered, setHovered] = React20__default.default.useState(false);
  const isCard = type === "card";
  const isVertical = tabPosition === "left" || tabPosition === "right";
  const lineIndicator = !isCard ? {
    borderBottom: !isVertical && active ? "2px solid #1677ff" : "2px solid transparent",
    borderRight: tabPosition === "left" && active ? "2px solid #1677ff" : tabPosition === "left" ? "2px solid transparent" : "none",
    borderLeft: tabPosition === "right" && active ? "2px solid #1677ff" : tabPosition === "right" ? "2px solid transparent" : "none",
    borderTop: tabPosition === "bottom" && active ? "2px solid #1677ff" : tabPosition === "bottom" ? "2px solid transparent" : "none"
  } : {};
  const cardStyle = isCard ? {
    border: `1px solid ${active ? "#f0f0f0" : "transparent"}`,
    borderBottom: active ? "1px solid #fff" : "1px solid transparent",
    borderRadius: "6px 6px 0 0",
    backgroundColor: active ? "#fff" : hovered ? "rgba(0,0,0,0.04)" : "transparent",
    marginBottom: active ? "-1px" : "0"
  } : {};
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      role: "tab",
      "aria-selected": active,
      onClick: () => !item.disabled && onSelect(item.key),
      onMouseEnter: () => !item.disabled && setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding,
        fontSize: fontSize2,
        lineHeight: "22px",
        fontFamily: '"Heebo", sans-serif',
        fontWeight: active ? 600 : 400,
        color: item.disabled ? "rgba(0,0,0,0.25)" : active ? "#1677ff" : hovered ? "#4096ff" : "rgba(0,0,0,0.88)",
        cursor: item.disabled ? "not-allowed" : "pointer",
        whiteSpace: "nowrap",
        transition: "color 0.15s",
        position: "relative",
        ...lineIndicator,
        ...cardStyle
      },
      children: [
        item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { display: "flex", alignItems: "center" }, children: item.icon }),
        item.label,
        item.closable && onRemove && /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            type: "button",
            onClick: (e) => {
              e.stopPropagation();
              onRemove();
            },
            style: {
              display: "flex",
              alignItems: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0 2px",
              color: "rgba(0,0,0,0.45)",
              fontSize: "10px",
              lineHeight: 1
            },
            children: "\u2715"
          }
        )
      ]
    }
  );
}
var statusColors = {
  success: "#52c41a",
  processing: "#1677ff",
  default: "rgba(0,0,0,0.25)",
  error: "#ff4d4f",
  warning: "#faad14"
};
function Badge({
  count,
  dot = false,
  status,
  color,
  text,
  showZero = false,
  overflowCount = 99,
  offset = [0, 0],
  children,
  className = "",
  style
}) {
  if (status && !children) {
    const dotColor2 = color ?? statusColors[status];
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "span",
      {
        className,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontFamily: '"Heebo", sans-serif',
          fontSize: "14px",
          lineHeight: "22px",
          ...style
        },
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              style: {
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: dotColor2,
                flexShrink: 0
              },
              children: status === "processing" && /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  style: {
                    display: "block",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundColor: dotColor2,
                    opacity: 0.5,
                    animation: "pulse 1.2s ease-in-out infinite"
                  }
                }
              )
            }
          ),
          text && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { color: "rgba(0,0,0,0.88)" }, children: text })
        ]
      }
    );
  }
  const showCount = count !== void 0 && (count > 0 || showZero);
  const displayCount = count !== void 0 && count > overflowCount ? `${overflowCount}+` : String(count ?? 0);
  const showDot = dot || status && children;
  const dotColor = color ?? (status ? statusColors[status] : "#ff4d4f");
  if (!children) {
    if (showCount) {
      return /* @__PURE__ */ jsxRuntime.jsx(
        "span",
        {
          className,
          style: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "20px",
            height: "20px",
            padding: "0 6px",
            backgroundColor: "#ff4d4f",
            borderRadius: "10px",
            fontSize: "12px",
            fontFamily: '"Heebo", sans-serif',
            color: "#fff",
            fontWeight: 400,
            lineHeight: "20px",
            ...style
          },
          children: displayCount
        }
      );
    }
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      className,
      style: { position: "relative", display: "inline-flex", ...style },
      children: [
        children,
        showDot && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              position: "absolute",
              top: offset[1],
              right: -offset[0],
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: dotColor,
              border: "2px solid #fff",
              transform: "translate(50%, -50%)"
            }
          }
        ),
        showCount && !dot && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              position: "absolute",
              top: offset[1],
              right: -offset[0],
              minWidth: "20px",
              height: "20px",
              padding: "0 6px",
              backgroundColor: "#ff4d4f",
              borderRadius: "10px",
              fontSize: "12px",
              fontFamily: '"Heebo", sans-serif',
              color: "#fff",
              lineHeight: "20px",
              textAlign: "center",
              border: "2px solid #fff",
              transform: "translate(50%, -50%)",
              whiteSpace: "nowrap"
            },
            children: displayCount
          }
        )
      ]
    }
  );
}
var sizeMap = {
  large: 40,
  default: 32,
  small: 24
};
function getPixelSize(size) {
  if (typeof size === "number") return size;
  return sizeMap[size];
}
function UserIcon({ size }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: size * 0.5, height: size * 0.5, viewBox: "0 0 20 20", fill: "currentColor", children: [
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "10", cy: "7", r: "4" }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 18c0-4.4 3.6-8 8-8s8 3.6 8 8", strokeLinecap: "round" })
  ] });
}
function Avatar({
  size = "default",
  shape = "circle",
  src,
  alt,
  icon,
  children,
  style,
  className = ""
}) {
  const [imgError, setImgError] = React20__default.default.useState(false);
  const px = getPixelSize(size);
  const radius = shape === "circle" ? "50%" : "6px";
  const fontSize2 = px <= 24 ? "12px" : px <= 32 ? "14px" : "18px";
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: px,
    height: px,
    borderRadius: radius,
    backgroundColor: "#1677ff",
    color: "#fff",
    fontSize: fontSize2,
    fontFamily: '"Heebo", sans-serif',
    fontWeight: 500,
    flexShrink: 0,
    overflow: "hidden",
    userSelect: "none",
    ...style
  };
  if (src && !imgError) {
    return /* @__PURE__ */ jsxRuntime.jsx("span", { className, style: baseStyle, children: /* @__PURE__ */ jsxRuntime.jsx(
      "img",
      {
        src,
        alt,
        onError: () => setImgError(true),
        style: { width: "100%", height: "100%", objectFit: "cover" }
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntime.jsx("span", { className, style: baseStyle, children: icon ?? children ?? /* @__PURE__ */ jsxRuntime.jsx(UserIcon, { size: px }) });
}
function AvatarGroup({
  maxCount,
  maxStyle,
  size = "default",
  shape = "circle",
  children,
  className = "",
  style
}) {
  const childArray = React20__default.default.Children.toArray(children);
  const px = getPixelSize(size);
  const overlapOffset = Math.round(px * 0.3);
  const visible = maxCount !== void 0 ? childArray.slice(0, maxCount) : childArray;
  const overflow = maxCount !== void 0 ? childArray.length - maxCount : 0;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        ...style
      },
      children: [
        visible.map((child, i) => /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              marginLeft: i === 0 ? 0 : -overlapOffset,
              zIndex: visible.length - i,
              position: "relative",
              display: "inline-flex",
              border: "2px solid #fff",
              borderRadius: shape === "circle" ? "50%" : "6px"
            },
            children: React20__default.default.isValidElement(child) ? React20__default.default.cloneElement(child, { size, shape }) : child
          },
          i
        )),
        overflow > 0 && /* @__PURE__ */ jsxRuntime.jsxs(
          "span",
          {
            style: {
              marginLeft: -overlapOffset,
              zIndex: 0,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: px,
              height: px,
              borderRadius: shape === "circle" ? "50%" : "6px",
              backgroundColor: "rgba(0,0,0,0.25)",
              color: "#fff",
              fontSize: px <= 24 ? "10px" : "12px",
              fontFamily: '"Heebo", sans-serif',
              border: "2px solid #fff",
              position: "relative",
              ...maxStyle
            },
            children: [
              "+",
              overflow
            ]
          }
        )
      ]
    }
  );
}
function BreadcrumbLink({
  item,
  isLast
}) {
  const [hovered, setHovered] = React20__default.default.useState(false);
  const isClickable = !isLast && !item.disabled && (item.href || item.onClick);
  const textStyle = {
    fontSize: "14px",
    lineHeight: "22px",
    fontFamily: '"Heebo", sans-serif',
    color: isLast ? "rgba(0,0,0,0.88)" : item.disabled ? "rgba(0,0,0,0.25)" : hovered ? "#4096ff" : "rgba(0,0,0,0.45)",
    cursor: isClickable ? "pointer" : "default",
    textDecoration: "none",
    transition: "color 0.15s",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px"
  };
  const content = /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { display: "flex", alignItems: "center", fontSize: "14px" }, children: item.icon }),
    item.title
  ] });
  if (item.href && !isLast && !item.disabled) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "a",
      {
        href: item.href,
        style: textStyle,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        onClick: item.onClick,
        children: content
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      style: textStyle,
      onMouseEnter: () => isClickable && setHovered(true),
      onMouseLeave: () => setHovered(false),
      onClick: isClickable ? item.onClick : void 0,
      children: content
    }
  );
}
function Breadcrumb({
  items = [],
  separator = "/",
  className = "",
  style
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    {
      "aria-label": "breadcrumb",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
        fontFamily: '"Heebo", sans-serif',
        ...style
      },
      children: items.map((item, i) => {
        const isLast = i === items.length - 1;
        return /* @__PURE__ */ jsxRuntime.jsxs(React20__default.default.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(BreadcrumbLink, { item, isLast }),
          !isLast && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              style: {
                fontSize: "14px",
                lineHeight: "22px",
                color: "rgba(0,0,0,0.45)",
                userSelect: "none"
              },
              children: separator
            }
          )
        ] }, i);
      })
    }
  );
}
var statusColors2 = {
  normal: "#1677ff",
  active: "#1677ff",
  success: "#52c41a",
  exception: "#ff4d4f"
};
function SuccessIcon3() {
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: [
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "6", cy: "6", r: "6", fill: "#52c41a" }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 6l2.5 2.5 4-4", stroke: "#fff", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function ErrorIcon3() {
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: [
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "6", cy: "6", r: "6", fill: "#ff4d4f" }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 4l4 4M8 4l-4 4", stroke: "#fff", strokeWidth: "1.3", strokeLinecap: "round" })
  ] });
}
function Progress({
  percent = 0,
  type = "line",
  status,
  showInfo = true,
  strokeColor,
  trailColor = "#f5f5f5",
  strokeWidth,
  size = "default",
  width = 120,
  format,
  className = "",
  style
}) {
  const resolvedStatus = status ?? (percent >= 100 ? "success" : "normal");
  const color = strokeColor ?? statusColors2[resolvedStatus];
  const clamped = Math.max(0, Math.min(100, percent));
  const defaultInfo = resolvedStatus === "success" ? /* @__PURE__ */ jsxRuntime.jsx(SuccessIcon3, {}) : resolvedStatus === "exception" ? /* @__PURE__ */ jsxRuntime.jsx(ErrorIcon3, {}) : `${clamped}%`;
  const info = format ? format(clamped) : defaultInfo;
  if (type === "line") {
    const trackH = strokeWidth ?? (size === "small" ? 6 : 8);
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className,
        style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          width: "100%",
          fontFamily: '"Heebo", sans-serif',
          ...style
        },
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              style: {
                flex: 1,
                height: trackH,
                backgroundColor: trailColor,
                borderRadius: trackH / 2,
                overflow: "hidden"
              },
              children: /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    height: "100%",
                    width: `${clamped}%`,
                    backgroundColor: color,
                    borderRadius: trackH / 2,
                    transition: "width 0.3s ease",
                    position: "relative",
                    overflow: resolvedStatus === "active" ? "hidden" : "visible"
                  }
                }
              )
            }
          ),
          showInfo && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              style: {
                fontSize: "14px",
                color: resolvedStatus === "exception" ? "#ff4d4f" : resolvedStatus === "success" ? "#52c41a" : "rgba(0,0,0,0.88)",
                minWidth: "38px",
                textAlign: "right",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "flex-end"
              },
              children: info
            }
          )
        ]
      }
    );
  }
  const svgSize = width;
  const sw = strokeWidth ?? 8;
  const r = (svgSize - sw) / 2;
  const cx = svgSize / 2;
  const cy = svgSize / 2;
  const isDashboard = type === "dashboard";
  const gapDeg = isDashboard ? 75 : 0;
  const fullArc = 360 - gapDeg;
  const circumference = Math.PI * 2 * r * fullArc / 360;
  const offset = circumference - clamped / 100 * circumference;
  const startAngle = isDashboard ? 90 + gapDeg / 2 : -90;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className,
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: svgSize,
        height: svgSize,
        fontFamily: '"Heebo", sans-serif',
        ...style
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: svgSize, height: svgSize, viewBox: `0 0 ${svgSize} ${svgSize}`, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "circle",
            {
              cx,
              cy,
              r,
              fill: "none",
              stroke: trailColor,
              strokeWidth: sw,
              strokeDasharray: `${circumference} ${Math.PI * 2 * r}`,
              strokeDashoffset: 0,
              strokeLinecap: "round",
              transform: `rotate(${startAngle} ${cx} ${cy})`
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "circle",
            {
              cx,
              cy,
              r,
              fill: "none",
              stroke: color,
              strokeWidth: sw,
              strokeDasharray: `${circumference} ${Math.PI * 2 * r}`,
              strokeDashoffset: offset,
              strokeLinecap: "round",
              transform: `rotate(${startAngle} ${cx} ${cy})`,
              style: { transition: "stroke-dashoffset 0.3s ease" }
            }
          )
        ] }),
        showInfo && /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: Math.max(12, svgSize * 0.16),
              color: resolvedStatus === "exception" ? "#ff4d4f" : resolvedStatus === "success" ? "#52c41a" : "rgba(0,0,0,0.88)"
            },
            children: info
          }
        )
      ]
    }
  );
}
var spinSizePx = {
  small: 16,
  default: 24,
  large: 40
};
function SpinIndicator({ size, color = "#1677ff" }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      style: {
        display: "inline-block",
        width: size,
        height: size,
        border: `${Math.max(2, size / 8)}px solid ${color}`,
        borderTopColor: "transparent",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
        flexShrink: 0
      }
    }
  );
}
function Spin({
  spinning = true,
  size = "default",
  tip,
  children,
  className = "",
  style
}) {
  const [active, setActive] = React20__default.default.useState(spinning);
  const px = spinSizePx[size];
  React20__default.default.useEffect(() => {
    setActive(spinning);
  }, [spinning]);
  if (!children) {
    if (!active) return null;
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className,
        style: {
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          ...style
        },
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(SpinIndicator, { size: px }),
          tip && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              style: {
                fontSize: "14px",
                lineHeight: "22px",
                fontFamily: '"Heebo", sans-serif',
                color: "rgba(0,0,0,0.88)"
              },
              children: tip
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className,
      style: {
        position: "relative",
        ...style
      },
      children: [
        children,
        active && /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: {
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              backgroundColor: "rgba(255,255,255,0.65)",
              zIndex: 10
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(SpinIndicator, { size: px }),
              tip && /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  style: {
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontFamily: '"Heebo", sans-serif',
                    color: "#1677ff"
                  },
                  children: tip
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function CloseIcon4() {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 3l10 10M13 3L3 13", stroke: "rgba(0,0,0,0.45)", strokeWidth: "1.3", strokeLinecap: "round" }) });
}
var sizeMap2 = {
  default: 378,
  large: 736
};
function Drawer({
  open = false,
  placement = "right",
  size = "default",
  width,
  height,
  title,
  footer,
  closable = true,
  maskClosable = true,
  mask = true,
  onClose,
  children,
  className = "",
  style,
  bodyStyle
}) {
  const isHorizontal = placement === "left" || placement === "right";
  const resolvedWidth = isHorizontal ? width ?? sizeMap2[size] : "100%";
  const resolvedHeight = !isHorizontal ? height ?? sizeMap2[size] : "100%";
  const translateFrom = {
    right: "translateX(100%)",
    left: "translateX(-100%)",
    top: "translateY(-100%)",
    bottom: "translateY(100%)"
  }[placement];
  const drawerStyle = {
    position: "fixed",
    [placement]: 0,
    top: placement === "left" || placement === "right" ? 0 : void 0,
    bottom: placement === "bottom" ? 0 : void 0,
    width: resolvedWidth,
    height: resolvedHeight,
    backgroundColor: "#fff",
    boxShadow: "-6px 0 16px rgba(0,0,0,0.08), -3px 0 6px rgba(0,0,0,0.04)",
    display: "flex",
    flexDirection: "column",
    zIndex: 1e3,
    transform: open ? "none" : translateFrom,
    transition: "transform 0.3s cubic-bezier(0.7,0.3,0.1,1)",
    fontFamily: '"Heebo", sans-serif',
    ...style
  };
  if (!open && !mask) return null;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    mask && /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        style: {
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.45)",
          zIndex: 999,
          opacity: open ? 1 : 0,
          transition: "opacity 0.3s",
          pointerEvents: open ? "auto" : "none"
        },
        onClick: () => maskClosable && onClose?.()
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className, style: drawerStyle, children: [
      (title || closable) && /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 24px",
            borderBottom: "1px solid #f0f0f0",
            flexShrink: 0
          },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                style: {
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: 600,
                  color: "rgba(0,0,0,0.88)"
                },
                children: title
              }
            ),
            closable && /* @__PURE__ */ jsxRuntime.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                style: {
                  display: "flex",
                  alignItems: "center",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                  borderRadius: "4px",
                  color: "rgba(0,0,0,0.45)"
                },
                children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon4, {})
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          style: {
            flex: 1,
            overflowY: "auto",
            padding: "24px",
            ...bodyStyle
          },
          children
        }
      ),
      footer && /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          style: {
            padding: "16px 24px",
            borderTop: "1px solid #f0f0f0",
            flexShrink: 0
          },
          children: footer
        }
      )
    ] })
  ] });
}
var typeColors = {
  success: { iconColor: "#52c41a" },
  info: { iconColor: "#1677ff" },
  warning: { iconColor: "#faad14" },
  error: { iconColor: "#ff4d4f" }
};
function TypeIcon({ type }) {
  const { iconColor } = typeColors[type];
  if (type === "success") {
    return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", children: [
      /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "11", cy: "11", r: "11", fill: iconColor }),
      /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5 11l4.5 4.5 8-8", stroke: "#fff", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" })
    ] });
  }
  if (type === "error") {
    return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", children: [
      /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "11", cy: "11", r: "11", fill: iconColor }),
      /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 7l8 8M15 7l-8 8", stroke: "#fff", strokeWidth: "1.8", strokeLinecap: "round" })
    ] });
  }
  if (type === "warning") {
    return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", children: [
      /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11 2L21 20H1L11 2z", fill: iconColor }),
      /* @__PURE__ */ jsxRuntime.jsx("rect", { x: "10.15", y: "8.5", width: "1.7", height: "5", rx: "0.85", fill: "#fff" }),
      /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "11", cy: "16", r: "1", fill: "#fff" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", children: [
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "11", cy: "11", r: "11", fill: iconColor }),
    /* @__PURE__ */ jsxRuntime.jsx("rect", { x: "10.15", y: "6", width: "1.7", height: "6", rx: "0.85", fill: "#fff" }),
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "11", cy: "15.5", r: "1", fill: "#fff" })
  ] });
}
function CloseIcon5() {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 2l8 8M10 2l-8 8", stroke: "rgba(0,0,0,0.45)", strokeWidth: "1.2", strokeLinecap: "round" }) });
}
function NotificationCard({ item, onClose }) {
  React20__default.default.useEffect(() => {
    if (item.duration === 0) return;
    const t = setTimeout(() => {
      onClose(item.key);
      item.onClose?.();
    }, (item.duration ?? 4.5) * 1e3);
    return () => clearTimeout(t);
  }, [item.key, item.duration]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      style: {
        display: "flex",
        gap: "12px",
        padding: "16px 24px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.08), 0 3px 6px rgba(0,0,0,0.04)",
        width: "384px",
        fontFamily: '"Heebo", sans-serif',
        position: "relative"
      },
      children: [
        item.type && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { flexShrink: 0, marginTop: "1px" }, children: item.icon ?? /* @__PURE__ */ jsxRuntime.jsx(TypeIcon, { type: item.type }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              style: {
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                color: "rgba(0,0,0,0.88)",
                paddingRight: item.closable !== false ? "24px" : 0
              },
              children: item.message
            }
          ),
          item.description && /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              style: {
                fontSize: "14px",
                lineHeight: "22px",
                color: "rgba(0,0,0,0.65)",
                marginTop: "8px"
              },
              children: item.description
            }
          ),
          item.btn && /* @__PURE__ */ jsxRuntime.jsx("div", { style: { marginTop: "16px" }, children: item.btn })
        ] }),
        item.closable !== false && /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              onClose(item.key);
              item.onClose?.();
            },
            style: {
              position: "absolute",
              top: "16px",
              right: "16px",
              display: "flex",
              alignItems: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "2px",
              color: "rgba(0,0,0,0.45)"
            },
            children: /* @__PURE__ */ jsxRuntime.jsx(CloseIcon5, {})
          }
        )
      ]
    }
  );
}
var placementStyle = {
  topRight: { top: 24, right: 24, alignItems: "flex-end" },
  topLeft: { top: 24, left: 24, alignItems: "flex-start" },
  bottomRight: { bottom: 24, right: 24, alignItems: "flex-end" },
  bottomLeft: { bottom: 24, left: 24, alignItems: "flex-start" }
};
function NotificationContainer({
  items = [],
  placement = "topRight",
  onClose,
  style
}) {
  const handleClose = (key) => {
    onClose?.(key);
  };
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      style: {
        position: "fixed",
        zIndex: 1100,
        display: "flex",
        flexDirection: placement.startsWith("top") ? "column" : "column-reverse",
        gap: "16px",
        pointerEvents: "none",
        ...placementStyle[placement],
        ...style
      },
      children: items.map((item) => /* @__PURE__ */ jsxRuntime.jsx("div", { style: { pointerEvents: "auto" }, children: /* @__PURE__ */ jsxRuntime.jsx(NotificationCard, { item, onClose: handleClose }) }, item.key))
    }
  );
}
function getTooltipPosition(placement) {
  const base = placement.replace("Left", "").replace("Right", "").replace("Top", "").replace("Bottom", "");
  const offset = 10;
  switch (base) {
    case "top":
      return { bottom: `calc(100% + ${offset}px)`, left: "50%", transform: "translateX(-50%)" };
    case "bottom":
      return { top: `calc(100% + ${offset}px)`, left: "50%", transform: "translateX(-50%)" };
    case "left":
      return { right: `calc(100% + ${offset}px)`, top: "50%", transform: "translateY(-50%)" };
    case "right":
      return { left: `calc(100% + ${offset}px)`, top: "50%", transform: "translateY(-50%)" };
  }
}
function getArrowStyle(placement, bg) {
  const base = placement.replace("Left", "").replace("Right", "").replace("Top", "").replace("Bottom", "");
  const size = 6;
  const common = {
    position: "absolute",
    width: 0,
    height: 0,
    border: `${size}px solid transparent`
  };
  switch (base) {
    case "top":
      return { ...common, top: "100%", left: "50%", transform: "translateX(-50%)", borderTopColor: bg, borderBottom: "none" };
    case "bottom":
      return { ...common, bottom: "100%", left: "50%", transform: "translateX(-50%)", borderBottomColor: bg, borderTop: "none" };
    case "left":
      return { ...common, left: "100%", top: "50%", transform: "translateY(-50%)", borderLeftColor: bg, borderRight: "none" };
    case "right":
      return { ...common, right: "100%", top: "50%", transform: "translateY(-50%)", borderRightColor: bg, borderLeft: "none" };
  }
}
function Tooltip({
  title,
  placement = "top",
  open: controlledOpen,
  defaultOpen = false,
  disabled = false,
  color = "#1f1f1f",
  children,
  className = "",
  style
}) {
  const [visible, setVisible] = React20__default.default.useState(controlledOpen ?? defaultOpen);
  React20__default.default.useEffect(() => {
    if (controlledOpen !== void 0) setVisible(controlledOpen);
  }, [controlledOpen]);
  if (!title || disabled) {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      className,
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        ...style
      },
      onMouseEnter: () => controlledOpen === void 0 && setVisible(true),
      onMouseLeave: () => controlledOpen === void 0 && setVisible(false),
      children: [
        children,
        visible && /* @__PURE__ */ jsxRuntime.jsxs(
          "span",
          {
            role: "tooltip",
            style: {
              position: "absolute",
              ...getTooltipPosition(placement),
              zIndex: 1070,
              backgroundColor: color,
              color: "#fff",
              fontSize: "14px",
              lineHeight: "22px",
              fontFamily: '"Heebo", sans-serif',
              padding: "6px 8px",
              borderRadius: "6px",
              whiteSpace: "pre-line",
              maxWidth: "320px",
              wordBreak: "break-word",
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
              pointerEvents: "none"
            },
            children: [
              title,
              /* @__PURE__ */ jsxRuntime.jsx("span", { style: getArrowStyle(placement, color) })
            ]
          }
        )
      ]
    }
  );
}
function Divider({
  type = "horizontal",
  orientation = "center",
  dashed = false,
  plain = false,
  children,
  className = "",
  style
}) {
  const lineColor = "#f0f0f0";
  const borderStyle = dashed ? "dashed" : "solid";
  if (type === "vertical") {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "span",
      {
        className,
        style: {
          display: "inline-block",
          width: "1px",
          height: "0.9em",
          backgroundColor: lineColor,
          margin: "0 8px",
          verticalAlign: "middle",
          ...style
        }
      }
    );
  }
  if (!children) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className,
        style: {
          borderTop: `1px ${borderStyle} ${lineColor}`,
          margin: "16px 0",
          ...style
        }
      }
    );
  }
  const leftFlex = orientation === "left" ? "0 0 5%" : orientation === "right" ? "1 1 auto" : "1 1 auto";
  const rightFlex = orientation === "right" ? "0 0 5%" : orientation === "left" ? "1 1 auto" : "1 1 auto";
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className,
      style: {
        display: "flex",
        alignItems: "center",
        margin: "16px 0",
        ...style
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              flex: leftFlex,
              borderTop: `1px ${borderStyle} ${lineColor}`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              padding: "0 16px",
              fontSize: plain ? "14px" : "14px",
              lineHeight: "22px",
              fontFamily: '"Heebo", sans-serif',
              fontWeight: plain ? 400 : 500,
              color: "rgba(0,0,0,0.88)",
              whiteSpace: "nowrap"
            },
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              flex: rightFlex,
              borderTop: `1px ${borderStyle} ${lineColor}`
            }
          }
        )
      ]
    }
  );
}
var heights = { small: 24, default: 32, large: 40 };
var fontSizes = { small: "12px", default: "14px", large: "16px" };
function ChevronDown2({ open }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      style: { transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none", flexShrink: 0 },
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 4l4 4 4-4", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function isGroup2(opt) {
  return "options" in opt;
}
function flatOptions(options) {
  return options.flatMap((o) => isGroup2(o) ? o.options : [o]);
}
function Select({
  value: controlledValue,
  defaultValue,
  placeholder = "\u05D1\u05D7\u05E8...",
  options = [],
  mode = "default",
  size = "default",
  status = "",
  variant = "outlined",
  disabled = false,
  allowClear = false,
  showSearch = false,
  loading = false,
  open: controlledOpen,
  onChange,
  onSearch,
  onDropdownVisibleChange,
  className = "",
  style,
  dropdownStyle
}) {
  const isMultiple = mode === "multiple" || mode === "tags";
  const initValue = controlledValue ?? defaultValue ?? (isMultiple ? [] : "");
  const [value, setValue] = React20__default.default.useState(initValue);
  const [open, setOpen] = React20__default.default.useState(controlledOpen ?? false);
  const [search, setSearch] = React20__default.default.useState("");
  const ref = React20__default.default.useRef(null);
  React20__default.default.useEffect(() => {
    if (controlledValue !== void 0) setValue(controlledValue);
  }, [controlledValue]);
  React20__default.default.useEffect(() => {
    if (controlledOpen !== void 0) setOpen(controlledOpen);
  }, [controlledOpen]);
  React20__default.default.useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        onDropdownVisibleChange?.(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const toggleOpen = () => {
    if (disabled) return;
    const next = !open;
    setOpen(next);
    onDropdownVisibleChange?.(next);
  };
  const selectOption = (optValue) => {
    if (isMultiple) {
      const arr = value;
      const next = arr.includes(optValue) ? arr.filter((v) => v !== optValue) : [...arr, optValue];
      setValue(next);
      onChange?.(next);
    } else {
      setValue(optValue);
      onChange?.(optValue);
      setOpen(false);
      onDropdownVisibleChange?.(false);
    }
    setSearch("");
  };
  const clear = (e) => {
    e.stopPropagation();
    const next = isMultiple ? [] : "";
    setValue(next);
    onChange?.(next);
  };
  const removeTag = (e, v) => {
    e.stopPropagation();
    const next = value.filter((x) => x !== v);
    setValue(next);
    onChange?.(next);
  };
  const flat = flatOptions(options);
  const labelOf = (v) => flat.find((o) => o.value === v)?.label ?? v;
  const filteredOptions = options.map((o) => {
    if (isGroup2(o)) {
      return { ...o, options: o.options.filter((opt) => !search || String(opt.label).toLowerCase().includes(search.toLowerCase())) };
    }
    return o;
  }).filter((o) => isGroup2(o) ? o.options.length > 0 : !search || String(o.label).toLowerCase().includes(search.toLowerCase()));
  const h = heights[size];
  const fs = fontSizes[size];
  const borderColor = status === "error" ? "#ff4d4f" : status === "warning" ? "#faad14" : open ? "#1677ff" : "#d9d9d9";
  const bg = variant === "filled" ? "rgba(0,0,0,0.04)" : "#fff";
  const border = variant === "borderless" ? "none" : `1px solid ${borderColor}`;
  const isEmpty = isMultiple ? value.length === 0 : !value;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      ref,
      className,
      style: {
        position: "relative",
        display: "inline-flex",
        width: "100%",
        ...style
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            onClick: toggleOpen,
            style: {
              display: "flex",
              alignItems: "center",
              minHeight: h,
              padding: isMultiple ? "2px 8px" : `0 ${size === "small" ? 7 : 11}px`,
              gap: "4px",
              border,
              borderRadius: "6px",
              backgroundColor: disabled ? "rgba(0,0,0,0.04)" : bg,
              cursor: disabled ? "not-allowed" : "pointer",
              width: "100%",
              flexWrap: isMultiple ? "wrap" : "nowrap",
              boxShadow: open && variant !== "borderless" ? "0 0 0 2px rgba(22,119,255,0.2)" : void 0,
              transition: "all 0.2s"
            },
            children: [
              isMultiple && value.map((v) => /* @__PURE__ */ jsxRuntime.jsxs(
                "span",
                {
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    height: h - 8,
                    padding: "0 6px",
                    backgroundColor: "rgba(0,0,0,0.06)",
                    borderRadius: "4px",
                    fontSize: fs,
                    fontFamily: '"Heebo", sans-serif',
                    color: "rgba(0,0,0,0.88)"
                  },
                  children: [
                    labelOf(v),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      "span",
                      {
                        onClick: (e) => removeTag(e, v),
                        style: { cursor: "pointer", display: "flex", alignItems: "center", opacity: 0.7 },
                        children: "\u2715"
                      }
                    )
                  ]
                },
                v
              )),
              showSearch && open ? /* @__PURE__ */ jsxRuntime.jsx(
                "input",
                {
                  autoFocus: true,
                  value: search,
                  onChange: (e) => {
                    setSearch(e.target.value);
                    onSearch?.(e.target.value);
                  },
                  style: {
                    flex: 1,
                    border: "none",
                    outline: "none",
                    fontSize: fs,
                    fontFamily: '"Heebo", sans-serif',
                    background: "transparent",
                    color: "rgba(0,0,0,0.88)",
                    minWidth: "40px"
                  }
                }
              ) : /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  style: {
                    flex: 1,
                    fontSize: fs,
                    fontFamily: '"Heebo", sans-serif',
                    color: isEmpty ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.88)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: isMultiple ? value.length === 0 && placeholder : value ? labelOf(value) : placeholder
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs("span", { style: { display: "flex", alignItems: "center", gap: "4px", color: "rgba(0,0,0,0.25)", flexShrink: 0 }, children: [
                allowClear && !isEmpty && !disabled && /* @__PURE__ */ jsxRuntime.jsx("span", { onClick: clear, style: { cursor: "pointer", display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor", children: [
                  /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "6", cy: "6", r: "6" }),
                  /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4 4l4 4M8 4l-4 4", stroke: "#fff", strokeWidth: "1.2", strokeLinecap: "round" })
                ] }) }),
                loading ? /* @__PURE__ */ jsxRuntime.jsx("span", { style: { width: 12, height: 12, border: "1.5px solid #1677ff", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite", display: "inline-block" } }) : /* @__PURE__ */ jsxRuntime.jsx(ChevronDown2, { open })
              ] })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: `calc(100% + 4px)`,
              left: 0,
              right: 0,
              zIndex: 1050,
              backgroundColor: "#fff",
              border: "1px solid #f0f0f0",
              borderRadius: "8px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
              maxHeight: "256px",
              overflowY: "auto",
              padding: "4px 0",
              ...dropdownStyle
            },
            children: filteredOptions.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx("div", { style: { padding: "8px 12px", color: "rgba(0,0,0,0.25)", fontSize: fs, fontFamily: '"Heebo", sans-serif', textAlign: "center" }, children: "\u05D0\u05D9\u05DF \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA" }) : filteredOptions.map(
              (o, gi) => isGroup2(o) ? /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntime.jsx("div", { style: { padding: "5px 12px", fontSize: "12px", color: "rgba(0,0,0,0.45)", fontFamily: '"Heebo", sans-serif', fontWeight: 600 }, children: o.label }),
                o.options.map((opt) => /* @__PURE__ */ jsxRuntime.jsx(
                  SelectOptionItem,
                  {
                    opt,
                    selected: isMultiple ? value.includes(opt.value) : value === opt.value,
                    fontSize: fs,
                    height: h,
                    onSelect: selectOption
                  },
                  opt.value
                ))
              ] }, gi) : /* @__PURE__ */ jsxRuntime.jsx(
                SelectOptionItem,
                {
                  opt: o,
                  selected: isMultiple ? value.includes(o.value) : value === o.value,
                  fontSize: fs,
                  height: h,
                  onSelect: selectOption
                },
                o.value
              )
            )
          }
        )
      ]
    }
  );
}
function SelectOptionItem({ opt, selected, fontSize: fontSize2, height, onSelect }) {
  const [hovered, setHovered] = React20__default.default.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      onMouseEnter: () => !opt.disabled && setHovered(true),
      onMouseLeave: () => setHovered(false),
      onClick: () => !opt.disabled && onSelect(opt.value),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: height,
        padding: `4px 12px`,
        fontSize: fontSize2,
        fontFamily: '"Heebo", sans-serif',
        color: opt.disabled ? "rgba(0,0,0,0.25)" : selected ? "#1677ff" : "rgba(0,0,0,0.88)",
        backgroundColor: selected ? "#e6f4ff" : hovered ? "rgba(0,0,0,0.04)" : "transparent",
        cursor: opt.disabled ? "not-allowed" : "pointer",
        fontWeight: selected ? 600 : 400,
        transition: "background-color 0.15s"
      },
      children: [
        opt.label,
        selected && /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 6l3 3 5-5", stroke: "#1677ff", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
      ]
    }
  );
}
var heights2 = { large: 40, default: 32, small: 24 };
var fontSizes2 = { large: "16px", default: "14px", small: "12px" };
var paddings = { large: "0 14px", default: "0 11px", small: "0 7px" };
function normalizeOption(opt) {
  if (typeof opt === "string") return { label: opt, value: opt };
  return opt;
}
function Segmented({
  value: controlledValue,
  defaultValue,
  options = [],
  size = "default",
  disabled = false,
  block = false,
  onChange,
  className = "",
  style
}) {
  const normalized = options.map(normalizeOption);
  const firstVal = normalized[0]?.value ?? "";
  const [value, setValue] = React20__default.default.useState(controlledValue ?? defaultValue ?? firstVal);
  React20__default.default.useEffect(() => {
    if (controlledValue !== void 0) setValue(controlledValue);
  }, [controlledValue]);
  const handleSelect = (v) => {
    setValue(v);
    onChange?.(v);
  };
  const h = heights2[size];
  const fs = fontSizes2[size];
  const pad = paddings[size];
  const trackPad = 2;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className,
      style: {
        display: block ? "flex" : "inline-flex",
        padding: `${trackPad}px`,
        backgroundColor: "rgba(0,0,0,0.04)",
        borderRadius: "8px",
        gap: "2px",
        ...style
      },
      children: normalized.map((opt) => {
        const isActive = opt.value === value;
        const isDisabled = disabled || opt.disabled;
        return /* @__PURE__ */ jsxRuntime.jsx(
          SegmentedItem,
          {
            opt,
            active: isActive,
            disabled: isDisabled,
            height: h - trackPad * 2,
            fontSize: fs,
            padding: pad,
            block,
            onSelect: handleSelect
          },
          opt.value
        );
      })
    }
  );
}
function SegmentedItem({ opt, active, disabled, height, fontSize: fontSize2, padding, block, onSelect }) {
  const [hovered, setHovered] = React20__default.default.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      onClick: () => !disabled && onSelect(opt.value),
      onMouseEnter: () => !disabled && setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        flex: block ? 1 : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
        height,
        padding,
        fontSize: fontSize2,
        fontFamily: '"Heebo", sans-serif',
        fontWeight: active ? 600 : 400,
        color: disabled ? "rgba(0,0,0,0.25)" : active ? "rgba(0,0,0,0.88)" : hovered ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0.65)",
        backgroundColor: active ? "#fff" : hovered && !disabled ? "rgba(0,0,0,0.06)" : "transparent",
        borderRadius: "6px",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.2s",
        whiteSpace: "nowrap",
        boxShadow: active ? "0 1px 2px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.06)" : "none"
      },
      children: [
        opt.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { display: "flex", alignItems: "center" }, children: opt.icon }),
        opt.label
      ]
    }
  );
}
function DefaultImage() {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "64", height: "41", viewBox: "0 0 64 41", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntime.jsxs("g", { transform: "translate(0 1)", fill: "none", fillRule: "evenodd", children: [
    /* @__PURE__ */ jsxRuntime.jsx("ellipse", { fill: "#f5f5f5", cx: "32", cy: "33", rx: "32", ry: "7" }),
    /* @__PURE__ */ jsxRuntime.jsxs("g", { fillRule: "nonzero", stroke: "#d9d9d9", children: [
      /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
          fill: "#fafafa"
        }
      )
    ] })
  ] }) });
}
function SimpleImage() {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "64", height: "41", viewBox: "0 0 64 41", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntime.jsxs("g", { transform: "translate(0 1)", fill: "none", fillRule: "evenodd", children: [
    /* @__PURE__ */ jsxRuntime.jsx("ellipse", { fill: "#f5f5f5", cx: "32", cy: "33", rx: "32", ry: "7" }),
    /* @__PURE__ */ jsxRuntime.jsx("g", { fillRule: "nonzero", stroke: "#d9d9d9", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z", fill: "#f5f5f5" }) })
  ] }) });
}
var EMPTY_IMAGE_DEFAULT = "default";
var EMPTY_IMAGE_SIMPLE = "simple";
function Empty({
  image = "default",
  imageStyle,
  description = "\u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD",
  children,
  className = "",
  style
}) {
  const renderImage = () => {
    if (image === "default") return /* @__PURE__ */ jsxRuntime.jsx(DefaultImage, {});
    if (image === "simple") return /* @__PURE__ */ jsxRuntime.jsx(SimpleImage, {});
    if (image === null || image === false) return null;
    return image;
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 8px",
        fontFamily: '"Heebo", sans-serif',
        ...style
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { style: { marginBottom: "8px", ...imageStyle }, children: renderImage() }),
        description !== false && description !== null && /* @__PURE__ */ jsxRuntime.jsx(
          "p",
          {
            style: {
              margin: "0 0 8px 0",
              fontSize: "14px",
              lineHeight: "22px",
              color: "rgba(0,0,0,0.25)"
            },
            children: description
          }
        ),
        children
      ]
    }
  );
}
var shimmer = {
  background: "linear-gradient(90deg, #f5f5f5 25%, #ebebeb 37%, #f5f5f5 63%)",
  backgroundSize: "400% 100%",
  animation: "skeleton-shimmer 1.4s ease infinite",
  borderRadius: "4px"
};
var avatarSizes = {
  large: 40,
  default: 32,
  small: 24
};
function SkeletonAvatar({ size = "default", shape = "circle", style }) {
  const px = typeof size === "number" ? size : avatarSizes[size];
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      style: {
        ...shimmer,
        display: "inline-block",
        width: px,
        height: px,
        borderRadius: shape === "circle" ? "50%" : "6px",
        flexShrink: 0,
        ...style
      }
    }
  );
}
var inputHeights = {
  large: 40,
  default: 32,
  small: 24
};
function SkeletonInput({ size = "default", block = false, style }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      style: {
        ...shimmer,
        display: "inline-block",
        width: block ? "100%" : "160px",
        height: inputHeights[size],
        borderRadius: "6px",
        ...style
      }
    }
  );
}
var buttonHeights = {
  large: 40,
  default: 32,
  small: 24
};
function SkeletonButton({ size = "default", block = false, shape = "default", style }) {
  const h = buttonHeights[size];
  const radius = shape === "circle" ? "50%" : shape === "round" ? h / 2 : "6px";
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      style: {
        ...shimmer,
        display: "inline-block",
        width: block ? "100%" : shape === "circle" ? h : "96px",
        height: h,
        borderRadius: radius,
        ...style
      }
    }
  );
}
function SkeletonImage({ style }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      style: {
        ...shimmer,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "96px",
        height: "96px",
        borderRadius: "8px",
        ...style
      },
      children: /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ jsxRuntime.jsx("rect", { width: "40", height: "40", rx: "4", fill: "rgba(0,0,0,0.08)" }),
        /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "15", cy: "15", r: "4", fill: "rgba(0,0,0,0.15)" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 32l9-12 6 8 4-5 9 9", fill: "rgba(0,0,0,0.1)" })
      ] })
    }
  );
}
function Skeleton({
  loading = true,
  avatar,
  title = true,
  paragraph = true,
  children,
  className = "",
  style
}) {
  if (!loading) return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children });
  const showAvatar = !!avatar;
  const avatarProps = typeof avatar === "object" ? avatar : {};
  const titleWidth = typeof title === "object" ? title.width ?? "40%" : "40%";
  const rows = typeof paragraph === "object" ? paragraph.rows ?? 3 : 3;
  const rowWidths = typeof paragraph === "object" && paragraph.width ? paragraph.width : ["100%", "100%", "72%"];
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className,
      style: {
        display: "flex",
        gap: "16px",
        fontFamily: '"Heebo", sans-serif',
        ...style
      },
      children: [
        showAvatar && /* @__PURE__ */ jsxRuntime.jsx(SkeletonAvatar, { size: "large", shape: "circle", ...avatarProps }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
          title !== false && /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              style: {
                ...shimmer,
                height: "16px",
                width: titleWidth,
                marginBottom: "16px",
                borderRadius: "4px"
              }
            }
          ),
          paragraph !== false && /* @__PURE__ */ jsxRuntime.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "8px" }, children: Array.from({ length: rows }).map((_, i) => /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              style: {
                ...shimmer,
                height: "16px",
                width: rowWidths[i] ?? "100%",
                borderRadius: "4px"
              }
            },
            i
          )) })
        ] })
      ]
    }
  );
}
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function EyeIcon({ open }) {
  return open ? /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z", stroke: "rgba(0,0,0,0.45)", strokeWidth: "1.2", strokeLinecap: "round" }),
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "8", cy: "8", r: "2", stroke: "rgba(0,0,0,0.45)", strokeWidth: "1.2" })
  ] }) : /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M1 1l14 14M6.5 6.6A2 2 0 0010.4 9.5M4.3 4.4C2.5 5.6 1 8 1 8s2.5 5 7 5a7.2 7.2 0 003.7-1M6.8 3.1A7 7 0 0115 8s-.9 1.8-2.3 3", stroke: "rgba(0,0,0,0.45)", strokeWidth: "1.2", strokeLinecap: "round" }) });
}
function LockIcon() {
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "24", cy: "24", r: "24", fill: "#fff2f0" }),
    /* @__PURE__ */ jsxRuntime.jsx("rect", { x: "14", y: "22", width: "20", height: "14", rx: "3", fill: "#ff4d4f", opacity: "0.15", stroke: "#ff4d4f", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 22v-5a6 6 0 0112 0v5", stroke: "#ff4d4f", strokeWidth: "1.5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "24", cy: "29", r: "2", fill: "#ff4d4f" })
  ] });
}
function SuccessIcon4() {
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "64", height: "64", viewBox: "0 0 64 64", fill: "none", children: [
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "32", cy: "32", r: "32", fill: "#f6ffed" }),
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "32", cy: "32", r: "20", fill: "#52c41a", opacity: "0.15" }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20 32l9 9 15-15", stroke: "#52c41a", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function MailIcon() {
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
    /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "24", cy: "24", r: "24", fill: "#e6f4ff" }),
    /* @__PURE__ */ jsxRuntime.jsx("rect", { x: "12", y: "16", width: "24", height: "17", rx: "2", stroke: "#1677ff", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 19l12 8 12-8", stroke: "#1677ff", strokeWidth: "1.5", strokeLinecap: "round" })
  ] });
}
function LoginCard({ children, style }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }, children: [
    logoSrc ? /* @__PURE__ */ jsxRuntime.jsx("img", { src: logoSrc, alt: appName, style: { height: 48, objectFit: "contain" } }) : /* @__PURE__ */ jsxRuntime.jsx(
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
        children: /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", stroke: "#fff", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx("span", { style: { fontSize: "20px", fontWeight: 700, color: "rgba(0,0,0,0.88)", lineHeight: "28px" }, children: appName ?? "AestetiX" })
  ] });
}
function LoginForm({
  appName,
  logoSrc,
  onSuccess,
  externalState
}) {
  const [email, setEmail] = React20__default.default.useState("");
  const [password, setPassword] = React20__default.default.useState("");
  const [rememberMe, setRememberMe] = React20__default.default.useState(false);
  const [showPassword, setShowPassword] = React20__default.default.useState(false);
  const [state, setState] = React20__default.default.useState(externalState ?? "idle");
  const [attempts, setAttempts] = React20__default.default.useState(0);
  React20__default.default.useEffect(() => {
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
    return /* @__PURE__ */ jsxRuntime.jsx(LoginCard, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "8px 0" }, children: [
      /* @__PURE__ */ jsxRuntime.jsx(LockIcon, {}),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { style: { fontSize: "18px", fontWeight: 700, color: "rgba(0,0,0,0.88)", lineHeight: "26px" }, children: "\u05D4\u05D7\u05E9\u05D1\u05D5\u05DF \u05E0\u05E2\u05D5\u05DC \u05D6\u05DE\u05E0\u05D9\u05EA" }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { fontSize: "14px", color: "rgba(0,0,0,0.45)", marginTop: "8px", lineHeight: "22px" }, children: [
          "\u05D9\u05D5\u05EA\u05E8 \u05DE\u05D3\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05E0\u05D5\u05EA \u05DB\u05D5\u05E9\u05DC\u05D9\u05DD.",
          /* @__PURE__ */ jsxRuntime.jsx("br", {}),
          "\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1 \u05D1\u05E2\u05D5\u05D3 15 \u05D3\u05E7\u05D5\u05EA."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(Alert, { type: "error", message: "\u05D9\u05E9 \u05DC\u05D0\u05E4\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4 \u05D0\u05D5 \u05DC\u05E4\u05E0\u05D5\u05EA \u05DC\u05EA\u05DE\u05D9\u05DB\u05D4", showIcon: true }),
      /* @__PURE__ */ jsxRuntime.jsx(Button, { btnType: "default", block: true, onClick: () => {
        setState("forgot");
        setAttempts(0);
      }, children: "\u05D0\u05E4\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4" }),
      /* @__PURE__ */ jsxRuntime.jsx(Link, { onClick: () => {
        setState("idle");
        setAttempts(0);
        setEmail("");
        setPassword("");
      }, children: "\u05D7\u05D6\u05D5\u05E8 \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA" })
    ] }) });
  }
  if (state === "success") {
    return /* @__PURE__ */ jsxRuntime.jsx(LoginCard, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "16px 0" }, children: [
      /* @__PURE__ */ jsxRuntime.jsx(SuccessIcon4, {}),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { style: { fontSize: "18px", fontWeight: 700, color: "rgba(0,0,0,0.88)" }, children: "\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0!" }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { fontSize: "14px", color: "rgba(0,0,0,0.45)", marginTop: "6px" }, children: [
          "\u05DE\u05EA\u05D7\u05D1\u05E8 \u05DC-",
          appName ?? "AestetiX",
          "\u2026"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(Spin, { size: "small" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(LoginCard, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(LogoArea, { logoSrc, appName }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { style: { textAlign: "center", marginTop: "-8px" }, children: /* @__PURE__ */ jsxRuntime.jsx("div", { style: { fontSize: "14px", color: "rgba(0,0,0,0.45)", lineHeight: "22px" }, children: "\u05D4\u05EA\u05D7\u05D1\u05E8 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA" }) }),
    state === "error-wrong" && /* @__PURE__ */ jsxRuntime.jsx(
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
    /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { style: { fontSize: "14px", fontWeight: 500, color: "rgba(0,0,0,0.88)", lineHeight: "22px" }, children: "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC" }),
        /* @__PURE__ */ jsxRuntime.jsx(
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
        state === "error-empty" && !email && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { fontSize: "12px", color: "#ff4d4f", lineHeight: "20px" }, children: "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4" }),
        state === "error-email" && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { fontSize: "12px", color: "#ff4d4f", lineHeight: "20px" }, children: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ jsxRuntime.jsx("label", { style: { fontSize: "14px", fontWeight: 500, color: "rgba(0,0,0,0.88)", lineHeight: "22px" }, children: "\u05E1\u05D9\u05E1\u05DE\u05D4" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            Link,
            {
              style: { fontSize: "14px" },
              onClick: () => setState("forgot"),
              children: "\u05E9\u05DB\u05D7\u05EA \u05E1\u05D9\u05E1\u05DE\u05D4?"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
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
            suffix: /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                style: { cursor: "pointer", display: "flex", alignItems: "center", padding: "0 4px" },
                onClick: () => setShowPassword((v) => !v),
                children: /* @__PURE__ */ jsxRuntime.jsx(EyeIcon, { open: showPassword })
              }
            )
          }
        ),
        state === "error-empty" && !password && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { fontSize: "12px", color: "#ff4d4f", lineHeight: "20px" }, children: "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4" }),
        state === "error-wrong" && password && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { fontSize: "12px", color: "#ff4d4f", lineHeight: "20px" }, children: "\u05E1\u05D9\u05E1\u05DE\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4" })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Checkbox,
        {
          checked: rememberMe,
          onChange: setRememberMe,
          children: "\u05D6\u05DB\u05D5\u05E8 \u05D0\u05D5\u05EA\u05D9"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          btnType: "primary",
          size: "large",
          block: true,
          loading: state === "loading",
          onClick: handleSubmit,
          style: { marginTop: "4px" },
          children: state === "loading" ? "\u05DE\u05EA\u05D7\u05D1\u05E8\u2026" : "\u05D4\u05EA\u05D7\u05D1\u05E8"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(Divider, { plain: true, children: "\u05D0\u05D5" }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          btnType: "default",
          size: "large",
          block: true,
          icon: /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 18 18", children: [
            /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18z", fill: "#4285F4" }),
            /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17z", fill: "#34A853" }),
            /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z", fill: "#FBBC05" }),
            /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.48a4.77 4.77 0 014.48-3.3z", fill: "#EA4335" })
          ] }),
          children: "\u05D4\u05DE\u05E9\u05DA \u05E2\u05DD Google"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          btnType: "default",
          size: "large",
          block: true,
          icon: /* @__PURE__ */ jsxRuntime.jsx("svg", { width: "18", height: "18", viewBox: "0 0 18 18", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9 1a8 8 0 100 16A8 8 0 009 1zm3.9 5H11c-.3 0-.6.4-.6.9v1.1H13l-.3 2H10.4V15H8.3v-5H7V8h1.3V6.9C8.3 5.3 9.3 4 11 4h1.9v2z", fill: "#1877F2" }) }),
          children: "\u05D4\u05DE\u05E9\u05DA \u05E2\u05DD Facebook"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { textAlign: "center", fontSize: "14px", color: "rgba(0,0,0,0.45)", lineHeight: "22px" }, children: [
      "\u05D0\u05D9\u05DF \u05DC\u05DA \u05D7\u05E9\u05D1\u05D5\u05DF?",
      " ",
      /* @__PURE__ */ jsxRuntime.jsx(Link, { style: { fontSize: "14px" }, children: "\u05D4\u05E8\u05E9\u05DD \u05E2\u05DB\u05E9\u05D9\u05D5" })
    ] })
  ] });
}
function ForgotForm({ onBack }) {
  const [email, setEmail] = React20__default.default.useState("");
  const [sent, setSent] = React20__default.default.useState(false);
  const [loading, setLoading] = React20__default.default.useState(false);
  const [emailError, setEmailError] = React20__default.default.useState("");
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
    return /* @__PURE__ */ jsxRuntime.jsx(LoginCard, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "8px 0" }, children: [
      /* @__PURE__ */ jsxRuntime.jsx(MailIcon, {}),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { style: { fontSize: "18px", fontWeight: 700, color: "rgba(0,0,0,0.88)", lineHeight: "26px" }, children: "\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC" }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { fontSize: "14px", color: "rgba(0,0,0,0.45)", marginTop: "8px", lineHeight: "22px" }, children: [
          "\u05E9\u05DC\u05D7\u05E0\u05D5 \u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05D0\u05D9\u05E4\u05D5\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4 \u05DC\u05DB\u05EA\u05D5\u05D1\u05EA",
          /* @__PURE__ */ jsxRuntime.jsx("br", {}),
          /* @__PURE__ */ jsxRuntime.jsx("strong", { style: { color: "rgba(0,0,0,0.88)" }, children: email })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Alert,
        {
          type: "info",
          message: "\u05D4\u05E7\u05D9\u05E9\u05D5\u05E8 \u05D1\u05EA\u05D5\u05E7\u05E3 \u05DC-30 \u05D3\u05E7\u05D5\u05EA",
          showIcon: true
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(Button, { btnType: "primary", block: true, onClick: onBack, children: "\u05D7\u05D6\u05D5\u05E8 \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA" }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { fontSize: "14px", color: "rgba(0,0,0,0.45)" }, children: [
        "\u05DC\u05D0 \u05E7\u05D9\u05D1\u05DC\u05EA?",
        " ",
        /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsxs(LoginCard, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(LogoArea, { appName: "\u05E9\u05D7\u05D6\u05D5\u05E8 \u05E1\u05D9\u05E1\u05DE\u05D4" }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { style: { textAlign: "center", marginTop: "-8px" }, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { fontSize: "14px", color: "rgba(0,0,0,0.45)", lineHeight: "22px" }, children: [
      "\u05D4\u05D6\u05DF \u05D0\u05EA \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05E9\u05DC\u05DA \u05D5\u05E0\u05E9\u05DC\u05D7",
      /* @__PURE__ */ jsxRuntime.jsx("br", {}),
      "\u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05D0\u05D9\u05E4\u05D5\u05E1 \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4"
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
        /* @__PURE__ */ jsxRuntime.jsx("label", { style: { fontSize: "14px", fontWeight: 500, color: "rgba(0,0,0,0.88)", lineHeight: "22px" }, children: "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC" }),
        /* @__PURE__ */ jsxRuntime.jsx(
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
        emailError && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { fontSize: "12px", color: "#ff4d4f", lineHeight: "20px" }, children: emailError })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          btnType: "primary",
          size: "large",
          block: true,
          loading,
          onClick: handleSend,
          children: loading ? "\u05E9\u05D5\u05DC\u05D7\u2026" : "\u05E9\u05DC\u05D7 \u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05D0\u05D9\u05E4\u05D5\u05E1"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { style: { textAlign: "center" }, children: /* @__PURE__ */ jsxRuntime.jsx(Link, { onClick: onBack, style: { fontSize: "14px" }, children: "\u2190 \u05D7\u05D6\u05D5\u05E8 \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA" }) })
  ] });
}
function LoginPage({ onSuccess, logoSrc, appName, initialState }) {
  const [view, setView] = React20__default.default.useState("login");
  const [loginState, setLoginState] = React20__default.default.useState(initialState ?? "idle");
  return /* @__PURE__ */ jsxRuntime.jsx(
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
      children: view === "forgot" ? /* @__PURE__ */ jsxRuntime.jsx(ForgotForm, { onBack: () => {
        setView("login");
        setLoginState("idle");
      } }) : /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      style: {
        minHeight: "100vh",
        background: "#f0f2f5",
        padding: "40px 24px",
        fontFamily: '"Heebo", sans-serif',
        direction: "rtl"
      },
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { maxWidth: "1400px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { marginBottom: "32px", textAlign: "center" }, children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { style: { fontSize: "28px", fontWeight: 700, color: "rgba(0,0,0,0.88)", lineHeight: "36px" }, children: "Login Page \u2014 \u05DB\u05DC \u05D4-Use Cases" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { style: { fontSize: "16px", color: "rgba(0,0,0,0.45)", marginTop: "8px" }, children: "AestetiX 1.0 Design System" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))",
              gap: "32px",
              alignItems: "start"
            },
            children: [
              states.map(({ label, state }) => /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
                /* @__PURE__ */ jsxRuntime.jsx(
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
                /* @__PURE__ */ jsxRuntime.jsx("div", { style: { display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ jsxRuntime.jsx(LoginPageStatePreview, { state }) })
              ] }, state)),
              [
                { label: "9. \u05E9\u05DB\u05D7\u05EA \u05E1\u05D9\u05E1\u05DE\u05D4 (forgot)", isForgot: true, sent: false },
                { label: "10. \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05E0\u05E9\u05DC\u05D7 (forgot-sent)", isForgot: true, sent: true }
              ].map(({ label, isForgot, sent }) => /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
                /* @__PURE__ */ jsxRuntime.jsx(
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
                /* @__PURE__ */ jsxRuntime.jsx("div", { style: { display: "flex", justifyContent: "center" }, children: sent ? /* @__PURE__ */ jsxRuntime.jsx(ForgotSentPreview, {}) : /* @__PURE__ */ jsxRuntime.jsx(ForgotFormPreview, {}) })
              ] }, label))
            ]
          }
        )
      ] })
    }
  );
}
function LoginPageStatePreview({ state }) {
  return /* @__PURE__ */ jsxRuntime.jsx(LoginForm, { externalState: state });
}
function ForgotFormPreview() {
  return /* @__PURE__ */ jsxRuntime.jsx(ForgotForm, { onBack: () => {
  } });
}
function ForgotSentPreview() {
  const [, setSent] = React20__default.default.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsx(LoginCard, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "8px 0" }, children: [
    /* @__PURE__ */ jsxRuntime.jsx(MailIcon, {}),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { style: { fontSize: "18px", fontWeight: 700, color: "rgba(0,0,0,0.88)", lineHeight: "26px" }, children: "\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC" }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { fontSize: "14px", color: "rgba(0,0,0,0.45)", marginTop: "8px", lineHeight: "22px" }, children: [
        "\u05E9\u05DC\u05D7\u05E0\u05D5 \u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05D0\u05D9\u05E4\u05D5\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4 \u05DC\u05DB\u05EA\u05D5\u05D1\u05EA",
        /* @__PURE__ */ jsxRuntime.jsx("br", {}),
        /* @__PURE__ */ jsxRuntime.jsx("strong", { style: { color: "rgba(0,0,0,0.88)" }, children: "demo@aesthetix.com" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(Alert, { type: "info", message: "\u05D4\u05E7\u05D9\u05E9\u05D5\u05E8 \u05D1\u05EA\u05D5\u05E7\u05E3 \u05DC-30 \u05D3\u05E7\u05D5\u05EA", showIcon: true }),
    /* @__PURE__ */ jsxRuntime.jsx(Button, { btnType: "primary", block: true, children: "\u05D7\u05D6\u05D5\u05E8 \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA" }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { fontSize: "14px", color: "rgba(0,0,0,0.45)" }, children: [
      "\u05DC\u05D0 \u05E7\u05D9\u05D1\u05DC\u05EA? ",
      /* @__PURE__ */ jsxRuntime.jsx(Link, { style: { fontSize: "14px" }, onClick: () => setSent(false), children: "\u05E9\u05DC\u05D7 \u05E9\u05D5\u05D1" })
    ] })
  ] }) });
}
function Icon({
  icon: TablerIcon,
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className,
  style
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    TablerIcon,
    {
      size,
      color,
      stroke: strokeWidth,
      className,
      style
    }
  );
}
var SIZE_MAP = {
  sm: 16,
  md: 20,
  lg: 24
};
function resolveSize(s) {
  return typeof s === "number" ? s : SIZE_MAP[s];
}

exports.Alert = Alert;
exports.Avatar = Avatar;
exports.AvatarGroup = AvatarGroup;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.Button = Button;
exports.Checkbox = Checkbox;
exports.CheckboxGroup = CheckboxGroup;
exports.Code = Code;
exports.Divider = Divider;
exports.Drawer = Drawer;
exports.EMPTY_IMAGE_DEFAULT = EMPTY_IMAGE_DEFAULT;
exports.EMPTY_IMAGE_SIMPLE = EMPTY_IMAGE_SIMPLE;
exports.Empty = Empty;
exports.Icon = Icon;
exports.Input = Input;
exports.Link = Link;
exports.LoginPage = LoginPage;
exports.LoginPageGallery = LoginPageGallery;
exports.Menu = Menu;
exports.MenuTopNavigation = MenuTopNavigation;
exports.Modal = Modal;
exports.ModalConfirmation = ModalConfirmation;
exports.ModalInformation = ModalInformation;
exports.NotificationContainer = NotificationContainer;
exports.Pagination = Pagination;
exports.Paragraph = Paragraph;
exports.Progress = Progress;
exports.Radio = Radio;
exports.RadioButton = RadioButton;
exports.RadioGroup = RadioGroup;
exports.RadioGroupButtons = RadioGroupButtons;
exports.Segmented = Segmented;
exports.Select = Select;
exports.Skeleton = Skeleton;
exports.SkeletonAvatar = SkeletonAvatar;
exports.SkeletonButton = SkeletonButton;
exports.SkeletonImage = SkeletonImage;
exports.SkeletonInput = SkeletonInput;
exports.Spin = Spin;
exports.Steps = Steps;
exports.Switch = Switch;
exports.Table = Table;
exports.Tabs = Tabs;
exports.Tag = Tag;
exports.TagStatus = TagStatus;
exports.Text = Text;
exports.Title = Title;
exports.Tooltip = Tooltip;
exports.borderRadius = borderRadius;
exports.colorNeutral = colorNeutral;
exports.colorNeutralDark = colorNeutralDark;
exports.colorPrimary = colorPrimary;
exports.colorSemantic = colorSemantic;
exports.controlHeight = controlHeight;
exports.darkPalette = darkPalette;
exports.fontFamily = fontFamily;
exports.fontSize = fontSize;
exports.fontWeight = fontWeight;
exports.gray = gray;
exports.lineHeight = lineHeight;
exports.palette = palette;
exports.resolveSize = resolveSize;
exports.shadow = shadow;
exports.spacing = spacing;
exports.tokens = tokens;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map