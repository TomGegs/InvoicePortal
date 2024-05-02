// hooks/useInvoices.js
import { useEffect, useState } from 'react';
import { FSFetch } from '../firebase/FirestoreFetch/FSFetch';
import { dataSchema, InvoiceData } from '../data/dataSchema';
import { z } from 'zod';

function useInvoices() {
    const [invoices, setInvoices] = useState<InvoiceData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedInvoices = await FSFetch();
                const validatedInvoices = z
                    .array(dataSchema)
                    .parse(fetchedInvoices);
                // Sort the invoices by due date
                validatedInvoices.sort(
                    (a, b) =>
                        new Date(b.Due).getTime() - new Date(a.Due).getTime()
                );

                setInvoices(validatedInvoices);
            } catch (error) {
                console.error('Error fetching or processing data:', error);
            }
        };

        fetchData();
    }, []);

    return invoices;
}

export default useInvoices;
