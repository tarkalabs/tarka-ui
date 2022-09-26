import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { injectTokens } from "@/utils/ThemeParse";
import { styled } from "@mui/system";
import { bodySize5, bodySize7, bodySize8 } from "@/assets/fonts/fonts";
import { SxProps, Theme } from "@mui/material/styles";
import SuccessIcon from "@/assets/icons/success.svg";
import WarningIcon from "@/assets/icons/warning.svg";
import ErrorIcon from "@/assets/icons/error.svg";
import Input, {InputProps} from "@/components/atoms/Input";

interface RootProps {
    palette?: "default" | "alt";
    variant?: "standard";
    warning?: boolean;
    success?: boolean;
    compact?: boolean;
}

export type InputFieldProps = RootProps &
    Omit<TextFieldProps, "variant" | "color" | "type" | "palette">;

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
        &.MuiFormHelperText-root {
            color: var(--input-text);
        }

        &.MuiFormHelperText-root:before {
            content: url(${ErrorIcon});
        }
    }

    .Tui-success {
        &.MuiFormHelperText-root:before {
            content: url(${SuccessIcon});
        }
    }

    .Tui-warning {
        &.MuiFormHelperText-root:before {
            content: url(${WarningIcon});
            width: 12px;
        }
    }
`;

const InputFieldComponent: React.FC<InputFieldProps> = function ({
    palette = "default",
    warning,
    success,
    variant = "standard",
    compact,
    InputProps,
    ...props
}: InputFieldProps) {
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
        InputProps?.startAdornment && {
            ".MuiInput-input": {
                marginLeft: "10px",
            },
        },
        InputProps?.endAdornment && {
            ".MuiInput-input": {
                marginRight: "10px",
            },
        },
    ] as SxProps<Theme>;

    const InputComponent = () => (
        <Input error/>
    );
    
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
                components: {Root: InputComponent},
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
