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
