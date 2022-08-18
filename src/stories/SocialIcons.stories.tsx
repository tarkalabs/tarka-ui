import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SocialIcons from '../components/SocialIcons/SocialIcons';

export default {
  title: 'Example/SocialIcons',
  component: SocialIcons,
} as ComponentMeta<typeof SocialIcons>;

const Template: ComponentStory<typeof SocialIcons> = (args) => <SocialIcons {...args} />;

export const AllIcons = Template.bind({});
AllIcons.args={
  icons: [
    'applemusic',
    'clubhouse',
    'facebook',
    'instagram',
    'linkedin',
    'soundcloud',
    'spotify',
    'tiktok',
    'twitch',
    'twitter',
    'youtube'
  ]
}

export const Music = Template.bind({});
Music.args={
  icons: [
    'applemusic',
    'soundcloud',
    'spotify'
  ]
}

export const Streaming = Template.bind({});
Streaming.args={
  icons: [
    'twitch'
  ]
}


