import React from "react";
import InputLabelUnstyled from "@mui/material/InputLabel";
import { InputLabelProps as InputLabelUnstyledProps } from "@mui/material/InputLabel";
import { styled } from "@mui/system";
import { injectTokens } from "@/utils/ThemeParse";
import { bodySize5, bodySize8 } from "@/assets/fonts/fonts";

interface RootProps {
    success?: boolean;
    warning?: boolean;
    startAdornment?: boolean;
}

export type InputLabelProps = RootProps & InputLabelUnstyledProps;

const InputLabelRoot = styled(InputLabelUnstyled)<InputLabelProps>`
    ${bodySize5};
    color: var(--input-text-dim);
    transform: none;
    overflow: visible;
    top: 10px;
    left: 16px;
    z-index: 1;
    transition: top cubic-bezier(0.4, 0, 0.2, 1) 0.25s, transform cubic-bezier(0.4, 0, 0.2, 1) 0.25s, font-size cubic-bezier(0.4, 0, 0.2, 1) 0.25s;

    &:not(.Mui-focused):not(.MuiFormLabel-filled) {
        top: 50%;
        transform: translateY(-50%);
    }

    &.Mui-focused, &.MuiFormLabel-filled {
        ${bodySize8}
        color: var(--input-text-dim);
    }

    + .MuiInput-root {
        .MuiInput-input {
            padding-top: 24px;
            padding-bottom: 10px;
        }
    }

    &.TuiInputLabel-adornedStart {
        left: 45px;
    }
` as React.FC<InputLabelProps>;

const InputLabelComponent: React.FC<InputLabelProps> = function ({
    success = false,
    warning = false,
    startAdornment = false,
    ...props
}) {
    injectTokens([
        "input/input-background",
        "input/text",
        "input/text-dim",
        "primary/primary",
        "error/error",
        "warning/warning",
        "success/success",
        "utility/disabled-background",
        "utility/disabled-content",
    ]);

    return (
        <InputLabelRoot
            className={`TuiInputLabel-root ${warning ? "Tui-warning" : ""} ${success ? "Tui-success" : ""} ${startAdornment ? "TuiInputLabel-adornedStart" : ""}`}
            {...props}
        >
            {props.children}
        </InputLabelRoot>
    );
};

export default InputLabelComponent;
