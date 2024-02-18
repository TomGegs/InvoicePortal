import { columns } from './dataTable/columns';
import { DataTable } from './dataTable/data-table';
import { UserNav } from './dataTable/user-nav';
import DataType from '../../data/dataType';
import { FSFetch } from '../../firebase/FirestoreFetch/FSFetch';
import { useEffect, useState } from 'react';
import { dataSchema } from '../../data/dataSchema';
import { z } from 'zod';

const DashboardUI = () => {
    const [invoices, setInvoices] = useState<DataType[]>([]);

    useEffect(() => {
        const fetchInvoices = async () => {
            const fetchedInvoices = await FSFetch();
            const validatedInvoices = z
                .array(dataSchema)
                .parse(fetchedInvoices);
            setInvoices(validatedInvoices);
        };

        fetchInvoices();
    }, []);
    return (
        <>
            <div className="flex h-full flex-1 flex-col space-y-8 md:flex lg:p-8">
                <div className="flex items-center justify-between space-y-2">
                    <div className="flex w-full flex-col items-center justify-center">
                        <h2 className="mt-10 text-2xl font-bold tracking-tight">
                            Welcome Back!{' '}
                        </h2>
                        <p className="text-muted-foreground">
                            Here&apos;s a list of your invoices
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <UserNav />
                    </div>
                </div>
                <DataTable data={invoices} columns={columns} />
            </div>
        </>
    );
};

export default DashboardUI;
