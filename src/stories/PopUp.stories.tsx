import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PopUp from '../components/PopUp/PopUp';

export default {
  title: 'Example/popup',
  component: PopUp,
} as ComponentMeta<typeof PopUp>;

const Template: ComponentStory<typeof PopUp> = (args) => <PopUp {...args} />;

export const WithContent = Template.bind({});
WithContent.args={
  number: 2,
  size:'large'
}

export const Empty = Template.bind({});
Empty.args={
    size:'regular'
}

