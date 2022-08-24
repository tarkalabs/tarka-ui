import * as React from 'react';
import { styled } from '@mui/system';
import { ReactNode } from 'react';
import { setUpTokens } from '@/utils/ThemeParse';
import {TextField as MUITextField, TextFieldProps as MUIProps} from '@mui/material';

interface TarkaProps{
    tarkastate?: 'error' | 'alert' | 'success'
}

export type TextFieldProps = TarkaProps & MUIProps

setUpTokens(['utility/disabled-content','primary/primary','error/error','warning/warning','success/success','input/text', 'input/input-background']);

const TarkaTextField = styled(MUITextField)`
    background-color: var(--input-input-background);
    input{
        color: var(--input-text); 
    }
 label,label.Mui-focused{
    color:var(--utility-disabled-content);
}

& > div{
    &:before,&:hover:before{
        border-color:var(--utility-disabled-content);
    }
    &:after{
        border-color:var(--primary-primary)  
    }
}

&.success > div{
    &:before, &:hover:before,&:after{
        border-color:var(--success-success);
    }
}

&.alert > div{
    &:before, &:hover:before,&:after{
        border-color:var(--warning-warning);
    }
}

&.error > div{
    &:before, &:hover:before,&:after{
        border-color:var(--error-error);
    }
}
`


const TextField:React.FC<TextFieldProps> = function({tarkastate,...props}){
    return <TarkaTextField className={`${tarkastate}`}  type={'text'} variant={'filled'} {...props} />
}


export default TextField;