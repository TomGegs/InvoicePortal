import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../../ui/card';
import { Separator } from '../../ui/separator';

const PaymentDetailsCard = () => {
    const accountDetails = {
        title: 'Bank Details',
        accountName: 'Account Name',
        bsb: 'BSB: 123-456',
        accountNumber: 'Account Number: 405 123 98',
    };

    const payableDetails = {
        title: 'Payable To',
        companyName: 'Name of Company',
        address: '123 Developer Rd, Sydney, NSW 2000',
        abn: 'ABN: 19 019 109 901',
    };

    return (
        <Card>
            <CardHeader className="h-full content-center justify-center object-center text-left">
                <CardTitle>Payment Information</CardTitle>
                <div className="mt-10 w-full text-balance leading-relaxed ">
                    <Separator className="my-4" />
                    <div className="flex flex-row gap-2">
                        {/* Contact Details */}

                        <div className="flex w-1/2 flex-col">
                            <CardDescription className="flex list-none flex-col	">
                                <p className="font-semibold text-white">
                                    {accountDetails.title}
                                </p>
                                <ul>
                                    <li>{accountDetails.accountName}</li>
                                    <li>{accountDetails.bsb}</li>
                                    <li>{accountDetails.accountNumber}</li>
                                </ul>
                            </CardDescription>
                        </div>

                        <div className="flex w-1/2 flex-col">
                            <CardDescription className="flex list-none flex-col	">
                                <p className="font-semibold text-white">
                                    {payableDetails.title}
                                </p>
                                <ul>
                                    <li>{payableDetails.companyName}</li>
                                    <li>{payableDetails.address}</li>
                                    <li>{payableDetails.abn}</li>
                                </ul>
                            </CardDescription>
                        </div>
                    </div>
                </div>
            </CardHeader>
        </Card>
    );
};

export default PaymentDetailsCard;
