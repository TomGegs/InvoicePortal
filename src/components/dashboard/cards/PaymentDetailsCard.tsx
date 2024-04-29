import { CreditCard } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Separator } from '../../ui/separator';

const PaymentDetailsCard = () => {
    return (
        <Card>
            <CardHeader className="h-full content-center justify-center object-center text-left">
                <CardTitle>Payment Information</CardTitle>
                <CardDescription className="mt-10 max-w-lg text-balance leading-relaxed ">
                    {' '}
                    <Separator className="my-4" />
                    <div className="grid gap-3">
                        <div className="font-semibold">Payment Information</div>
                        <dl className="grid gap-3">
                            <div className="flex items-center justify-between">
                                <dt className="text-muted-foreground flex items-center gap-1">
                                    <CreditCard className="h-4 w-4" />
                                    Visa
                                </dt>
                                <dd>**** **** **** 4532</dd>
                            </div>
                        </dl>
                    </div>
                </CardDescription>
            </CardHeader>
        </Card>
    );
};

export default PaymentDetailsCard;
