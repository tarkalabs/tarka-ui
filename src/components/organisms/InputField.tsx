import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { injectTokens } from "@/utils/ThemeParse";
import { styled } from "@mui/system";
import { bodySize5 } from "@/assets/fonts/fonts";
import { SxProps, Theme } from "@mui/material/styles";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import { NoEncryption } from "@mui/icons-material";

interface RootProps {
    palette?: "default" | "alt";
    type?: "creditcard" | TextFieldProps["type"];
    variant?: "standard";
    warning?: boolean;
    success?: boolean;
}

export type InputFieldProps = Omit<TextFieldProps, "variant" | "type"> &
    RootProps;

const InputFieldRoot = styled(TextField)`
    .MuiInput-root {
        position: relative;
        background-color: var(--input-input-background);
        border-radius: 8px;
        border: 0 0 2px 0 solid transparent;
        color: var(--input-text-dim);
        outline: none;
        padding: 17px 16px;
        overflow: hidden;

        &:after {
            border-bottom-color: var(--primary-primary);
        }

        &:before {
            position: absolute;
            border-bottom: 2px solid transparent;
            border-radius: 0 0 8px 8px;
            height: 2px;
        }

        .MuiInput-input {
            padding: 0;
            ${bodySize5};
            color: var(--input-text);

            &::placeholder {
                opacity: 0.7;
                color: var(--input-text-dim);
            }
        }

        &:not(.Mui-disabled, .Mui-error, .Tui-success, .Tui-warning) {
            &:hover:before {
                border-bottom: 2px solid var(--utility-disabled-content);
            }
        }

        &.Mui-error {
            &:after,
            &:before {
                border-bottom-color: var(--error-error);
            }
        }

        &.Tui-success {
            &:after,
            &:before {
                border-bottom-color: var(--success-success);
            }
        }

        &.Tui-warning {
            &:after,
            &:before {
                border-bottom-color: var(--warning-warning);
            }
        }

        &.Mui-disabled {
            background-color: var(--utility-disabled-background);

            .MuiInput-input {
                &::placeholder {
                    opacity: 0.38;
                    color: var(--utility-disabled-content);
                }
            }
        }
    }
`;

const InputFieldComponent: React.FC<InputFieldProps> = function ({
    palette,
    warning,
    success,
    variant = "standard",
    ...props
}: InputFieldProps) {
    injectTokens([
        "input/input-background",
        "input/text-dim",
        "primary/primary",
        "error/error",
        "warning/warning",
        "success/success",
        "utility/disabled-background",
        "utility/disabled-content",
    ]);

    const inputConStyles = [
        props.InputProps?.startAdornment && {
            ".MuiInput-input": {
                marginLeft: "10px",
            },
        },
        props.InputProps?.endAdornment && {
            ".MuiInput-input": {
                marginRight: "10px",
            },
        },
    ] as SxProps<Theme>;

    const { getCardNumberProps } = usePaymentInputs();

    return (
        <InputFieldRoot
            className={`TuiInputField-root ${props.classes}`}
            InputProps={{
                placeholder: "Label",
                className: `${warning ? "Tui-warning" : ""} ${
                    success ? "Tui-success" : ""
                }`,
                sx: inputConStyles,
                ...props.InputProps,
            }}
            variant={variant}
            inputProps={
                props.type === "creditcard"
                    ? getCardNumberProps({})
                    : props.inputProps
            }
        />
    );
};

InputFieldComponent.defaultProps = {
    label: "Label",
    helperText: "Helper/hint text goes here",
    palette: "default",
};

export default InputFieldComponent;
