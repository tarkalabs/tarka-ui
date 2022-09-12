import React from "react";
import { FormHelperText, FormHelperTextProps as FormHelperTextUnstyledProps} from "@mui/material";
import { styled } from "@mui/system";
import { setUpTokens } from "@/utils/ThemeParse";

interface FrameProps {

}

export type FormHelperTextProps = FrameProps & FormHelperTextUnstyledProps;

const FormHelperTextFrame = {
    
};

const FormHelperTextComponent: React.FC<FormHelperTextProps> = function ({ ...props }: FormHelperTextProps) {
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
        <FormHelperText
            className={`tarka-input-label ${props.classes}`} 
            {...props}
        />
    );
};

export default FormHelperTextComponent;
