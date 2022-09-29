import React from "react";
import InputLabelUnstyled from "@mui/material/InputLabel";
import { InputLabelProps as InputLabelUnstyledProps } from "@mui/material/InputLabel";
import { styled } from "@mui/system";
import { injectTokens } from "@/utils/ThemeParse";
import { bodySize5 } from "@/assets/fonts/fonts";

interface RootProps {
    compact?: boolean;
    success?: boolean;
    warning?: boolean;
}

export type InputLabelProps = RootProps & InputLabelUnstyledProps;

const InputLabelRoot = styled(InputLabelUnstyled)`
    ${bodySize5};
    color: var(--input-text-dim);
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    left: 30px;
` as React.FC<InputLabelProps>;

const InputLabelComponent: React.FC<InputLabelProps> = function ({
    compact = false,
    success = false,
    warning = false,
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
        <InputLabelRoot
            className={`TuiInputLabel-root ${compact ? "compact" : ""} ${warning ? "Tui-warning" : ""} ${success ? "Tui-success" : ""}`}
            {...props}
        >
            {props.children}
        </InputLabelRoot>
    );
};

export default InputLabelComponent;
