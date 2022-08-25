import React, { ReactNode } from "react";
import {ButtonUnstyled, ButtonUnstyledProps as MUIProps} from '@mui/base';
import {styled} from '@mui/system';
import { setUpTokens } from "../utils/ThemeParse";
import Badge from './atoms/Badge';


interface TarkaProps{
	color?: 'primary' | 'secondary' | 'ghost',
	size?: 'XS' | 'small' |  'regular' | 'large'| 'XL',
	badgeIn?:  any
}


export type IconButtonProps = TarkaProps & MUIProps;


const TarkaIconButton = styled(ButtonUnstyled)`

    border:none;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &.primary {
        background-color: var(--primary-primary);
        fill: var(--primary-on-primary);

        &:hover {
            background-color: var(--primary-primary-hover);
            outline: 1.5px var(--surface-on-surface) solid;
            outline-offset: -1.5px;
        }
    }

    &.secondary {
        background-color: var(--secondary-secondary);
        fill: var(--secondary-on-secondary);
    }

    &.ghost {
        background-color: transparent;
        fill: var(--surface-on-surface);

        &:hover {
            background-color: rgba(0, 0, 0, .04);
        }
    }

    &.XS {
        width: 20px;
        height: 20px;
    }

    &.small {
        width: 24px;
        height: 24px;
    }

    &.regular {
        width: 32px;
        height: 32px;
    }

    &.large {
        width: 40px;
        height: 40px;
    }

    &.XL {
        width: 48px;
        height: 48px;
    }



.icon-button.disabled {
    .icon-button-button {
        cursor:not-allowed;
    }

    .ghost {
        path {
            fill: var(--utility-disabled-content);
        }
    }
}

&.badged{
    position: relative;
    top: -8px;
    left: 6px;
}
`


const IconButton:React.FC<IconButtonProps> = function({size = 'regular',color ='primary', badgeIn,...props}){

	setUpTokens(['surface/on-surface', 'utility/disabled-content', 'primary/primary', 'primary/on-primary', 'primary/primary-hover', 'secondary/secondary',
        'secondary/on-secondary', 'secondary/secondary-hover']);


 	let returnValue = <TarkaIconButton className={` ${size}  ${color} ${badgeIn? 'badged': ''}`}   {...props} />;

    
	if(badgeIn){
		return <Badge {...badgeIn.props}>{returnValue}</Badge>
	} 

	return (
		returnValue
	)
}


export default IconButton;
