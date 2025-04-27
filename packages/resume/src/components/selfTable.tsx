import type { ColumnsType } from 'antd/lib/table';

import { Table } from 'antd';
import { Key } from 'react';

type DataType = {
  address: string;
  age: number;
  key: Key;
  name: string;
}

const columns: ColumnsType<DataType> = [
  {
    dataIndex: 'name',
    fixed: 'left',
    key: 'name',
    title: 'Full Name',
    width: 100,
  },
  {
    dataIndex: 'age',
    fixed: 'left',
    key: 'age',
    title: 'Age',
    width: 100,
  },
  { dataIndex: 'address', key: '1', title: 'Column 1' },
  { dataIndex: 'address', key: '2', title: 'Column 2' },
  { dataIndex: 'address', key: '3', title: 'Column 3' },
  { dataIndex: 'address', key: '4', title: 'Column 4' },
  { dataIndex: 'address', key: '5', title: 'Column 5' },
  { dataIndex: 'address', key: '6', title: 'Column 6' },
  { dataIndex: 'address', key: '7', title: 'Column 7' },
  { dataIndex: 'address', key: '8', title: 'Column 8' },
  {
    fixed: 'right',
    key: 'operation',
    render: () => <a>action</a>,
    title: 'Action',
    width: 100,
  },
];

const data: DataType[] = [
  {
    address: 'New York Park',
    age: 32,
    key: '1',
    name: 'John Brown',
  },
  {
    address: 'London Park',
    age: 40,
    key: '2',
    name: 'Jim Green',
  },
];

function SelfTable() {
  return (<Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />);
};

export default SelfTable;