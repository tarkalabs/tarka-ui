import React from "react";
import FormHelperTextUnstyled from "@mui/material/FormHelperText";
import { FormHelperTextProps as FormHelperTextUnstyledProps } from "@mui/material/FormHelperText";
import { styled } from "@mui/system";
import { injectTokens } from "@/utils/ThemeParse";
import { bodySize7 } from "@/assets/fonts/fonts";
import SuccessIcon from "@/assets/icons/success.svg";
import WarningIcon from "@/assets/icons/warning.svg";
import ErrorIcon from "@/assets/icons/error.svg";

interface RootProps {
    palette?: "default" | "alt";
    icon?: boolean;
    warning?: boolean;
    success?: boolean;
}

export type FormHelperTextProps = RootProps & FormHelperTextUnstyledProps;

const FormHelperTextRoot = styled(FormHelperTextUnstyled)`
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

    &.Mui-error {
        color: var(--input-text);

        &.icon:before {
            content: url(${ErrorIcon});
        }
    }

    &.Tui-success {
        &.icon:before {
            content: url(${SuccessIcon});
        }
    }

    &.Tui-warning {
        &.icon:before {
            content: url(${WarningIcon});
            width: 12px;
        }
    }
` as React.FC<FormHelperTextProps>;

const FormHelperTextComponent: React.FC<FormHelperTextProps> = function ({
    palette,
    warning = false,
    success = false,
    icon = true,
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
        <FormHelperTextRoot
            className={`TuiFormHelperText-root ${warning ? "Tui-warning" : ""} ${success ? "Tui-success" : ""} ${icon ? "icon" : ""}`}
            {...props}
        />
    );
};

export default FormHelperTextComponent;
