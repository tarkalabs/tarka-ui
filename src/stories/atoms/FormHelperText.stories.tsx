import React from 'react';
import { ComponentMeta, Story } from "@storybook/react";
import FormHelperText, { FormHelperTextProps } from "@/components/atoms/FormHelperText";
import DocsTemplate from "@/templates/storytemplate/DocsTemplate";

export default {
    title: 'Components/Atoms/FormHelperText',
    component: FormHelperText,
    parameters: {
        docs: {
            page: () => (
                <DocsTemplate
                    componentName="FormHelperText"
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
} as ComponentMeta<typeof FormHelperText>;

const Template: Story<FormHelperTextProps> = (args: FormHelperTextProps) => (
    <FormHelperText {...args} />
);

export const Default = Template.bind({});
Default.args = {
    children: "Helper text",
};

export const Error = Template.bind({});
Error.args = {
    children: "Error helper text",
    error: true,
};
