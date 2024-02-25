import { columns } from './dataTable/columns';
import { DataTable } from './dataTable/data-table';
import { UserNav } from './dataTable/user-nav';
import DataType from '../../data/dataType';
import { FSFetch } from '../../firebase/FirestoreFetch/FSFetch';
import { useEffect, useState } from 'react';
import { dataSchema } from '../../data/dataSchema';
import { z } from 'zod';
import { auth } from '../../firebase/firebaseConfig';

const DashboardUI = () => {
    const [invoices, setInvoices] = useState<DataType[]>([]);

    // Capitalize the first letter of the username extracted from the email
    const capitalisedUsername =
        auth.currentUser?.email
            ?.split('@')[0]
            ?.replace(/^\w/, (c) => c.toUpperCase()) || '';

    // Determine the local time of day and appropriate message
    const hours = new Date().getHours();
    const timeOfDay =
        hours < 12
            ? 'Have a magical Morning'
            : hours < 17
              ? 'Hope its an amazing Afternoon'
              : 'Enjoy an excellent Evening';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedInvoices = await FSFetch();
                console.log('Fetched Invoices:', fetchedInvoices);

                // Ensure that the fetched data conforms to your schema
                const validatedInvoices = z
                    .array(dataSchema)
                    .parse(fetchedInvoices);
                console.log('Validated Invoices:', validatedInvoices);

                setInvoices(validatedInvoices);
            } catch (error) {
                console.error('Error fetching or processing data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="flex h-full flex-1 flex-col space-y-8 md:flex lg:p-8">
                <div className="flex items-center justify-between space-y-2">
                    <div className="flex w-full flex-col items-center justify-center">
                        <h2 className="mt-10 text-2xl font-bold tracking-tight">
                            {timeOfDay} {capitalisedUsername}
                        </h2>
                        <p className="text-muted-foreground">
                            Here's a list of your invoices
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
