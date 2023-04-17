/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Text the label will show
     */
    label: string;
    /**
     * How large should the label be?
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalize label text?
     */
    allCaps?: boolean;
    /**
     * Label text color
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * What text color to use
     */
    fontColor?: string;
    /**
     * What background color to use
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, backgroundColor, color, fontColor, label, size, }: MyLabelProps) => JSX.Element;
