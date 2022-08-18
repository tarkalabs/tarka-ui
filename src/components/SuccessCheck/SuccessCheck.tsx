import React from "react";
import './SuccessCheck.css'
import '../../utils/ThemeParse'
import { setUpTokens } from "../../utils/ThemeParse";
import CheckmarkIcon from '@icons/checkmark.svg';

const SuccessCheck: React.FC= function () {
    setUpTokens(['success/success', 'success/on-success']);

    return (
        <div className="SuccessCheck">
            <div className="success">
                <img src={CheckmarkIcon} alt="logo"/>
            </div>
        </div>
    )
}

export default SuccessCheck;
