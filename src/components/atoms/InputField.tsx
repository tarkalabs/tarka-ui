import React from "react";
import InputUnstyled from "@mui/base/InputUnstyled";
import { InputUnstyledProps } from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import { ReactNode } from "react";
import { setUpTokens } from "@/utils/ThemeParse";
import { bodySize5, bodySize7 } from "@/assets/fonts/fonts";

interface FrameProps {
    helperText?: string;
}

export type InputFieldProps = FrameProps & InputUnstyledProps;

const InputFieldFrame = styled('div')`
    display: flex;
    flex-direction: column;
    height: 56px;
    width: 264px;
    gap: 4px;
    align-items: center;
    
    div.helper {
        span {
            ${bodySize7}
            color: var(--input-text);
        } 
    }
`;

const InputField = styled(InputUnstyled)`
    input {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    input[type="text"] {
        background-color: var(--input-input-background);
        border-width: 0 0 2px 0;
        border-radius: 8px;
        color: var(--input-text-dim);
        padding: 17px 16px;
        outline: none;
        ${bodySize5}

        &:hover {
            border-color: var(--utility-disabled-content);
        }

        &:focus {
            border-color: var(--primary-primary);
        }

        &:valid {
            border-color: var(--success-success);
        }

        &:invalid {
            border-color: var(--error-error);
        }

        &:disabled {
            background-color: var(--utility-disabled-background);
            color: var(--utility-disabled-content);
        }
    }
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
        <InputFieldFrame className='tarka-input-field'>
            <InputField className={props.className} placeholder={props.placeholder} {...props} />
            <div className="helper">
                <span>{props.helperText}</span>
            </div>
        </InputFieldFrame>
    );
};

InputFieldComponent.defaultProps = {
    placeholder: 'Label',
    helperText: 'Helper/hint text goes here',
}

export default InputFieldComponent;
