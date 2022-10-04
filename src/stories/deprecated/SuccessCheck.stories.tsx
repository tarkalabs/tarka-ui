import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SuccessCheck from '@/components/deprecated/SuccessCheck';
import DocsTemplate from '@/templates/storytemplate/DocsTemplate';

export default {
  title: 'Components/Deprecated/SuccessCheck',
  component: SuccessCheck,
  parameters: {
    docs: {
        page: () => (
            <DocsTemplate
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

