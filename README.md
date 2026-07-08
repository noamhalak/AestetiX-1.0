# AestetiX UI

React component library — 29 components, TypeScript, RTL (Hebrew) support, Tabler Icons.

Based on Ant Design 5 patterns. Built for Israeli SaaS products.

**[📖 Storybook — צפה בכל הקומפוננטות](https://noamhalak.github.io/AestetiX-1.0/)**

---

## Installation

```bash
npm install @aesthetix/ui
# peer deps
npm install react react-dom @tabler/icons-react
```

---

## Quick Start

```tsx
import { Button, Input, Modal } from '@aesthetix/ui';

function App() {
  return (
    <div dir="rtl">
      <Button type="primary" size="default">שמור</Button>
      <Input placeholder="חפש…" status="default" />
    </div>
  );
}
```

---

## Components

| Component | Description |
|-----------|-------------|
| **Alert** | Success / info / warning / error alerts with optional banner and close |
| **Avatar** | User avatar with image fallback and AvatarGroup |
| **Badge** | Count badge, dot badge, status badge |
| **Breadcrumb** | Navigation trail with custom separators |
| **Button** | Primary, default, dashed, text, link — all sizes |
| **Checkbox** | Checkbox and CheckboxGroup with indeterminate support |
| **Divider** | Horizontal/vertical divider with optional label |
| **Drawer** | Side panel — right/left/top/bottom, two sizes |
| **Empty** | Empty state with default and simple illustrations |
| **Icon** | Wrapper for `@tabler/icons-react` with design-system defaults |
| **Input** | Text input — sizes, status, prefix/suffix, password toggle |
| **LoginPage** | Full login page with 10 use-cases (idle → success → forgot-password) |
| **Menu** | Sidebar and top navigation, grouped items, RTL-ready |
| **Modal** | Dialog, ModalInformation, ModalConfirmation |
| **Notification** | Toast notifications — 4 placements, auto-dismiss |
| **Pagination** | Page switcher with size changer and quick jumper |
| **Progress** | Line, circle, dashboard — with status colors |
| **Radio** | Radio, RadioGroup, RadioButton, RadioGroupButtons |
| **Segmented** | Segmented control (tab-bar style) |
| **Select** | Dropdown select — single, multiple, tags mode, searchable |
| **Skeleton** | Loading placeholders — text, avatar, button, image |
| **Spin** | Loading spinner with overlay |
| **Steps** | Step wizard — horizontal/vertical, sizes, statuses |
| **Switch** | Toggle switch — sizes, loading state |
| **Table** | Data table — sorting, custom cell renderers |
| **Tabs** | Tab bar — line/card type, 4 positions, sizes |
| **Tag** | Closable tag with 8 colors + status variant |
| **Tooltip** | 12 placement tooltip |
| **Typography** | Title (h1–h5), Text, Link, Code, Paragraph |

---

## Design Tokens

```ts
import { colors, spacing, typography, shadows, borderRadius } from '@aesthetix/ui';

colors.primary    // '#1677ff'
colors.success    // '#52c41a'
colors.warning    // '#faad14'
colors.error      // '#ff4d4f'
typography.fontFamily // "'Heebo', 'Inter', sans-serif"
```

---

## Icons

AestetiX uses [Tabler Icons](https://tabler.io/icons) (MIT).

```tsx
import { Icon } from '@aesthetix/ui';
import { IconHome, IconUsers, IconBell } from '@tabler/icons-react';

<Icon icon={IconHome} size={20} color="#1677ff" />
<Icon icon={IconUsers} size={16} />
```

---

## RTL Support

All components are built RTL-first. Set `dir="rtl"` on your root element:

```tsx
<html lang="he" dir="rtl">
```

---

## TypeScript

Full TypeScript support — every component exports its props type:

```ts
import type { ButtonProps, ButtonType, ButtonSize } from '@aesthetix/ui';
import type { InputProps, InputSize, InputStatus } from '@aesthetix/ui';
import type { ModalProps, ModalConfirmationProps } from '@aesthetix/ui';
```

---

## Build

```bash
npm run build      # output to dist/
npm run dev        # watch mode
npm run typecheck  # type-check without emitting
```

---

## License

MIT
