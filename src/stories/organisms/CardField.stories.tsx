import { ComponentMeta, Story } from '@storybook/react';
import CardField, {CardFieldProps} from '@/components/organisms/CardField';
import StoryTemplate from '@/templates/storytemplate/StoryTemplate';

export default {
    title: 'Components/Organisms/CardField',
    component: CardField,
    parameters: {
        docs: {
            page: () => (
                <StoryTemplate
                    componentName="CardField"
                    importPath="@tarkaui/organisms"
                    typeDescs={[
                        {
                            name: `palette`,
                            type: `'default' | 'alt'`,
                            default: `'default'`,
                            desc: `The color palette to use.`,
                        },
                    ]}
                />
            ),
        },
    },
} as ComponentMeta<typeof CardField>;

const Template: Story<CardFieldProps> = (args: CardFieldProps) => (
    <CardField required {...args}/>  
);

export const Default: Story<CardFieldProps> = Template.bind({});
