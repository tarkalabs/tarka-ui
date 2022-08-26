import { Story, ComponentMeta } from '@storybook/react';
import IconButton, {IconButtonProps} from '@/components/IconButton';
import {ReactComponent as SmallCross} from '@icons/close/close-small.svg';
import {ReactComponent as LargeCross} from '@icons/close/close-large.svg';
import Badge from '@/components/atoms/Badge';
import StoryTemplate from '@/templates/storytemplate/StoryTemplate';


const TestBadge = <Badge size='regular' />

const props = {
	setIcon: {options:['small', 'large'], control:'radio'}

}

export default {
    title: 'Components/Deprecated/IconButton',
    component: IconButton,
    argTypes: props,
	parameters: {
        docs: {
            page: () => (
                <StoryTemplate
                    componentName="IconButton"
                    importPath="@tarkaui/atoms"
                    muiRef="https://mui.com/material-ui/api/icon-button/"
                />
            ),
        },
    },
} as ComponentMeta<typeof IconButton>;

const Template: Story<IconButtonProps & {setIcon: 'small' | 'large'}> = ({setIcon,...args}) => <IconButton {...args}  children={setIcon === 'small'? <SmallCross/> :<LargeCross/> }/>;

export const Basic = Template.bind({});
Basic.args ={
	setIcon: 'small',
    onMouseOver: ()=> console.log('hellohello')
}

export const BadgeIconButton = Template.bind({});
BadgeIconButton.args = {
	setIcon: 'large',
	badgeIn: TestBadge,
	size:'XL'
}

