'use client';

import { ColumnDef } from '@tanstack/react-table';
import { InvoiceData } from '../../../data/dataSchema';
import { DataTableColumnHeader } from './data-table-column-header';
import { ReactNode } from 'react';

type ColumnConfig = {
    title: string;
    accessor: keyof InvoiceData;
};

const columnConfigs: ColumnConfig[] = [
    { title: 'INV#', accessor: 'id' },
    { title: 'Start Date', accessor: 'StartDate' },
    { title: 'Due Date', accessor: 'Due' },
    { title: '$ Amount', accessor: 'Amount' },
    { title: 'PDF File', accessor: 'File' },
];

export const columns: ColumnDef<InvoiceData>[] = columnConfigs.map(
    (config) => ({
        accessorKey: config.accessor,
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title={config.title}
                className={`max-w-[${config.accessor === 'id' ? '20px' : '70px'}] lg:max-w-[500px]`}
            />
        ),
        cell: ({ row }) => {
            const cellValue = row.getValue(config.accessor);
            return (
                <div
                    className={`flex space-x-2 text-white ${config.accessor === 'File' ? '' : 'truncate font-medium'}`}
                    style={{
                        maxWidth: config.accessor === 'id' ? '50px' : '70px',
                        overflow: 'hidden',
                    }}
                >
                    {config.accessor === 'File' ? (
                        <a
                            href={cellValue as string}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 transition-all duration-300 hover:text-blue-400 hover:underline"
                        >
                            Download
                        </a>
                    ) : (
                        <span>{cellValue as ReactNode}</span>
                    )}
                </div>
            );
        },
    })
);
