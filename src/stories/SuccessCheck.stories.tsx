import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SuccessCheck from '../components/SuccessCheck/SuccessCheck';

export default {
  title: 'Components/SuccessCheck',
  component: SuccessCheck,
} as ComponentMeta<typeof SuccessCheck>;

const Template: ComponentStory<typeof SuccessCheck> = (args) => <SuccessCheck {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'default'
}

