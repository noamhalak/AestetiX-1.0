import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { LoginPage, LoginPageGallery } from '../components/LoginPage/LoginPage';

const meta: Meta<typeof LoginPage> = {
  title: 'Components/LoginPage',
  component: LoginPage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    appName: { control: 'text', description: 'שם האפליקציה' },
    logoSrc: { control: 'text', description: 'כתובת לוגו' },
    initialState: {
      control: 'select',
      options: [
        'idle',
        'typing',
        'error-empty',
        'error-email',
        'error-wrong',
        'error-locked',
        'loading',
        'success',
        'forgot',
        'forgot-sent',
      ],
      description: 'מצב התחלתי (לדמו)',
    },
  },
  args: {
    appName: 'AestetiX',
    initialState: 'idle',
  },
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {};

export const WithCustomName: Story = {
  args: { appName: 'מערכת ניהול' },
};

export const ErrorEmpty: Story = {
  args: { initialState: 'error-empty' },
};

export const ErrorWrongCredentials: Story = {
  args: { initialState: 'error-wrong' },
};

export const ErrorLocked: Story = {
  args: { initialState: 'error-locked' },
};

export const Loading: Story = {
  args: { initialState: 'loading' },
};

export const Success: Story = {
  args: { initialState: 'success' },
};

export const ForgotPassword: Story = {
  args: { initialState: 'forgot' },
};

export const Gallery: Story = {
  render: () => <LoginPageGallery />,
  parameters: { controls: { disable: true } },
};
