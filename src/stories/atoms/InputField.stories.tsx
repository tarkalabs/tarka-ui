import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import InputField, {InputFieldProps} from '@/components/atoms/InputField';
import StoryTemplate from '@/templates/storytemplate/StoryTemplate';


const props  = {
    size: {options:['XS','small','regular','large'],control:'radio'},
    setStartIcon:{options:['none','small','large'],control:'radio'},
    setEndIcon:{options:['none','small','large'],control:'radio'},
    children:{control:'text',defaultValue:'Label'},
}


export default {
    title: 'Components/Atoms/InputField',
    component: InputField,
    argTypes: props,
    parameters: {
        docs: {
            page: () => (
                <StoryTemplate
                    componentName="InputField"
                    importPath="@tarkaui/atoms"
                    muiRef="https://mui.com/base/api/input-unstyled/"
                />
            ),
        },
    },
} as ComponentMeta<typeof InputField>;



const Template: Story<typeof InputField> = (args: InputFieldProps) =>
(
    <InputField {...args}  
/>);

