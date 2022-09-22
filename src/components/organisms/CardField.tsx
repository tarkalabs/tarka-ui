import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { injectTokens } from "@/utils/ThemeParse";
import { styled } from "@mui/system";
import { bodySize5, bodySize7 } from "@/assets/fonts/fonts";
import { usePaymentInputs } from "react-payment-inputs";
import InputField, { InputFieldProps } from "@/components/organisms/InputField";

interface RootProps {
    palette?: "default" | "alt";
    type?: "creditcard" | TextFieldProps["type"];
    variant?: "standard";
    warning?: boolean;
    success?: boolean;
    compact?: boolean;
}

export type CardFieldProps = RootProps &
    Omit<TextFieldProps, "variant" | "type">;

const CardFieldRoot = styled("div")`
    display: flex;
    max-width: 416px;

    .MuiFormControl-root {
        &:nth-child(1) {
            flex: 0 0 60%;

            .MuiInput-root {
                border-radius: 8px 0 0 8px;
            }
        }
        &:nth-child(2) {
            flex: 0 0 20%;

            .MuiInput-root {
                border-radius: 0;
                padding: 17px 8px;
            }
        }
        &:nth-child(3) {
            flex: 0 0 20%;

            .MuiInput-root {
                border-radius: 0 8px 8px 0;
            }
        }
    }
`;

const CardFieldComponent: React.FC<InputFieldProps> = function ({
    palette = "default",
    warning,
    success,
    variant = "standard",
    ...props
}: InputFieldProps) {
    const { getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();
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

    return (
        <CardFieldRoot className="TuiCardField-root">
            <InputField
                inputProps={getCardNumberProps({})}
                {...props}
            />
            <InputField
                inputProps={getExpiryDateProps({})}
                {...props}
            />
            <InputField inputProps={getCVCProps({})} {...props} />
        </CardFieldRoot>
    );
};

export default CardFieldComponent;
