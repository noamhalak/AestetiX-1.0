import React from 'react';

// ─────────────────────────────────────────────────────────────────
//  Table — AestetiX 1.0
//  Figma page: ❖ Table - ✅🤖 (node 71708:10831)
//
//  Cell types from Figma:
//    header:   Label | Label hover | prefix icon | Sort icon | Filter icon
//              checkbox | Default
//    cells:    Label | Link | Button (1/2) | Avatar | Icon buttons (1/2/3)
//              First cell (checkbox/none) | Input field | Tags (1/2/3/status)
//
//  Row types: default | hover
//  Header cell height: 40px
//  Body cell height: 40px
//  Font: 14px/22px Heebo
// ─────────────────────────────────────────────────────────────────

// ── Types ─────────────────────────────────────────────────────────
export type SortOrder = 'asc' | 'desc' | null;
export type CellAlignment = 'left' | 'center' | 'right';

export interface TableColumn<T = Record<string, unknown>> {
  key: string;
  title: React.ReactNode;
  dataIndex?: keyof T;
  width?: number | string;
  align?: CellAlignment;
  sorter?: boolean;
  sortOrder?: SortOrder;
  onSort?: (order: SortOrder) => void;
  filterable?: boolean;
  onFilter?: () => void;
  render?: (value: unknown, record: T, index: number) => React.ReactNode;
  fixed?: 'left' | 'right';
}

export interface TableProps<T = Record<string, unknown>> {
  columns: TableColumn<T>[];
  dataSource: T[];
  rowKey?: keyof T | ((record: T) => string);
  selectedRowKeys?: string[];
  onSelectChange?: (keys: string[]) => void;
  selectable?: boolean;
  loading?: boolean;
  empty?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// ── Icons ─────────────────────────────────────────────────────────
function SortIcon({ order }: { order?: SortOrder }) {
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', gap: '2px', marginLeft: '4px' }}>
      <svg width="8" height="5" viewBox="0 0 8 5" fill={order === 'asc' ? '#1677ff' : '#bfbfbf'}>
        <path d="M4 0L0 5h8L4 0z" />
      </svg>
      <svg width="8" height="5" viewBox="0 0 8 5" fill={order === 'desc' ? '#1677ff' : '#bfbfbf'}>
        <path d="M4 5L8 0H0l4 5z" />
      </svg>
    </span>
  );
}

function FilterIcon({ active }: { active?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill={active ? '#1677ff' : '#bfbfbf'} style={{ marginLeft: '4px' }}>
      <path d="M1 2h12L8 8v4l-2-1V8L1 2z" />
    </svg>
  );
}

function CheckboxIcon({ checked, indeterminate }: { checked?: boolean; indeterminate?: boolean }) {
  const borderColor = checked || indeterminate ? '#1677ff' : '#d9d9d9';
  const bg = checked || indeterminate ? '#1677ff' : '#fff';
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <rect width="14" height="14" x="1" y="1" rx="2" fill={bg} stroke={borderColor} strokeWidth="1.5" />
      {checked && <path d="M3 8l3 3 7-7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />}
      {indeterminate && <line x1="4" y1="8" x2="12" y2="8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />}
    </svg>
  );
}

// ── Table Header Cell ─────────────────────────────────────────────
interface ThCellProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  column: TableColumn<any>;
  style?: React.CSSProperties;
}

function ThCell({ column, style }: ThCellProps) {
  const [hovered, setHovered] = React.useState(false);
  const [sortOrder, setSortOrder] = React.useState<SortOrder>(column.sortOrder ?? null);

  const handleSort = () => {
    if (!column.sorter) return;
    const next: SortOrder = sortOrder === null ? 'asc' : sortOrder === 'asc' ? 'desc' : null;
    setSortOrder(next);
    column.onSort?.(next);
  };

  return (
    <th
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleSort}
      style={{
        height: '40px',
        padding: '0 8px',
        textAlign: column.align ?? 'left',
        fontSize: '14px',
        lineHeight: '22px',
        fontWeight: 600,
        fontFamily: '"Heebo", sans-serif',
        color: 'rgba(0,0,0,0.88)',
        backgroundColor: hovered ? 'rgba(0,0,0,0.04)' : '#fafafa',
        borderBottom: '1px solid #f0f0f0',
        whiteSpace: 'nowrap',
        cursor: column.sorter ? 'pointer' : 'default',
        userSelect: 'none',
        width: column.width,
        ...style,
      }}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        {column.title}
        {column.sorter && <SortIcon order={sortOrder} />}
        {column.filterable && <FilterIcon active={false} />}
      </span>
    </th>
  );
}

// ── Table Body Cell ───────────────────────────────────────────────
interface TdCellProps {
  children?: React.ReactNode;
  align?: CellAlignment;
  rowHovered?: boolean;
  selected?: boolean;
  style?: React.CSSProperties;
}

function TdCell({ children, align, rowHovered, selected, style }: TdCellProps) {
  return (
    <td
      style={{
        height: '40px',
        padding: '0 8px',
        textAlign: align ?? 'left',
        fontSize: '14px',
        lineHeight: '22px',
        fontFamily: '"Heebo", sans-serif',
        color: 'rgba(0,0,0,0.88)',
        backgroundColor: selected
          ? '#e6f4ff'
          : rowHovered
            ? 'rgba(0,0,0,0.02)'
            : '#ffffff',
        borderBottom: '1px solid #f0f0f0',
        transition: 'background-color 0.15s',
        ...style,
      }}
    >
      {children}
    </td>
  );
}

// ── Table ─────────────────────────────────────────────────────────
export function Table<T extends Record<string, unknown> = Record<string, unknown>>({
  columns,
  dataSource,
  rowKey = 'key' as keyof T,
  selectedRowKeys = [],
  onSelectChange,
  selectable = false,
  loading = false,
  empty,
  className = '',
  style,
}: TableProps<T>) {
  const [hoveredKey, setHoveredKey] = React.useState<string | null>(null);

  const getRowKey = (record: T, index: number): string => {
    if (typeof rowKey === 'function') return rowKey(record);
    return String(record[rowKey] ?? index);
  };

  const allKeys = dataSource.map((r, i) => getRowKey(r, i));
  const allSelected = allKeys.length > 0 && allKeys.every((k) => selectedRowKeys.includes(k));
  const someSelected = allKeys.some((k) => selectedRowKeys.includes(k)) && !allSelected;

  const toggleAll = () => {
    if (allSelected) {
      onSelectChange?.([]);
    } else {
      onSelectChange?.(allKeys);
    }
  };

  const toggleRow = (key: string) => {
    if (selectedRowKeys.includes(key)) {
      onSelectChange?.(selectedRowKeys.filter((k) => k !== key));
    } else {
      onSelectChange?.([...selectedRowKeys, key]);
    }
  };

  return (
    <div
      className={className}
      style={{
        width: '100%',
        overflowX: 'auto',
        borderRadius: '8px',
        border: '1px solid #f0f0f0',
        fontFamily: '"Heebo", sans-serif',
        ...style,
      }}
    >
      {loading && (
        <div style={{ padding: '24px', textAlign: 'center', color: 'rgba(0,0,0,0.45)' }}>
          <span
            style={{
              display: 'inline-block',
              width: '24px',
              height: '24px',
              border: '2px solid #1677ff',
              borderTopColor: 'transparent',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }}
          />
        </div>
      )}
      {!loading && (
        <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
          <thead>
            <tr>
              {selectable && (
                <th
                  style={{
                    width: '40px',
                    height: '40px',
                    padding: '0 8px',
                    backgroundColor: '#fafafa',
                    borderBottom: '1px solid #f0f0f0',
                    textAlign: 'center',
                  }}
                >
                  <span
                    style={{ cursor: 'pointer', display: 'inline-flex' }}
                    onClick={toggleAll}
                  >
                    <CheckboxIcon checked={allSelected} indeterminate={someSelected} />
                  </span>
                </th>
              )}
              {columns.map((col) => (
                <ThCell key={col.key} column={col} />
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  style={{
                    padding: '32px',
                    textAlign: 'center',
                    color: 'rgba(0,0,0,0.25)',
                    fontSize: '14px',
                  }}
                >
                  {empty ?? 'אין נתונים'}
                </td>
              </tr>
            ) : (
              dataSource.map((record, index) => {
                const key = getRowKey(record, index);
                const isSelected = selectedRowKeys.includes(key);
                const isHovered = hoveredKey === key;

                return (
                  <tr
                    key={key}
                    onMouseEnter={() => setHoveredKey(key)}
                    onMouseLeave={() => setHoveredKey(null)}
                  >
                    {selectable && (
                      <TdCell rowHovered={isHovered} selected={isSelected} align="center">
                        <span
                          style={{ cursor: 'pointer', display: 'inline-flex' }}
                          onClick={() => toggleRow(key)}
                        >
                          <CheckboxIcon checked={isSelected} />
                        </span>
                      </TdCell>
                    )}
                    {columns.map((col) => (
                      <TdCell
                        key={col.key}
                        align={col.align}
                        rowHovered={isHovered}
                        selected={isSelected}
                      >
                        {col.render
                          ? col.render(col.dataIndex ? record[col.dataIndex] : undefined, record, index)
                          : col.dataIndex
                            ? String(record[col.dataIndex] ?? '')
                            : null}
                      </TdCell>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
