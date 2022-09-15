import React from "react";
import { injectTokens } from "@/utils/ThemeParse";
import { ReactComponent as CheckmarkIcon } from '@icons/checkmark.svg';
import { styled } from "@mui/system";
injectTokens(['success/success', 'success/on-success']);

const TarkaSuccessCheck = styled('div')`
.success{
    background-color: var(--success-success);
    fill: var(--success-on-success);
    width: fit-content;
    border-radius: 100px;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 16px;
    min-height: 16px;
}
`


const SuccessCheck:React.FC<{}> = function({}){
    injectTokens(['success/success', 'success/on-success']);

    return (
        <TarkaSuccessCheck className="success-check">
            <div className="success">
                <CheckmarkIcon/>
            </div>
        </TarkaSuccessCheck>
    )
}

export default SuccessCheck;
