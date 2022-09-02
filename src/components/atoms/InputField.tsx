import React from 'react';
import InputUnstyled from '@mui/base/InputUnstyled';
import {InputUnstyledProps} from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import { ReactNode } from 'react';
import { setUpTokens } from '@/utils/ThemeParse';


interface FrameProps {
    size: 'large' | 'regular' | 'small' | 'XS',
    colortype: 'primary' | 'secondary' | 'outlined' | 'ghost',
    startIcon?: ReactNode,
    endIcon?: ReactNode,
    disableHover?: boolean
}

export type InputFieldProps = FrameProps & InputUnstyledProps;

const InputFieldFrame = styled(InputUnstyled)`

`

const InputField: React.FC<InputFieldProps> = function ({ size = 'regular', colortype = 'primary', startIcon, endIcon, disableHover=false, ...props }) {
    setUpTokens(['surface/on-surface', 'surface/surface-hover', 'primary/primary', 'primary/on-primary', 'primary/primary-hover', 'secondary/secondary',
        'secondary/on-secondary', 'secondary/secondary-hover']);

    const classes = `${size} ${colortype} ${startIcon ? 'start-icon' : ''} ${endIcon ? 'end-icon' : ''} ${disableHover? 'disableHover': ''}`

    return (
        <InputFieldFrame className={classes} {...props} >

        </InputFieldFrame>
    )
}

export default InputField;
