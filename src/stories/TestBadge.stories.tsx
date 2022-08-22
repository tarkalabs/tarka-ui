import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import TestBadge, {BadgeProps} from '../components/Badge/TestBadge';
import { MailRounded } from '@mui/icons-material';


const props = {
  
}


export default {
    title: '11/TestBadge',
    component: TestBadge,
    argTypes:props
} as ComponentMeta<typeof TestBadge>;




const testFunction = (stringIn:string) =>{
    return ()=> console.log(stringIn);

}


export const BadgeTest = <TestBadge size={'small'} badgeContent={<div> hello</div>}>  </TestBadge>