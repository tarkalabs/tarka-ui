import React from "react";
import './SuccessCheck.css'
import '../../utils/ThemeParse'
import { setUpTokens } from "../../utils/ThemeParse";
import { ReactComponent as CheckmarkIcon } from '@icons/checkmark.svg';

const SuccessCheck: React.FC= function () {
    setUpTokens(['success/success', 'success/on-success']);

    return (
        <div className="success-check">
            <div className="success">
                <CheckmarkIcon/>
            </div>
        </div>
    )
}

export default SuccessCheck;
