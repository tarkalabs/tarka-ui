import { ComponentStory, ComponentMeta } from '@storybook/react';
import Divider from '../components/Divider/Divider';

export default {
  title: 'Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
    orientation: 'horizontal',
}

export const Vertical = Template.bind({});
Vertical.args = {
    orientation: 'vertical',
}

export const Spacer = Template.bind({});
Spacer.args = {
    type: 'spacer',
    height: 10,
}
