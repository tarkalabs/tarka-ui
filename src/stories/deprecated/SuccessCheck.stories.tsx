import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SuccessCheck from '@/components/deprecated/SuccessCheck';
import StoryTemplate from '@/templates/storytemplate/StoryTemplate';

export default {
  title: 'Components/Deprecated/SuccessCheck',
  component: SuccessCheck,
  parameters: {
    docs: {
        page: () => (
            <StoryTemplate
                componentName="SuccessCheck"
                importPath="@tarkaui/atoms"
            />
        ),
    },
},
} as ComponentMeta<typeof SuccessCheck>;

const Template: ComponentStory<typeof SuccessCheck> = (args) => <SuccessCheck {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'default'
}

