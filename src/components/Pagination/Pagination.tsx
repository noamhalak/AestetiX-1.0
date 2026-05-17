import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Pagination — AestetiX 1.0
//  Figma page: ❖ Pagination - ✅ 🎨🤖🤖
//
//  type: basic | more | changer | jumper | total | all
//  mini: boolean
//  Item height: 32px (mini: 24px)
// ─────────────────────────────────────────────────────────────────

export interface PaginationProps {
  current?: number;
  defaultCurrent?: number;
  total?: number;
  pageSize?: number;
  defaultPageSize?: number;
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  showTotal?: boolean | ((total: number, range: [number, number]) => React.ReactNode);
  disabled?: boolean;
  mini?: boolean;
  onChange?: (page: number, pageSize: number) => void;
  onShowSizeChange?: (current: number, size: number) => void;
  className?: string;
  style?: React.CSSProperties;
}

function ChevronLeft() {
  return (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="currentColor">
      <path d="M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="currentColor">
      <path d="M1 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function DotsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="rgba(0,0,0,0.45)">
      <circle cx="4" cy="8" r="1.2" />
      <circle cx="8" cy="8" r="1.2" />
      <circle cx="12" cy="8" r="1.2" />
    </svg>
  );
}

const PAGE_SIZES = [10, 20, 50, 100];

function getPageNumbers(current: number, totalPages: number): (number | '...')[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const pages: (number | '...')[] = [1];
  if (current > 3) pages.push('...');
  for (let i = Math.max(2, current - 1); i <= Math.min(totalPages - 1, current + 1); i++) {
    pages.push(i);
  }
  if (current < totalPages - 2) pages.push('...');
  pages.push(totalPages);
  return pages;
}

export function Pagination({
  current: controlledCurrent,
  defaultCurrent = 1,
  total = 0,
  pageSize: controlledPageSize,
  defaultPageSize = 10,
  showSizeChanger = false,
  showQuickJumper = false,
  showTotal = false,
  disabled = false,
  mini = false,
  onChange,
  onShowSizeChange,
  className = '',
  style,
}: PaginationProps) {
  const [current, setCurrent] = React.useState(controlledCurrent ?? defaultCurrent);
  const [pageSize, setPageSize] = React.useState(controlledPageSize ?? defaultPageSize);
  const [jumperValue, setJumperValue] = React.useState('');

  React.useEffect(() => {
    if (controlledCurrent !== undefined) setCurrent(controlledCurrent);
  }, [controlledCurrent]);

  React.useEffect(() => {
    if (controlledPageSize !== undefined) setPageSize(controlledPageSize);
  }, [controlledPageSize]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const gotoPage = (page: number) => {
    const clamped = Math.max(1, Math.min(totalPages, page));
    setCurrent(clamped);
    onChange?.(clamped, pageSize);
  };

  const itemH = mini ? 24 : 32;
  const fontSize = mini ? '12px' : '14px';
  const minW = mini ? 24 : 32;

  const itemStyle = (active?: boolean, isDisabled?: boolean): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: minW,
    height: itemH,
    padding: '0 6px',
    fontSize,
    fontFamily: '"Heebo", sans-serif',
    lineHeight: '1',
    border: `1px solid ${active ? '#1677ff' : '#d9d9d9'}`,
    borderRadius: '6px',
    backgroundColor: active ? '#1677ff' : '#fff',
    color: active ? '#fff' : isDisabled ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.88)',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    userSelect: 'none',
    transition: 'all 0.2s',
    flexShrink: 0,
  });

  const pages = getPageNumbers(current, totalPages);

  const range: [number, number] = [
    (current - 1) * pageSize + 1,
    Math.min(current * pageSize, total),
  ];

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: '"Heebo", sans-serif',
        fontSize,
        ...style,
      }}
    >
      {/* Total info */}
      {showTotal && (
        <span style={{ color: 'rgba(0,0,0,0.88)', whiteSpace: 'nowrap' }}>
          {typeof showTotal === 'function'
            ? showTotal(total, range)
            : `${range[0]}-${range[1]} מתוך ${total}`}
        </span>
      )}

      {/* Prev button */}
      <span
        style={itemStyle(false, disabled || current === 1)}
        onClick={() => !disabled && current > 1 && gotoPage(current - 1)}
      >
        <ChevronLeft />
      </span>

      {/* Page items */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
        {pages.map((p, i) =>
          p === '...' ? (
            <span
              key={`dots-${i}`}
              style={{ ...itemStyle(), border: 'none', cursor: 'default', color: 'rgba(0,0,0,0.45)' }}
            >
              <DotsIcon />
            </span>
          ) : (
            <span
              key={p}
              style={itemStyle(p === current, disabled)}
              onClick={() => !disabled && gotoPage(p as number)}
            >
              {p}
            </span>
          ),
        )}
      </div>

      {/* Next button */}
      <span
        style={itemStyle(false, disabled || current === totalPages)}
        onClick={() => !disabled && current < totalPages && gotoPage(current + 1)}
      >
        <ChevronRight />
      </span>

      {/* Size changer */}
      {showSizeChanger && (
        <select
          disabled={disabled}
          value={pageSize}
          onChange={(e) => {
            const s = Number(e.target.value);
            setPageSize(s);
            setCurrent(1);
            onShowSizeChange?.(1, s);
            onChange?.(1, s);
          }}
          style={{
            height: itemH,
            padding: `0 ${mini ? 4 : 8}px`,
            fontSize,
            fontFamily: '"Heebo", sans-serif',
            border: '1px solid #d9d9d9',
            borderRadius: '6px',
            cursor: disabled ? 'not-allowed' : 'pointer',
            backgroundColor: '#fff',
            color: 'rgba(0,0,0,0.88)',
          }}
        >
          {PAGE_SIZES.map((s) => (
            <option key={s} value={s}>{s} / עמוד</option>
          ))}
        </select>
      )}

      {/* Quick jumper */}
      {showQuickJumper && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize, color: 'rgba(0,0,0,0.88)' }}>
          עמוד
          <input
            type="text"
            value={jumperValue}
            disabled={disabled}
            onChange={(e) => setJumperValue(e.target.value)}
            onPressEnter={(e: React.KeyboardEvent<HTMLInputElement>) => {
              const n = parseInt((e.target as HTMLInputElement).value, 10);
              if (!isNaN(n)) { gotoPage(n); setJumperValue(''); }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const n = parseInt(jumperValue, 10);
                if (!isNaN(n)) { gotoPage(n); setJumperValue(''); }
              }
            }}
            style={{
              width: mini ? 40 : 50,
              height: itemH,
              padding: '0 6px',
              fontSize,
              fontFamily: '"Heebo", sans-serif',
              border: '1px solid #d9d9d9',
              borderRadius: '6px',
              textAlign: 'center',
              outline: 'none',
            }}
          />
        </span>
      )}
    </div>
  );
}

export default Pagination;
