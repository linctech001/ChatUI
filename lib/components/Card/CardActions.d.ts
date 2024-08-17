import React from 'react';
export interface CardActionsProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    direction?: 'column' | 'row';
    children?: React.ReactNode;
}
export declare const CardActions: React.ForwardRefExoticComponent<CardActionsProps & React.RefAttributes<HTMLDivElement>>;
