import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../../ui/table';

import { DataTablePagination } from '../dataTable/data-table-pagination';
import { useState } from 'react';
// import FilterButton from '../ui/FilterButton';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../../ui/card';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    onRowClick: (index: number) => void;
    selectedRowIndex: number;
}

export function DataTable<TData, TValue>({
    columns,
    data,
    onRowClick,
    selectedRowIndex,
}: DataTableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = useState({});
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
        {}
    );
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    });

    return (
        <Card className="flex w-full lg:w-2/3 flex-col">
            <div className="grid grid-cols-4 justify-center text-center ">
                {/* Section Headers */}
                <CardHeader className="col-span-2 col-start-2 px-7">
                    <CardTitle>All Invoices</CardTitle>
                    <CardDescription>
                        Recent orders from your store.
                    </CardDescription>
                </CardHeader>
                {/* Filter and Export Buttons */}
                {/* <FilterButton /> */}
            </div>
            {/* Table of Invoices */}
            <CardContent>
                <div className="w-full space-y-4">
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead
                                                    key={header.id}
                                                    colSpan={header.colSpan}
                                                >
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                              header.column
                                                                  .columnDef
                                                                  .header,
                                                              header.getContext()
                                                          )}
                                                </TableHead>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table
                                        .getRowModel()
                                        .rows.map((row, index) => (
                                            <TableRow
                                                key={row.id}
                                                data-state={
                                                    index === selectedRowIndex
                                                        ? 'selected'
                                                        : undefined
                                                }
                                                onClick={() =>
                                                    onRowClick(index)
                                                }
                                                className={
                                                    index === selectedRowIndex
                                                        ? 'bg-slate-200'
                                                        : ''
                                                }
                                            >
                                                {row
                                                    .getVisibleCells()
                                                    .map((cell) => (
                                                        <TableCell
                                                            key={cell.id}
                                                            className={
                                                                index ===
                                                                selectedRowIndex
                                                                    ? 'font-bold'
                                                                    : 'font-normal'
                                                            }
                                                        >
                                                            {flexRender(
                                                                cell.column
                                                                    .columnDef
                                                                    .cell,
                                                                cell.getContext()
                                                            )}
                                                        </TableCell>
                                                    ))}
                                            </TableRow>
                                        ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={columns.length}
                                            className="h-24 text-center"
                                        >
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="bg-muted/50 mt-auto flex flex-row items-center border-t px-6 py-3">
                {/* //ml-auto mr-0 w-auto */}
                <div className="flex w-full justify-center">
                    <DataTablePagination table={table} />
                </div>
            </CardFooter>
        </Card>
    );
}
