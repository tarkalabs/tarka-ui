import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import Input, {InputProps} from '@/components/atoms/Input';
import StoryTemplate from '@/templates/storytemplate/StoryTemplate';

export default {
    title: 'Components/Atoms/Input',
    component: Input,
    parameters: {
        docs: {
            page: () => (
                <StoryTemplate
                    componentName="Input"
                    importPath="@tarkaui/atoms"
                    muiRef="https://mui.com/base/api/input-unstyled/"
                />
            ),
        },
    },
} as ComponentMeta<typeof Input>;

const Template: Story<InputProps> = (args: InputProps) => (
    <form>
        <Input required {...args}/>  
    </form>
);

export const Default: Story<InputProps> = Template.bind({});

