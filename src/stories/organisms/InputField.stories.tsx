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
                            name: `type`,
                            type: `'creditcard'`,
                            default: `'text'`,
                            desc: `The type of input.`,
                        }
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
        placeholder: 'With icon',
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
    InputProps: {
        error: true,
    }
};

export const Required: Story<InputFieldProps> = Template.bind({});
Required.args = {
    InputProps: {
        placeholder: 'Required',
        required: true,
    }
};

export const CreditCard: Story<InputFieldProps> = Template.bind({});
CreditCard.args = {
    type: 'creditcard',
};
