import React from 'react';
export interface PriceProps extends React.HTMLAttributes<HTMLDivElement> {
    price: number;
    className?: string;
    locale?: string;
    currency?: string;
    original?: boolean;
}
export declare const Price: React.ForwardRefExoticComponent<PriceProps & React.RefAttributes<HTMLDivElement>>;
