import React from "react";
import InputUnstyled from "@mui/material/Input";
import { InputProps as InputUnstyledProps } from "@mui/material/Input";
import { styled } from "@mui/system";
import { injectTokens } from "@/utils/ThemeParse";
import { bodySize5 } from "@/assets/fonts/fonts";
import { SxProps, Theme } from "@mui/material";

interface RootProps {
    palette?: "default" | "alt";
    warning?: boolean;
    success?: boolean;
    compact?: boolean;
}

export type InputProps = RootProps & InputUnstyledProps;

const InputRoot = styled(InputUnstyled)`
    ${bodySize5};
    min-height: 56px;
    color: var(--input-text);
    position: relative;
    background-color: var(--input-input-background);
    border-radius: 8px;
    border: 0 0 2px 0 solid transparent;
    outline: none;
    padding: 17px 16px;
    overflow: hidden;

    &:after {
        border-bottom-color: var(--primary-primary);
    }

    &:before {
        position: absolute;
        border-bottom: 2px solid transparent;
        height: 2px;
    }

    .MuiInput-input {
        padding: 0;
        color: var(--input-text);
        width: 248px;

        &::placeholder {
            opacity: 0.7;
            color: var(--input-text-dim);
        }

        &:focus::placeholder {
        }
    }

    &:hover:before:not(.Mui-disabled):not(.Mui-error):not(.Tui-success):not(.Tui-warning) {
        border-bottom: 2px solid var(--utility-disabled-content);
    }

    &.MuiInputBase-adornedStart,
    &.MuiInputBase-adornedEnd {
        svg path {
            fill: var(--input-text);
        }
    }

    &.Mui-disabled {
        background-color: var(--utility-disabled-background);
        .MuiInput-input::placeholder {
            opacity: 0.38;
            color: var(--utility-disabled-content);
        }
    }

    &.Tui-warning {
        &:after,
        &:before {
            border-bottom-color: var(--warning-warning);
        }
    }

    &.Tui-success {
        &:after,
        &:before {
            border-bottom-color: var(--success-success);
        }
    }

    &.Mui-error {
        &:after,
        &:before {
            border-bottom-color: var(--error-error);
        }
    }
` as React.FC<InputProps>;

const InputComponent: React.FC<InputProps> = function ({
    palette,
    warning,
    success,
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

    const conditionalStyles = [
        props.startAdornment && {
            ".MuiInput-input": {
                marginLeft: "10px",
                width: "214px",
            },
        },
        props.endAdornment && {
            ".MuiInput-input": {
                marginRight: "10px",
                width: "214px",
            },
        },
    ] as SxProps<Theme>;

    return (
        <InputRoot
            className={`TuiInput-root${warning ? "Tui-warning" : ""} ${
                success ? "Tui-success" : ""
            }`}
            sx={conditionalStyles}
            {...props}
        />
    );
};

export default InputComponent;
