import { useMemo } from 'react';
import useInvoices from '../../../hooks/useInvoices';
import DataCard from '../cards/DataCard';
import PaymentDetailsCard from '../cards/PaymentDetailsCard';
import WelcomeCard from '../cards/WelcomeCard';

const TopRowCards = () => {
    const invoices = useInvoices();

    const { totalUnpaid, totalUnpaidCount, nextDueInvoice } = useMemo(() => {
        const unpaidInvoices = invoices.filter((invoice) => !invoice.Paid);
        const totalUnpaid = unpaidInvoices.reduce(
            (acc, invoice) => acc + invoice.Amount,
            0
        );
        const nextDueInvoice = unpaidInvoices
            .sort(
                (a, b) => new Date(a.Due).getTime() - new Date(b.Due).getTime()
            )
            .find((invoice) => new Date(invoice.Due) >= new Date());

        return {
            totalUnpaid,
            totalUnpaidCount: unpaidInvoices.length,
            nextDueInvoice,
        };
    }, [invoices]);

    return (
        <div className="flex h-full flex-col gap-2 md:gap-2 lg:h-full lg:flex-row">
            <div className="flex h-full w-full flex-col gap-2 lg:h-full lg:w-2/3 lg:flex-row ">
                <WelcomeCard />
                <div className="flex w-full flex-row gap-2 px-2 lg:px-0">
                    <DataCard
                        title="Total Unpaid"
                        data={`${totalUnpaid}`}
                        subtitle={`${totalUnpaidCount} invoices`}
                    />
                    <DataCard
                        title="Next Due Invoice"
                        data={
                            nextDueInvoice ? `${nextDueInvoice.Amount}` : 'N/A'
                        }
                        subtitle={
                            nextDueInvoice
                                ? `${nextDueInvoice.Due}`
                                : 'No upcoming invoices'
                        }
                    />
                </div>
            </div>
            <div className="flex w-full flex-col px-2 lg:w-1/3 lg:px-0 ">
                <PaymentDetailsCard />
            </div>
        </div>
    );
};

export default TopRowCards;
