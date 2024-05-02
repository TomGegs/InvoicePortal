import { columns } from '../components/dashboard/dataTable/columns';
import { DataTable } from '../components/dashboard/dataTable/data-table';
import InvoiceSidebar from '../components/dashboard/sections/InvoiceSidebar';
import TopRowCards from '../components/dashboard/sections/TopRowCards';
import useInvoices from '../hooks/useInvoices';
import { UserNav } from '../components/dashboard/dataTable/user-nav';
import { InvoiceData } from '../data/dataSchema';
import { useEffect, useState } from 'react';

export function UserDashboard() {
    const invoices = useInvoices();

    const [selectedInvoice, setSelectedInvoice] = useState<InvoiceData | null>(
        null
    );

    // Row click handler to display invoice details in the sidebar
    const handleRowClick = (invoice: InvoiceData) => {
        setSelectedInvoice(invoice);
    };

    // Auto select the latest invoice
    useEffect(() => {
        if (invoices.length > 0) {
            setSelectedInvoice(invoices[0]);
        }
    }, [invoices]);
    return (
        <div className="flex w-full flex-col  ">
            <UserNav />
            <main className="flex flex-col gap-4 px-4 md:gap-8 lg:px-8">
                <TopRowCards />
                <div className="flex h-full flex-row gap-4 md:gap-8">
                    <DataTable
                        data={invoices}
                        columns={columns}
                        onRowClick={handleRowClick}
                    />
                    <InvoiceSidebar invoice={selectedInvoice} />
                </div>
            </main>
        </div>
    );
}
