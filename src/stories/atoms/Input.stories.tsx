import React from 'react';
import { ComponentMeta, Story } from "@storybook/react";
import Input, { InputProps } from "@/components/atoms/Input";
import { Input as MUIInput, InputLabel } from '@mui/material';
import DocsTemplate from "@/templates/storytemplate/DocsTemplate";

export default {
    title: 'Components/Atoms/Input',
    component: Input,
    parameters: {
        docs: {
            page: () => (
                <DocsTemplate
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
Default.args = {
    placeholder: 'Default',
};

export const Disabled = Template.bind({});
Disabled.args = {
    placeholder: 'Disabled',
    disabled: true,
};

export const Error = Template.bind({});
Error.args = {
    placeholder: 'Error',
    error: true,
};

export const Label = () => (
    <>
        <InputLabel htmlFor="input-with-label">Label</InputLabel>
        <Input id="input-with-label" />
    </>
)

export const MUIWithLabel = () => (
    <>
        <InputLabel htmlFor="input-with-label">Label</InputLabel>
        <MUIInput id="input-with-label" placeholder="Placeholder" />
    </>
);

