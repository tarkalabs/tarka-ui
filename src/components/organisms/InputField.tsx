import React from "react";
import InputUnstyled from "@mui/base/InputUnstyled";
import { InputUnstyledProps } from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import { ReactNode } from "react";
import { setUpTokens } from "@/utils/ThemeParse";
import { bodySize5, bodySize7 } from "@/assets/fonts/fonts";

interface FrameProps {

}

export type InputFieldProps = FrameProps & InputUnstyledProps;

const InputFieldFrame = styled(InputUnstyled)`

`;

const InputFieldComponent: React.FC<InputFieldProps> = function ({ ...props }) {
    setUpTokens([
        "input/input-background",
        "input/text-dim",
        "primary/primary",
        "error/error",
        "warning/warning",
        "success/success",
        "utility/disabled-background",
        "utility/disabled-content",
    ]);

    return (
        <InputFieldFrame 
            className='tarka-input-field'
        />
    );
};

InputFieldComponent.defaultProps = {
    placeholder: 'Label',
    //helperText: 'Helper/hint text goes here',
}

export default InputFieldComponent;
