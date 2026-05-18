import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Table } from '../components/Table/Table';
import type { TableColumn } from '../components/Table/Table';
import { Tag } from '../components/Tag/Tag';

interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  status: 'active' | 'inactive';
}

const employees: Employee[] = [
  { id: 1, name: 'דני לוי', role: 'מפתח בכיר', department: 'טכנולוגיה', status: 'active' },
  { id: 2, name: 'שרה כהן', role: 'מעצבת UX', department: 'עיצוב', status: 'active' },
  { id: 3, name: 'מיכל ברון', role: 'מנהלת מוצר', department: 'מוצר', status: 'inactive' },
  { id: 4, name: 'יובל שמש', role: 'אנליסט נתונים', department: 'BI', status: 'active' },
  { id: 5, name: 'נועה גל', role: 'מנהלת שיווק', department: 'שיווק', status: 'active' },
];

const columns: TableColumn<Employee>[] = [
  { key: 'name', title: 'שם', dataIndex: 'name', sorter: true },
  { key: 'role', title: 'תפקיד', dataIndex: 'role' },
  { key: 'department', title: 'מחלקה', dataIndex: 'department', sorter: true },
  {
    key: 'status',
    title: 'סטטוס',
    dataIndex: 'status',
    render: (value) => (
      <Tag color={value === 'active' ? 'success' : 'default'}>
        {value === 'active' ? 'פעיל' : 'לא פעיל'}
      </Tag>
    ),
  },
];

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: '"Heebo", sans-serif', maxWidth: 800 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    selectable: { control: 'boolean', description: 'בחירת שורות' },
    loading: { control: 'boolean', description: 'מצב טעינה' },
  },
  args: {
    columns,
    dataSource: employees,
    rowKey: 'id' as keyof Employee,
    selectable: false,
    loading: false,
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {};

export const Selectable: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {selectedKeys.length > 0 && (
          <div style={{ fontSize: 14, color: 'rgba(0,0,0,0.65)' }}>
            נבחרו {selectedKeys.length} שורות: {selectedKeys.join(', ')}
          </div>
        )}
        <Table
          columns={columns}
          dataSource={employees}
          rowKey="id"
          selectable
          selectedRowKeys={selectedKeys}
          onSelectChange={setSelectedKeys}
        />
      </div>
    );
  },
  parameters: { controls: { disable: true } },
};

export const Loading: Story = {
  args: { loading: true },
};

export const Empty: Story = {
  args: { dataSource: [] },
};

export const WithSorting: Story = {
  args: {
    columns: columns.map((col) => ({ ...col, sorter: true })),
  },
};

export const SimpleTable: Story = {
  render: () => {
    const simpleColumns: TableColumn<{ key: string; city: string; population: string }>[] = [
      { key: 'city', title: 'עיר', dataIndex: 'city' },
      { key: 'population', title: 'אוכלוסייה', dataIndex: 'population', align: 'right' },
    ];
    const data = [
      { key: '1', city: 'ירושלים', population: '948,000' },
      { key: '2', city: 'תל אביב', population: '460,000' },
      { key: '3', city: 'חיפה', population: '285,000' },
    ];
    return <Table columns={simpleColumns} dataSource={data} />;
  },
  parameters: { controls: { disable: true } },
};
