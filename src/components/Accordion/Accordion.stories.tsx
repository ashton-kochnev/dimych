import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";

export default {
    title: "Accordion",
    component: Accordion
}

const callback = action('true or false clicked')

export const CollapsedMode = () => <Accordion title={'menu'} collapsed={true} click={callback}/>
export const UnCollapsedMode = () => <Accordion title={'menu'} collapsed={false} click={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={'menu'} collapsed={value} click={setValue}/>
}