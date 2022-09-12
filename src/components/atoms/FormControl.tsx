import React from "react";
import { FormControlUnstyled, FormControlUnstyledProps} from "@mui/base";
import { styled } from "@mui/system";
import { setUpTokens } from "@/utils/ThemeParse";

interface FrameProps {

}

export type FormControlProps = FrameProps & FormControlUnstyledProps;

const FormControlFrame = styled(FormControlUnstyled)`

`;

const FormControlComponent: React.FC<FormControlProps> = function ({ ...props }: FormControlProps) {
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
        <FormControlFrame 
            className={`tarka-form-control ${props.className}`} 
            {...props}
        />
    );
};

export default FormControlComponent;
