import React from 'react';
export interface TabProps {
    label: string;
    children?: React.ReactNode;
}
export declare const Tab: React.ForwardRefExoticComponent<TabProps & React.RefAttributes<HTMLDivElement>>;
