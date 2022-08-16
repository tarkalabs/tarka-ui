import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from '../components/Badge/Badge';

export default {
  title: 'Example/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const WithContent = Template.bind({});
WithContent.args={
  number: 2,
  size:'large'
}

export const Empty = Template.bind({});
Empty.args={
    size:'regular'
}

