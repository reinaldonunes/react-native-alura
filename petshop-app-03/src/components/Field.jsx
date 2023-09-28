import React from "react"
import { TextInput } from "react-native"
import styles from '../../styles/fieldStyle'

export default function Field({ value, customStyles, action }){
    
    const update = (newValue, callback) => {
        const isInt = newValue.match(/^[0-9]*$/)
        if(!isInt) return

        const removeLeftZero = newValue.replace(/^(0)(.+)/, '$2')

        callback(removeLeftZero)
    }
    const valueToString = String(value)

    return <TextInput 
        style={[styles.field, customStyles]}
        keyboardType="number-pad"
        selectTextOnFocus
        value={valueToString}
        onChangeText={ (newValue) => {update(newValue, action)}}
    />
}