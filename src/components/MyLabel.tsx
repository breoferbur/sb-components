import './mylabel.css'

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
    color?: 'primary' | 'secondary' | 'tertiary'
    /**
     * What text color to use
     */
    fontColor?: string
}

export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    fontColor,
    label = 'No label',
    size = 'normal',
}: MyLabelProps) => {
    return (
        <span 
            className={`label ${size} text-${color}`}
            style={{ color: fontColor }}
        >
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}
