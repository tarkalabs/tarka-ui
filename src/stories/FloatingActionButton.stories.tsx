import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../assets/images/Shape.png';
import { FloatingActionButton } from '../components/FloatingActionButton';

export default {
  title: 'Example/FloatingActionButton',
  component: FloatingActionButton,
} as ComponentMeta<typeof FloatingActionButton>;

const Template: ComponentStory<typeof FloatingActionButton> = (args) => <FloatingActionButton {...args} />;


export const NoIcon = Template.bind({});

NoIcon.args = {
  size:'regular',
};

export const icon = Template.bind({});

icon.args = {
  size:'large',
  icon: "https://www.w3schools.com/images/lamp.jpg"
};
