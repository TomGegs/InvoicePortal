import { ChevronLeft, ChevronRight, Copy, CreditCard } from 'lucide-react';

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

const InvoiceSidebar = () => {
    return (
        <Card className="h-full gap-4 w-1/3 overflow-hidden md:gap-8 ">
            <CardHeader className="bg-muted/50 flex flex-row items-start">
                <div className="grid gap-0.5 text-left">
                    <CardTitle className="group flex items-center gap-2 text-left text-lg">
                        ORDER Oe31b70H
                        <Button
                            size="icon"
                            variant="outline"
                            className="h-6 w-6  opacity-0 transition-opacity group-hover:opacity-100"
                        >
                            <Copy className="h-3 w-3 " />
                            <span className="sr-only">Copy Order ID</span>
                        </Button>
                    </CardTitle>
                    <CardDescription>
                        DUE DATE: November 23, 2023
                    </CardDescription>
                    <CardDescription>
                        ISSUE DATE: November 23, 2023
                    </CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                    <Button size="sm" variant="outline" className="h-8 w-fit">
                        Download
                    </Button>
                </div>
            </CardHeader>

            {/* Invoice Details */}
            <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                    <div className="font-semibold">Invoice Details</div>

                    <ul className="grid-cols- grid w-full place-items-end gap-3 bg-red-400">
                        <li className="flex grid-cols-2 place-self-start text-left">
                            DESCRIPTION
                        </li>
                        <li className="flex grid-cols-1 ">HOURS</li>
                        <li className="flex grid-cols-1">RATE / HR</li>
                        <li className="flex w-full grid-cols-1 bg-blue-500">
                            ITEM TOTAL
                        </li>
                    </ul>

                    <ul className="grid w-full grid-cols-5 place-items-end items-end gap-3 bg-red-400">
                        <li className="flex w-full grid-cols-2 place-self-start bg-black text-left">
                            Frontend Developer
                        </li>
                        <li className="flex w-full grid-cols-1 bg-yellow-600 text-right">
                            40
                        </li>
                        <li className="flex grid-cols-1 text-end">$45</li>
                        <li className="flex grid-cols-1 text-end">$1800</li>
                    </ul>

                    <Separator className="my-2" />
                    <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                Subtotal
                            </span>
                            <span>$299.00</span>
                        </li>

                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                                GST (10%)
                            </span>
                            <span>$25.00</span>
                        </li>
                        <li className="flex items-center justify-between font-semibold">
                            <span className="text-muted-foreground">Total</span>
                            <span>$329.00</span>
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
            </CardContent>
            <CardFooter className="bg-muted/50 flex flex-row items-center border-t px-6 py-3">
                <div className="text-muted-foreground text-xs">
                    Updated <time dateTime="2023-11-23">November 23, 2023</time>
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                    <PaginationContent>
                        <PaginationItem>
                            <Button
                                size="icon"
                                variant="outline"
                                className="h-6 w-6"
                            >
                                <ChevronLeft className="h-3.5 w-3.5" />
                                <span className="sr-only">Previous Order</span>
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button
                                size="icon"
                                variant="outline"
                                className="h-6 w-6"
                            >
                                <ChevronRight className="h-3.5 w-3.5" />
                                <span className="sr-only">Next Order</span>
                            </Button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </CardFooter>
        </Card>
    );
};

export default InvoiceSidebar;
