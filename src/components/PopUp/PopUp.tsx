import React from "react";
import './PopUp.css'
import '../../utils/ThemeParse'
import { setUpTokens } from "../../utils/ThemeParse";
interface props {
    number?: number,
    size: 'small' | 'regular' | 'large'
}
const PopUp: React.FC<props> = function ({ number, size }) {
    setUpTokens(['error/error', 'error/on-error', 'button/size-7']);

    return (
        <div className={`pop-up ${size}`}>

            {size != 'small' && <div>{number} </div>}

        </div>
    )
}

export default PopUp;
