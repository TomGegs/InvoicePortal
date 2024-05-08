import { ChevronLeft, ChevronRight, Copy } from 'lucide-react';

import { Button } from '../../ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../../ui/card';

import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from '../../ui/pagination';
import { Separator } from '../../ui/separator';

import { InvoiceData } from '../../../data/dataSchema';

interface InvoiceSidebarProps {
    invoice: InvoiceData | null;
    onNext: () => void;
    onPrev: () => void;
    currentIndex: number;
    totalInvoices: number;
}

const InvoiceSidebar = ({
    invoice,
    onNext,
    onPrev,
    currentIndex,
    totalInvoices,
}: InvoiceSidebarProps) => {
    if (!invoice) {
        return;
    }
    return (
        <Card className="h-fit w-full gap-2 overflow-hidden md:gap-2 lg:h-full lg:w-1/3 ">
            <CardHeader className="bg-muted/50 flex flex-row items-start">
                <div className="grid gap-0.5 text-left">
                    <CardTitle className="group flex items-center gap-2 text-left text-lg">
                        Invoice ID: {invoice.id}
                        <Button
                            size="icon"
                            variant="outline"
                            className="h-6 w-6  opacity-0 transition-opacity group-hover:opacity-100"
                        >
                            <Copy className="h-3 w-3 " />
                            <span className="sr-only">Copy Order ID</span>
                        </Button>
                    </CardTitle>
                    <CardDescription>DUE DATE: {invoice.Due}</CardDescription>
                    <CardDescription>
                        ISSUE DATE: {invoice.IssueDate}
                    </CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                    <Button size="sm" variant="outline" className="h-8 w-fit">
                        <a target="_blank" href={invoice.File}>
                            Download
                        </a>
                    </Button>
                </div>
            </CardHeader>

            {/* Invoice Details */}
            <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                    <div className="font-semibold">Invoice Details</div>
                    <dl className="grid gap-3">
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">
                                Description
                            </dt>
                            <dd>{invoice.Description}</dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">
                                Date Of Work
                            </dt>
                            <dd>
                                {invoice.StartDate} to {invoice.EndDate}
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">
                                Rate per hour
                            </dt>
                            <dd>${invoice.RatePerHour}</dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Hours</dt>
                            <dd>{invoice.HoursWorked}</dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">
                                Item Total
                            </dt>
                            <dd>${invoice.Amount}</dd>
                        </div>
                    </dl>
                    <Separator className="my-2" />
                    <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Subtotal
                            </span>
                            <span>${invoice.Amount}</span>
                        </li>

                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                GST (10%)
                            </span>
                            <span>${invoice.GST}</span>
                        </li>
                        <li className="flex items-center justify-between font-semibold">
                            <span className="text-muted-foreground">Total</span>
                            <span>${invoice.Amount + invoice.GST}</span>
                        </li>
                    </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                    <div className="font-semibold">Developer Information</div>
                    <dl className="grid gap-3">
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Developer</dt>
                            <dd>Tom Geoghegan</dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Email</dt>
                            <dd>
                                <a href="mailto:">tomgegs@outlook.com</a>
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Phone</dt>
                            <dd>
                                <a href="tel:">0404 040 123</a>
                            </dd>
                        </div>
                    </dl>
                </div>
            </CardContent>
            <CardFooter className="bg-muted/50 flex flex-row items-center border-t px-6 py-3">
                <div className="text-muted-foreground text-xs">
                    Thank you for your business
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                    <PaginationContent>
                        <PaginationItem>
                            <Button
                                onClick={onPrev}
                                size="icon"
                                variant="outline"
                                className="h-8 w-8"
                                disabled={currentIndex <= 0}
                            >
                                <ChevronLeft className="h-3.5 w-3.5" />
                                <span className="sr-only">
                                    Previous Invoice
                                </span>
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button
                                onClick={onNext}
                                size="icon"
                                variant="outline"
                                className="h-8 w-8"
                                disabled={currentIndex >= totalInvoices - 1}
                            >
                                <ChevronRight className="h-3.5 w-3.5" />
                                <span className="sr-only">Next Invoice</span>
                            </Button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </CardFooter>
        </Card>
    );
};

export default InvoiceSidebar;
