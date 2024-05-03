import { Card, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Separator } from '../../ui/separator';

const PaymentDetailsCard = () => {
    interface PaymentDetailData {
        title: string;
        items: {
            label: string;
            value: string;
        }[];
    }

    const paymentDetails: PaymentDetailData[] = [
        {
            title: 'Bank Details',
            items: [
                { label: 'Account Name', value: 'Company Bank' },
                { label: 'BSB', value: '123-456' },
                { label: 'Account Number', value: '405 123 98' },
            ],
        },
        {
            title: 'Payable To',
            items: [
                { label: 'Name', value: 'Company Inc' },
                {
                    label: 'Address',
                    value: '123 Dev Rd, Sydney, NSW 2000',
                },
                { label: 'ABN', value: '19 019 109 901' },
            ],
        },
    ];

    return (
        <Card>
            <CardHeader className="h-full content-center justify-center object-center text-left">
                <CardTitle>Payment Information</CardTitle>
                <div className="mt-10 w-full text-balance leading-relaxed ">
                    <Separator className="my-2 lg:my-4" />
                    <div className="flex flex-col gap-2 lg:flex-row">
                        {/* paymentDetails data mapped */}
                        {paymentDetails.map((detail, index) => (
                            <div
                                key={index}
                                className="flex w-full flex-col lg:w-1/2"
                            >
                                <CardDescription className="flex list-none flex-col">
                                    <p className="font-semibold text-white">
                                        {detail.title}
                                    </p>
                                    <ul>
                                        {detail.items.map((item, itemIndex) => (
                                            <li
                                                key={itemIndex}
                                            >{`${item?.label}: ${item.value}`}</li>
                                        ))}
                                    </ul>
                                </CardDescription>
                            </div>
                        ))}
                    </div>
                </div>
            </CardHeader>
        </Card>
    );
};

export default PaymentDetailsCard;
