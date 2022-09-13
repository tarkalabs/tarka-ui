import React from "react";
import InputFieldRoot, { TextFieldProps } from "@mui/material/TextField";
import { setUpTokens } from "@/utils/ThemeParse";
import { styled } from "@mui/system";

interface RootProps {}

export type InputFieldProps = RootProps & TextFieldProps;

const InputStyles = {
    backgroundColor: 'var(--input-input-background)',
    borderWidth: '0 0 2px 0',
    borderRadius: '8px',
    color: 'var(--input-text-dim)',
    outline: 'none',
    '&:before': {
        borderRadius: '8px',
    },
    '&:after': {
        borderRadius: '8px',
    },
}

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
        <InputFieldRoot
            className={`tui-input-field ${props.classes}`}
            InputProps={{sx: InputStyles}}
            variant='standard'
        />
    );
};

InputFieldComponent.defaultProps = {
    placeholder: "Label",
    //helperText: 'Helper/hint text goes here',
};

export default InputFieldComponent;
