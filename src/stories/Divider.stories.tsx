import { ComponentStory, ComponentMeta } from '@storybook/react';
import Divider from '../components/Divider/Divider';

export default {
  title: 'Divider',
  component: Divider,
  decorators: [
    (Story) => (
        <div style={{ width: '768px', height: '125px' }}>     
            <Story />      
        </div>
    )
],
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
    type: 'divider',
    orientation: 'horizontal',
}

export const Vertical = Template.bind({});
Vertical.args = {
    type: 'divider',
    orientation: 'vertical',
}

export const Spacer = Template.bind({});
Spacer.args = {
    type: 'spacer',
    height: 10,
}
