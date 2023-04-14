import { Meta, StoryFn } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', },
        color: { control: 'select', },
        fontColor: { control: 'color' },
    }
} satisfies Meta<typeof MyLabel>;

const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
    label: 'Basic label',
    size: 'normal',
    allCaps: false,
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    label: 'all caps label',
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary label',
    size: 'normal',
    color: 'secondary',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Tertiary label',
    size: 'normal',
    color: 'tertiary',
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
    label: 'Custom font color label',
    size: 'h1',
    fontColor: '#5517ac',
}

export const CustomBackgroundColor = Template.bind({})
CustomBackgroundColor.args = {
    label: 'Custom background color label',
    size: 'h1',
    fontColor: '#eeeeee',
    backgroundColor: '#000000',
}