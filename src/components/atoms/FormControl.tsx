import React from "react";
import { FormControlUnstyled, FormControlUnstyledProps} from "@mui/base";
import { styled } from "@mui/system";
import { setUpTokens } from "@/utils/ThemeParse";

interface RootProps {

}

export type FormControlProps = RootProps & FormControlUnstyledProps;

const FormControlRoot = styled(FormControlUnstyled)`

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
        <FormControlRoot 
            className={`tui-form-control ${props.className}`} 
            {...props}
        />
    );
};

export default FormControlComponent;
