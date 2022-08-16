import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton from '../components/IconButton/IconButton';
export default {
    title: 'Example/IconButton',
    component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const NoBadge = Template.bind({});
NoBadge.args = {
    badge: null,
    size:'XS'
}   

export const Badge = Template.bind({});
Badge.args = {
    badge: 'blank',
    size: 'large'
}

export const Numbered = Template.bind({});
Numbered.args = {
    badge: 2,
    size:'XL'
}

export const Ghost = Template.bind({});
Ghost.args = {
    type: 'ghost',
    size: 'small'
}

export const Disabled = Template.bind({});
Disabled.args = {
    type:'ghost',
    size:'large',
    disabled:true
}

export const CustomIcon = Template.bind({});
CustomIcon.args ={
    icon:'https://www.w3schools.com/images/lamp.jpg',
    size:'XL',
    type:'primary'
}