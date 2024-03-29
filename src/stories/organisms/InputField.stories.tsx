import { ComponentMeta, Story } from '@storybook/react';
import InputField, {InputFieldProps} from '@/components/organisms/InputField';
import StoryTemplate from '@/templates/storytemplate/StoryTemplate';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default {
    title: 'Components/Organisms/InputField',
    component: InputField,
    parameters: {
        docs: {
            page: () => (
                <StoryTemplate
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
    <form>
        <InputField required {...args}/>  
    </form>
);

export const Default: Story<InputFieldProps> = Template.bind({});

export const WithIcon: Story<InputFieldProps> = Template.bind({});
WithIcon.args = {
    InputProps: {
        startAdornment: <CheckCircleOutlineIcon sx={{width: '20px'}}/>,
    },
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
