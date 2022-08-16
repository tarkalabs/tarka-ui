import React, {ReactNode} from 'react';
import './Divider.css';
import { generateTokens } from '../../utils/ThemeParse'
import { ReactComponent as PlusIcon } from '@icons/plus.svg';

interface props {
    children?: React.ReactNode,
    type: "divider" | "spacer",
    tbMargin?: number,
    lrMargin?: number,
}

type SpacerProps = 
    | {
        type: "spacer",
        height?: number,
        orientation?: "horizontal",
    }
    | {
        type: "divider",
        height?: never,
        orientation?: "horizontal" | "vertical",
    }

const Divider: React.FC<props & SpacerProps> = ({ type, height, orientation, tbMargin, lrMargin }: props & SpacerProps) => {
    generateTokens(['surface/surface-variant']);

    return (
        <div 
            className={`divider ${type} ${orientation ? orientation : ''}`}
            style={{
                '--spacerHeight': height ? `${height}px` : undefined,
                marginTop: tbMargin,
                marginBottom: tbMargin,
                marginLeft: lrMargin,
                marginRight: lrMargin,
            } as React.CSSProperties}
        >
        </div>
    );
};

export default Divider;
