import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { injectTokens } from "@/utils/ThemeParse";
import { styled } from "@mui/system";
import { bodySize5, bodySize7 } from "@/assets/fonts/fonts";
import { SxProps, Theme } from "@mui/material/styles";
import SuccessIcon from "@/assets/icons/success.svg";
import WarningIcon from "@/assets/icons/warning.svg";
import ErrorIcon from "@/assets/icons/error.svg";

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

        &:not(.Mui-disabled):not(.Mui-error):not(.Tui-success):not(.Tui-warning) {
            &:hover:before {
                border-bottom: 2px solid var(--utility-disabled-content);
            }
        }
    }

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
