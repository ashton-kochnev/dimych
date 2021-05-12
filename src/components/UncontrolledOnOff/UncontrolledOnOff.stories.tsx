import React from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: "UncontrolledOnOff",
    component: UncontrolledOnOff
}

export const On = () => <UncontrolledOnOff defaultOn={true} off={'off'} on={'on'}/>
export const Off = () => <UncontrolledOnOff defaultOn={false} off={'off'} on={'on'}/>