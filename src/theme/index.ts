import type { ThemeConfig } from 'antd';

export const aesthetixTheme: ThemeConfig = {
  token: {
    // Brand
    colorPrimary: '#1677ff',
    colorInfo: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',

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
    colorBgContainer: '#ffffff',
    colorBgLayout: '#f8f8f8',
    colorBgElevated: '#ffffff',
    colorBorder: '#d9d9d9',
    colorBorderSecondary: '#f0f0f0',
    colorText: 'rgba(0,0,0,0.88)',
    colorTextSecondary: 'rgba(0,0,0,0.45)',
    colorTextTertiary: 'rgba(0,0,0,0.25)',
    colorTextDisabled: 'rgba(0,0,0,0.25)',
    colorFill: 'rgba(0,0,0,0.15)',
    colorFillSecondary: 'rgba(0,0,0,0.06)',
    colorFillTertiary: 'rgba(0,0,0,0.04)',
    colorFillQuaternary: 'rgba(0,0,0,0.02)',

    // Shadows
    boxShadow: '0 1px 2px rgba(0,0,0,0.03), 0 1px 6px -1px rgba(0,0,0,0.02), 0 2px 4px rgba(0,0,0,0.02)',
    boxShadowSecondary: '0 6px 16px rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)',

    // Motion
    motionDurationFast: '0.1s',
    motionDurationMid: '0.2s',
    motionDurationSlow: '0.3s',
  },
  components: {
    Button: {
      primaryShadow: 'none',
      defaultShadow: 'none',
      dangerShadow: 'none',
    },
    Input: {
      activeShadow: '0 0 0 2px rgba(22,119,255,0.2)',
      errorActiveShadow: '0 0 0 2px rgba(255,77,79,0.2)',
      warningActiveShadow: '0 0 0 2px rgba(250,173,20,0.2)',
    },
    Select: {
      optionSelectedFontWeight: 500,
    },
    Table: {
      headerBg: '#fafafa',
      rowHoverBg: 'rgba(0,0,0,0.02)',
    },
    Menu: {
      itemHeight: 40,
      itemBorderRadius: 6,
      subMenuItemBorderRadius: 4,
    },
    Modal: {
      titleFontSize: 16,
    },
  },
};
