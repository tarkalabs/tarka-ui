import * as React from 'react';
import Badge,{BadgeUnstyledProps} from '@mui/base/BadgeUnstyled';
import { styled } from '@mui/system';
import { ReactNode } from 'react';
import { setUpTokens } from '@/utils/ThemeParse';
import BadgeUnstyled from '@mui/base/BadgeUnstyled';


export interface BadgeProps {
    size: 'large' | 'regular' | 'small',
    number?:number,
    children:ReactNode
    
}



const TestBadgeStyled = styled(BadgeUnstyled)`
background-color: var(--error-error);
color: var(--error-on-error);
width: fit-content;
border-radius: 100px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;

&.small {
    min-width: 12px;
    min-height: 12px;
}

&.regular {
    min-width: 16px;
    min-height: 16px;

    & div {

        margin: 0 4px;

        /* button/size-8 */

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
    }
}

&.large {
    min-width: 24px;
    min-height: 24px;

    & div {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;

        text-align: center;
        letter-spacing: 0.01em;

        padding: 3px 7px;
    }
}
  
`

const TestBadge: React.FC<BadgeProps & BadgeUnstyledProps> = function ({ size = 'regular',number,children, ...props }) {
    setUpTokens(['error/error', 'error/on-error', 'button/size-7']);

    return (
        <TestBadgeStyled className={`${size}`} badgeContent={size != 'small'? number:''}>
           
        </TestBadgeStyled>
    )
}


export default TestBadge;
