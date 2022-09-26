import React from 'react';
import { ComponentMeta, Story } from "@storybook/react";
import Input, { InputProps } from "@/components/atoms/Input";
import StoryTemplate from "@/templates/storytemplate/StoryTemplate";

export default {
    title: 'Components/Atoms/Input',
    component: Input,
    parameters: {
        docs: {
            page: () => (
                <StoryTemplate
                    componentName="Input"
                    importPath="@tarkaui/atoms"
                    typeDescs={[
                        {
                            name: `size`,
                            type: `'small' | 'regular' | 'large'`,
                            default: `'regular'`,
                            desc: `The size of the badge.`,
                        },
                    ]}
                    muiRef="https://mui.com/base/api/badge-unstyled/"
                />
            ),
        },
    },
} as ComponentMeta<typeof Input>;

const Template: Story<InputProps> = (args: InputProps) => (
    <Input {...args} />
);

export const Default = Template.bind({});
