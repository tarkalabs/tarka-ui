import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { injectTokens } from "@/utils/ThemeParse";
import { styled } from "@mui/system";
import { bodySize5, bodySize7, bodySize8 } from "@/assets/fonts/fonts";
import { SxProps, Theme } from "@mui/material/styles";
import SuccessIcon from "@/assets/icons/success.svg";
import WarningIcon from "@/assets/icons/warning.svg";
import ErrorIcon from "@/assets/icons/error.svg";
import Input from "@/components/atoms/Input";

interface RootProps {
    palette?: "default" | "alt";
    variant?: "standard";
    warning?: boolean;
    success?: boolean;
    compact?: boolean;
}

export type InputFieldProps = RootProps &
    Omit<TextFieldProps, "variant">;

const InputFieldRoot = styled(TextField)`
    height: 56px;

    .MuiFormHelperText-root {
        ${bodySize7};
        display: flex;
        align-items: center;
        margin-top: 4px;
        padding: 0 16px;
        color: var(--input-text);

        &:before {
            display: inline-block;
            margin-right: 4px;
            width: 16px;
            height: 16px;
        }
    }

    .Mui-error {
        &.MuiInput-root:after,
        &.MuiInput-root:before {
            border-bottom-color: var(--error-error);
        }

        &.MuiFormHelperText-root {
            color: var(--input-text);
        }

        &.MuiFormHelperText-root:before {
            content: url(${ErrorIcon});
        }
    }

    .Tui-success {
        &.MuiInput-root:after,
        &.MuiInput-root:before {
            border-bottom-color: var(--success-success);
        }

        &.MuiFormHelperText-root:before {
            content: url(${SuccessIcon});
        }
    }

    .Tui-warning {
        &.MuiInput-root:after,
        &.MuiInput-root:before {
            border-bottom-color: var(--warning-warning);
        }

        &.MuiFormHelperText-root:before {
            content: url(${WarningIcon});
            width: 12px;
        }
    }

    .Mui-disabled {
        &.MuiInput-root {
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
    palette = "default",
    warning,
    success,
    variant = "standard",
    compact,
    ...props
}: InputFieldProps) {
    const conditionalStyles = [
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
        <InputFieldRoot
            sx={conditionalStyles}
            className={`TuiInputField-root ${props.className} ${
                compact ? "compact" : ""
            }`}
            FormHelperTextProps={{
                className: `${warning ? "Tui-warning" : ""} ${
                    success ? "Tui-success" : ""
                }`,
            }}
            InputProps={{
                className: `${warning ? "Tui-warning" : ""} ${
                    success ? "Tui-success" : ""
                }`,
                inputComponent: Input as React.FC,
            }}
            variant={variant}
            {...props}
        />
    );
};

InputFieldComponent.defaultProps = {
    placeholder: "Placeholder",
};

export default InputFieldComponent;
