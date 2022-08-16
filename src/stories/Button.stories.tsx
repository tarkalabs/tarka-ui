import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button/Button';
export default {
    title: 'Example/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

console.log(__dirname);

export const Primary = Template.bind({});
Primary.args={
    size:'large',
    type:'primary',
    startIcon: 'test'
}

export const Secondary = Template.bind({});
Secondary.args={
    size:'regular',
    type:'secondary'
}

export const Outlined = Template.bind({});
Outlined.args={
    size:'small',
    type:'outlined'
}

export const Ghost = Template.bind({});
Ghost.args={
    size:'XS',
    type:'ghost',
    endIcon: 'test'
}
