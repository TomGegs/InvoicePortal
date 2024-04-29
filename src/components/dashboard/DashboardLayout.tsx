import { columns } from './dataTable/columns';
import { DataTable } from './dataTable/data-table';
import InvoiceSidebar from './sections/InvoiceSidebar';
import TopRowCards from './sections/TopRowCards';
import useInvoices from '../../hooks/useInvoices';

export function DashboardLayout() {
    const invoices = useInvoices();

    return (
        <main className="flex flex-col gap-4 p-4 md:gap-8 md:px-8">
            <TopRowCards />
            <div className="flex flex-row gap-4 md:gap-8">
                <DataTable data={invoices} columns={columns} />
                <InvoiceSidebar />
            </div>
        </main>
    );
}
