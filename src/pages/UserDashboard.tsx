import { columns } from '../components/dashboard/dataTable/columns';
import { DataTable } from '../components/dashboard/dataTable/data-table';
import InvoiceSidebar from '../components/dashboard/sections/InvoiceSidebar';
import TopRowCards from '../components/dashboard/sections/TopRowCards';
import useInvoices from '../hooks/useInvoices';
import { UserNav } from '../components/dashboard/dataTable/user-nav';

export function UserDashboard() {
    const invoices = useInvoices();

    return (
        <div className="flex w-full flex-col  ">
            <UserNav />
            <main className="flex flex-col gap-4 px-4 md:gap-8 lg:px-8">
                <TopRowCards />
                <div className="flex flex-row gap-4 md:gap-8">
                    <DataTable data={invoices} columns={columns} />
                    <InvoiceSidebar />
                </div>
            </main>
        </div>
    );
}
