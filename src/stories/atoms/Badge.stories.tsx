import React from 'react';
import { ComponentMeta, Story } from "@storybook/react";
import Badge, { BadgeProps } from "@/components/atoms/Badge";
import DocsTemplate from "@/templates/storytemplate/DocsTemplate";

export default {
    title: 'Components/Atoms/Badge',
    component: Badge,
    parameters: {
        docs: {
            page: () => (
                <DocsTemplate
                    componentName="Badge"
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
} as ComponentMeta<typeof Badge>;

const Template: Story<BadgeProps> = (args: BadgeProps) => (
    <Badge {...args} />
);

export const Default = Template.bind({});

export const WithContent = Template.bind({});
WithContent.args = {
    size: "large",
    badgeContent: 4,
};

export const Empty = Template.bind({});
Empty.args = {
    size: "regular",
};

export const WithChild = Template.bind({});
WithChild.args = {
    size: "regular",
    badgeContent: 4,
    children: <button>Button</button>,
};
