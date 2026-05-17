import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Tag — AestetiX 1.0
//  Figma page: ❖ Tag - ✅ 🎨 (node 5:57)
//
//  Variants:
//    Tag          — default closable bordered/borderless
//    Tag__Status  — color presets: default | processing | success | warning | error
//                   + full color palette variants
// ─────────────────────────────────────────────────────────────────

// ── Tag (base) ────────────────────────────────────────────────────
export type TagColor =
  | 'default'
  | 'processing'
  | 'success'
  | 'warning'
  | 'error'
  | 'red' | 'volcano' | 'orange' | 'gold' | 'yellow'
  | 'lime' | 'green' | 'cyan' | 'blue' | 'geekblue' | 'purple' | 'magenta';

export interface TagProps {
  color?: TagColor;
  closable?: boolean;
  onClose?: (e: React.MouseEvent) => void;
  bordered?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// Figma: tag default — height 22px, padding horizontal 8px, border-radius 4px
// Text: 12px/20px Heebo Regular

const colorPresets: Record<TagColor, { bg: string; border: string; text: string; dot?: string }> = {
  default:    { bg: 'rgba(0,0,0,0.02)',  border: '#d9d9d9', text: 'rgba(0,0,0,0.88)' },
  processing: { bg: '#e6f4ff',            border: '#91caff', text: '#1677ff',          dot: '#1677ff' },
  success:    { bg: '#f6ffed',            border: '#b7eb8f', text: '#52c41a',           dot: '#52c41a' },
  warning:    { bg: '#fffbe6',            border: '#ffe58f', text: '#faad14',           dot: '#faad14' },
  error:      { bg: '#fff1f0',            border: '#ffa39e', text: '#ff4d4f',           dot: '#ff4d4f' },
  red:        { bg: '#fff1f0',            border: '#ffa39e', text: '#cf1322' },
  volcano:    { bg: '#fff2e8',            border: '#ffbb96', text: '#d4380d' },
  orange:     { bg: '#fff7e6',            border: '#ffd591', text: '#d46b08' },
  gold:       { bg: '#fffbe6',            border: '#ffe58f', text: '#d48806' },
  yellow:     { bg: '#feffe6',            border: '#fffb8f', text: '#d4b106' },
  lime:       { bg: '#fcffe6',            border: '#eaff8f', text: '#7cb305' },
  green:      { bg: '#f6ffed',            border: '#b7eb8f', text: '#389e0d' },
  cyan:       { bg: '#e6fffb',            border: '#87e8de', text: '#08979c' },
  blue:       { bg: '#e6f4ff',            border: '#91caff', text: '#0958d9' },
  geekblue:   { bg: '#f0f5ff',            border: '#adc6ff', text: '#1d39c4' },
  purple:     { bg: '#f9f0ff',            border: '#d3adf7', text: '#531dab' },
  magenta:    { bg: '#fff0f6',            border: '#ffadd2', text: '#c41d7f' },
};

export function Tag({
  color = 'default',
  closable = false,
  onClose,
  bordered = true,
  icon,
  children,
  className = '',
  style,
}: TagProps) {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;

  const preset = colorPresets[color];

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose?.(e);
    setVisible(false);
  };

  return (
    <span
      className={[
        'inline-flex items-center gap-[4px]',
        'h-[22px] px-[8px]',
        'text-[12px] leading-[20px] font-normal font-["Heebo",sans-serif]',
        'rounded-[4px]',
        'whitespace-nowrap',
        bordered ? 'border border-solid' : 'border-transparent',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        backgroundColor: preset.bg,
        borderColor: bordered ? preset.border : 'transparent',
        color: preset.text,
        ...style,
      }}
    >
      {icon && <span className="inline-flex items-center">{icon}</span>}
      {children}
      {closable && (
        <button
          type="button"
          onClick={handleClose}
          className="inline-flex items-center justify-center ml-[2px] opacity-60 hover:opacity-100 transition-opacity"
          style={{ color: preset.text }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M9.6 2.4L2.4 9.6M2.4 2.4l7.2 7.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          </svg>
        </button>
      )}
    </span>
  );
}

// ── Tag__Status ───────────────────────────────────────────────────
// Figma: Tag__Status — has a colored dot indicator + label
// Height: 22px, padding: 0 8px, text: 12px/20px

export type TagStatusColor = 'default' | 'processing' | 'success' | 'warning' | 'error';

export interface TagStatusProps {
  status?: TagStatusColor;
  text?: React.ReactNode;
  className?: string;
}

const statusDotColors: Record<TagStatusColor, string> = {
  default:    '#d9d9d9',
  processing: '#1677ff',
  success:    '#52c41a',
  warning:    '#faad14',
  error:      '#ff4d4f',
};

const statusTextColors: Record<TagStatusColor, string> = {
  default:    'rgba(0,0,0,0.88)',
  processing: 'rgba(0,0,0,0.88)',
  success:    'rgba(0,0,0,0.88)',
  warning:    'rgba(0,0,0,0.88)',
  error:      'rgba(0,0,0,0.88)',
};

export function TagStatus({ status = 'default', text, className = '' }: TagStatusProps) {
  const dotColor = statusDotColors[status];

  return (
    <span
      className={[
        'inline-flex items-center gap-[6px]',
        'text-[12px] leading-[20px] font-normal font-["Heebo",sans-serif]',
        className,
      ].join(' ')}
      style={{ color: statusTextColors[status] }}
    >
      <span
        className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
        style={{
          backgroundColor: dotColor,
          boxShadow: status === 'processing' ? `0 0 0 4px ${dotColor}33` : undefined,
        }}
      />
      {text}
    </span>
  );
}

export default Tag;
