import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import InputField, {InputFieldProps} from '@/components/atoms/InputField';
import StoryTemplate from '@/templates/storytemplate/StoryTemplate';

export default {
    title: 'Components/Atoms/InputField',
    component: InputField,
    parameters: {
        docs: {
            page: () => (
                <StoryTemplate
                    componentName="InputField"
                    importPath="@tarkaui/atoms"
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

export const Default = Template.bind({});

