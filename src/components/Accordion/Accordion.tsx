import React from 'react';

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    click: (accordionCollapsed: boolean) => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionBody title={props.title} click={props.click} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionTitle/>}
        </div>
    )
}


function AccordionBody(props: AccordionPropsType) {
    return (
        <div>
            <h3 onClick={ () => {props.click(!props.collapsed)}}>{props.title}</h3>
        </div>
    )
}

function AccordionTitle() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}


export default Accordion;