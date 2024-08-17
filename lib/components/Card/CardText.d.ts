import React from 'react';
export interface CardTextProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
}
export declare const CardText: React.ForwardRefExoticComponent<CardTextProps & React.RefAttributes<HTMLDivElement>>;
