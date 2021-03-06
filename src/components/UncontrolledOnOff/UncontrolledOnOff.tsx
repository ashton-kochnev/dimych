import React, {useState} from 'react';
import style from './UncontrolledOnOff.module.css';

type ButtonType = {
    on: string
    off: string
    defaultOn?: boolean
}

export function UncontrolledOnOff(props: ButtonType) {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        width: '100px',
        height: '50px',
        display: 'flex',
        border: '1px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10px',
        backgroundColor: on ? 'green' : 'white'
    }

    const offStyle = {
        width: '100px',
        height: '50px',
        display: 'flex',
        border: '1px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10px',
        backgroundColor: on ? 'white' : 'red'
    }

    const indicatorStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        borderRadius: '100%',
        backgroundColor: on ? 'green' : 'red'
    }


    return (
        <div className={style.block}>
            <div style={onStyle} onClick={() => {
                setOn(true)
            }}>{props.on}</div>
            <div style={offStyle} onClick={() => {
                setOn(false)
            }}>{props.off}</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}