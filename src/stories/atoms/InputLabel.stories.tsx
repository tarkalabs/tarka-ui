import React from 'react';
import { ComponentMeta, Story } from "@storybook/react";
import InputLabel, { InputLabelProps } from "@/components/atoms/InputLabel";
import DocsTemplate from "@/templates/storytemplate/DocsTemplate";

export default {
    title: 'Components/Atoms/InputLabel',
    component: InputLabel,
    parameters: {
        docs: {
            page: () => (
                <DocsTemplate
                    componentName="InputLabel"
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
} as ComponentMeta<typeof InputLabel>;

const Template: Story<InputLabelProps> = (args: InputLabelProps) => (
    <InputLabel {...args} >Label</InputLabel>
);

export const Default = Template.bind({});
