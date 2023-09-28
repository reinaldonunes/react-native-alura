import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from '../../styles/buttonStyle'

export default function Button({ small = false, inversed = false, value, action, customStyles }){
    const defaultStyle = styles(small, inversed)
    return(
        <TouchableOpacity
            style={[defaultStyle.button, customStyles]}
            onPress={action}
        >
            <Text style={defaultStyle.value}>{ value }</Text>
        </TouchableOpacity>
    )

}