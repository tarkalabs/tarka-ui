import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { injectTokens } from "@/utils/ThemeParse";
import { styled } from "@mui/system";
import { bodySize5, bodySize7, bodySize8 } from "@/assets/fonts/fonts";
import { SxProps, Theme } from "@mui/material/styles";
import SuccessIcon from "@/assets/icons/success.svg";
import WarningIcon from "@/assets/icons/warning.svg";
import ErrorIcon from "@/assets/icons/error.svg";
import InputComponent from "@/components/atoms/Input";
import { unstable_useId as useId } from '@mui/utils';

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

    const id = useId(undefined);
    const helperTextId = props.helperText && id ? `${id}-helper-text` : undefined;
    const inputLabelId = props.label && id ? `${id}-label` : undefined;
    const InputElement = () => (
        <InputComponent 
            palette={palette}
            warning={warning}
            success={success}
            compact={compact}
            aria-describedby={helperTextId}
            autoComplete={props.autoComplete}
            autoFocus={props.autoFocus}
            defaultValue={props.defaultValue}
            fullWidth={props.fullWidth}
            multiline={props.multiline}
            name={props.name}
            rows={props.rows}
            maxRows={props.maxRows}
            minRows={props.minRows}
            value={props.value}
            id={props.id}
            inputRef={props.inputRef}
            onBlur={props.onBlur}
            onChange={props.onChange}
            onFocus={props.onFocus}
            placeholder={props.placeholder}
            inputProps={props.inputProps}
            {...InputProps}
        />
    );
    
    return (
        <InputFieldRoot
            className={`TuiInputField-root ${props.className} ${
                compact ? "compact" : ""
            }`}
            FormHelperTextProps={{
                className: `${warning ? "Tui-warning" : ""} ${
                    success ? "Tui-success" : ""
                }`,
            }}
            InputProps={{
                components: {Root: InputElement},
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
