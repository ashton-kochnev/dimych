import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    let [rating, setRating] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [clickButton, setClickButton] = useState<boolean>(false)

    return (
        <div className={'App'}>
            {/*<Accordion title={'menu'} collapsed={accordionCollapsed} click={setAccordionCollapsed}/>*/}
            <UncontrolledAccordion title={'menu'} />
            <Rating value={rating} click={setRating}/>
            <UncontrolledRating />
            <OnOff on={'on'} off={'off'} boolean={clickButton} onClick={setClickButton}/>
            <UncontrolledOnOff on={'on'} off={'off'}/>
        </div>
    );
}

export default App;
