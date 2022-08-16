import React from "react";
import './Badge.css'
import '../../utils/ThemeParse'
import { setUpTokens } from "../../utils/ThemeParse";
interface props {
    number?: number,
    size: 'small' | 'regular' | 'large'
}
const Badge: React.FC<props> = function ({ number, size }) {
    setUpTokens(['error/error', 'error/on-error', 'button/size-7']);

    return (
        <div className={`badge ${size}`}>

            {size != 'small' && <div>{number} </div>}

        </div>
    )
}

export default Badge;
