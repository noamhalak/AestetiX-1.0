import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Select — AestetiX 1.0
//  Figma page: ❖ Select - ✅ 🎨🤖🤖 (node 4:33)
//
//  mode: default | multiple | tags
//  size: small(h-24) | default(h-32) | large(h-40)
//  status: default | error | warning
//  variant: outlined | filled | borderless
// ─────────────────────────────────────────────────────────────────

export type SelectSize = 'small' | 'default' | 'large';
export type SelectStatus = '' | 'error' | 'warning';
export type SelectVariant = 'outlined' | 'filled' | 'borderless';
export type SelectMode = 'default' | 'multiple' | 'tags';

export interface SelectOption {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface SelectOptionGroup {
  label: React.ReactNode;
  options: SelectOption[];
}

export interface SelectProps {
  value?: string | string[];
  defaultValue?: string | string[];
  placeholder?: string;
  options?: (SelectOption | SelectOptionGroup)[];
  mode?: SelectMode;
  size?: SelectSize;
  status?: SelectStatus;
  variant?: SelectVariant;
  disabled?: boolean;
  allowClear?: boolean;
  showSearch?: boolean;
  loading?: boolean;
  open?: boolean;
  onChange?: (value: string | string[]) => void;
  onSearch?: (value: string) => void;
  onDropdownVisibleChange?: (open: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  dropdownStyle?: React.CSSProperties;
}

const heights: Record<SelectSize, number> = { small: 24, default: 32, large: 40 };
const fontSizes: Record<SelectSize, string> = { small: '12px', default: '14px', large: '16px' };

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="12" height="12" viewBox="0 0 12 12" fill="none"
      style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none', flexShrink: 0 }}
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function isGroup(opt: SelectOption | SelectOptionGroup): opt is SelectOptionGroup {
  return 'options' in opt;
}

function flatOptions(options: (SelectOption | SelectOptionGroup)[]): SelectOption[] {
  return options.flatMap((o) => (isGroup(o) ? o.options : [o]));
}

export function Select({
  value: controlledValue,
  defaultValue,
  placeholder = 'בחר...',
  options = [],
  mode = 'default',
  size = 'default',
  status = '',
  variant = 'outlined',
  disabled = false,
  allowClear = false,
  showSearch = false,
  loading = false,
  open: controlledOpen,
  onChange,
  onSearch,
  onDropdownVisibleChange,
  className = '',
  style,
  dropdownStyle,
}: SelectProps) {
  const isMultiple = mode === 'multiple' || mode === 'tags';
  const initValue = controlledValue ?? defaultValue ?? (isMultiple ? [] : '');

  const [value, setValue] = React.useState<string | string[]>(initValue);
  const [open, setOpen] = React.useState(controlledOpen ?? false);
  const [search, setSearch] = React.useState('');
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (controlledValue !== undefined) setValue(controlledValue);
  }, [controlledValue]);

  React.useEffect(() => {
    if (controlledOpen !== undefined) setOpen(controlledOpen);
  }, [controlledOpen]);

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        onDropdownVisibleChange?.(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggleOpen = () => {
    if (disabled) return;
    const next = !open;
    setOpen(next);
    onDropdownVisibleChange?.(next);
  };

  const selectOption = (optValue: string) => {
    if (isMultiple) {
      const arr = value as string[];
      const next = arr.includes(optValue)
        ? arr.filter((v) => v !== optValue)
        : [...arr, optValue];
      setValue(next);
      onChange?.(next);
    } else {
      setValue(optValue);
      onChange?.(optValue);
      setOpen(false);
      onDropdownVisibleChange?.(false);
    }
    setSearch('');
  };

  const clear = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = isMultiple ? [] : '';
    setValue(next);
    onChange?.(next);
  };

  const removeTag = (e: React.MouseEvent, v: string) => {
    e.stopPropagation();
    const next = (value as string[]).filter((x) => x !== v);
    setValue(next);
    onChange?.(next);
  };

  const flat = flatOptions(options);
  const labelOf = (v: string) => flat.find((o) => o.value === v)?.label ?? v;

  const filteredOptions = options.map((o) => {
    if (isGroup(o)) {
      return { ...o, options: o.options.filter((opt) => !search || String(opt.label).toLowerCase().includes(search.toLowerCase())) };
    }
    return o;
  }).filter((o) => isGroup(o) ? (o as SelectOptionGroup).options.length > 0 : !search || String((o as SelectOption).label).toLowerCase().includes(search.toLowerCase()));

  const h = heights[size];
  const fs = fontSizes[size];

  const borderColor = status === 'error'
    ? '#ff4d4f'
    : status === 'warning'
      ? '#faad14'
      : open
        ? '#1677ff'
        : '#d9d9d9';

  const bg = variant === 'filled' ? 'rgba(0,0,0,0.04)' : '#fff';
  const border = variant === 'borderless' ? 'none' : `1px solid ${borderColor}`;

  const isEmpty = isMultiple ? (value as string[]).length === 0 : !value;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: 'relative',
        display: 'inline-flex',
        width: '100%',
        ...style,
      }}
    >
      {/* Trigger */}
      <div
        onClick={toggleOpen}
        style={{
          display: 'flex',
          alignItems: 'center',
          minHeight: h,
          padding: isMultiple ? '2px 8px' : `0 ${size === 'small' ? 7 : 11}px`,
          gap: '4px',
          border,
          borderRadius: '6px',
          backgroundColor: disabled ? 'rgba(0,0,0,0.04)' : bg,
          cursor: disabled ? 'not-allowed' : 'pointer',
          width: '100%',
          flexWrap: isMultiple ? 'wrap' : 'nowrap',
          boxShadow: open && variant !== 'borderless' ? '0 0 0 2px rgba(22,119,255,0.2)' : undefined,
          transition: 'all 0.2s',
        }}
      >
        {/* Tags (multiple mode) */}
        {isMultiple && (value as string[]).map((v) => (
          <span
            key={v}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              height: h - 8,
              padding: '0 6px',
              backgroundColor: 'rgba(0,0,0,0.06)',
              borderRadius: '4px',
              fontSize: fs,
              fontFamily: '"Heebo", sans-serif',
              color: 'rgba(0,0,0,0.88)',
            }}
          >
            {labelOf(v)}
            <span
              onClick={(e) => removeTag(e, v)}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', opacity: 0.7 }}
            >
              ✕
            </span>
          </span>
        ))}

        {/* Search input */}
        {showSearch && open ? (
          <input
            autoFocus
            value={search}
            onChange={(e) => { setSearch(e.target.value); onSearch?.(e.target.value); }}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: fs,
              fontFamily: '"Heebo", sans-serif',
              background: 'transparent',
              color: 'rgba(0,0,0,0.88)',
              minWidth: '40px',
            }}
          />
        ) : (
          <span
            style={{
              flex: 1,
              fontSize: fs,
              fontFamily: '"Heebo", sans-serif',
              color: isEmpty ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.88)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {isMultiple
              ? (value as string[]).length === 0 && placeholder
              : value ? labelOf(value as string) : placeholder}
          </span>
        )}

        {/* Suffix icons */}
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(0,0,0,0.25)', flexShrink: 0 }}>
          {allowClear && !isEmpty && !disabled && (
            <span onClick={clear} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <circle cx="6" cy="6" r="6" />
                <path d="M4 4l4 4M8 4l-4 4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </span>
          )}
          {loading ? (
            <span style={{ width: 12, height: 12, border: '1.5px solid #1677ff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} />
          ) : (
            <ChevronDown open={open} />
          )}
        </span>
      </div>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: 'absolute',
            top: `calc(100% + 4px)`,
            left: 0,
            right: 0,
            zIndex: 1050,
            backgroundColor: '#fff',
            border: '1px solid #f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
            maxHeight: '256px',
            overflowY: 'auto',
            padding: '4px 0',
            ...dropdownStyle,
          }}
        >
          {filteredOptions.length === 0 ? (
            <div style={{ padding: '8px 12px', color: 'rgba(0,0,0,0.25)', fontSize: fs, fontFamily: '"Heebo", sans-serif', textAlign: 'center' }}>
              אין תוצאות
            </div>
          ) : filteredOptions.map((o, gi) =>
            isGroup(o) ? (
              <div key={gi}>
                <div style={{ padding: '5px 12px', fontSize: '12px', color: 'rgba(0,0,0,0.45)', fontFamily: '"Heebo", sans-serif', fontWeight: 600 }}>
                  {(o as SelectOptionGroup).label}
                </div>
                {(o as SelectOptionGroup).options.map((opt) => (
                  <SelectOptionItem
                    key={opt.value}
                    opt={opt}
                    selected={isMultiple ? (value as string[]).includes(opt.value) : value === opt.value}
                    fontSize={fs}
                    height={h}
                    onSelect={selectOption}
                  />
                ))}
              </div>
            ) : (
              <SelectOptionItem
                key={(o as SelectOption).value}
                opt={o as SelectOption}
                selected={isMultiple ? (value as string[]).includes((o as SelectOption).value) : value === (o as SelectOption).value}
                fontSize={fs}
                height={h}
                onSelect={selectOption}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

interface SelectOptionItemProps {
  opt: SelectOption;
  selected: boolean;
  fontSize: string;
  height: number;
  onSelect: (value: string) => void;
}

function SelectOptionItem({ opt, selected, fontSize, height, onSelect }: SelectOptionItemProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => !opt.disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => !opt.disabled && onSelect(opt.value)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: height,
        padding: `4px 12px`,
        fontSize,
        fontFamily: '"Heebo", sans-serif',
        color: opt.disabled ? 'rgba(0,0,0,0.25)' : selected ? '#1677ff' : 'rgba(0,0,0,0.88)',
        backgroundColor: selected ? '#e6f4ff' : hovered ? 'rgba(0,0,0,0.04)' : 'transparent',
        cursor: opt.disabled ? 'not-allowed' : 'pointer',
        fontWeight: selected ? 600 : 400,
        transition: 'background-color 0.15s',
      }}
    >
      {opt.label}
      {selected && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="#1677ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

export default Select;
