import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import TestButton, {ButtonProps} from '../components/TestButton/TestButton';
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
    title: '11/TestButton',
    component: TestButton,
    argTypes:props
} as ComponentMeta<typeof TestButton>;




const testFunction = (stringIn:string) =>{
    return ()=> console.log(stringIn);

}


const Template: Story<ButtonProps & ButtonUnstyledProps & {setStartIcon:'none' |'small'| 'large'} & {setEndIcon:'none' |'small'| 'large'}> = ({setStartIcon,setEndIcon,...args}) =>
(<TestButton {...args}  
    startIcon={setStartIcon != 'none'? (setStartIcon==='small'? <PlusSmall/>:<Plus/>): null} 
    endIcon={setEndIcon != 'none'? (setEndIcon==='small'? <PlusSmall/>:<Plus/>): null} 

/>)

export const ArgTest = Template.bind({});
console.log(ArgTest.args);
ArgTest.args={
    setStartIcon:'small',
    setEndIcon:'none',
    size:'large',
    color:'primary',
    onClick:testFunction('Clicked!')
    
}

console.log(ArgTest.args);
export const NonTemplateStory = ()=> <TestButton size='large' type="button" color='outlined' disabled={true} onMouseOver={testFunction('No Template Used')}> Label</TestButton>;
