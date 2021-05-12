import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    let [on, setOn] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.title} click={ () => {setOn(!on)}}/>
            {!on && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    click: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={ (e) => { props.click()}}>{props.title}</h3>
        </div>
    )
}

function AccordionBody() {
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