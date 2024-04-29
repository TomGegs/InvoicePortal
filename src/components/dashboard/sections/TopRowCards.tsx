import DataCard from '../cards/DataCard';
import PaymentDetailsCard from '../cards/PaymentDetailsCard';
import WelcomeCard from '../cards/WelcomeCard';

const TopRowCards = () => {
    return (
        <div className="flex flex-row gap-4 md:gap-8">
            <div className="flex w-2/3 flex-row gap-4 md:gap-8">
                <WelcomeCard />
                <DataCard
                    title="Next Invoice"
                    data="1,339"
                    date="Due: June 23, 2023"
                />
                <DataCard
                    title="Total Outstanding Invoices"
                    data="6,591"
                    date="message here"
                />
            </div>
            <div className="flex w-1/3 flex-col">
                <PaymentDetailsCard />
            </div>
        </div>
    );
};

export default TopRowCards;
