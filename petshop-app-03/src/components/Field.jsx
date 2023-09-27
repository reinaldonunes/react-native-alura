import React from "react"
import { TextInput } from "react-native"

export default function Field({ value, action }){
    const valueToString = String(value)

    return <TextInput 
        keyboardType="number-pad"
        selectTextOnFocus
        value={valueToString}
        onChangeText={ (newValue) => {action(newValue)}}
    />
}