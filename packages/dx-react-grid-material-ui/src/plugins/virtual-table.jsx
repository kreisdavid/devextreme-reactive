import * as React from 'react';
import { makeVirtualTable } from '@devexpress/dx-react-grid';
import { Table } from './table';
import { Table as TableComponent } from '../templates/table';
import { VirtualTableLayout as VirtualLayout } from '../templates/virtual-table-layout';

const FixedHeader = props => <TableComponent use="head" {...props} />;
const FixedFooter = props => <TableComponent use="foot" {...props} />;

export const VirtualTable = makeVirtualTable(Table, {
  VirtualLayout,
  FixedHeader,
  FixedFooter,
  defaultEstimatedRowHeight: 48,
  defaultHeight: 530,
});
