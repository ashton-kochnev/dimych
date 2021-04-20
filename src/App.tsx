import React, {useState} from 'react';
import './App.css';
import Button from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import UnButton from "./components/UnOnOff/UnOnOff";

function App() {

    let [rating, setRating] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [clickButton, setClickButton] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <Accordion title={'menu'} collapsed={accordionCollapsed} click={setAccordionCollapsed}/>
            {/*<Accordion title={'list'} collapsed={false}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={rating} click={setRating}/>*/}
            {/*<Button on={'on'} off={'off'}/>*/}
            <UnButton on={'on'} off={'off'} clickButton={clickButton} setClickButton={setClickButton}/>
            {/*<UncontrolledAccordion title={'menu'} />*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledAccordion title={'list'}/>*/}
        </div>
    );
}

export default App;
