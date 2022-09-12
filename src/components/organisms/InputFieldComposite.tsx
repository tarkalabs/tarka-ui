import React from "react";
import { TextFieldProps } from '@mui/material/TextField';
import { setUpTokens } from "@/utils/ThemeParse";
import { styled } from "@mui/system";
import FormControl from "@/components/atoms/FormControl";
import InputLabel from "@/components/atoms/InputLabel";
import Input from "@/components/atoms/Input";
import FormHelperText from "@/components/atoms/FormHelperText";

interface RootProps {

}

export type InputFieldProps = RootProps & TextFieldProps;

const InputFieldRoot = styled(FormControl)`
`;

const InputFieldComponent: React.FC<InputFieldProps> = function ({ ...props }) {
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
        <InputFieldRoot
            className={`tui-input-field ${props.className}`}
        >
            <InputLabel></InputLabel>
            <Input></Input>
            <FormHelperText></FormHelperText>
        </InputFieldRoot>
    );
};

InputFieldComponent.defaultProps = {
    placeholder: 'Label',
    //helperText: 'Helper/hint text goes here',
}

export default InputFieldComponent;
