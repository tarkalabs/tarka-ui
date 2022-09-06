import React from 'react';
import InputUnstyled from '@mui/base/InputUnstyled';
import {InputUnstyledProps} from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import { ReactNode } from 'react';
import { setUpTokens } from '@/utils/ThemeParse';


interface FrameProps {

}

export type InputFieldProps = FrameProps & InputUnstyledProps;

const InputFieldFrame = styled(InputUnstyled)`
    input {
        background-color: var(--input-input-background);
    }
`

const InputField: React.FC<InputFieldProps> = function ({ ...props }) {
    setUpTokens(['input/input-background', 'input/text-dim', 'primary/primary', 'error/error', 'warning/warning', 'success/success',
        'utility/disabled-background', 'utility/disabled-content']);

    return (
        <InputFieldFrame className={props.className} {...props} >

        </InputFieldFrame>
    )
}

export default InputField;
