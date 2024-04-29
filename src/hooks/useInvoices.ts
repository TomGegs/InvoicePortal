// hooks/useInvoices.js
import { useEffect, useState } from 'react';
import { FSFetch } from '../firebase/FirestoreFetch/FSFetch';
import { dataSchema } from '../data/dataSchema';
import { z } from 'zod';
import DataType from '../data/dataType';

function useInvoices() {
    const [invoices, setInvoices] = useState<DataType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedInvoices = await FSFetch();
                const validatedInvoices = z
                    .array(dataSchema)
                    .parse(fetchedInvoices);
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
