import React from 'react';

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    click: (value: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void

}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionBody title={props.title} click={props.click} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionTitle items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

export type AccordionBodyType = {
    title: string
    collapsed: boolean
    click: (value: boolean) => void
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <div>
            <h3 onClick={() => {
                props.click(!props.collapsed)
            }}>{props.title}</h3>
        </div>
    )
}

type AccordionTitleType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <ul>
            {props.items.map((i, index) => <li
                onClick={() => {props.onClick(i.value)}}
                key={index}>{i.title}</li>)}
        </ul>
    )
}


export default Accordion;