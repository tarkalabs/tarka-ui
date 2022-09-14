import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { setUpTokens } from "@/utils/ThemeParse";
import { styled } from "@mui/system";
import { bodySize5 } from "@/assets/fonts/fonts";
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';

interface RootProps {
    type: 'creditcard' | TextFieldProps['type'];
}

export type InputFieldProps = RootProps & TextFieldProps;

const InputFieldRoot = styled(TextField)`
    ${bodySize5}
`;

const InputStyles = {
    position: 'relative',
    backgroundColor: 'var(--input-input-background)',
    borderWidth: '0 0 2px 0',
    borderRadius: '8px',
    color: 'var(--input-text-dim)',
    outline: 'none',
    padding: '17px 16px',
    '&:before': {
        borderColor: 'transparent',
        borderRadius: '8px',
        height: '100%',
    },
    '&:after': {
        borderRadius: '8px',
        height: '100%',
    },
    '.MuiInput-input': {
        padding: '0 0 0 10px',
    }
}

const InputFieldComponent: React.FC<InputFieldProps> = function ({ ...props }: InputFieldProps) {
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

    const { getCardNumberProps } = usePaymentInputs();

    return (
        <InputFieldRoot
            className={`tui-input-field ${props.classes}`}
            InputProps={ {sx: InputStyles, ...props.InputProps} }
            variant='standard'
            inputProps={props.type === 'creditcard' ? getCardNumberProps({}) : props.inputProps}
        />
    );
};

InputFieldComponent.defaultProps = {
    label: 'Label',
    helperText: 'Helper/hint text goes here',
};

export default InputFieldComponent;
