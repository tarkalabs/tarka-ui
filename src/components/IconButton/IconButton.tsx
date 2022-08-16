import React, { ReactNode } from "react";
import Badge from "../Badge/Badge";
import './IconButton.css'
import '../../utils/ThemeParse'
import { setUpTokens } from "../../utils/ThemeParse";

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

    const smallIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
            <path d="M0.897052 1.05379L0.96967 0.96967C1.23594 0.703403 1.6526 0.679197 1.94621 0.897052L2.03033 0.96967L5 3.939L7.96967 0.96967C8.26256 0.676777 8.73744 0.676777 9.03033 0.96967C9.32322 1.26256 9.32322 1.73744 9.03033 2.03033L6.061 5L9.03033 7.96967C9.2966 8.23594 9.3208 8.6526 9.10295 8.94621L9.03033 9.03033C8.76406 9.2966 8.3474 9.3208 8.05379 9.10295L7.96967 9.03033L5 6.061L2.03033 9.03033C1.73744 9.32322 1.26256 9.32322 0.96967 9.03033C0.676777 8.73744 0.676777 8.26256 0.96967 7.96967L3.939 5L0.96967 2.03033C0.703403 1.76406 0.679197 1.3474 0.897052 1.05379L0.96967 0.96967L0.897052 1.05379Z" />
        </svg>
    )

    const largeIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M0.397052 0.553788L0.46967 0.46967C0.735936 0.203403 1.1526 0.179197 1.44621 0.397052L1.53033 0.46967L8 6.939L14.4697 0.46967C14.7626 0.176777 15.2374 0.176777 15.5303 0.46967C15.8232 0.762563 15.8232 1.23744 15.5303 1.53033L9.061 8L15.5303 14.4697C15.7966 14.7359 15.8208 15.1526 15.6029 15.4462L15.5303 15.5303C15.2641 15.7966 14.8474 15.8208 14.5538 15.6029L14.4697 15.5303L8 9.061L1.53033 15.5303C1.23744 15.8232 0.762563 15.8232 0.46967 15.5303C0.176777 15.2374 0.176777 14.7626 0.46967 14.4697L6.939 8L0.46967 1.53033C0.203403 1.26406 0.179197 0.8474 0.397052 0.553788L0.46967 0.46967L0.397052 0.553788Z" />
        </svg>
    )

    let defaultEle: ReactNode;
    if (size === 'XS' || size === 'small') {
        defaultEle = smallIcon;
    }
    else {
        defaultEle = largeIcon;
    }

    return (
        <div className={`icon-button ${disabled && type === 'ghost' ? 'disabled' : ''}`}>
            {badge && <div className={`badge-container ${size}`}>
                {createBadge(size, badge)}
            </div>}
            <div className={`icon-button-button ${type} ${size}`}>
                {icon && <img src={icon} />}
                {!icon && defaultEle}
            </div>
        </div>
    )
}

export default IconButton;
