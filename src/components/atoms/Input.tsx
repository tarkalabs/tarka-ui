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
    children?: React.ReactNode;
}

export type InputProps = RootProps &
    Omit<InputUnstyledProps, "underline" | "multiline">;

const InputRoot = styled(InputUnstyled)<InputProps>`
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
    gap: 8px;

    &:after {
        border-bottom-color: var(--primary-primary);
    }

    &:before {
        position: absolute;
        border-bottom: 2px solid transparent;
        height: 2px;
    }

    &:hover:not(.Mui-disabled):not(.Mui-error):not(.Tui-warning):not(.Tui-success):before {
        border-bottom-color: var(--utility-disabled-content);
    }

    .MuiInput-input {
        padding: 0;
        color: var(--input-text);
        flex: 0 1 100%;

        &::placeholder {
            opacity: 1;
            color: var(--input-text-dim);
        }
    }

    label + &.MuiInput-root {
        margin: 0;
    }

    &:hover:before:not(.Mui-disabled):not(.Mui-error):not(.Tui-success):not(.Tui-warning) {
        border-bottom: 2px solid var(--utility-disabled-content);
    }

    &.MuiInputBase-adornedStart,
    &.MuiInputBase-adornedEnd {
        svg {
            flex: 0 0 24px;

            path {
                fill: var(--input-text);
            }
        }
    }

    &.Mui-disabled {
        background-color: var(--utility-disabled-background);
        .MuiInput-input::placeholder {
            color: var(--utility-disabled-content);
        }
    }

    &.Tui-warning {
        &:after,
        &:before,
        &:hover:before {
            border-bottom-color: var(--warning-warning);
        }
    }

    &.Tui-success {
        &:after,
        &:before,
        &:hover:before {
            border-bottom-color: var(--success-success);
        }
    }

    &.Mui-error {
        &:after,
        &:before,
        &:hover:before {
            border-bottom-color: var(--error-error);
        }
    }
` as React.FC<InputProps>;

const InputComponent: React.FC<InputProps> = function ({
    palette,
    warning = false,
    success = false,
    compact = false,
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
        <InputRoot
            className={`${warning ? "Tui-warning" : ""} ${
                success ? "Tui-success" : ""
            }`}
            {...props}
        />
    );
};

export default InputComponent;
