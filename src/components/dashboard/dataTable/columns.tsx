'use client';

import { ColumnDef } from '@tanstack/react-table';
import { InvoiceData } from '../../../data/dataSchema';
import { DataTableColumnHeader } from './data-table-column-header';
import { ReactNode } from 'react';
import { Badge } from '../../ui/badge';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const TableColumns = () => {
    const isDesktopScreen = useMediaQuery('(min-width: 1024px)');

    type columnType = {
        title: string;
        accessor: keyof InvoiceData;
        isVisible?: boolean;
    };

    const columnConfigs: columnType[] = [
        { title: 'INV#', accessor: 'id' },
        { title: 'ISSUED', accessor: 'IssueDate', isVisible: isDesktopScreen },
        { title: 'DUE', accessor: 'Due' },
        {
            title: 'HRS/QTY',
            accessor: 'HoursWorked',
            isVisible: isDesktopScreen,
        },
        { title: 'AMOUNT', accessor: 'Amount' },
        { title: 'STATUS', accessor: 'Paid' },
    ];

    const columns: ColumnDef<InvoiceData>[] = columnConfigs
        .filter((column) => column.isVisible !== false)
        .map((config) => ({
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
        }));
    return columns;
};
export default TableColumns;
