import React from 'react';
export interface VideoHandle {
    wrapperRef: React.RefObject<HTMLDivElement>;
}
export type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
    className?: string;
    src?: string;
    cover?: string;
    duration?: string | number;
    style?: React.CSSProperties;
    videoRef?: React.RefObject<HTMLVideoElement>;
    onClick?: (paused: boolean, event: React.MouseEvent) => void;
    onCoverLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
};
export declare const Video: React.ForwardRefExoticComponent<React.VideoHTMLAttributes<HTMLVideoElement> & {
    className?: string | undefined;
    src?: string | undefined;
    cover?: string | undefined;
    duration?: string | number | undefined;
    style?: React.CSSProperties | undefined;
    videoRef?: React.RefObject<HTMLVideoElement> | undefined;
    onClick?: ((paused: boolean, event: React.MouseEvent) => void) | undefined;
    onCoverLoad?: ((event: React.SyntheticEvent<HTMLImageElement, Event>) => void) | undefined;
} & React.RefAttributes<VideoHandle>>;
