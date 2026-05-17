import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Typography — AestetiX 1.0
//  Figma page: ❖ Typography - ✅ (node 4:9)
//
//  Components:
//    Title — level 1-5
//    Text  — type × style × size (4 × 6 × 4 = 96 combos)
//    Link  — underlined = true | false
//    Code
//
//  Font: Heebo (from variable_defs)
//  Sizes from Figma:
//    H1: 38/46  H2: 30/38  H3: 24/32  H4: 20/28  H5: 16/24
//    XL: 20/28  LG: 16/24  base: 14/22  SM: 12/20
// ─────────────────────────────────────────────────────────────────

// ── Title ─────────────────────────────────────────────────────────
export type TitleLevel = 1 | 2 | 3 | 4 | 5;

export interface TitleProps {
  level?: TitleLevel;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const titleStyles: Record<TitleLevel, { fontSize: string; lineHeight: string; weight: number }> = {
  1: { fontSize: '38px', lineHeight: '46px', weight: 600 },  // Figma: 38/46 w400, using 600 for heading
  2: { fontSize: '30px', lineHeight: '38px', weight: 600 },
  3: { fontSize: '24px', lineHeight: '32px', weight: 600 },  // Heading 3: 24/32
  4: { fontSize: '20px', lineHeight: '28px', weight: 600 },  // Heading 4: 20/28
  5: { fontSize: '16px', lineHeight: '24px', weight: 600 },  // Heading 5: 16/24
};

const titleTags: Record<TitleLevel, keyof React.JSX.IntrinsicElements> = {
  1: 'h1', 2: 'h2', 3: 'h3', 4: 'h4', 5: 'h5',
};

export function Title({ level = 1, children, className = '', style, disabled }: TitleProps) {
  const Tag = titleTags[level];
  const { fontSize, lineHeight, weight } = titleStyles[level];

  return (
    <Tag
      className={[
        "font-['Heebo',sans-serif]",
        'm-0',
        disabled ? 'text-neutral-text-disabled cursor-not-allowed' : 'text-neutral-text',
        className,
      ].join(' ')}
      style={{ fontSize, lineHeight, fontWeight: weight, ...style }}
    >
      {children}
    </Tag>
  );
}

// ── Text ──────────────────────────────────────────────────────────
export type TextType = 'default' | 'secondary' | 'success' | 'warning' | 'error' | 'disabled' | 'mark';
export type TextStyle = 'default' | 'underline' | 'delete' | 'italic' | 'strong' | 'medium';
export type TextSize = 'small' | 'default' | 'large' | 'extra-large';

export interface TextProps {
  type?: TextType;
  textStyle?: TextStyle;
  size?: TextSize;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const textColorMap: Record<TextType, string> = {
  default:   'text-neutral-text',
  secondary: 'text-neutral-text-secondary',
  success:   'text-success',
  warning:   'text-warning',
  error:     'text-error',
  disabled:  'text-neutral-text-disabled cursor-not-allowed',
  mark:      'bg-yellow-200 text-neutral-text',
};

const textSizeMap: Record<TextSize, { fontSize: string; lineHeight: string }> = {
  'small':       { fontSize: '12px', lineHeight: '20px' },
  'default':     { fontSize: '14px', lineHeight: '22px' },
  'large':       { fontSize: '16px', lineHeight: '24px' },
  'extra-large': { fontSize: '20px', lineHeight: '28px' },
};

export function Text({ type = 'default', textStyle = 'default', size = 'default', children, className = '', style }: TextProps) {
  const { fontSize, lineHeight } = textSizeMap[size];
  const colorClass = textColorMap[type];

  const fontWeight =
    textStyle === 'strong' ? 700 :
    textStyle === 'medium' ? 500 :
    400;

  const textDecoration =
    textStyle === 'underline' ? 'underline' :
    textStyle === 'delete'    ? 'line-through' :
    'none';

  const fontStyle = textStyle === 'italic' ? 'italic' : 'normal';

  const tag: keyof React.JSX.IntrinsicElements =
    textStyle === 'strong' ? 'strong' :
    textStyle === 'delete' ? 'del' :
    textStyle === 'italic' ? 'em' :
    type === 'mark'        ? 'mark' :
    'span';

  const Tag = tag;

  return (
    <Tag
      className={[
        "font-['Heebo',sans-serif]",
        colorClass,
        className,
      ].join(' ')}
      style={{ fontSize, lineHeight, fontWeight, textDecoration, fontStyle, ...style }}
    >
      {children}
    </Tag>
  );
}

// ── Link ──────────────────────────────────────────────────────────
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  underlined?: boolean;
  disabled?: boolean;
  size?: TextSize;
  children?: React.ReactNode;
}

export function Link({ underlined = false, disabled = false, size = 'default', children, className = '', style, ...rest }: LinkProps) {
  const { fontSize, lineHeight } = textSizeMap[size];

  return (
    <a
      className={[
        "font-['Heebo',sans-serif]",
        disabled
          ? 'text-neutral-text-disabled pointer-events-none cursor-not-allowed'
          : 'text-primary hover:text-primary-hover active:text-primary-active',
        underlined ? 'underline underline-offset-2' : 'no-underline',
        className,
      ].join(' ')}
      style={{ fontSize, lineHeight, ...style }}
      aria-disabled={disabled}
      {...rest}
    >
      {children}
    </a>
  );
}

// ── Code ──────────────────────────────────────────────────────────
export interface CodeProps {
  children?: React.ReactNode;
  className?: string;
}

export function Code({ children, className = '' }: CodeProps) {
  return (
    <code
      className={[
        "font-['Heebo',sans-serif]",
        'text-[14px] leading-[22px]',
        'px-[4px] py-[1px]',
        'bg-neutral-fill-tertiary',
        'border border-solid border-neutral-border-secondary',
        'rounded-[3px]',
        'text-neutral-text',
        className,
      ].join(' ')}
    >
      {children}
    </code>
  );
}

// ── Paragraph ─────────────────────────────────────────────────────
export interface ParagraphProps {
  type?: TextType;
  size?: TextSize;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Paragraph({ type = 'default', size = 'default', children, className = '', style }: ParagraphProps) {
  const { fontSize, lineHeight } = textSizeMap[size];
  const colorClass = textColorMap[type];

  return (
    <p
      className={[
        "font-['Heebo',sans-serif] font-normal m-0",
        colorClass,
        className,
      ].join(' ')}
      style={{ fontSize, lineHeight, ...style }}
    >
      {children}
    </p>
  );
}

const Typography = { Title, Text, Link, Code, Paragraph };
export default Typography;
