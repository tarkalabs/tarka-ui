import React from "react";
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from "@mui/system";
import { setUpTokens } from "@/utils/ThemeParse";
import { bodySize5, bodySize7 } from "@/assets/fonts/fonts";

interface FrameProps {

}

export type InputFieldProps = FrameProps & TextFieldProps;

const InputFieldFrame = styled(TextField)`

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
            { ...props }
        />
    );
};

InputFieldComponent.defaultProps = {
    placeholder: 'Label',
    //helperText: 'Helper/hint text goes here',
}

export default InputFieldComponent;
