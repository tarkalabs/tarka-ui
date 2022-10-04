import React, { ReactNode } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { injectTokens } from "@/utils/ThemeParse";
import { styled } from "@mui/system";
import InputComponent, { InputProps } from "@/components/atoms/Input";
import InputLabel, { InputLabelProps } from "@/components/atoms/InputLabel";
import FormHelperTextComponent, {
    FormHelperTextProps,
} from "@/components/atoms/FormHelperText";
import { unstable_useId as useId } from "@mui/utils";
import { SxProps, Theme } from "@mui/material";

interface RootProps {
    palette?: "default" | "alt";
    variant?: "standard";
    warning?: boolean;
    success?: boolean;
    compact?: boolean;
}

export type InputFieldProps = RootProps &
    Omit<
        TextFieldProps,
        "variant" | "color" | "type" | "palette" | "multiline"
    >;

const InputFieldRoot = styled(TextField)<InputFieldProps>`
    height: 56px;
    &:not(.MuiFormControl-fullWidth) {
        width: 264px;
    }
`;

const InputFieldComponent: React.FC<InputFieldProps> = function ({
    palette = "default",
    warning = false,
    success = false,
    variant = "standard",
    compact = false,
    InputProps = {},
    FormHelperTextProps = {},
    ...props
}: InputFieldProps) {
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

    const id = useId(props.id);
    const helperTextId =
        props.helperText && id ? `${id}-helper-text` : undefined;
    const inputLabelId = props.label && id ? `${id}-label` : undefined;

    const InputElement = () => (
        <InputComponent
            id={id}
            palette={palette}
            warning={warning}
            success={success}
            compact={compact}
            /*sx={conditionalStyles}*/
            {...(props as InputProps)}
            {...InputProps}
        />
    );

    const InputLabelElement = () => (
        <InputLabel
            id={inputLabelId}
            htmlFor={id}
            warning={warning}
            success={success}
            compact={compact}
            startAdornment={InputProps.startAdornment ? true : false}
            {...(props as InputLabelProps)}
        >
            {props.label}
        </InputLabel>
    );

    const FormHelperTextElement = () => (
        <FormHelperTextComponent
            id={helperTextId}
            warning={warning}
            success={success}
            compact={compact}
            {...(props as FormHelperTextProps)}
            {...FormHelperTextProps}
        >
            {props.helperText}
        </FormHelperTextComponent>
    );

    return (
        <InputFieldRoot
            className={`TuiInputField-root ${props.className} ${
                compact ? "compact" : ""
            }`}
            FormHelperTextProps={{
                // @ts-ignore
                component: FormHelperTextElement,
            }}
            InputProps={{
                components: { Root: InputElement },
            }}
            InputLabelProps={{
                // @ts-ignore
                component: InputLabelElement,
            }}
            variant={variant}
            {...props}
        />
    );
};

InputFieldComponent.defaultProps = {
    placeholder: "Placeholder",
};

export default InputFieldComponent;
