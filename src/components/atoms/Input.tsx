import React from "react";
import InputUnstyled from "@mui/material/InputBase";
import { InputBaseProps as InputUnstyledProps } from "@mui/material/InputBase";
import { styled } from "@mui/system";
import { injectTokens } from "@/utils/ThemeParse";
import { bodySize5 } from "@/assets/fonts/fonts";

interface RootProps {}

export type InputProps = RootProps & InputUnstyledProps;

const InputRoot = styled(InputUnstyled)`
    ${bodySize5};
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
`;

const InputComponent: React.FC<InputProps> = function ({ ...props }) {
    injectTokens([
        "surface/on-surface",
        "surface/surface-hover",
        "primary/primary",
        "primary/on-primary",
        "primary/primary-hover",
        "secondary/secondary",
        "secondary/on-secondary",
        "secondary/secondary-hover",
    ]);

    return <InputRoot className={`TuiInput`}></InputRoot>;
};

export default InputComponent;
