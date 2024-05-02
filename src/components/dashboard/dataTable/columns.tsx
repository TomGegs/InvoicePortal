'use client';

import { ColumnDef } from '@tanstack/react-table';
import { InvoiceData } from '../../../data/dataSchema';
import { DataTableColumnHeader } from './data-table-column-header';
import { ReactNode } from 'react';
import { Badge } from '../../ui/badge';

type ColumnConfig = {
    title: string;
    accessor: keyof InvoiceData;
};

const columnConfigs: ColumnConfig[] = [
    { title: 'INV#', accessor: 'id' },
    { title: 'ISSUED', accessor: 'IssueDate' },
    { title: 'DUE', accessor: 'Due' },
    { title: 'HRS/QTY', accessor: 'HoursWorked' },
    { title: 'AMOUNT', accessor: 'Amount' },
    { title: 'STATUS', accessor: 'Paid' },
];

export const columns: ColumnDef<InvoiceData>[] = columnConfigs.map(
    (config) => ({
        accessorKey: config.accessor,
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title={config.title}
                className={`  `}
            />
        ),
        cell: ({ row }) => {
            const cellValue = row.getValue(config.accessor);
            if (config.accessor === 'Paid') {
                // Status cell
                return (
                    <Badge variant={cellValue ? 'paid' : 'notPaid'}>
                        {cellValue ? 'Paid' : 'Unpaid'}
                    </Badge>
                );
            } else {
                // All other cells
                return (
                    <div
                        className={`flex space-x-2 truncate font-medium text-white`}
                        style={{
                            overflow: 'hidden',
                        }}
                    >
                        {cellValue as ReactNode}
                    </div>
                );
            }
        },
    })
);
