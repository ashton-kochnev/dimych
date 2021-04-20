import React, {useState} from 'react';
import style from './UnOnOff.module.css';

type ButtonType = {
    on: string
    off: string
    setClickButton: (clickButton: boolean) => void
    clickButton: boolean
}

function UnButton(props: ButtonType) {

    const onStyle = {
        width: '100px',
        height: '50px',
        display: 'flex',
        border: '1px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10px',
        backgroundColor: props.clickButton ? 'green' : 'white'
    }

    const offStyle = {
        width: '100px',
        height: '50px',
        display: 'flex',
        border: '1px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10px',
        backgroundColor: props.clickButton ? 'white' : 'red'
    }

    const indicatorStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        borderRadius: '100%',
        backgroundColor: props.clickButton ? 'green' : 'red'
    }


    return (
        <div className={style.block}>
            <div style={onStyle} onClick={ () => {props.setClickButton(true)}}>{props.on}</div>
            <div style={offStyle} onClick={ () => {props.setClickButton(false)}}>{props.off}</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default UnButton;