import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { injectTokens } from "@/utils/ThemeParse";
import { styled } from "@mui/system";
import InputComponent from "@/components/atoms/Input";
import FormHelperTextComponent, { FormHelperTextProps } from "@/components/atoms/FormHelperText";
import { unstable_useId as useId } from '@mui/utils';

interface RootProps {
    palette?: "default" | "alt";
    variant?: "standard";
    warning?: boolean;
    success?: boolean;
    compact?: boolean;
}

export type InputFieldProps = RootProps &
    Omit<TextFieldProps, "variant" | "color" | "type" | "palette">;

const InputFieldRoot = styled(TextField)`
    width: 264px;
    height: 56px;
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
    const helperTextId = props.helperText && id ? `${id}-helper-text` : undefined;
    const inputLabelId = props.label && id ? `${id}-label` : undefined;

    const InputElement = () => (
        <InputComponent 
            palette={palette}
            warning={warning}
            success={success}
            compact={compact}
            aria-describedby={helperTextId}
            autoComplete={props.autoComplete}
            autoFocus={props.autoFocus}
            defaultValue={props.defaultValue}
            fullWidth={props.fullWidth}
            multiline={props.multiline}
            name={props.name}
            rows={props.rows}
            maxRows={props.maxRows}
            minRows={props.minRows}
            value={props.value}
            id={props.id}
            inputRef={props.inputRef}
            onBlur={props.onBlur}
            onChange={props.onChange}
            onFocus={props.onFocus}
            placeholder={props.placeholder}
            inputProps={props.inputProps}
            {...InputProps}
        />
    );
    
    const FormHelperTextElement = () => (
        <FormHelperTextComponent
            id={helperTextId}
            warning={warning}
            success={success}
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
                components: {Root: InputElement},
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
