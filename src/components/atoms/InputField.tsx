import React from "react";
import InputUnstyled from "@mui/base/InputUnstyled";
import { InputUnstyledProps } from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import { ReactNode } from "react";
import { setUpTokens } from "@/utils/ThemeParse";
import { bodySize5 } from "@/assets/fonts/fonts";

interface FrameProps {}

export type InputFieldProps = FrameProps & InputUnstyledProps;

const InputFieldFrame = styled(InputUnstyled)`
    input {
        background-color: var(--input-input-background);
        border-width: 0;
        border-radius: 8px;
        min-height: 20px;
        min-width: 175px;
        color: var(--input-text-dim);
        padding: 17px 16px;
        outline: none;
        ${bodySize5}

        &:hover {
            border-color: var(--utility-disabled-content);
            border-width: 0 0 2px 0;

            &:focus {
                border-color: var(--primary-primary);
                border-width: 0 0 2px 0;
            }
        }
    }
`;

const InputField: React.FC<InputFieldProps> = function ({ ...props }) {
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
            className={props.className}
            {...props}
        ></InputFieldFrame>
    );
};

export default InputField;
