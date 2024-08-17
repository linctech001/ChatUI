import React from 'react';
import { IconButtonProps } from '../IconButton';
export interface NavbarProps {
    title: string;
    className?: string;
    logo?: string;
    leftContent?: IconButtonProps;
    rightContent?: IconButtonProps[];
    desc?: React.ReactNode;
    align?: 'left' | 'center';
}
export declare const Navbar: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLElement>>;
