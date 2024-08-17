import React from 'react';
type ILocales = {
    [k: string]: any;
};
export type ConfigContextType = {
    /**
     * 当前语言
     */
    locale?: string;
    /**
     * 多语言
     */
    locales?: ILocales;
    /**
     * 适老化模式
     */
    elderMode?: boolean;
};
export type ConfigProviderProps = ConfigContextType & {
    children: React.ReactNode;
};
export declare const ConfigContext: React.Context<ConfigContextType>;
export declare const ConfigProvider: ({ locale, locales, elderMode, children, }: ConfigProviderProps) => React.JSX.Element;
export declare const useConfig: () => ConfigContextType;
export declare const useLocale: (componentName?: string, fallback?: ILocales) => {
    locale: string | undefined;
    trans: (key?: string) => any;
};
export {};
