import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge, { BadgeProps } from '@/components/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      page: () => require('./Badge.stories.mdx'),
    }
  }
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args: BadgeProps) => <Badge {...args} />;

export const WithContent = Template.bind({});
WithContent.args={
  title: 'Badge--with-content',
  size:'large',
  badgeContent: 4
}

export const Empty = Template.bind({});
Empty.args={
    title: 'Badge--empty',
    size:'regular',
}

export const WithChild = Template.bind({});
WithChild.args={
    title: 'Badge--with-child',
    size:'regular',
    badgeContent: 4,
    children: <button>Button</button>,
};
