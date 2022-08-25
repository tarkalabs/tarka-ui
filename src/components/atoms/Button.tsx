import * as React from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { ButtonUnstyledProps as MUIProps } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { ReactComponent as PlusIcon } from '@icons/plus/plus-large.svg';
import { ReactNode } from 'react';
import { setUpTokens } from '@/utils/ThemeParse';


interface TarkaProps {
    size: 'large' | 'regular' | 'small' | 'XS',
    color: 'primary' | 'secondary' | 'outlined' | 'ghost',
    startIcon?: ReactNode,
    endIcon?: ReactNode
}

export type ButtonProps = TarkaProps & MUIProps;

const ButtonStyled = styled(ButtonUnstyled)`
    padding:0;
    cursor: pointer;
    border: none;
    border-radius: 3200px;
    text-align: center;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    &.large {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        gap: 11px;


        .text-container {
            margin: 14px 24px;
        }
        .start-icon-container {
            margin-left: 19px;
        }

        .end-icon-container{
            margin-right:19px;
        }
    }

    &.regular {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        gap: 8px;

        .start-icon-container {
            margin-left: 19px;
        }

        .end-icon-container{
            margin-right:19px;
        }

        .text-container {
            margin: 10px 24px;
        }
    }


    &.small {
        /* Button Size-7 */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;

        text-align: center;
        letter-spacing: 0.01em;

        gap: 4px;

        .start-icon-container {
            margin-left: 10px;
        }

        .end-icon-container{
            margin-right:10px;
        }

        .text-container {
            margin: 7px 16px;
        }
    }

    &.XS {
        /* button/size-8 */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;

        text-align: center;
        letter-spacing: 0.01em;

        gap: 4px;

        .start-icon-container {
            margin-left: 6px;
        }

        .end-icon-container{
            margin-right:6px;
        }

        .text-container {
            margin: 5px 8px;
        }
    }

        &.primary {
            background-color: var(--primary-primary);
            color: var(--primary-on-primary);
            fill:  var(--primary-on-primary); 
    
            &:hover {
                background-color: var(--primary-primary-hover);
                outline: 1.5px var(--surface-on-surface) solid;
                outline-offset: -1.5px;
            }
        }
    
        &.secondary {
            background-color: var(--secondary-secondary);
            color: var(--secondary-on-secondary);
            fill:  var(--secondary-on-secondary); 
            &:hover {
                background-color: var(--secondary-secondary-hover);
                outline: 1.5px var(--surface-on-surface) solid;
                outline-offset: -1.5px;
            }
        }
    
    &.outlined {
        background-color: transparent;
        color: var(--surface-on-surface);
        outline: 1.5px var(--surface-on-surface) solid;
        outline-offset: -1.5px;
        fill:  var(--surface-on-surface); 


        &:hover {
            background-color: var(--surface-surface-hover);
        }
    }
    
    &.ghost {
        background-color: transparent;
        color: var(--surface-on-surface);
        fill:  var(--surface-on-surface); 

        &:hover {
            background-color: var(--surface-surface-hover);
        }
    }

    &.start-icon {
        .text-container {
            margin-left: 0;
        }
    }
    
    &.end-icon {
        .text-container {
            margin-right: 0;
        }
    }

    .start-icon-container, .end-icon-container{
        display:flex;
        justify-content: center;
        align-items: center;
        
    }
`

const Button: React.FC<ButtonProps> = function ({ size = 'regular', color = 'primary', startIcon, endIcon, ...props }) {
    setUpTokens(['surface/on-surface', 'surface/surface-hover', 'primary/primary', 'primary/on-primary', 'primary/primary-hover', 'secondary/secondary',
        'secondary/on-secondary', 'secondary/secondary-hover']);

    return (
        <ButtonStyled className={`${size} ${color} ${startIcon ? 'start-icon' : ''} ${endIcon ? 'end-icon' : ''}`} {...props} >
            {startIcon && <div className="start-icon-container"> {startIcon} </div>}
            <div className='text-container'>
                {props.children}
            </div>
            {endIcon && <div className="end-icon-container"> {endIcon}</div>}
        </ButtonStyled>
    )
}


export default Button;
