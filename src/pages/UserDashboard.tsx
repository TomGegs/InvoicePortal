import TableColumns from '../components/dashboard/dataTable/columns';
import { DataTable } from '../components/dashboard/dataTable/data-table';
import InvoiceSidebar from '../components/dashboard/sections/InvoiceSidebar';
import TopRowCards from '../components/dashboard/sections/TopRowCards';
import useInvoices from '../hooks/useInvoices';
import { UserNav } from '../components/dashboard/dataTable/user-nav';
import { InvoiceData } from '../data/dataSchema';
import { useEffect, useState } from 'react';

export function UserDashboard() {
    const invoices = useInvoices();

    const [selectedInvoiceIndex, setSelectedInvoiceIndex] = useState<number>(0);
    const [selectedInvoice, setSelectedInvoice] = useState<InvoiceData | null>(
        null
    );

    const handleRowClick = (index: number) => {
        setSelectedInvoiceIndex(index);
        setSelectedInvoice(invoices[index]);
    };

    useEffect(() => {
        if (invoices.length > 0 && selectedInvoiceIndex < invoices.length) {
            setSelectedInvoice(invoices[selectedInvoiceIndex]);
        }
    }, [invoices, selectedInvoiceIndex]);

    const handleNextInvoice = () => {
        if (selectedInvoiceIndex < invoices.length - 1) {
            setSelectedInvoiceIndex((prev) => prev + 1);
        }
    };

    const handlePrevInvoice = () => {
        if (selectedInvoiceIndex > 0) {
            setSelectedInvoiceIndex((prev) => prev - 1);
        }
    };
    return (
        <div className="flex h-full w-full flex-col ">
            <UserNav />
            <main className="flex flex-col gap-2 lg:px-4">
                <TopRowCards />
                <div className="flex h-full flex-col-reverse gap-2 lg:flex-row">
                    <DataTable
                        data={invoices}
                        columns={TableColumns()}
                        onRowClick={handleRowClick}
                        selectedRowIndex={selectedInvoiceIndex}
                    />
                    <InvoiceSidebar
                        invoice={selectedInvoice}
                        onNext={handleNextInvoice}
                        onPrev={handlePrevInvoice}
                        currentIndex={selectedInvoiceIndex}
                        totalInvoices={invoices.length}
                    />{' '}
                </div>
            </main>
        </div>
    );
}
