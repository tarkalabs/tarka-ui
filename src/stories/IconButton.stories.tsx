import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton from '../components/IconButton/IconButton';
export default {
    title: 'Example/IconButton',
    component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const NoPopUp = Template.bind({});
NoPopUp.args = {
    popup: null,
    size:'XS'
}   

export const PopUp = Template.bind({});
PopUp.args = {
    popup: 'blank',
    size: 'large'
}

export const Numbered = Template.bind({});
Numbered.args = {
    popup: 2,
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