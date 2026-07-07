import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { AestetiXProvider } from '../src/components/Provider/AestetiXProvider';

const preview: Preview = {
  decorators: [
    (Story) => (
      <AestetiXProvider>
        <div style={{ padding: '24px' }}>
          <Story />
        </div>
      </AestetiXProvider>
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
