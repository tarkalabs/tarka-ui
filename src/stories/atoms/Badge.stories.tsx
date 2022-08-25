import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge, { BadgeProps } from "@/components/atoms/Badge";
import StoryTemplate from "@/templates/storytemplate/StoryTemplate";

export default {
    title: "Components/Atoms/Badge",
    component: Badge,
    parameters: {
        docs: {
            page: () => (
                <StoryTemplate
                    componentName="Badge"
                    path="@tarkaui/atoms"
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

const Template: ComponentStory<typeof Badge> = (args: BadgeProps) => (
    <Badge {...args} />
);

export const WithContent = Template.bind({});
WithContent.args = {
    title: "Badge--with-content",
    size: "large",
    badgeContent: 4,
};

export const Empty = Template.bind({});
Empty.args = {
    title: "Badge--empty",
    size: "regular",
};

export const WithChild = Template.bind({});
WithChild.args = {
    title: "Badge--with-child",
    size: "regular",
    badgeContent: 4,
    children: <button>Button</button>,
};
