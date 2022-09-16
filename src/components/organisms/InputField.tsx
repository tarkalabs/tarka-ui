import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { injectTokens } from "@/utils/ThemeParse";
import { styled } from "@mui/system";
import { bodySize5 } from "@/assets/fonts/fonts";
import { SxProps, Theme } from "@mui/material/styles";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import { NoEncryption } from "@mui/icons-material";

interface RootProps {
    palette?: "default" | "alt";
    type?: "creditcard" | TextFieldProps["type"];
    variant?: "standard";
}

export type InputFieldProps = TextFieldProps & RootProps;

const InputFieldRoot = styled(TextField)`
    ${bodySize5};
`;

const InputFieldComponent: React.FC<InputFieldProps> = function ({
    palette,
    ...props
}: InputFieldProps) {
    injectTokens([
        "input/input-background",
        "input/text-dim",
        "primary/primary",
        "error/error",
        "warning/warning",
        "success/success",
        "utility/disabled-background",
        "utility/disabled-content",
    ]);

    const inputStyles = [
        {
            position: "relative",
            backgroundColor: "var(--input-input-background)",
            borderWidth: "0 0 2px 0",
            borderRadius: "8px",
            borderColor: "transparent",
            color: "var(--input-text-dim)",
            outline: "none",
            padding: "17px 16px",
            overflow: "hidden",
            "&:before": {
                position: "absolute",
                borderBottom: "2px solid transparent",
                borderRadius: "0 0 8px 8px",
                height: "2px", 
    
                "&:hover &:not(.Mui-disabled)": {
                    borderBottom: "2px solid red"
                },
            },
            "&:after": {
                
            },
            ".MuiInput-input": {
                padding: "0",
                fontFamily: 'inherit',
                fontStyle: 'inherit',
                fontSize: 'inherit',
                lineHeight: 'inherit',
                color: 'inherit',
            },
        },
        props.InputProps?.startAdornment && {
                ".MuiInput-input": {
                    paddingLeft: "10px",
                },
            },
        props.InputProps?.endAdornment && {
                ".MuiInput-input": {
                    paddingRight: "10px",
                },
            },
    ] as SxProps<Theme>;

    const { getCardNumberProps } = usePaymentInputs();

    return (
        <InputFieldRoot
            className={`TuiInputField-root ${props.classes}`}
            InputProps={{
                placeholder: "Label",
                sx: inputStyles,
                ...props.InputProps,
            }}
            variant="standard"
            inputProps={
                props.type === "creditcard"
                    ? getCardNumberProps({})
                    : props.inputProps
            }
        />
    );
};

InputFieldComponent.defaultProps = {
    label: "Label",
    helperText: "Helper/hint text goes here",
    palette: "default",
};

export default InputFieldComponent;
