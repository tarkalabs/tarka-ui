import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FloatingActionButton } from '../components/FloatingActionButton/FloatingActionButton';

export default {
  title: 'Components/FloatingActionButton',
  component: FloatingActionButton,
} as ComponentMeta<typeof FloatingActionButton>;

const Template: ComponentStory<typeof FloatingActionButton> = (args) => <FloatingActionButton {...args} />;


export const NoCustomIcon = Template.bind({});

NoCustomIcon.args = {
  size:'regular',
};

export const CustomIcon = Template.bind({});

CustomIcon.args = {
  size:'large',
  icon: "https://www.w3schools.com/images/lamp.jpg"
};
