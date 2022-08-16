import React, { ReactNode } from "react";
import Badge from "../Badge/Badge";
import './IconButton.css'
import '../../utils/ThemeParse'
import { setUpTokens } from "../../utils/ThemeParse";
import {ReactComponent as CloseIconSmall} from "@icons/close/close-small.svg";
import {ReactComponent as CloseIconLarge} from "@icons/close/close-large.svg";

interface props {
    type?: "primary" | "secondary" | "ghost",
    icon?: string,
    badge?: any
    size: "XS" | "small" | "regular" | "large" | "XL"
    disabled: boolean
}

function createBadge(size: string, numberIn: any) {
    if (size === 'XL' && numberIn) {
        return <Badge size="regular" number={Number.isInteger(numberIn) ? numberIn : undefined} />
    }
    else if (size === 'large' && numberIn) {
        return <Badge size='small' />
    }
    return <></>

}

const IconButton: React.FC<props> = function ({ icon, type = "primary", badge, size, disabled }) {

    setUpTokens(['surface/on-surface', 'utility/disabled-content', 'primary/primary', 'primary/on-primary', 'primary/primary-hover', 'secondary/secondary',
        'secondary/on-secondary', 'secondary/secondary-hover']);

    return (
        <div className={`icon-button ${disabled && type === 'ghost' ? 'disabled' : ''}`}>
            {badge && <div className={`badge-container ${size}`}>
                {createBadge(size, badge)}
            </div>}
            <div className={`icon-button-button ${type} ${size}`}>
                {icon && <img src={icon} />}
                {!icon && ((size === 'XS' || size ==='small') ? <CloseIconSmall/> : <CloseIconLarge/>)}
            </div>
        </div>
    )
}

export default IconButton;
