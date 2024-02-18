'use client';

import { ColumnDef } from '@tanstack/react-table';

// import { Badge } from '../../ui/badge';
// import { Checkbox } from '../../ui/checkbox';

// import { labels, priorities, statuses } from '../../../data/data';
import { InvoiceData } from '../../../data/dataSchema';
import { DataTableColumnHeader } from './data-table-column-header';
// import { DataTableRowActions } from './data-table-row-actions';

export const columns: ColumnDef<InvoiceData>[] = [
    // {
    //     id: 'select',
    //     header: ({ table }) => (
    //         <Checkbox
    //             checked={
    //                 table.getIsAllPageRowsSelected() ||
    //                 (table.getIsSomePageRowsSelected() && 'indeterminate')
    //             }
    //             onCheckedChange={(value) =>
    //                 table.toggleAllPageRowsSelected(!!value)
    //             }
    //             aria-label="Select all"
    //             className="translate-y-[2px]"
    //         />
    //     ),
    //     cell: ({ row }) => (
    //         <Checkbox
    //             checked={row.getIsSelected()}
    //             onCheckedChange={(value) => row.toggleSelected(!!value)}
    //             aria-label="Select row"
    //             className="translate-y-[2px]"
    //         />
    //     ),
    //     enableSorting: false,
    //     enableHiding: false,
    // },
    {
        accessorKey: 'id',
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="INV#"
                className="max-w-[20px] lg:max-w-[50px]"
            />
        ),
        cell: ({ row }) => (
            <div className="w-[20px] lg:max-w-[50px]">{row.getValue('id')}</div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'StartDate',
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Start Date"
                className="max-w-[70px] lg:max-w-[500px]"
            />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[70px] truncate font-medium lg:max-w-[500px] ">
                        {row.getValue('StartDate')}
                    </span>
                </div>
            );
        },
    },
    {
        accessorKey: 'EndDate',
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="End Date"
                className="max-w-[70px] lg:max-w-[500px]"
            />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[70px] truncate font-medium lg:max-w-[500px]">
                        {row.getValue('EndDate')}
                    </span>
                </div>
            );
        },
    },
    {
        accessorKey: 'Due',
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Due Date"
                className="max-w-[70px] lg:max-w-[500px]"
            />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[70px] truncate font-medium lg:max-w-[500px]">
                        {row.getValue('Due')}
                    </span>
                </div>
            );
        },
    },
    {
        accessorKey: 'Amount',
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="$ Amount"
                className="max-w-[70px] lg:max-w-[500px]"
            />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[70px] truncate font-medium lg:max-w-[500px]">
                        {row.getValue('Amount')}
                    </span>
                </div>
            );
        },
    },
    {
        accessorKey: 'File',
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Download File"
                className="max-w-[70px] lg:max-w-[500px]"
            />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[70px] truncate font-medium lg:max-w-[500px]">
                        {row.getValue('File')}
                    </span>
                </div>
            );
        },
    },
    // {
    //     accessorKey: 'status',
    //     header: ({ column }) => (
    //         <DataTableColumnHeader column={column} title="Status" />
    //     ),
    //     cell: ({ row }) => {
    //         const status = statuses.find(
    //             (status) => status.value === row.getValue('status')
    //         );

    //         if (!status) {
    //             return null;
    //         }

    //         return (
    //             <div className="flex w-[100px] items-center">
    //                 {status.icon && (
    //                     <status.icon className="text-muted-foreground mr-2 h-4 w-4" />
    //                 )}
    //                 <span>{status.label}</span>
    //             </div>
    //         );
    //     },
    //     filterFn: (row, id, value) => {
    //         return value.includes(row.getValue(id));
    //     },
    // },
    // {
    //     accessorKey: 'priority',
    //     header: ({ column }) => (
    //         <DataTableColumnHeader column={column} title="Priority" />
    //     ),
    //     cell: ({ row }) => {
    //         const priority = priorities.find(
    //             (priority) => priority.value === row.getValue('priority')
    //         );

    //         if (!priority) {
    //             return null;
    //         }

    //         return (
    //             <div className="flex items-center">
    //                 {priority.icon && (
    //                     <priority.icon className="text-muted-foreground mr-2 h-4 w-4" />
    //                 )}
    //                 <span>{priority.label}</span>
    //             </div>
    //         );
    //     },
    //     filterFn: (row, id, value) => {
    //         return value.includes(row.getValue(id));
    //     },
    // },
    // {
    //     id: 'actions',
    //     cell: ({ row }) => <DataTableRowActions row={row} />,
    // },
];
