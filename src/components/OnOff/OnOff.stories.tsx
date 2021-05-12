import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";

export default {
    title: "OnOff",
    component: OnOff
}

const callback = action('on or off clicked')

export const OnMode = () => <OnOff onClick={callback} boolean={true} off={'off'} on={'on'}/>
export const OffMode = () => <OnOff onClick={callback} boolean={false} off={'off'} on={'on'}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff boolean={value} onClick={setValue} off={'off'} on={'on'}/>
}