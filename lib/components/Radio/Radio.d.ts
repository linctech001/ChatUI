import React from 'react';
export type RadioValue = string | number | undefined;
export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
    value?: RadioValue;
    label?: RadioValue;
};
export declare const Radio: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & {
    value?: RadioValue;
    label?: RadioValue;
} & React.RefAttributes<HTMLLabelElement>>;
