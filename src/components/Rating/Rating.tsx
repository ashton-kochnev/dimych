import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: RatingValueType
    click: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} click={props.click} value={1}/>
            <Star selected={props.value > 1} click={props.click} value={2}/>
            <Star selected={props.value > 2} click={props.click} value={3}/>
            <Star selected={props.value > 3} click={props.click} value={4}/>
            <Star selected={props.value > 4} click={props.click} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    click: (value: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.click(props.value)
    }}>{props.selected ? <b>star </b> : 'star '}</span>
}