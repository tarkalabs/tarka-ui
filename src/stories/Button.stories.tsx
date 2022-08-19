import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button/Button';
import { ReactComponent as Plus } from '@icons/plus/plus-regular.svg';
import { ReactComponent as PlusSmall } from '@icons/plus/plus-small.svg';
export default {
    title: 'Components/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const Primary = Template.bind({});
Primary.args={
    size:'large',
    type:'primary',
    startIcon: <Plus />
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
    endIcon:<PlusSmall />
}


export const StartIcon = Template.bind({});
StartIcon.args={
    size:'large',
    type:'primary',
    startIcon: <Plus />
}


export const EndIcon = Template.bind({});
EndIcon.args={
    size:'XS',
    type:'ghost',
    endIcon:<PlusSmall />
}

