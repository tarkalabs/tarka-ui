import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FloatingActionButton } from '../components/FloatingActionButton';

export default {
  title: 'Example/FloatingActionButton',
  component: FloatingActionButton,
} as ComponentMeta<typeof FloatingActionButton>;

const Template: ComponentStory<typeof FloatingActionButton> = (args: any) => <FloatingActionButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
