import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge, { BadgeProps } from '../components/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args: BadgeProps) => <Badge {...args} />;

export const WithContent = Template.bind({});
WithContent.args={
  size:'large',
  badgeContent: 4
}

export const Empty = Template.bind({});
Empty.args={
    size:'regular',
    
}



export const WithChild = Template.bind({});
WithChild.args={
    size:'regular',
    badgeContent: 4,
    children: <button>Hey there</button>,
    max:10000000000,
};
