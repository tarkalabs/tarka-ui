import React from "react";
import { InputLabel, InputLabelProps as InputLabelUnstyledProps} from "@mui/material";
import { styled } from "@mui/system";
import { setUpTokens } from "@/utils/ThemeParse";

interface FrameProps {

}

export type InputLabelProps = FrameProps & InputLabelUnstyledProps;

const InputLabelFrame = {
    
};

const InputLabelComponent: React.FC<InputLabelProps> = function ({ ...props }: InputLabelProps) {
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
        <InputLabel 
            className={`tarka-input-label ${props.classes}`} 
            {...props}
        />
    );
};

export default InputLabelComponent;
