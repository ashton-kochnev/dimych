import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

const Category = (category: 'Colors' | 'Event' | 'Main') => ({
    table: {
        category: category
    }
})

export default {
    title: "components/Accordion",
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            table: {
                category: 'Colors'
            }
        },
        onChange: {...Category('Event')},
        onClick: {...Category('Event')},
        title: {...Category('Main')},
        collapsed: {...Category('Main')},
        items: {...Category('Main')}
    }
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')
const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback
}

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    ...callbacksProps,
    title: 'menu',
    collapsed: true,
    items: [],
}

export const UnCollapsedMode = Template.bind({})
UnCollapsedMode.args = {
    ...callbacksProps,
    title: 'menu',
    collapsed: false,
    items: [
        {title: 'britt', value: 1},
        {title: 'jon', value: 2},
        {title: 'sam', value: 3}],
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} collapsed={value} onChange={setValue}/>
}

ModeChanging.args = {
    title: 'menu',
    onClick: onClickCallback,
    items: [
        {title: 'britt', value: 1},
        {title: 'jon', value: 2},
        {title: 'sam', value: 3}]
}