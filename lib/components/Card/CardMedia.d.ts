import React from 'react';
export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    aspectRatio?: 'square' | 'wide';
    color?: string;
    image?: string;
    children?: React.ReactNode;
}
export declare const CardMedia: React.ForwardRefExoticComponent<CardMediaProps & React.RefAttributes<HTMLDivElement>>;
