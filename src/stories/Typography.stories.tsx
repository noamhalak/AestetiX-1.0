import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Title, Text, Link, Code, Paragraph } from '../components/Typography/Typography';

const meta: Meta<typeof Title> = {
  title: 'Components/Typography',
  component: Title,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', maxWidth: 700 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5],
      description: 'רמת הכותרת',
    },
    disabled: { control: 'boolean', description: 'מנוטרל' },
    children: { control: 'text', description: 'תוכן' },
  },
  args: {
    level: 1,
    children: 'כותרת ראשית',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {};

export const AllTitles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Title level={1}>כותרת H1 — 38px</Title>
      <Title level={2}>כותרת H2 — 30px</Title>
      <Title level={3}>כותרת H3 — 24px</Title>
      <Title level={4}>כותרת H4 — 20px</Title>
      <Title level={5}>כותרת H5 — 16px</Title>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllTextTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Text type="default">טקסט רגיל</Text>
      <Text type="secondary">טקסט משני</Text>
      <Text type="success">טקסט הצלחה</Text>
      <Text type="warning">טקסט אזהרה</Text>
      <Text type="error">טקסט שגיאה</Text>
      <Text type="disabled">טקסט מנוטרל</Text>
      <Text type="mark">טקסט מסומן</Text>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllTextStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Text textStyle="default">טקסט רגיל</Text>
      <Text textStyle="strong">טקסט מודגש</Text>
      <Text textStyle="medium">טקסט בינוני</Text>
      <Text textStyle="italic">טקסט נטוי</Text>
      <Text textStyle="underline">טקסט עם קו תחתי</Text>
      <Text textStyle="delete">טקסט חצוי</Text>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const AllTextSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Text size="extra-large">גודל ענק (20px)</Text>
      <Text size="large">גודל גדול (16px)</Text>
      <Text size="default">גודל רגיל (14px)</Text>
      <Text size="small">גודל קטן (12px)</Text>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const Links: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Link href="#">קישור רגיל</Link>
      <Link href="#" underlined>קישור עם קו תחתי</Link>
      <Link href="#" disabled>קישור מנוטרל</Link>
      <Link href="#" size="large">קישור גדול</Link>
      <Link href="#" size="small">קישור קטן</Link>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const CodeExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <p style={{ margin: 0, fontSize: 14 }}>
        השתמש ב-<Code>import React from 'react'</Code> כדי לייבא את React.
      </p>
      <p style={{ margin: 0, fontSize: 14 }}>
        ערך <Code>const x = 42</Code> הוא מספר שלם.
      </p>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const Paragraphs: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Paragraph>
        פסקה ראשונה: AestetiX היא מערכת עיצוב ישראלית המיועדת לפיתוח ממשקי משתמש בעברית. המערכת תומכת בכיוון RTL מלא ומשתמשת בגופן Heebo.
      </Paragraph>
      <Paragraph type="secondary">
        פסקה משנית: זוהי פסקה עם צבע משני, מתאימה לתוכן פחות חשוב או להערות.
      </Paragraph>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

export const RichContent: Story = {
  render: () => (
    <article style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Title level={2}>מדריך למפתחים</Title>
      <Paragraph>
        ברוך הבא למערכת AestetiX. כאן תמצא את כל הקומפוננטים הדרושים לבניית ממשק משתמש מלא בעברית.
      </Paragraph>
      <Title level={4}>התחלה מהירה</Title>
      <Paragraph>
        התקן את החבילה באמצעות <Code>npm install aesthetix-ui</Code> והתחל להשתמש בקומפוננטים.
      </Paragraph>
      <Paragraph type="secondary">
        לשאלות ותמיכה, <Link href="#">צור קשר עם הצוות</Link> שלנו.
      </Paragraph>
    </article>
  ),
  parameters: { controls: { disable: true } },
};
