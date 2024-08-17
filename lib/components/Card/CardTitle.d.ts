import React from 'react';
export interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    title?: string;
    subtitle?: React.ReactNode;
    center?: boolean;
    children?: React.ReactNode;
}
export declare const CardTitle: React.ForwardRefExoticComponent<CardTitleProps & React.RefAttributes<HTMLDivElement>>;
