import React from 'react';
import { ConfigProvider } from 'antd';
import heIL from 'antd/locale/he_IL';
import { aesthetixTheme } from '../../theme';

export interface AestetiXProviderProps {
  children: React.ReactNode;
  direction?: 'rtl' | 'ltr';
  locale?: React.ComponentProps<typeof ConfigProvider>['locale'];
}

export const AestetiXProvider: React.FC<AestetiXProviderProps> = ({
  children,
  direction = 'rtl',
  locale = heIL,
}) => {
  return (
    <ConfigProvider theme={aesthetixTheme} direction={direction} locale={locale}>
      {children}
    </ConfigProvider>
  );
};
