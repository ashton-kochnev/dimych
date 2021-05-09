import React from 'react';
import style from './OnOff.module.css';

type ButtonType = {
    on: string
    off: string
    onClick: (clickButton: boolean) => void
    boolean: boolean
}

function OnOff(props: ButtonType) {

    const onStyle = {
        width: '100px',
        height: '50px',
        display: 'flex',
        border: '1px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10px',
        backgroundColor: props.boolean ? 'green' : 'white'
    }

    const offStyle = {
        width: '100px',
        height: '50px',
        display: 'flex',
        border: '1px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10px',
        backgroundColor: props.boolean ? 'white' : 'red'
    }

    const indicatorStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        borderRadius: '100%',
        backgroundColor: props.boolean ? 'green' : 'red'
    }

    return (
        <div className={style.block}>
            <div style={onStyle} onClick={() => {
                props.onClick(true)
            }}>{props.on}</div>
            <div style={offStyle} onClick={() => {
                props.onClick(false)
            }}>{props.off}</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;