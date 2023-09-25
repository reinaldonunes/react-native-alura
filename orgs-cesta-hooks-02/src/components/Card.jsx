import React, { useReducer, useMemo } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import Stars from '../components/Starts'


const distanceMeters = (distance) => {
    return `${distance}m`
}

export default function Card({ name, image, distance, stars }){
    const [ isSelected, toggleSelected] = useReducer(
        (isSelected) => !isSelected,
        false 
    )

    const distanceLabel = useMemo(() => distanceMeters(distance), [distance])

    return <TouchableOpacity 
            style={style.card}
            onPress={toggleSelected}        
        >  
        <Image source={image} style={style.brand} accessibilityLabel={name} />
        <View style={style.info}>
            <View>
                <Text style={style.name}>{name}</Text>
                <Stars quantaty={stars} editable={isSelected} isBig={isSelected} />
            </View>
            <Text style={style.distance}>{distanceLabel}</Text>
        </View>
    </TouchableOpacity>
}

const style = StyleSheet.create({
    card: {
        backgroundColor: "#e0e0e0",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        alignItems: "center",
        elevation: 4, //Android
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    },
    brand: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginLeft: 16,
        marginVertical: 16,
        marginRight: 8
    },
    info: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 16,
        marginRight: 16
    },
    name: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: "bold"
    },
    distance: {
        fontSize: 14,
        lineHeight: 19
    }
})