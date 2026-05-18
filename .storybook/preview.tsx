import type { Preview } from '@storybook/react-vite';
import React from 'react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: "'Heebo', 'Inter', sans-serif", padding: '24px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'gray', value: '#f0f2f5' },
        { name: 'dark', value: '#141414' },
      ],
    },
  },
};

export default preview;
