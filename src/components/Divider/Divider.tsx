import React, {ReactNode} from 'react';
import './Divider.css';
import { generateTokens } from '../../utils/ThemeParse'
import { ReactComponent as PlusIcon } from '@icons/plus.svg';

interface props {
    children?: React.ReactNode,
    type: "divider" | "spacer",
    orientation: "horizontal" | "vertical",
    tbPadding?: number,
    lrPadding?: number,
}

type SpacerProps = 
    | {
        type: "spacer",
        height?: number,
    }
    | {
        type: "divider",
        height?: never,
    }

const Divider: React.FC<props & SpacerProps> = ({ type, height, orientation, tbPadding, lrPadding }: props & SpacerProps) => {
    generateTokens(['surface/on-surface', 'utility/disabled-content', 'primary/primary', 'primary/on-primary', 'primary/primary-hover', 'secondary/secondary',
    'secondary/on-secondary', 'secondary/secondary-hover']);

  return (
    <div className="divider">
        <div 
            className={`${type} ${orientation}`} 
            style={{
                '--height': `${height}px`,
                paddingTop: tbPadding,
                paddingBottom: tbPadding,
                paddingLeft: lrPadding,
                paddingRight: lrPadding,
            } as React.CSSProperties}
        />
    </div>
  );
};

export default Divider;
