// ─────────────────────────────────────────────────────────────────
//  AestetiX 1.0 — Design Tokens
//  Source of truth: Figma file RCuVh7mwSzjIrJ55tzGjM4
//  Extracted via Figma MCP get_variable_defs (2026-05-17)
// ─────────────────────────────────────────────────────────────────

// ── Typography ────────────────────────────────────────────────────
export const fontFamily = {
  base: '"Heebo", sans-serif',
} as const;

export const fontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
} as const;

export const fontSize = {
  sm: 12,       // Small
  base: 14,     // Base / Normal
  lg: 16,       // Large / Heading 5
  xl: 20,       // Extra Large / Heading 4
  h4: 20,       // Heading 4
  h3: 24,       // Heading 3
  h2: 30,       // Heading 2 (Ant Design standard)
  h1: 38,       // Heading 1
} as const;

export const lineHeight = {
  sm: 20,       // Small  12px
  base: 22,     // Base   14px
  lg: 24,       // Large  16px
  xl: 28,       // XL     20px
  h3: 32,       // H3     24px
  h2: 38,       // H2     30px
  h1: 46,       // H1     38px
} as const;

// ── Spacing / Padding ─────────────────────────────────────────────
export const spacing = {
  0: 0,
  xxs: 4,       // paddingXXS
  xs: 8,        // paddingXS
  sm: 12,       // paddingSM
  base: 16,     // padding
  lg: 24,       // paddingLG
  xl: 32,       // paddingXL
  xxl: 48,      // paddingXXL
} as const;

// ── Control Heights ───────────────────────────────────────────────
export const controlHeight = {
  sm: 24,       // controlHeightSM
  base: 32,     // controlHeight
  lg: 40,       // controlHeightLG
} as const;

// ── Border Radius ─────────────────────────────────────────────────
export const borderRadius = {
  sm: 4,        // borderRadiusSM
  base: 6,      // borderRadius
  lg: 8,        // borderRadiusLG / Corner/Small
} as const;

// ── Shadows ───────────────────────────────────────────────────────
export const shadow = {
  base: '0px 0px 6px rgba(0, 0, 0, 0.12)',    // DropShadowN&Y
  modal: '0px 0px 3px rgba(0, 0, 0, 0.12)',
} as const;

// ── Color — Primary ───────────────────────────────────────────────
export const colorPrimary = {
  bg: '#e6f4ff',        // colorPrimaryBG
  border: '#91caff',
  borderHover: '#69b1ff',
  hover: '#4096ff',     // colorPrimaryHover
  base: '#1677ff',      // colorPrimary
  active: '#0958d9',    // colorPrimaryActive
  textHover: '#4096ff',
  text: '#1677ff',
  textActive: '#0958d9',
} as const;

// ── Color — Neutral (Light mode) ──────────────────────────────────
export const colorNeutral = {
  bgLayout: '#f8f8f8',          // colorBgLayout
  bgContainer: '#ffffff',       // colorBgContainer (light)
  bgFloating: '#ffffff',        // colorBgFloating
  bgTooltip: 'rgba(0,0,0,0.875)',

  fill: 'rgba(0,0,0,0.15)',           // colorFill
  fillSecondary: 'rgba(0,0,0,0.06)',  // colorFillSecondary
  fillTertiary: 'rgba(0,0,0,0.04)',   // colorFillTertiary
  fillQuaternary: 'rgba(0,0,0,0.02)',

  border: '#d9d9d9',            // colorBorder (gray-5)
  borderSecondary: '#f0f0f0',   // colorBorderSecondary (gray-4)
  split: 'rgba(0,0,0,0.06)',    // colorSplit

  text: 'rgba(0,0,0,0.88)',           // colorText
  textSecondary: 'rgba(0,0,0,0.45)',  // colorTextDescription
  textLabel: 'rgba(0,0,0,0.65)',      // colorTextLabel
  textDisabled: 'rgba(0,0,0,0.25)',
  textSolid: '#ffffff',               // colorTextSolid
  textPlaceholder: 'rgba(0,0,0,0.25)',

  controlItemBgHover: 'rgba(0,0,0,0.04)',
} as const;

// ── Color — Neutral Dark mode ─────────────────────────────────────
export const colorNeutralDark = {
  bgLayout: '#141414',
  bgContainer: '#141414',
  bgFloating: '#1f1f1f',
  border: '#434343',
  borderSecondary: '#303030',
  text: 'rgba(255,255,255,0.85)',
  textSecondary: 'rgba(255,255,255,0.45)',
  textLabel: 'rgba(255,255,255,0.65)',
  textDisabled: 'rgba(255,255,255,0.25)',
  textSolid: '#ffffff',
} as const;

// ── Color — Semantic ──────────────────────────────────────────────
export const colorSemantic = {
  success: '#52c41a',
  successBg: '#f6ffed',
  successBorder: '#b7eb8f',
  successText: '#52c41a',
  successActive: '#389e0d',

  warning: '#faad14',
  warningBg: '#fffbe6',
  warningBorder: '#ffe58f',
  warningText: '#faad14',
  warningActive: '#d48806',

  error: '#ff4d4f',
  errorBg: '#fff1f0',
  errorBorder: '#ffa39e',
  errorText: '#ff4d4f',
  errorActive: '#d9363e',

  info: '#1677ff',
  infoBg: '#e6f4ff',
  infoBorder: '#91caff',
} as const;

// ── Color — Gray scale ────────────────────────────────────────────
export const gray = {
  1: '#ffffff',
  2: '#fafafa',
  3: '#f5f5f5',
  4: '#f0f0f0',
  5: '#d9d9d9',
  6: '#bfbfbf',
  7: '#8c8c8c',
  8: '#595959',
  9: '#434343',
  10: '#262626',
  11: '#1f1f1f',
  12: '#141414',
  13: '#000000',
} as const;

// ── Color Palettes — Full (10-step Ant Design system) ─────────────
// Light mode standard values; dark mode variants in darkPalette below

export const palette = {
  red:       ['#fff1f0','#ffccc7','#ffa39e','#ff7875','#ff4d4f','#f5222d','#cf1322','#a8071a','#820014','#5c0011'],
  volcano:   ['#fff2e8','#ffd8bf','#ffbb96','#ff9c6e','#ff7a45','#fa541c','#d4380d','#ad2102','#871400','#610b00'],
  orange:    ['#fff7e6','#ffe7ba','#ffd591','#ffc069','#ffa940','#fa8c16','#d46b08','#ad4e00','#873800','#612500'],
  gold:      ['#fffbe6','#fff1b8','#ffe58f','#ffd666','#ffc53d','#faad14','#d48806','#ad6800','#874d00','#613400'],
  yellow:    ['#feffe6','#ffffb8','#fffb8f','#fff566','#ffec3d','#fadb14','#d4b106','#ad8b00','#876800','#614700'],
  lime:      ['#fcffe6','#f4ffb8','#eaff8f','#d3f261','#bae637','#a0d911','#7cb305','#5c8a00','#3f6600','#254000'],
  green:     ['#f6ffed','#d9f7be','#b7eb8f','#95de64','#73d13d','#52c41a','#389e0d','#237804','#135200','#092b00'],
  cyan:      ['#e6fffb','#b5f5ec','#87e8de','#5cdbd3','#36cfc9','#13c2c2','#08979c','#006d75','#00474f','#002329'],
  blue:      ['#e6f4ff','#bae0ff','#91caff','#69b1ff','#4096ff','#1677ff','#0958d9','#003eb3','#002c8c','#001d66'],
  geekBlue:  ['#f0f5ff','#d6e4ff','#adc6ff','#85a5ff','#597ef7','#2f54eb','#1d39c4','#10239e','#061178','#030852'],
  purple:    ['#f9f0ff','#efdbff','#d3adf7','#b37feb','#9254de','#722ed1','#531dab','#391085','#22075e','#120338'],
  magenta:   ['#fff0f6','#ffd6e7','#ffadd2','#ff85c2','#f759ab','#eb2f96','#c41d7f','#9e1068','#780650','#520339'],
} as const;

// Dark mode color palettes (from Figma variable_defs)
export const darkPalette = {
  red:       ['#2a1215','#431418','#58181c','#791a1f','#a61d24','#d32029','#e84749','#f37370','#f89f9a','#fac8c3'],
  volcano:   ['#2b1611','#441d12','#592716','#7c3118','#aa3e19','#d84a1b','#e87040','#f3956a','#f8b692','#fad4bc'],
  orange:    ['#2b1d11','#442a11','#593815','#7c4a15','#aa6215','#d87a16','#e89a3c','#f3b765','#f8cf8d','#fae3b7'],
  gold:      ['#2b2111','#443111','#594214','#7c5914','#aa7714','#d89614','#e8b339','#f3cc62','#f8df8b','#faedb5'],
  yellow:    ['#2b2611','#443b11','#595014','#7c6e14','#aa9514','#d8bd14','#e8d639','#f3ea62','#f8f48b','#fafab5'],
  lime:      ['#1f2611','#2e3c10','#3e4f13','#536d13','#6f9412','#8bbb11','#a9d134','#c9e75d','#e4f88b','#f0fab5'],
  green:     ['#162312','#1d3712','#274916','#306317','#3c8618','#49aa19','#6abe39','#8fd460','#b2e58b','#d5f2bb'],
  cyan:      ['#112123','#113536','#144848','#146262','#138585','#13a8a8','#33bcb7','#58d1c9','#84e2d8','#b2f1e8'],
  blue:      ['#111a2c','#112545','#15325b','#15417e','#1554ad','#1668dc','#3c89e8','#65a9f3','#8dc5f8','#b7dcfa'],
  geekBlue:  ['#131629','#161d40','#1c2755','#203175','#263ea0','#2b4acb','#5273e0','#7f9ef3','#a8c1f8','#d2e0fa'],
  purple:    ['#1a1325','#24163a','#301c4d','#3e2069','#51258f','#642ab5','#854eca','#ab7ae0','#cda8f0','#ebd7fa'],
  magenta:   ['#291321','#40162f','#551c3b','#75204f','#a02669','#cb2b83','#e0529c','#f37fb7','#f8a8cc','#fad2e3'],
} as const;

// ── Aggregated token export ───────────────────────────────────────
export const tokens = {
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
  darkPalette,
} as const;

export type Tokens = typeof tokens;
