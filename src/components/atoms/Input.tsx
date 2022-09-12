import React from "react";
import { InputUnstyled, InputUnstyledProps } from "@mui/base";
import { styled } from "@mui/system";
import { ReactNode } from "react";
import { setUpTokens } from "@/utils/ThemeParse";
import { bodySize5, bodySize7 } from "@/assets/fonts/fonts";
import PropTypes from 'prop-types';

interface FrameProps {

}

export type InputProps = FrameProps & InputUnstyledProps;

const InputFrame = styled(InputUnstyled)`
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

const InputComponent: React.FC<InputProps> = function ({ ...props }) {
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
        <InputFrame 
            className={`tarka-input-field ${props.className}`} 
            placeholder={props.placeholder} 
            {...props}
        />
    );
};

InputComponent.propTypes = {
    /**
     * 
     * @default false
     * 
     * */
    disabled: PropTypes.bool,
};

InputComponent.defaultProps = {
    placeholder: 'Label',
}

export default InputComponent;
