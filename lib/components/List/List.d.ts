import React from 'react';
export interface ListProps {
    className?: string;
    bordered?: boolean;
    children?: React.ReactNode;
}
export declare const List: React.ForwardRefExoticComponent<ListProps & React.RefAttributes<HTMLDivElement>>;
