import React, { ReactNode } from "react";
import { PopperUnstyled, PopperUnstyledProps as MUIProps } from "@mui/base";
import { styled } from "@mui/system";
import { setUpTokens } from "../utils/ThemeParse";
import { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled';

import { ReactComponent as Success } from '../assets/icons/Success.svg';
import { ReactComponent as Info } from '../assets/icons/Info.svg';
import { ReactComponent as Warning } from '../assets/icons/Warning.svg';
import { ReactComponent as Error } from '../assets/icons/Error.svg';
import Button, {} from "./Button";


setUpTokens(["success/success", "success/on-success", "secondary/secondary", "secondary/on-secondary", "warning/warning", "warning/on-warning", "error/error", "error/on-error"]);

interface TarkaProps{
    icon?:ReactNode,
    colortype?:'success' | 'information' | 'warning' | 'error',
    buttonProps?:ButtonUnstyledProps
    customButton?: ReactNode,
    startIcon?:ReactNode
}

export type SnackbarProps = TarkaProps & MUIProps;

const TarkaPopper = styled(PopperUnstyled)`
    border-radius: 3200px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    .content-container{
        margin:16px;
        display:flex;
        flex-direction: row;
        align-items: center;
    }
    .icon-container{
        margin-right:8px;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .button-container{
        margin-left: 24px;
    }

    &.success{
        background-color: var(--success-success);
        color:var(--success-on-success);
    }

    &.information{
        background-color: var(--secondary-secondary);
        color:var(--secondary-on-secondary);
    }

    &.warning{
        background-color: var(--warning-warning);
        color:var(--warning-on-warning);
    }

    &.error{
        background-color: var(--error-error);
        color:var(--error-on-error)
    }
`



const Snackbar:React.FC<SnackbarProps> = function({colortype = 'success',buttonProps, customButton, open, startIcon,...props}){

    let defaultIcon = <Success />
    let color = 'success'
    switch(colortype){
        case 'information': defaultIcon = <Info />; color='secondary'; break;
        case 'warning': defaultIcon = <Warning />; color='warning';break;
        case 'error': defaultIcon = <Error />; color='error';break;
    }

    let defaultButton = customButton
    if(!customButton && buttonProps?.children){
        defaultButton = <Button colortype={"outlined"} size='small' disableHover style={{ background: `var(--${color}-on-${color})`, color: `var(--${color}-${color})`, outline: 'none' }} {...buttonProps} >
            {buttonProps.children} 
            </Button>
    }

    return(
        <TarkaPopper open={open} {...props} componentsProps={{ root: { className: `${colortype}` } }}>
            <div className="content-container">
                <div className="icon-container">{startIcon? startIcon: defaultIcon}</div>

                <div className="child-container">{typeof(props.children) ==='function'? props.children({
                    placement: props.placement? props.placement: 'bottom'
                }): props.children}</div>

                {defaultButton && <div className="button-container">{defaultButton}</div>}
            </div>
        </TarkaPopper>

    )
}

export default Snackbar;
