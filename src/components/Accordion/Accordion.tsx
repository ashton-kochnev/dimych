import React from 'react';

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: (accordionCollapsed: boolean) => void
    /**
     * Elements that are showed when accordion is opened (not collapsed)
     */
    items: ItemType[]
    /**
     * callback that is called when any item clicked
     * @param value is value of clicked item
     */
    onClick: (value: any) => void
    color?: string
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionBody
                title={props.title}
                click={props.onChange}
                collapsed={props.collapsed}
                color={props.color}
            />
            {!props.collapsed && <AccordionTitle items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

export type AccordionBodyType = {
    title: string
    collapsed: boolean
    click: (accordionCollapsed: boolean) => void
    color?: string
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <div>
            <h3
                style={{color: props.color ? props.color : 'black'}}
                onClick={() => {
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
        <div>
            <ul>
                {props.items.map((i, index) => <li
                    onClick={() => {
                        props.onClick(i.value)
                    }}
                    key={index}>{i.title}</li>)}
            </ul>
        </div>
    )
}