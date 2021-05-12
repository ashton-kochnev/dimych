import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input'
}

export const Input = () => {
    const [value, setValue] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <> <input onChange={onChange}/>{value}</>
}

export const Input2 = () => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <> <input ref={inputRef}/> <button onClick={save}>save</button> value: {value}</>
}