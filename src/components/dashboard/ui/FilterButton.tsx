import { Button } from '../../ui/button';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import { ListFilter } from 'lucide-react';

const FilterButton = () => {
    return (
        <div className=" items-right col-span-1 mx-auto hidden justify-center sm:flex">
            <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-7 gap-1 text-sm"
                        >
                            <ListFilter className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only">
                                Filter
                            </span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem checked>
                            All
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>
                            Paid
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>
                            Unpaid
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default FilterButton;
