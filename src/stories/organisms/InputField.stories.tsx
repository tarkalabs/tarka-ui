import { ComponentMeta, Story } from '@storybook/react';
import InputField, {InputFieldProps} from '@/components/organisms/InputField';
import TextField from '@mui/material/TextField';
import DocsTemplate from '@/templates/storytemplate/DocsTemplate';
import { ReactComponent as CheckCircleOutlineIcon } from '@/assets/icons/checkmarkcircle.svg';

export default {
    title: 'Components/Organisms/InputField',
    component: InputField,
    parameters: {
        docs: {
            page: () => (
                <DocsTemplate
                    componentName="InputField"
                    importPath="@tarkaui/organisms"
                    typeDescs={[
                        {
                            name: `palette`,
                            type: `'default' | 'alt'`,
                            default: `'default'`,
                            desc: `The color palette to use.`,
                        },
                        {
                            name: `variant*`,
                            type: `'standard'`,
                            default: `'standard'`,
                            desc: `The variant to use. Overrides MUI prop of the same name.`,
                        },
                        {
                            name: `warning`,
                            type: `boolean`,
                            default: `false`,
                            desc: `If true, the input will indicate a warning.`,
                        },
                        {
                            name: `success`,
                            type: `boolean`,
                            default: `false`,
                            desc: `If true, the input will indicate success.`,
                        },  
                    ]}
                    muiRef="https://mui.com/base/api/input-unstyled/"
                />
            ),
        },
    },
} as ComponentMeta<typeof InputField>;

const Template: Story<InputFieldProps> = (args: InputFieldProps) => (
    <InputField {...args}/>  
);

export const Default: Story<InputFieldProps> = Template.bind({});

export const StartIcon: Story<InputFieldProps> = Template.bind({});
StartIcon.args = {
    InputProps: {
        startAdornment: <CheckCircleOutlineIcon/>,
    },
};

export const EndIcon: Story<InputFieldProps> = Template.bind({});
EndIcon.args = {
    InputProps: {
        endAdornment: <CheckCircleOutlineIcon/>,
    },
};

export const StartText: Story<InputFieldProps> = Template.bind({});
StartText.args = {
    InputProps: {
        startAdornment: '$',
    },
};

export const EndText: Story<InputFieldProps> = Template.bind({});
EndText.args = {
    InputProps: {
        endAdornment: '.00',
    },
};

export const Label: Story<InputFieldProps> = Template.bind({});
Label.args = {
    label: 'Label',
};

export const Disabled: Story<InputFieldProps> = Template.bind({});
Disabled.args = {
    InputProps: {
        placeholder: 'Disabled',
        disabled: true,
    }
};

export const Error: Story<InputFieldProps> = Template.bind({});
Error.args = {
    placeholder: "Error",
    error: true,
}; 

export const ErrorHelperText: Story<InputFieldProps> = Template.bind({});
ErrorHelperText.args = {
    error: true,
    placeholder: "Error",
    helperText: "Error helper text",
};

export const Success: Story<InputFieldProps> = Template.bind({});
Success.args = {
    placeholder: "Success",
    success: true,
};

export const SuccessHelperText: Story<InputFieldProps> = Template.bind({});
SuccessHelperText.args = {
    success: true,
    placeholder: "Success",
    helperText: "Success helper text",
};

export const Warning: Story<InputFieldProps> = Template.bind({});
Warning.args = {
    placeholder: "Warning",
    warning: true,
};

export const WarningHelperText: Story<InputFieldProps> = Template.bind({});
WarningHelperText.args = {
    warning: true,
    placeholder: "Warning",
    helperText: "Warning helper text",
};

export const Required: Story<InputFieldProps> = Template.bind({});
Required.args = {
    placeholder: "Required",
    InputProps: {
        required: true,
    }
};

export const FullWidth: Story<InputFieldProps> = Template.bind({});
FullWidth.args = {
    placeholder: "Full width",
    fullWidth: true,
};

export const LabelIcon: Story<InputFieldProps> = Template.bind({});
LabelIcon.args = {
    label: 'Label',
    InputProps: {
        startAdornment: <CheckCircleOutlineIcon/>,
    },
};

export const Compact: Story<InputFieldProps> = Template.bind({});
Compact.args = {
    placeholder: "Compact",
    compact: true,
    success: true,
    label: 'Label',
};

export const Select: Story<InputFieldProps> = Template.bind({});
Select.args = {
    select: true,
    SelectProps: {
        native: true,
    },
    children: (
        <>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </>
    ),
};

export const MUITextField: Story<InputFieldProps> = (args: InputFieldProps) => (
    <TextField InputProps={{startAdornment: '$'}} label="Label" placeholder="Placeholder" {...args}/>  
);

