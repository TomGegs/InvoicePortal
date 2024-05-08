import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from './utils';

const badgeVariants = cva(
    'inline-flex items-center rounded-full border justify-center  border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300',
    {
        variants: {
            variant: {
                notPaid:
                    'border-transparent bg-slate-900 w-20 px-4 text-red-700  hover:bg-slate-900/80 dark:bg-slate-50 dark:hover:bg-slate-50/80',
                paid: 'border-transparent bg-slate-100 w-20 px-4 hover:bg-slate-100/80 dark:bg-slate-800 text-green-400 dark:hover:bg-slate-800/80',
                destructive:
                    'border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80',
                outline: 'text-slate-950 dark:text-slate-50',
            },
        },
        defaultVariants: {
            variant: 'notPaid',
        },
    }
);
export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
