import React from "react";
import { InputLabel, InputLabelProps as InputLabelUnstyledProps} from "@mui/material";
import { styled } from "@mui/system";
import { setUpTokens } from "@/utils/ThemeParse";

interface RootProps {

}

export type InputLabelProps = RootProps & InputLabelUnstyledProps;

const InputLabelRoot = {
    
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
            className={`tui-input-label ${props.classes}`} 
            {...props}
        />
    );
};

export default InputLabelComponent;
