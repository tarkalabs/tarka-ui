import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import Button, {ButtonProps} from '@/components/Button';
import { ReactComponent as Plus } from '@icons/plus/plus-regular.svg';
import { ReactComponent as PlusSmall } from '@icons/plus/plus-small.svg';
import { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled';


const props  = {
    size: {options:['XS','small','regular','large'],control:'radio'},
    setStartIcon:{options:['none','small','large'],control:'radio'},
    setEndIcon:{options:['none','small','large'],control:'radio'},
    children:{control:'text',defaultValue:'Label'},
}


export default {
    title: 'Components/Button',
    component: Button,
    argTypes:props
} as ComponentMeta<typeof Button>;



const Template: Story<ButtonProps & {setStartIcon:'none' |'small'| 'large'} & {setEndIcon:'none' |'small'| 'large'}> = ({setStartIcon,setEndIcon,...args}) =>
(<Button {...args}  
    startIcon={setStartIcon != 'none'? (setStartIcon==='small'? <PlusSmall/>:<Plus/>): null} 
    endIcon={setEndIcon != 'none'? (setEndIcon==='small'? <PlusSmall/>:<Plus/>): null} 

/>)

export const ClickTest = Template.bind({});
ClickTest.args={
    setStartIcon:'small',
    setEndIcon:'none',
    size:'large',
    color:'primary',
    onClick:()=> console.log('Clicked!')
}

