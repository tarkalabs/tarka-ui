import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { setUpTokens } from "@/utils/ThemeParse";
import { styled } from "@mui/system";

interface RootProps {}

export type InputFieldProps = RootProps & TextFieldProps;

const InputStyles = {
        background-color: var(--input-input-background),
        border-width: 0 0 2px 0,
        border-radius: 8px,
        color: var(--input-text-dim),
        padding: 17px 16px,
        outline: none,
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
        <InputFieldRoot></InputFieldRoot>;
    );
};

InputFieldComponent.defaultProps = {
    placeholder: "Label",
    //helperText: 'Helper/hint text goes here',
};

export default InputFieldComponent;
