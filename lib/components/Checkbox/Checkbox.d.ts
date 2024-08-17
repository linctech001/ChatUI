import React from 'react';
export type CheckboxValue = string | number | undefined;
export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    value?: CheckboxValue;
    label?: CheckboxValue;
};
export declare const Checkbox: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & {
    value?: CheckboxValue;
    label?: CheckboxValue;
} & React.RefAttributes<HTMLLabelElement>>;
