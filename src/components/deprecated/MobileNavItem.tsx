import React, { ReactNode } from "react";
import {ButtonUnstyled, ButtonUnstyledProps as MUIProps} from '@mui/base';
import {styled} from '@mui/system';
import { setUpTokens } from "@/utils/ThemeParse";


interface TarkaProps{
	icon:ReactNode,
    hideLabel?:boolean,
    active?:boolean
}


export type NavItemProps = TarkaProps & MUIProps;


const TarkaMobileNavItem = styled(ButtonUnstyled)`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:12.25px;
    
    background: none;
    border: none;
    
    color: var(--surface-on-surface);
    fill: var(--surface-on-surface);
    stroke: var(--surface-on-surface);
    .text-container{

        /* Button/size-8 */

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        /* identical to box height, or 117% */

        letter-spacing: 0.01em;
    }

    &.active{
        color: var(--secondary-secondary);
        fill: var(--secondary-secondary);
        stroke: var(--secondary-secondary);
    }
`


const MobileNavItem:React.FC<NavItemProps> = function({icon, hideLabel= false, active=false,...props}){

	setUpTokens(['surface/on-surface', 'secondary/secondary']);

        return(
            <TarkaMobileNavItem componentsProps={{ root: { className: `${active?'active':''}` } }} {...props}>
                <div>
                    {icon}
                </div>
                <div className="text-container">
                {hideLabel?null :props.children}
                </div>
            </TarkaMobileNavItem>
        )

}


export default MobileNavItem;
